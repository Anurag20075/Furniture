/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import {
  Leaf,
  Sparkles,
  Hammer,
  Ruler,
  Recycle,
  ArrowRight,
  ChevronRight,
  ShieldCheck,
  HeartHandshake,
  Package2,
} from "lucide-react";

// ------------------------------------------------------------
// Woodify — About Page (single-file React component)
// Tech: React + Tailwind CSS + Framer Motion + Lucide Icons
// ------------------------------------------------------------
// Notes:
// - Drop this file into your Next.js/React app and route it at /about.
// - Uses Tailwind utility classes and subtle motion for polish.
// - Replace placeholder images with brand assets if desired.
// ------------------------------------------------------------

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100">
      {/* Page container */}
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <section className="relative overflow-hidden py-20 sm:py-28">
          <div className="pointer-events-none absolute inset-0">
            {/* soft gradient blob */}
            <div className="absolute -top-24 -left-24 h-64 w-64 rounded-full bg-amber-300/20 blur-3xl" />
            <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-emerald-300/20 blur-3xl" />
          </div>

          <motion.div
            variants={stagger}
            initial="hidden"
            animate="show"
            className="relative grid items-center gap-10 md:grid-cols-2"
          >
            <motion.div variants={fadeUp}>
              <span className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white/70 px-3 py-1 text-xs font-medium text-zinc-700 shadow-sm backdrop-blur dark:border-zinc-800 dark:bg-zinc-900/50 dark:text-zinc-300">
                <Sparkles className="h-3.5 w-3.5" />
                Crafted by You. Built by Woodify.
              </span>
              <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
                Design furniture that actually fits your life
              </h1>
              <p className="mt-4 max-w-xl text-lg text-zinc-600 dark:text-zinc-300">
                Woodify blends timeless wood aesthetics with modern tech so you can
                personalize every detail—dimensions, materials, finishes—and see it in your
                room before it’s built.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href="/customize"
                  className="group inline-flex items-center gap-2 rounded-2xl bg-zinc-900 px-5 py-3 text-sm font-medium text-white shadow-lg shadow-zinc-900/10 transition hover:-translate-y-px hover:shadow-zinc-900/20 dark:bg-white dark:text-zinc-900"
                >
                  Start Designing
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                </a>
                <a
                  href="/collection"
                  className="inline-flex items-center gap-2 rounded-2xl border border-zinc-300 bg-white px-5 py-3 text-sm font-medium text-zinc-800 transition hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-200 dark:hover:bg-zinc-800"
                >
                  Explore Collection
                  <ChevronRight className="h-4 w-4" />
                </a>
              </div>

              {/* Trust badges */}
              <div className="mt-8 grid max-w-xl grid-cols-3 gap-4 text-center">
                {[
                  { label: "Sustainably Sourced", Icon: Leaf },
                  { label: "Bespoke Dimensions", Icon: Ruler },
                  { label: "Artisan Built", Icon: Hammer },
                ].map(({ label, Icon }) => (
                  <div
                    key={label}
                    className="rounded-xl border border-zinc-200 bg-white/70 px-3 py-4 text-xs shadow-sm backdrop-blur dark:border-zinc-800 dark:bg-zinc-900/40"
                  >
                    <Icon className="mx-auto mb-2 h-4 w-4" />
                    <p className="font-medium text-zinc-700 dark:text-zinc-300">{label}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Visual panel */}
            <motion.div
              variants={fadeUp}
              className="relative aspect-4/3 overflow-hidden rounded-3xl border border-zinc-200 bg-linear-to-br from-amber-100 via-rose-50 to-emerald-100 shadow-xl dark:border-zinc-800 dark:from-amber-950/30 dark:via-zinc-900 dark:to-emerald-900/20"
            >
              {/* Placeholder 3D-ish card grid */}
              <div className="absolute inset-0 grid grid-cols-3 gap-3 p-3 opacity-90">
                {[...Array(9)].map((_, i) => (
                  <div
                    key={i}
                    className="rounded-2xl bg-white/70 shadow-sm backdrop-blur dark:bg-zinc-900/60"
                  />
                ))}
              </div>
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.6),transparent_50%)] dark:bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.06),transparent_50%)]" />
            </motion.div>
          </motion.div>
        </section>

        {/* Our Story */}
        <section id="our-story" className="py-16 sm:py-24">
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }}>
            <motion.h2 variants={fadeUp} className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Our Story
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-4 max-w-3xl text-lg text-zinc-600 dark:text-zinc-300">
              Woodify began with a simple frustration: beautiful furniture rarely fits real homes.
              We started as designers and engineers obsessed with solving the one-size-fits-all
              problem. The idea was bold yet human—give people the freedom to co-create pieces that
              reflect their lives, then build them with the care of a modern craft studio.
            </motion.p>
          </motion.div>

          {/* Story Highlights */}
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {[
              {
                title: "From workshop to web",
                body:
                  "We combined artisan methods with digital tools—so you can shape dimensions, select materials, and preview finishes before a single cut is made.",
                icon: Package2,
              },
              {
                title: "People-first customization",
                body:
                  "Upload room photos or sketches, annotate needs, and get suggestions tuned to your space, style, and budget.",
                icon: HeartHandshake,
              },
            ].map(({ title, body, icon: Icon }) => (
              <motion.div
                key={title}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-100px" }}
                className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900"
              >
                <Icon className="h-5 w-5" />
                <h3 className="mt-3 text-lg font-semibold">{title}</h3>
                <p className="mt-2 text-zinc-600 dark:text-zinc-300">{body}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Our Vision */}
        <section id="our-vision" className="py-16 sm:py-24">
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }}>
            <motion.h2 variants={fadeUp} className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Our Vision
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-4 max-w-3xl text-lg text-zinc-600 dark:text-zinc-300">
              We believe personalization should be accessible to everyone—not a luxury reserved for a few.
              Woodify empowers you to design furniture that works precisely for your lifestyle, without compromising on beauty or durability.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-8 grid gap-6 sm:grid-cols-3">
              {[
                { label: "Made-to-measure", Icon: Ruler },
                { label: "Built to last", Icon: ShieldCheck },
                { label: "Planet-forward", Icon: Recycle },
              ].map(({ label, Icon }) => (
                <div
                  key={label}
                  className="rounded-2xl border border-zinc-200 bg-white p-5 text-center shadow-sm dark:border-zinc-800 dark:bg-zinc-900"
                >
                  <Icon className="mx-auto h-6 w-6" />
                  <p className="mt-2 font-medium">{label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </section>

        {/* Our Craft */}
        <section id="our-craft" className="py-16 sm:py-24">
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }}>
            <motion.h2 variants={fadeUp} className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Our Craft
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-4 max-w-3xl text-lg text-zinc-600 dark:text-zinc-300">
              Every piece passes through skilled hands. We partner with artisans and certified suppliers,
              choosing responsibly sourced hardwoods, low-VOC finishes, and hardware tested for decades of use.
              Your design becomes a build plan—precise, durable, and worthy of your space.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-8 grid gap-6 md:grid-cols-3">
              {[
                {
                  title: "Premium materials",
                  desc: "FSC®-certified woods, recycled metals, and eco-conscious finishes for healthier homes.",
                  Icon: Leaf,
                },
                {
                  title: "Artisan precision",
                  desc: "Joinery that holds up, tolerances that matter, and finish quality you can feel.",
                  Icon: Hammer,
                },
                {
                  title: "Sustainable supply",
                  desc: "Transparent sourcing, optimized cuts, and smart packaging reduce waste at every step.",
                  Icon: Recycle,
                },
              ].map(({ title, desc, Icon }) => (
                <div key={title} className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
                  <Icon className="h-5 w-5" />
                  <h3 className="mt-3 text-lg font-semibold">{title}</h3>
                  <p className="mt-2 text-zinc-600 dark:text-zinc-300">{desc}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </section>

        {/* Innovation Meets Design */}
        <section id="innovation" className="py-16 sm:py-24">
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }}>
            <motion.h2 variants={fadeUp} className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Innovation Meets Design
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-4 max-w-3xl text-lg text-zinc-600 dark:text-zinc-300">
              Woodify’s AI visualization helps you explore possibilities quickly. Upload a room photo or
              a simple sketch to see personalized suggestions—dimensions, materials, and finishes—rendered
              in context. Iterate fast. Decide confidently.
            </motion.p>

            <div className="mt-10 grid gap-6 md:grid-cols-2">
              <motion.div variants={fadeUp} className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
                <div className="flex items-center gap-3">
                  <Sparkles className="h-5 w-5" />
                  <h3 className="text-lg font-semibold">Smart suggestions</h3>
                </div>
                <p className="mt-2 text-zinc-600 dark:text-zinc-300">
                  Get style and layout guidance tuned to your room’s light, dimensions, and color palette.
                </p>
              </motion.div>

              <motion.div variants={fadeUp} className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
                <div className="flex items-center gap-3">
                  <Ruler className="h-5 w-5" />
                  <h3 className="text-lg font-semibold">Parametric sizing</h3>
                </div>
                <p className="mt-2 text-zinc-600 dark:text-zinc-300">
                  Dial in exact dimensions and watch the model adapt instantly—no more compromise corners.
                </p>
              </motion.div>

              <motion.div variants={fadeUp} className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
                <div className="flex items-center gap-3">
                  <ShieldCheck className="h-5 w-5" />
                  <h3 className="text-lg font-semibold">Build-ready outputs</h3>
                </div>
                <p className="mt-2 text-zinc-600 dark:text-zinc-300">
                  We translate your final design into precise build specs so artisans can craft exactly what you approved.
                </p>
              </motion.div>

              <motion.div variants={fadeUp} className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
                <div className="flex items-center gap-3">
                  <Recycle className="h-5 w-5" />
                  <h3 className="text-lg font-semibold">Responsible by default</h3>
                </div>
                <p className="mt-2 text-zinc-600 dark:text-zinc-300">
                  Optimization minimizes material waste and suggests greener options without sacrificing style.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* The Future of Furniture */}
        <section id="future" className="py-16 sm:py-24">
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }}>
            <motion.h2 variants={fadeUp} className="text-3xl font-semibold tracking-tight sm:text-4xl">
              The Future of Furniture
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-4 max-w-3xl text-lg text-zinc-600 dark:text-zinc-300">
              Homes evolve. Your furniture should, too. We’re building a world where unique spaces
              feel effortless to furnish—where creativity is guided, not gated. Join us as we shape
              a more personal, sustainable future for the spaces we live in.
            </motion.p>

            {/* CTA banner */}
            <motion.div
              variants={fadeUp}
              className="mt-10 overflow-hidden rounded-3xl border border-zinc-200 bg-linear-to-br from-zinc-100 via-white to-zinc-100 p-8 shadow-sm dark:border-zinc-800 dark:from-zinc-900 dark:via-zinc-950 dark:to-zinc-900"
            >
              <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
                <div>
                  <h3 className="text-xl font-semibold">Imagine a home that tells your story</h3>
                  <p className="mt-1 text-zinc-600 dark:text-zinc-300">
                    Start with a template, upload a sketch, or ask our AI to help. We’ll build what you imagine.
                  </p>
                </div>
                <a
                  href="/customize"
                  className="group inline-flex items-center gap-2 rounded-2xl bg-zinc-900 px-5 py-3 text-sm font-medium text-white shadow-lg shadow-zinc-900/10 transition hover:-translate-y-px hover:shadow-zinc-900/20 dark:bg-white dark:text-zinc-900"
                >
                  Design Your Piece
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                </a>
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* Sustainability Snapshot */}
        <section id="sustainability" className="py-16 sm:py-24">
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }}>
            <motion.h2 variants={fadeUp} className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Sustainability, Built In
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-4 max-w-3xl text-lg text-zinc-600 dark:text-zinc-300">
              From sourcing to shipping, we make choices that respect the planet. Our approach reduces waste,
              limits toxins, and prioritizes circularity.
            </motion.p>

            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { label: "FSC® woods", Icon: Leaf },
                { label: "Low-VOC finishes", Icon: ShieldCheck },
                { label: "Optimized cuts", Icon: Ruler },
                { label: "Recycled packaging", Icon: Recycle },
              ].map(({ label, Icon }) => (
                <motion.div
                  key={label}
                  variants={fadeUp}
                  className="rounded-2xl border border-zinc-200 bg-white p-6 text-center shadow-sm dark:border-zinc-800 dark:bg-zinc-900"
                >
                  <Icon className="mx-auto h-6 w-6" />
                  <p className="mt-2 font-medium">{label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Footer micro-copy */}
        <footer className="py-10">
          <p className="text-center text-sm text-zinc-500 dark:text-zinc-400">
            Woodify — craftsmanship, innovation, and sustainability for the spaces you love.
          </p>
        </footer>
      </main>
    </div>
  );
}