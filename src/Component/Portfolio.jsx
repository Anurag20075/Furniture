/* eslint-disable no-unused-vars */

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function PradeepFurniturePortfolio() {
  const [route, setRoute] = useState("home");
  const [filter, setFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = [
    "All",  
    "Modular Kitchen",
    "Wardrobe",
    "TV Unit",
    "Doors",
    // "Windows",
    "Office Furniture",
    // "CNC",
    "Interior Project",
  ];

  const projects = [
    {
      id: 1,
      title: "Modern L-Shaped Modular Kitchen",
      category: "Modular Kitchen",
      images: [
        "/Portfolio/2.jpeg"
      ],
      material: "Marine Ply + Acrylic Finish",
      size: "12ft x 8ft",
      timeline: "10 days",
      description:
        "A modern L-shaped kitchen with soft-close Hettich fittings, quartz countertop, and integrated appliances. Delivered and installed for a residential building project.",
      priceRange: "₹1200–₹2200 / sq.ft",
    },
    {
      id: 2,
      title: "Custom Wall-to-Wall Wardrobe",
      category: "Wardrobe",
      images: ["/Portfolio/4.jpeg"],
      material: "Plywood + Laminate",
      size: "7ft x 10ft",
      timeline: "7 days",
      description:
        "High-storage wardrobe with soft-close drawers, adjustable shelves, and a matte laminate finish. Designed for a high-rise apartment developer.",
      priceRange: "₹900–₹1600 / sq.ft",
    },
    {
      id: 3,
      title: "TV Unit with Floating Shelves",
      category: "TV Unit",
      images: ["/Portfolio/5.jpeg"],
      material: "MDF + Veneer",
      size: "8ft x 2ft",
      timeline: "5 days",
      description: "Minimal floating TV unit with concealed wiring and LED cove lighting.",
      priceRange: "₹700–₹1300 / sq.ft",
    },
    {
      id: 4,
      title: "Solid Wood Entrance Door",
      category: "Doors",
      images: ["/Portfolio/3.jpeg"],
      material: "Teak + Varnish",
      size: "3ft x 7ft",
      timeline: "4 days",
      description: "Custom carved solid wood entrance door for a bungalow project.",
      priceRange: "Custom Quote",
    },
    {
      id: 5,
      title: "Office Workstation Cluster",
      category: "Office Furniture",
      images: ["/Portfolio/7.jpeg"],
      material: "Plywood + Laminate",
      size: "Custom",
      timeline: "14 days",
      description: "Modular workstations for a commercial office block with cable-management and storage units.",
      priceRange: "Bulk Pricing",
    },
    // {
    //   id: 6,
    //   title: "CNC Decorative Panel",
    //   category: "CNC",
    //   images: ["/Portfolio/5.jpeg"],
    //   material: "MDF",
    //   size: "6ft x 4ft",
    //   timeline: "3 days",
    //   description: "Laser-cut decorative panel used as a partition in an interior project.",
    //   priceRange: "₹3500 - ₹8000",
    // },
    {
      id: 7,
      title: "Turnkey Interior Project - Model Flat",
      category: "Interior Project",
      images: ["/Portfolio/6.jpeg"],
      material: "Mixed",
      size: "2 BHK",
      timeline: "30 days",
      description: "Complete interior fit-out for a model flat delivered for an apartment complex show unit.",
      priceRange: "Project-based",
    },
  ];

  const filtered = projects.filter((p) => filter === "All" || p.category === filter);

  function Hero() {
    return (
      <section className="relative bg-linear-to-br from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <motion.h1 initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5 }} className="text-4xl md:text-5xl font-extrabold leading-tight">
              Premium Furniture Solutions for Builders & Interior Designers
            </motion.h1>
            <p className="mt-6 text-gray-700 max-w-lg">
              PradeepFurniture delivers turnkey carpentry and modular solutions — from modular kitchens and wardrobes to complete interior fit-outs. Fast delivery, precision workmanship, and partnership-focused service.
            </p>

            <div className="mt-8 flex gap-4">
              <button onClick={() => setRoute('portfolio')} className="px-6 py-3 bg-gray-900 text-white rounded-md shadow">View Portfolio</button>
              <a href="mailto:contact@pradeepfurniture.com" className="px-6 py-3 border border-gray-300 rounded-md">Request Quote</a>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-3 text-sm text-gray-600">
              <div>
                <div className="font-semibold">Years Experience</div>
                <div>12+ Years</div>
              </div>
              <div>
                <div className="font-semibold">Workshop</div>
                <div>Manufacturing + CNC Facility</div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-lg hidden md:block">
            <img src="/Portfolio/1.jpeg" alt="Modular Kitchen" className="w-full h-[360px] object-cover" />
          </div>
        </div>
      </section>
    );
  }

  function CategoriesSection() {
    return (
      <section className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-semibold">Explore Categories</h2>
        <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map((c) => (
            <button key={c} onClick={() => { setFilter(c); setRoute('portfolio'); }} className={`flex items-center gap-3 p-4 rounded-lg border ${filter===c? 'border-gray-900 bg-gray-50':'border-gray-200'} hover:shadow`}> 
              <div className="w-12 h-12 bg-gray-100 rounded-md flex items-center justify-center text-xl">{c[0]}</div>
              <div className="text-left">
                <div className="font-semibold text-sm">{c}</div>
                <div className="text-xs text-gray-500">{c === 'All' ? 'Browse all' : 'View ' + c}</div>
              </div>
            </button>
          ))}
        </div>
      </section>
    );
  }

  // function Portfolio() {
  //   return (
  //     <section className="max-w-7xl mx-auto px-6 py-12">
  //       <div className="flex items-center justify-between">
  //         <h2 className="text-2xl font-semibold">Portfolio</h2>
  //         <div className="text-sm text-gray-600">Showing <span className="font-medium">{filtered.length}</span> projects</div>
  //       </div>

  //       <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
  //         {filtered.map((p) => (
  //           <motion.div whileHover={{ scale: 1.02 }} key={p.id} className="bg-white rounded-2xl overflow-hidden shadow-sm border">
  //             <div className="relative h-56">
  //               <img src={p.images[0]} alt={p.title} className="w-full h-full object-cover" />
  //               <div className="absolute left-4 top-4 bg-black/60 text-white px-3 py-1 rounded-md text-xs">{p.category}</div>
  //             </div>
  //             <div className="p-4">
  //               <div className="flex items-start justify-between">
  //                 <div>
  //                   <div className="font-semibold">{p.title}</div>
  //                   <div className="text-xs text-gray-500 mt-1">{p.material} • {p.size}</div>
  //                 </div>
  //                 <div className="text-sm text-gray-600">{p.timeline}</div>
  //               </div>

  //               <p className="text-sm text-gray-600 mt-3 line-clamp-3">{p.description}</p>

  //               <div className="mt-4 flex items-center justify-between">
  //                 <div className="text-sm font-medium">{p.priceRange}</div>
  //                 <div className="flex items-center gap-2">
  //                   <button onClick={() => setSelectedProject(p)} className="px-3 py-1 border rounded-md text-sm">View Details</button>
  //                   <a href={`mailto:contact@pradeepfurniture.com?subject=Inquiry about ${encodeURIComponent(p.title)}`} className="px-3 py-1 bg-gray-900 text-white rounded-md text-sm">Enquire</a>
  //                 </div>
  //               </div>
  //             </div>
  //           </motion.div>
  //         ))}
  //       </div>

  //       <AnimatePresence>
  //         {selectedProject && (
  //           <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
  //         )}
  //       </AnimatePresence>
  //     </section>
  //   );
  // }
   function Portfolio() {
    return (
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold">Portfolio</h2>
          <div className="text-sm text-gray-600">Showing <span className="font-medium">{filtered.length}</span> projects</div>
        </div>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p) => (
            <motion.div whileHover={{ scale: 1.02 }} key={p.id} className="bg-white rounded-2xl overflow-hidden shadow-sm border">
              <div className="relative h-56">
                <img src={p.images[0]} alt={p.title} className="w-full h-full object-cover" />
                <div className="absolute left-4 top-4 bg-black/60 text-white px-3 py-1 rounded-md text-xs">{p.category}</div>
              </div>
              <div className="p-4">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="font-semibold">{p.title}</div>
                    <div className="text-xs text-gray-500 mt-1">{p.material} • {p.size}</div>
                  </div>
                  <div className="text-sm text-gray-600">{p.timeline}</div>
                </div>

                <p className="text-sm text-gray-600 mt-3 line-clamp-3">{p.description}</p>

                <div className="mt-4 flex items-center justify-between">
                  <div className="text-sm font-medium">{p.priceRange}</div>
                  <div className="flex items-center gap-2">
                    <button onClick={() => setSelectedProject(p)} className="px-3 py-1 border rounded-md text-sm">View Details</button>
                  <a
      href={`https://wa.me/916398802517?text=${encodeURIComponent(
        `Hello! I'm interested in "${p.title}". Can you share more details?`
      )}`}
      target="_blank"
      rel="noopener noreferrer"
      className="px-3 py-1 bg-gray-900 text-white rounded-md text-sm"
    >Enquire</a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedProject && (
            <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
          )}
        </AnimatePresence>
      </section>
    );
  }


  function ProjectModal({ project, onClose }) {
    return (
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center p-6">
        <motion.div initial={{ y: 20, scale: 0.98 }} animate={{ y: 0, scale: 1 }} exit={{ y: 10, scale: 0.98 }} transition={{ duration: 0.18 }} className="bg-white rounded-2xl max-w-4xl w-full shadow-lg overflow-hidden">
          <div className="p-4 flex items-start justify-between gap-4">
            <div>
              <div className="text-xl font-bold">{project.title}</div>
              <div className="text-sm text-gray-600">{project.category} • {project.material} • {project.size}</div>
            </div>
          <div className="flex gap-2">
  <a
    href={`https://wa.me/916398802517 ?text=${encodeURIComponent(
      `Hello, I want a quote for: ${project.title}`
    )}`}
    target="_blank"
    rel="noopener noreferrer"
    className="px-4 py-2 bg-green-600 text-white rounded-md"
  >
    Request Quote
  </a>

  <button
    onClick={onClose}
    className="px-4 py-2 border rounded-md"
  >
    Close
  </button>
</div>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
            <div className="space-y-3">
              {project.images.map((img, i) => (
                <img key={i} src={img} alt={project.title + i} className="w-full h-48 object-cover rounded-md shadow-sm" />
              ))}
            </div>
            <div>
              <h3 className="font-semibold">Project Details</h3>
              <p className="mt-2 text-gray-700">{project.description}</p>

              <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
                <div>
                  <div className="font-semibold">Material</div>
                  <div className="text-gray-600">{project.material}</div>
                </div>
                <div>
                  <div className="font-semibold">Timeline</div>
                  <div className="text-gray-600">{project.timeline}</div>
                </div>
                <div>
                  <div className="font-semibold">Size</div>
                  <div className="text-gray-600">{project.size}</div>
                </div>
                <div>
                  <div className="font-semibold">Price</div>
                  <div className="text-gray-600">{project.priceRange}</div>
                </div>
              </div>

              <div className="mt-6">
                <h4 className="font-semibold">Why builders & designers work with us</h4>
                <ul className="mt-2 list-disc list-inside text-sm text-gray-700">
                  <li>Bulk order capability and fixed timelines</li>
                  <li>Dedicated site measurement and installation team</li>
                  <li>Material partners: Greenlam, Greenply, Hettich (sample-based)</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    );
  }

  function Services() {
    const services = [
      { title: 'Modular Kitchens', desc: 'End-to-end modular kitchen fabrication and installation.' },
      { title: 'Wardrobes & Almirah', desc: 'Custom wardrobes, sliding doors, and internal fittings.' },
      { title: 'Office Furniture', desc: 'Ergonomic workstations, meeting furniture, and storage.' },
      { title: 'CNC & Decorative Work', desc: 'Precision CNC cutting for panels and bespoke designs.' },
      { title: 'Turnkey Interiors', desc: 'Full flat/office fit-outs — from design to install.' },
    ];

    return (
      <section className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-semibold">Services</h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((s) => (
            <motion.div key={s.title} whileHover={{ y: -4 }} className="p-6 border rounded-2xl bg-white shadow-sm">
              <div className="font-semibold">{s.title}</div>
              <div className="text-sm text-gray-600 mt-2">{s.desc}</div>
            </motion.div>
          ))}
        </div>
      </section>
    );
  }

  function About() {
    return (
      <section className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-semibold">About PradeepFurniture</h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-gray-700">
              PradeepFurniture is a family-run carpentry and modular solutions manufacturer with over a decade of experience delivering projects for builders, developers, and interior designers. We combine modern CNC capability with traditional finishing expertise to deliver reliable, high-quality products on time.
            </p>

            <ul className="mt-6 list-disc list-inside text-gray-700">
              <li>On-site measurement & fitting teams</li>
              <li>In-house workshop with CNC, edge-banding & spray booths</li>
              <li>Quality control and warranty on installations</li>
            </ul>

            <div className="mt-6 flex gap-3">
              <a href="/images/workshop.jpg" className="px-4 py-2 border rounded-md">Workshop Photos</a>
              <a href="mailto:contact@pradeepfurniture.com" className="px-4 py-2 bg-gray-900 text-white rounded-md">Contact Us</a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <img src="/images/workshop-1.jpg" alt="workshop" className="w-full h-40 object-cover rounded-md" />
            <img src="/images/workshop-2.jpg" alt="workshop" className="w-full h-40 object-cover rounded-md" />
            <img src="/images/workshop-3.jpg" alt="workshop" className="w-full h-40 object-cover rounded-md" />
            <img src="/images/workshop-4.jpg" alt="workshop" className="w-full h-40 object-cover rounded-md" />
          </div>
        </div>
      </section>
    );
  }

  function Contact() {
    return (
      <section className="max-w-4xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-semibold">Contact</h2>
        <p className="text-gray-600 mt-2">Send your project brief or call/WhatsApp us to schedule a site visit.</p>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          <div className="p-6 border rounded-2xl bg-white">
            <div className="font-semibold">Get in touch</div>
            <div className="text-sm text-gray-600 mt-2">Phone: +91 98987 65432</div>
            <div className="text-sm text-gray-600 mt-1">Email: contact@pradeepfurniture.com</div>
            <div className="text-sm text-gray-600 mt-1">Location: Your City, State</div>

            <div className="mt-4">
              <a href="https://wa.me/916398802517" target="_blank" rel="noreferrer" className="inline-block px-4 py-2 bg-green-600 text-white rounded-md">WhatsApp Us</a>
            </div>

            <div className="mt-6">
              <h4 className="font-semibold">Business Hours</h4>
              <div className="text-sm text-gray-600">Mon - Sat: 9:00 AM - 7:00 PM</div>
            </div>
          </div>

          <form className="p-6 rounded-2xl bg-white border shadow-sm">
            <label className="text-sm font-medium">Name</label>
            <input className="w-full mt-2 p-2 border rounded-md" placeholder="Your name" />

            <label className="text-sm font-medium mt-4">Phone</label>
            <input className="w-full mt-2 p-2 border rounded-md" placeholder="Phone number" />

            <label className="text-sm font-medium mt-4">Email</label>
            <input className="w-full mt-2 p-2 border rounded-md" placeholder="Email" />

            <label className="text-sm font-medium mt-4">Project Brief</label>
            <textarea className="w-full mt-2 p-2 border rounded-md" rows={4} placeholder="Share a short brief or attach measurements" />

            <div className="mt-4 flex gap-3">
              <button type="button" className="px-4 py-2 bg-gray-900 text-white rounded-md">Send</button>
              <button type="button" className="px-4 py-2 border rounded-md">Attach File</button>
            </div>
          </form>
        </div>
      </section>
    );
  }

  function Footer() {
    return (
      <footer className="bg-gray-900 text-white mt-12">
        <div className="max-w-7xl mx-auto px-6 py-8 grid md:grid-cols-3 gap-6">
          <div>
            <div className="font-bold">PradeepFurniture</div>
            <div className="text-sm text-gray-300 mt-2">Premium carpentry & modular solutions for builders and interior designers.</div>
          </div>
          <div>
            <div className="font-semibold">Contact</div>
            <div className="text-sm text-gray-300 mt-2">+91 98987 65432</div>
            <div className="text-sm text-gray-300">contact@pradeepfurniture.com</div>
          </div>
          <div>
            <div className="font-semibold">Follow</div>
            <div className="text-sm text-gray-300 mt-2">Instagram • LinkedIn • Google Business</div>
          </div>
        </div>
        <div className="text-center text-xs text-gray-500 py-3">© {new Date().getFullYear()} PradeepFurniture — All rights reserved</div>
      </footer>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* <Nav /> */}

      <main>
        {route === 'home' && (
          <>
            <Hero />
            <CategoriesSection />
            <Portfolio />
            <Services />
            <About />
            <Contact />
          </>
        )}

        {route === 'portfolio' && (
          <>
            <div className="max-w-7xl mx-auto px-6 py-12">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-semibold">Portfolio</h2>
                <div className="flex items-center gap-2">
                  <label className="text-sm text-gray-600">Filter</label>
                  <select className="p-2 border rounded-md" value={filter} onChange={(e)=>setFilter(e.target.value)}>
                    {categories.map(c => <option key={c} value={c}>{c}</option>)}
                  </select>
                </div>
              </div>
            </div>
            <Portfolio />
          </>
        )}

        {route === 'services' && <Services />}
        {route === 'about' && <About />}
        {route === 'contact' && <Contact />}
      </main>

      {/* <Footer /> */}
    </div>
  );
}
