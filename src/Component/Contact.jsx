import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
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

    // Simulated submission
    console.log("Form submitted:", formData);
    setFormStatus("✅ Your message has been sent!");
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });

    setTimeout(() => setFormStatus(""), 3000);
  };

  return (
    <section className="min-h-screen bg-linear-to-br from-blue-100 via-white to-purple-100 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-3xl bg-white/70 backdrop-blur-md shadow-xl rounded-2xl p-8 md:p-12 transition-all duration-300">
        <h2 className="text-4xl font-extrabold text-center text-indigo-700 mb-8">
          📬 Contact Us
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
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