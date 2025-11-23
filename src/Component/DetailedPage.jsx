/* eslint-disable no-unused-vars */
"use client";
import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowLeft, ZoomIn } from "lucide-react";
import { Link } from "react-router-dom";

export default function DetailPage({ product, related }) {
  const [activeImage, setActiveImage] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [customText, setCustomText] = useState("");
  const [uploadedFile, setUploadedFile] = useState(null);

  // 🧾 Safe price display (no .toFixed)
 const priceDisplay = useMemo(() => {
  if (!product?.price) {
    return "Price on Request";
  }
  return `₹${product.price * quantity}`;
}, [product?.price, quantity]);

  function addToCart() {
    console.log("Add to cart", { product: product.id, quantity, customText, uploadedFile });
    alert("🛒 Added to cart — demo only");
  }

  function buyNow() {
    console.log("Buy now", { product: product.id, quantity });
    alert("💳 Proceeding to checkout — demo only");
  }

  const productImages = Array.isArray(product.image)
    ? product.image
    : [product.image];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Top Navigation */}
      <div className="flex justify-between items-center px-6 py-4 bg-white shadow-sm sticky top-0 z-40">
        <Link to="/categories">
          <button className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition">
            <ArrowLeft className="w-5 h-5" /> Back
          </button>
        </Link>
        <h1 className="text-lg font-semibold">{product.name}</h1>
        <div className="w-10" />
      </div>

      {/* Main Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 p-6 md:p-10">
        {/* Product Image Section */}
        <div className="md:col-span-7">
          <div className="relative rounded-3xl overflow-hidden shadow-md bg-white">
            <motion.div
              key={productImages[activeImage]}
              initial={{ opacity: 0, scale: 1.03 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative w-full h-[70vh] md:h-[85vh] flex items-center justify-center cursor-zoom-in"
              onClick={() => setLightboxOpen(true)}
            >
              <img
                src={productImages[activeImage]?.src || productImages[activeImage]}
                alt={product.name}
                className="object-contain max-h-full max-w-full"
              />
              <div className="absolute bottom-4 right-4 bg-black/40 text-white rounded-full px-3 py-2 text-xs flex items-center gap-1">
                <ZoomIn className="w-4 h-4" /> View Fullscreen
              </div>
            </motion.div>

            {/* Thumbnails */}
            <div className="flex gap-3 mt-4 px-3 pb-3 overflow-x-auto">
              {productImages.map((img, i) => (
                <motion.button
                  key={i}
                  onClick={() => setActiveImage(i)}
                  whileHover={{ scale: 1.05 }}
                  className={`border-2 rounded-lg overflow-hidden ${
                    i === activeImage ? "border-indigo-400" : "border-transparent"
                  }`}
                >
                  <img
                    src={img.src || img}
                    alt={`thumb-${i}`}
                    className="w-20 h-20 object-cover"
                  />
                </motion.button>
              ))}
            </div>
          </div>
        </div>

        {/* Product Details Section */}
        <div className="md:col-span-5 flex flex-col gap-6">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-3xl shadow-md p-6"
          >
            <h2 className="text-3xl font-semibold text-gray-900">{product.name}</h2>
            <p className="text-gray-500 mt-1">{product.category || "Furniture"}</p>
            <div className="text-2xl font-bold mt-3">{priceDisplay}</div>

            {product.customizable && (
              <div className="mt-2 inline-block text-xs bg-green-50 text-green-700 px-2 py-1 rounded-full">
                Customizable
              </div>
            )}

            {/* Customization Inputs */}
            {product.customizable && (
              <div className="mt-5 space-y-5">
                <div>
                  <label className="block text-sm text-gray-600 mb-1">Custom Text</label>
                  <input
                    value={customText}
                    onChange={(e) => setCustomText(e.target.value)}
                    placeholder="e.g., Your Name"
                    className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-indigo-300 outline-none"
                  />
                </div>

                {/* <div>
                  <label className="block text-sm text-gray-600 mb-1">Upload Image</label>
                  <input type="file" accept="image/*" onChange={handleFile} />
                  {uploadedFile && (
                    <p className="text-sm text-gray-500 mt-1">
                      Uploaded: {uploadedFile.name}
                    </p>
                  )}
                </div> */}
              </div>
            )}

            {/* Quantity and Buttons */}
          <div className="flex items-center gap-4 mt-6">

  <a
    href={`https://wa.me/919528836338?text=${encodeURIComponent(
      `Hello, I want a quote for: ${product.name}`
    )}`}
    target="_blank"
    rel="noopener noreferrer"
    className="flex-1 rounded-full bg-green-600 text-white font-semibold py-3 shadow-md hover:bg-green-500 transition text-center"
  >
    Enquiry
  </a>

</div>
          </motion.div>

          {/* Related Products */}
          {related?.length > 0 && (
            <div className="bg-white rounded-3xl shadow-md p-6">
              <h3 className="font-semibold text-lg mb-4">You may also like</h3>
              <div className="flex gap-4 overflow-x-auto pb-2">
                {related.map((r) => (
                  <motion.div
                    key={r.id}
                    whileHover={{ y: -5 }}
                    className="min-w-40 bg-gray-50 rounded-xl p-3 cursor-pointer hover:shadow-sm"
                  >
                    <img
                      src={r.image?.src || r.image}
                      alt={r.name}
                      className="w-full h-28 object-cover rounded-lg"
                    />
                    <p className="mt-2 text-sm font-medium">{r.name}</p>
                    <p className="text-sm text-gray-500">₹{r.price || "—"}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Fullscreen Lightbox */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center"
          >
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative w-full h-full flex items-center justify-center"
            >
              <img
                src={productImages[activeImage]?.src || productImages[activeImage]}
                alt={product.name}
                className="object-contain max-h-[90vh] max-w-[95vw]"
              />
              <button
                onClick={() => setLightboxOpen(false)}
                className="absolute top-6 right-6 bg-white/80 backdrop-blur-md rounded-full p-3 hover:bg-white transition"
              >
                <X className="w-5 h-5 text-gray-700" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
