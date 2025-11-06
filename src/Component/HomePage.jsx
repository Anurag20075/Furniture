/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Truck, Phone, Mail, MapPin, ShoppingCart } from "lucide-react";

export default function Home() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    service: "Repair & Polish",
    details: "",
    address: "",
  });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setSending(true);
    try {
      // replace with your API endpoint or Google Apps Script URL when ready
      // await fetch(YOUR_ENDPOINT, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form) });
      await new Promise((r) => setTimeout(r, 800));
      setSent(true);
      setForm({ name: "", phone: "", email: "", service: "Repair & Polish", details: "", address: "" });
    } catch (err) {
      console.error(err);
      alert('Submission failed — please try WhatsApp: +91-XXXXXXXXXX');
    } finally {
      setSending(false);
    }
  }

  const services = [
    'Repair & Polish',
    'Assembly & Fitting',
    'Custom Furniture',
    'Modular Kitchen Installation',
    'Design & Consultation'
  ];

  // Motion variants
  const heroVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const cardHover = { scale: 1.03 };

  return (
    <div className="min-h-screen bg-linear-to-b from-gray-50 via-white to-gray-50 text-gray-900">
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">PF</div>
            <div>
              <h1 className="font-semibold">Pradeep Furniture</h1>
              <p className="text-xs text-gray-500">Custom & on-site furniture services</p>
            </div>
          </div>

          <nav className="hidden md:flex gap-6 items-center text-sm">
            <a href="#services" className="hover:text-blue-600">Services</a>
            <a href="#portfolio" className="hover:text-blue-600">Portfolio</a>
            <a href="#order" className="hover:text-blue-600">Order</a>
            <a href="#contact" className="hover:text-blue-600">Contact</a>
            <a className="ml-2 inline-flex items-center gap-2 bg-blue-600 text-white px-3 py-2 rounded-md shadow" href="#order">
              <ShoppingCart size={16}/> Book Now
            </a>
          </nav>

          <div className="md:hidden">
            <button className="px-3 py-2 bg-blue-600 text-white rounded-md">Menu</button>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-12">
        {/* Hero */}
        <section className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div initial="hidden" animate="show" variants={heroVariants}>
            <h2 className="text-3xl md:text-4xl font-extrabold">Premium Furniture Making Services</h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              We specialize in <strong>on-site furniture making</strong> including <strong>modular kitchens</strong>, <strong>almirahs</strong>, <strong>doors</strong>, <strong>windows</strong>, <strong>beds</strong>, and full <strong>custom furniture</strong>. Fast response, transparent pricing, and professional finish.
            </p>

            <div className="mt-6 flex gap-3">
              <motion.a whileHover={{ scale: 1.03 }} href="#order" className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-3 rounded-md font-medium shadow">Get Free Quote</motion.a>
              <motion.a whileHover={{ scale: 1.03 }} href="#portfolio" className="inline-flex items-center gap-2 border border-blue-600 text-blue-600 px-4 py-3 rounded-md">See Work</motion.a>
            </div>

            <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <motion.li whileHover={cardHover} className="flex items-start gap-3 bg-white p-3 rounded-lg shadow-sm">
                <span className="p-2 bg-yellow-400 rounded-md text-white"><Truck size={18} /></span>
                <div>
                  <div className="font-medium">On-site visits</div>
                  <div className="text-xs text-gray-500">We come to your home or office for measurement and fitting.</div>
                </div>
              </motion.li>

              <motion.li whileHover={cardHover} className="flex items-start gap-3 bg-white p-3 rounded-lg shadow-sm">
                <span className="p-2 bg-yellow-400 rounded-md text-white"><Phone size={18} /></span>
                <div>
                  <div className="font-medium">Quick quotes</div>
                  <div className="text-xs text-gray-500">Transparent, itemized estimates after inspection.</div>
                </div>
              </motion.li>
            </ul>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} className="space-y-3">
            <div className="rounded-xl overflow-hidden shadow-lg bg-white">
              <img alt="example" src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3" className="w-full h-64 object-cover" />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <motion.img whileHover={{ scale: 1.04 }} alt="small1" src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3" className="w-full h-28 object-cover rounded-lg shadow-sm" />
              <motion.img whileHover={{ scale: 1.04 }} alt="small2" src="https://images.unsplash.com/photo-1540574163026-643ea20ade25?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3" className="w-full h-28 object-cover rounded-lg shadow-sm" />
            </div>
          </motion.div>
        </section>

        {/* Services */}
        <section id="services" className="mt-12 bg-white rounded-xl p-6 shadow-sm">
          <h3 className="text-2xl font-semibold">Our Services</h3>
          <p className="text-sm text-gray-600 mt-2">Choose what you need—we handle measurement, transportation, and installation.</p>

          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, idx) => (
              <motion.div key={s} whileHover={{ scale: 1.03 }} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0, transition: { delay: 0.06 * idx } }} className="border rounded-lg p-4 hover:shadow-md transition bg-white">
                <div className="font-semibold">{s}</div>
                <div className="text-xs text-gray-500 mt-2">Professional team, on-time delivery, warranty available.</div>
                <div className="mt-3">
                  <a href="#order" className="text-blue-600 text-sm font-medium">Book this service →</a>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Portfolio */}
        <section id="portfolio" className="mt-10">
          <h3 className="text-2xl font-semibold">Portfolio</h3>
          <div className="mt-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {Array.from({ length: 6 }).map((_, i) => (
              <motion.div key={i} whileHover={{ scale: 1.03 }} className="rounded-lg overflow-hidden shadow-sm bg-white">
                <img alt={`portfolio-${i}`} src={`https://images.unsplash.com/photo-1540574163026-643ea20ade25?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3`} className="w-full h-40 object-cover" />
                <div className="p-3">
                  <div className="font-medium">Project {i + 1}</div>
                  <div className="text-xs text-gray-500 mt-1">Custom design · On-site fitting</div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Order form */}
        <section id="order" className="mt-12 bg-white rounded-xl p-6 shadow-sm">
          <div className="md:flex gap-8">
            <div className="md:w-1/2">
              <h3 className="text-2xl font-semibold">Book a Service / Request Quote</h3>
              <p className="text-sm text-gray-600 mt-2">Fill below details and we will call back for measurements and quote.</p>

              <form onSubmit={handleSubmit} className="mt-4 space-y-3">
                <div className="grid sm:grid-cols-2 gap-3">
                  <input required name="name" value={form.name} onChange={handleChange} placeholder="Full name" className="p-3 border rounded-md" />
                  <input required name="phone" value={form.phone} onChange={handleChange} placeholder="Phone number" className="p-3 border rounded-md" />
                </div>

                <input name="email" value={form.email} onChange={handleChange} placeholder="Email (optional)" className="p-3 border rounded-md w-full" />

                <select name="service" value={form.service} onChange={handleChange} className="p-3 border rounded-md w-full">
                  {services.map((s) => <option key={s} value={s}>{s}</option>)}
                </select>

                <textarea name="details" value={form.details} onChange={handleChange} placeholder="Tell us about the work (measurements, images links, preferred date)" className="p-3 border rounded-md w-full h-28" />

                <input name="address" value={form.address} onChange={handleChange} placeholder="Service address (area / city)" className="p-3 border rounded-md w-full" />

                <div className="flex items-center gap-3">
                  <button disabled={sending} className="bg-blue-600 text-white px-5 py-3 rounded-md font-medium inline-flex items-center gap-2">
                    {sending ? 'Sending...' : 'Request Quote'}
                  </button>
                </div>

                {sent && <div className="p-3 bg-green-50 text-green-800 rounded-md">Thanks — request received. We'll call you in 24 hours.</div>}
              </form>
            </div>

            <aside className="md:w-1/2 mt-6 md:mt-0">
              <div className="rounded-lg border p-4">
                <div className="font-semibold">Why choose us</div>
                <ul className="mt-3 text-sm text-gray-600 space-y-2">
                  <li>✔ Free on-site measurement</li>
                  <li>✔ Transparent estimates</li>
                  <li>✔ Warranty on workmanship</li>
                  <li>✔ Experienced carpenters</li>
                </ul>

                <div className="mt-4">
                  <div className="font-medium mb-2">Payment options</div>
                  <div className="text-sm text-gray-600">UPI, Card, Cash on delivery for small jobs. Advance for custom orders.</div>
                </div>

                <div className="mt-4">
                  <div className="font-medium mb-2">Service Areas</div>
                  <div className="text-sm text-gray-600">Your City · Nearby Suburbs</div>
                </div>
              </div>

              <div className="mt-4 rounded-lg overflow-hidden">
                <iframe title="map" className="w-full h-40" src="about:blank" />
              </div>
            </aside>
          </div>
        </section>

        {/* Testimonials */}
        <section className="mt-10">
          <h3 className="text-2xl font-semibold">Customer Reviews</h3>
          <div className="mt-4 grid sm:grid-cols-2 gap-4">
            <div className="p-4 bg-white border rounded-lg">
              <div className="font-medium">Rahul S.</div>
              <div className="text-sm text-gray-600 mt-2">Fast response and neat finishing. My old sofa looks new!</div>
            </div>
            <div className="p-4 bg-white border rounded-lg">
              <div className="font-medium">Neha K.</div>
              <div className="text-sm text-gray-600 mt-2">Fitted our modular kitchen in 2 days. Clean team.</div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="mt-10 mb-20 grid md:grid-cols-3 gap-6">
          <div className="col-span-2 bg-white p-6 rounded-lg">
            <h4 className="font-semibold">Contact</h4>
            <p className="text-sm text-gray-600 mt-2">For urgent booking call or WhatsApp.</p>
            <div className="mt-4 grid sm:grid-cols-3 gap-3">
              <div className="p-3 border rounded-lg">
                <div className="font-medium inline-flex items-center gap-2"><Phone size={14}/> Phone</div>
                <div className="text-sm text-gray-500 mt-1">+91-XXXXXXXXXX</div>
              </div>

              <div className="p-3 border rounded-lg">
                <div className="font-medium inline-flex items-center gap-2"><Mail size={14}/> Email</div>
                <div className="text-sm text-gray-500 mt-1">hello@pradeepfurniture.com</div>
              </div>

              <div className="p-3 border rounded-lg">
                <div className="font-medium inline-flex items-center gap-2"><MapPin size={14}/> Address</div>
                <div className="text-sm text-gray-500 mt-1">Service area: Your City</div>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg">
            <h4 className="font-semibold">Quick link</h4>
            <ul className="mt-3 text-sm text-gray-600 space-y-2">
              <li><a href="#services" className="text-blue-600">Services</a></li>
              <li><a href="#portfolio" className="text-blue-600">Portfolio</a></li>
              <li><a href="#order" className="text-blue-600">Book Now</a></li>
            </ul>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-white border-t">
          <div className="max-w-6xl mx-auto px-6 py-6 text-sm text-gray-600 flex items-center justify-between">
            <div>© {new Date().getFullYear()} Pradeep Furniture — All rights reserved</div>
            <div>Designed with care • <a href="#contact" className="text-blue-600">Contact</a></div>
          </div>
        </footer>
      </main>
    </div>
  );
}