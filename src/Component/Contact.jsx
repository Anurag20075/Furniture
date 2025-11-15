import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [uploadedFile, setUploadedFile] = useState(null);
  const [previewURL, setPreviewURL] = useState(null);

  const [formStatus, setFormStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle file upload + preview
  const handleFile = (e) => {
    const file = e.target.files?.[0];

    if (file) {
      setUploadedFile(file);
      setPreviewURL(URL.createObjectURL(file)); // preview image
    } else {
      setUploadedFile(null);
      setPreviewURL(null);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.subject ||
      !formData.message
    ) {
      setFormStatus("Please fill in all required fields.");
      return;
    }

    console.log("Form submitted:", formData, uploadedFile);

    setFormStatus("✅ Your message has been sent!");

    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });

    setUploadedFile(null);
    setPreviewURL(null);

    setTimeout(() => setFormStatus(""), 3000);
  };

  return (
    <section className="min-h-screen bg-linear-to-br from-blue-100 via-white to-purple-100 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-3xl bg-white/70 backdrop-blur-md shadow-xl rounded-2xl p-8 md:p-12 transition-all duration-300">
        <h2 className="text-4xl font-extrabold text-center text-indigo-700 mb-8">
          📬 Contact Us
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Inputs */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700">
                Full Name *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none transition"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700">
                Email Address *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none transition"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700">
                Phone Number
              </label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none transition"
                placeholder="Optional"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700">
                Subject *
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none transition"
                placeholder="Message Subject"
              />
            </div>
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-semibold text-gray-700">
              Message *
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-indigo-500 focus:outline-none transition"
              placeholder="Write your message here..."
            ></textarea>
          </div>

          {/* Upload Section */}
          <div className="mt-2">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Upload Image
            </label>

            {/* Dropzone */}
            <div
              className="border-2 border-dashed border-gray-300 rounded-xl p-6 flex flex-col items-center justify-center cursor-pointer hover:border-indigo-500 hover:bg-indigo-50 transition"
              onClick={() => document.getElementById("uploadInput").click()}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-10 h-10 text-indigo-500 mb-3"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-9 0V3m0 0L6.75 6.75M12 3l5.25 3.75"
                />
              </svg>

              <p className="text-gray-700 font-medium">
                Click to upload or drag file here
              </p>
              <p className="text-xs text-gray-500 mt-1">
                PNG, JPG up to 5MB
              </p>

              <input
                id="uploadInput"
                type="file"
                accept="image/*"
                onChange={handleFile}
                className="hidden"
              />
            </div>

            {/* Preview Thumbnail */}
            {previewURL && (
              <div className="mt-4 flex items-center gap-4">
                <img
                  src={previewURL}
                  alt="preview"
                  className="w-28 h-28 object-cover rounded-lg shadow-md border border-gray-200"
                />

                <button
                  type="button"
                  onClick={() => {
                    setUploadedFile(null);
                    setPreviewURL(null);
                  }}
                  className="text-red-500 text-sm underline hover:text-red-700"
                >
                  Remove
                </button>
              </div>
            )}
          </div>

          {/* Submit */}
          <div className="text-center">
            <button
              type="submit"
              className="inline-block w-full md:w-auto bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              🚀 Send Message
            </button>

            {formStatus && (
              <p className="mt-4 text-sm text-green-600 font-medium animate-pulse">
                {formStatus}
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
