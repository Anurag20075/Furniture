import React, { useState, useCallback, useMemo } from 'react';

// API Endpoints (Shared constants)
const GEMINI_API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=`;
const IMAGEN_API_URL = `https://generativelanguage.googleapis.com/v1beta/models/imagen-4.0-generate-001:predict?key=`;
const apiKey = "AIzaSyAoM3kKGKsD0omc9gzhwRYnq9D-kH8-yaU"; // <--- *** FIX: Replace this with your valid Google API Key ***

// Helper function to convert File object to Base64 string
const fileToBase64 = (file) => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result.split(',')[1]);
        reader.onerror = error => reject(error);
        reader.readAsDataURL(file);
    });
};

const AI = () => {
    const [roomImageFile, setRoomImageFile] = useState(null);
    const [promptText, setPromptText] = useState('');
    const [materialPreference, setMaterialPreference] = useState('Standard Plywood & Laminate'); // Material Preference State
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [step, setStep] = useState(0); // 0: Idle, 1: Analysis, 2: Image Gen, 3: Cost Calc
    const [imagePreviewUrl, setImagePreviewUrl] = useState(null);
    const [generatedImageUrl, setGeneratedImageUrl] = useState(null);
    const [costHtml, setCostHtml] = useState(null);

    // --- API Logic Functions (Adapted for React) ---

    // Step 1: Gemini structured analysis (Image + Text -> Structured Prompt/Description)
    const getStructuredAnalysis = useCallback(async (base64Image, userPrompt, materialPref) => {
        const fullPrompt = `You are a professional Interior Design Analyst. Analyze the room and the user request: "${userPrompt}". The user has a material preference of: "${materialPref}". Your task is to generate a structured JSON output with two keys: 'imagePrompt' (a detailed English prompt for Imagen, photorealistic, 8K, interior) and 'costDescription' (a detailed Hindi description of the item, estimated size based on the photo, suggested materials based on the preference, and finish suggestions for Pradeep Furniture's on-site custom work).`;
        
        const geminiPayload = {
            contents: [{
                role: "user",
                parts: [
                    { text: fullPrompt },
                    {
                        inlineData: {
                            mimeType: 'image/jpeg',
                            data: base64Image
                        }
                    }
                ]
            }],
            generationConfig: {
                responseMimeType: "application/json",
                responseSchema: {
                    type: "OBJECT",
                    properties: {
                        "imagePrompt": { "type": "STRING", "description": "A photorealistic, 8K, interior photography prompt for Imagen." },
                        "costDescription": { "type": "STRING", "description": "Detailed Hindi description including item, estimated size (e.g., 8x6 feet), suggested materials (e.g., Marine Plywood, Laminate finish), and hardware grade." }
                    },
                }
            },
            systemInstruction: {
                parts: [{ text: "Strictly output ONLY the requested JSON structure. Do not include any explanatory text outside the JSON block." }]
            },
        };
        
        // --- API Call with Error Handling and Exponential Backoff ---
        let response;
        for (let attempt = 0; attempt < 3; attempt++) {
            try {
                response = await fetch(GEMINI_API_URL + apiKey, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(geminiPayload)
                });

                if (response.ok) break;

                // Handle 429 (Rate Limit) or 5xx errors by retrying
                if (response.status === 429 || response.status >= 500) {
                    await new Promise(resolve => setTimeout(resolve, Math.pow(2, attempt) * 1000));
                    continue;
                }
                
                // For 403 (Forbidden) or other unrecoverable errors, throw immediately
                if (response.status === 403) {
                     throw new Error(`Gemini API error! Status: 403. Check your API Key and permissions.`);
                }
                
                throw new Error(`Gemini API error! Status: ${response.status}.`);

            } catch (e) {
                if (attempt === 2) throw e;
                // If it's a network error, retry
                await new Promise(resolve => setTimeout(resolve, Math.pow(2, attempt) * 1000));
            }
        }
        
        if (!response || !response.ok) throw new Error("API call failed after multiple retries.");

        const result = await response.json();
        const jsonText = result.candidates?.[0]?.content?.parts?.[0]?.text;
        if (!jsonText) throw new Error("Gemini returned empty structured data.");
        
        return JSON.parse(jsonText);
    }, []);

    // Step 2: Imagen image generation
    // const generateImage = useCallback(async (detailedPrompt) => {
    //     const imagenPayload = {
    //         instances: { 
    //             prompt: detailedPrompt 
    //         }, 
    //         parameters: { 
    //             "sampleCount": 1,
    //             "aspectRatio": "4:3"
    //         } 
    //     };
        
    //     // --- API Call with Exponential Backoff ---
    //     let response;
    //     for (let attempt = 0; attempt < 3; attempt++) {
    //         try {
    //             response = await fetch(IMAGEN_API_URL + apiKey, {
    //                 method: 'POST',
    //                 headers: { 'Content-Type': 'application/json' },
    //                 body: JSON.stringify(imagenPayload)
    //             });

    //             if (response.ok) break;

    //             if (response.status === 429 || response.status >= 500) {
    //                 await new Promise(resolve => setTimeout(resolve, Math.pow(2, attempt) * 1000));
    //                 continue;
    //             }
                
    //             if (response.status === 403) {
    //                  throw new Error(`Imagen API error! Status: 403. Check your API Key and permissions.`);
    //             }
                
    //             throw new Error(`Imagen API error! Status: ${response.status}.`);

    //         } catch (e) {
    //             if (attempt === 2) throw e;
    //             await new Promise(resolve => setTimeout(resolve, Math.pow(2, attempt) * 1000));
    //         }
    //     }

    //     if (!response || !response.ok) throw new Error("Image API call failed after multiple retries.");
        
    //     const result = await response.json();
        
    //     const base64Data = result.predictions?.[0]?.bytesBase64Encoded;
    //     if (!base64Data) throw new Error("Imagen did not return image data.");
        
    //     return `data:image/png;base64,${base64Data}`;
    // }, []);

    // Step 2: Imagen image generation (Corrected Payload Format)
const generateImage = useCallback(async (detailedPrompt) => {
    const imagenPayload = {
        instances: [
            { prompt: detailedPrompt }
        ],
        parameters: { 
            sampleCount: 1,
            aspectRatio: "4:3"
        }
    };

    // --- API Call with Exponential Backoff ---
    let response;
    for (let attempt = 0; attempt < 3; attempt++) {
        try {
            response = await fetch(IMAGEN_API_URL + apiKey, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(imagenPayload)
            });

            if (response.ok) break;

            if (response.status === 429 || response.status >= 500) {
                await new Promise(resolve => setTimeout(resolve, Math.pow(2, attempt) * 1000));
                continue;
            }

            if (response.status === 403) {
                throw new Error(`Imagen API error! Status: 403. Check your API Key and permissions.`);
            }

            throw new Error(`Imagen API error! Status: ${response.status}.`);

        } catch (err) {
            if (attempt === 2) throw err;
            await new Promise(resolve => setTimeout(resolve, Math.pow(2, attempt) * 1000));
        }
    }

    if (!response || !response.ok) throw new Error("Image API call failed after multiple retries.");

    const result = await response.json();

    const base64Data = result.predictions?.[0]?.bytesBase64Encoded;
    if (!base64Data) throw new Error("Imagen did not return image data.");

    return `data:image/png;base64,${base64Data}`;
}, []);

    // Step 3: Gemini cost estimation
    const generateCostEstimate = useCallback(async (description) => {
        const costPrompt = `आप भारत में 'प्रदीप फ़र्नीचर' के लिए एक पेशेवर लागत अनुमानक (Cost Estimator) हैं। ऑन-साइट कस्टम फ़र्नीचर के लिए दी गई सामग्री और विवरण का विश्लेषण करें। सामग्री लागत, कारीगरी (labour), और इंस्टॉलेशन को ध्यान में रखते हुए, कृपया INR में एक 'सकल अनुमानित लागत सीमा' (Gross Estimated Price Range) प्रदान करें। यह एक कस्टम ऑन-साइट फ़र्नीचर प्रोजेक्ट है। केवल लागत और उससे संबंधित विवरण दें। विवरण: ${description}`;

        const geminiPayload = {
            contents: [{ parts: [{ text: costPrompt }] }],
            generationConfig: {
                temperature: 0.5,
            },
            systemInstruction: {
                parts: [{ text: "Act as a professional custom furniture cost estimator in India. Provide a detailed price breakdown focusing on Plywood, Laminates, and Hardware, offering a realistic range (e.g., ₹55,000 - ₹75,000) for the given specification. Output ONLY in Hindi (Devanagari)." }]
            },
        };
        
        // --- API Call with Exponential Backoff ---
        let response;
        for (let attempt = 0; attempt < 3; attempt++) {
            try {
                response = await fetch(GEMINI_API_URL + apiKey, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(geminiPayload)
                });

                if (response.ok) break;

                if (response.status === 429 || response.status >= 500) {
                    await new Promise(resolve => setTimeout(resolve, Math.pow(2, attempt) * 1000));
                    continue;
                }
                
                if (response.status === 403) {
                     throw new Error(`Gemini API error! Status: 403. Check your API Key and permissions.`);
                }
                
                throw new Error(`Cost API error! Status: ${response.status}.`);

            } catch (e) {
                if (attempt === 2) throw e;
                await new Promise(resolve => setTimeout(resolve, Math.pow(2, attempt) * 1000));
            }
        }
        
        if (!response || !response.ok) throw new Error("Cost API call failed after multiple retries.");
        
        const result = await response.json();
        return result.candidates?.[0]?.content?.parts?.[0]?.text || "लागत अनुमान उपलब्ध नहीं।";
    }, []);

    // --- Main Workflow Handler ---
    const generateDesign = useCallback(async () => {
        if (!roomImageFile || !promptText.trim()) {
            setError('Please upload a photo and describe your requirement.');
            return;
        }
        
        if (apiKey === "YOUR_ACTUAL_GEMINI_API_KEY_HERE" || apiKey === "") {
             setError('❌ ERROR: Please replace "YOUR_ACTUAL_GEMINI_API_KEY_HERE" with your valid Gemini API Key.');
             return;
        }

        setLoading(true);
        setError(null);
        setStep(1);
        setGeneratedImageUrl(null);
        setCostHtml(null);

        let base64Image;
        let finalImageBase64;
        let costEstimateText;
        
        try {
            // 1. Process Image to Base64
            base64Image = await fileToBase64(roomImageFile);
            
            // 2. Generate structured data (Image Prompt & Cost Description)
            setStep(1);
            const structuredData = await getStructuredAnalysis(base64Image, promptText, materialPreference); // PASSING NEW PREFERENCE
            const { imagePrompt, costDescription } = structuredData;

            if (!imagePrompt || !costDescription) throw new Error("Could not retrieve necessary information from analysis.");

            // 3. Generate Image using Imagen
            setStep(2);
            finalImageBase64 = await generateImage(imagePrompt);

            // 4. Generate Cost Estimate using Gemini
            setStep(3);
            costEstimateText = await generateCostEstimate(costDescription);

            // 5. Update State
            setGeneratedImageUrl(finalImageBase64);
            setCostHtml(costEstimateText);

        } catch (err) {
            console.error("Workflow Error:", err);
            setError(`❌ Error! Failed to generate design or cost estimate: ${err.message}`);
        } finally {
            setLoading(false);
            setStep(0);
        }
    }, [roomImageFile, promptText, materialPreference, getStructuredAnalysis, generateImage, generateCostEstimate]);

    // --- Input Handlers ---
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setRoomImageFile(file);
        if (file) {
            const url = URL.createObjectURL(file);
            setImagePreviewUrl(url);
        } else {
            setImagePreviewUrl(null);
        }
    };

    // --- Render Components ---

    const ResultPanel = useMemo(() => {
        if (loading) {
            const messages = {
                1: "1/3: Preparing design brief and prompt...",
                2: "2/3: Generating visual design (Please wait)...",
                3: "3/3: Calculating estimated cost...",
            };
            return (
                <div id="loader" className="loader p-8 bg-stone-100 rounded-xl">
                    <div className="spinner"></div>
                    <p className="text-amber-700 font-medium mt-4">{messages[step]}</p>
                </div>
            );
        }

        if (error) {
            return (
                <div className="bg-red-100 p-4 rounded-lg text-red-700">
                    <p className="font-bold">Design Failed:</p>
                    <p className="text-sm">{error}</p>
                </div>
            );
        }
        
        if (generatedImageUrl && costHtml) {
            return (
                <div id="resultOutput" className="result-box bg-white text-gray-700 p-4 rounded-lg shadow-inner flex flex-col items-center">
                    <p className="text-green-600 font-bold mb-3">✅ Your Custom Visual Design is Ready!</p>
                    <img src={generatedImageUrl} className="generated-image w-full max-w-sm mx-auto rounded-lg shadow-xl" alt="AI Generated Custom Furniture Design" />
                    
                    <div className="flex justify-center space-x-4 mt-6 w-full">
                         <button onClick={() => alert("Design Saved! (Simulation)")} className="bg-gray-200 text-gray-800 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-gray-300 transition duration-150 shadow-md">
                            💾 Save Design
                        </button>
                        <button onClick={() => alert("Sharing via WhatsApp! (Simulation)")} className="bg-green-500 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-green-600 transition duration-150 shadow-md">
                            💬 Share Design
                        </button>
                    </div>

                    <div className="cost-estimate mt-6 pt-4 border-t border-gray-300 w-full text-left">
                        <h3 className="wood-text font-bold text-lg mb-2">Estimated Cost and Details:</h3>
                        <div className="text-gray-700 text-sm" dangerouslySetInnerHTML={{ __html: costHtml.replace(/\n/g, '<br>') }} />
                        <p className="text-xs mt-3 text-red-600 font-bold">
                            **NOTE:** This is a **Gross Estimate** provided by the AI. Please contact the Pradeep Furniture team for a final and accurate quotation.
                        </p>
                    </div>
                </div>
            );
        }
        
        return (
            <p id="placeholderText" className="text-gray-400">
                Fill in the photo and description to start your design.
            </p>
        );

    }, [loading, error, step, generatedImageUrl, costHtml]);


    // --- Render JSX ---
    return (
        <div className="min-h-screen p-4 md:p-8 bg-gray-100">
            {/* Styles for Premium Feel */}
            <style>{`
                .wood-primary { background-color: #382A22; } /* Dark Chocolate/Espresso */
                .wood-accent { color: #D4AF37; } /* Gold */
                .wood-text { color: #382A22; }
                .btn-premium {
                    background-color: #D4AF37; /* Gold */
                    color: #382A22;
                    font-weight: 800;
                    transition: all 0.3s ease;
                    box-shadow: 0 4px 15px rgba(212, 175, 55, 0.6);
                }
                .btn-premium:hover {
                    background-color: #C5A030;
                    box-shadow: 0 6px 20px rgba(212, 175, 55, 0.8);
                }
                .spinner {
                    border: 4px solid rgba(212, 175, 55, 0.3);
                    border-top: 4px solid #D4AF37;
                    border-radius: 50%;
                    width: 30px;
                    height: 30px;
                    animation: spin 1s linear infinite;
                    margin: 0 auto 10px;
                }
                @keyframes spin {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }
            `}</style>
            
            <header className="text-center mb-10 pb-4 border-b border-gray-200">
                <h1 className="text-5xl font-extrabold wood-text">
                    Pradeep Furniture AI Visualizer
                </h1>
                <p className="mt-3 text-lg text-gray-500">
                    Visualize your dream designs with 3D visuals and estimated costs.
                </p>
            </header>

            <div className="container mx-auto bg-white rounded-3xl p-8 md:p-12 shadow-2xl">
                
                <div className="grid md:grid-cols-2 gap-10">
                    
                    {/* Left Column: Inputs */}
                    <div className="p-6 bg-white rounded-xl border border-gray-100 shadow-inner">
                        <h2 className="text-3xl font-bold wood-text mb-6">1. Start Your Design Journey</h2>
                        
                        {/* Material Preference Selector */}
                        <div className="mb-5">
                            <label htmlFor="materialPreference" className="block text-sm font-medium text-gray-700 mb-2">Select Material Priority *</label>
                            <select 
                                id="materialPreference" 
                                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-amber-500 focus:border-amber-500 bg-white text-gray-800 shadow-sm"
                                value={materialPreference}
                                onChange={(e) => setMaterialPreference(e.target.value)}
                                disabled={loading}
                            >
                                <option value="Standard Plywood & Laminate">Standard: Plywood & Laminate (Best Value)</option>
                                <option value="Waterproof Plywood & PVC/Acrylic">High Durability: Waterproof & Acrylic (Kitchen/Bathroom)</option>
                                <option value="Veneer & Solid Wood">Luxury: Veneer & Solid Wood (Premium Look)</option>
                                <option value="MDF/HDF & Matte Finish">Budget-Conscious: MDF/HDF & Matte Finish</option>
                            </select>
                            <p className="text-xs text-gray-500 mt-1">This guides the AI for accurate visualization and costing.</p>
                        </div>
                        
                        {/* File Upload */}
                        <div className="mb-5">
                            <label htmlFor="roomImage" className="block text-sm font-medium text-gray-700 mb-2">Upload a High-Quality Photo of Your Space *</label>
                            <input type="file" id="roomImage" accept="image/*" className="w-full text-sm text-gray-700 p-3 bg-white border border-gray-300 rounded-lg focus:ring-amber-500 focus:border-amber-500 cursor-pointer" onChange={handleImageChange} disabled={loading} />

                            {imagePreviewUrl && (
                                <div className="image-preview-container mt-3 p-2 bg-white rounded-lg border">
                                    <img src={imagePreviewUrl} className="image-preview max-w-full h-auto max-h-32 rounded" alt="Room Preview" />
                                </div>
                            )}
                        </div>

                        {/* Text Prompt */}
                        <div className="mb-5">
                            <label htmlFor="promptText" className="block text-sm font-medium text-gray-700 mb-2">Describe Your Design Vision in Detail *</label>
                            <textarea 
                                id="promptText" 
                                rows="4" 
                                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-amber-500 focus:border-amber-500 text-gray-800" 
                                placeholder="Example: 'I need a modular TV unit made of walnut wood for the living room, with concealed storage.'" 
                                value={promptText} 
                                onChange={(e) => setPromptText(e.target.value)}
                                disabled={loading}
                            ></textarea>
                        </div>

                        <button 
                            onClick={generateDesign} 
                            id="generateButton" 
                            className="btn-premium w-full text-white font-extrabold py-3 rounded-xl transition duration-300 disabled:opacity-50 disabled:shadow-none"
                            disabled={loading}
                        >
                            {loading ? `Generating (${step}/3)...` : 'Get AI Visualization & Cost Estimate'}
                        </button>
                    </div>

                    {/* Right Column: Results/Placeholder */}
                    <div className="p-8 wood-primary rounded-xl text-white shadow-xl flex flex-col justify-center items-center">
                        <div>
                            <h2 className="text-3xl font-bold wood-accent mb-4">Your Custom Design Preview</h2>
                            <p className="text-gray-300 mb-6">
                                The AI will analyze your space and preference to provide a photorealistic visual and estimated cost, reflecting Pradeep Furniture's quality.
                            </p>
                        </div>
                        
                        <div className="result-box bg-white text-gray-700 p-6 rounded-xl shadow-2xl min-h-[300px] w-full flex flex-col justify-center items-center">
                            {ResultPanel}
                        </div>
                    </div>

                </div> {/* End Grid */}
                
                {/* Footer CTA */}
                <footer className="mt-12 pt-6 border-t border-gray-200 text-center">
                    <h3 className="text-2xl font-semibold wood-text">Ready to Turn This Design into Reality?</h3>
                    <p className="text-gray-600 mt-2">Book a free on-site consultation to finalize precise measurements, select premium materials, and secure your final quotation.</p>
                    <button className="mt-5 px-10 py-3 bg-green-600 text-white font-bold rounded-xl hover:bg-green-700 transition duration-300 shadow-lg text-lg">
                        REQUEST PREMIUM QUOTATION
                    </button>
                </footer>
            </div>
        </div>
    );
};

export default AI;