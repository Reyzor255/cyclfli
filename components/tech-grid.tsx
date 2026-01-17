"use client"

import { Layers, Zap, Monitor } from "lucide-react"
import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"

const specs = [
  {
    icon: Layers,
    title: "Monocoque Frame",
    description:
      "Lightweight carbon construction using aerospace-grade T1100 fiber. Unmatched stiffness-to-weight ratio for explosive acceleration.",
  },
  {
    icon: Zap,
    title: "Smart Drive",
    description:
      "85Nm torque motor with predictive assistance. AI-powered cadence matching for seamless, silent power delivery.",
  },
  {
    icon: Monitor,
    title: "Integrated Cockpit",
    description:
      "Zero visible cables. Fully integrated display, controls, and routing for a clean, aerodynamic profile.",
  },
]

export function TechGrid() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section id="specs" className="bg-black py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2 className="text-3xl md:text-5xl font-bold text-white uppercase tracking-tight mb-4">
            Built Different
          </motion.h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto">Every component engineered without compromise.</p>
        </motion.div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {specs.map((spec, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, rotateX: -10 }}
              animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{ duration: 0.7, delay: index * 0.15, ease: "easeOut" }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative bg-black border border-white/10 rounded-lg p-8 transition-all duration-500 hover:border-[#E50914]/50 hover:bg-white/[0.02] overflow-hidden"
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                className="absolute inset-0 bg-gradient-to-br from-[#E50914]/10 via-transparent to-transparent pointer-events-none"
              />

              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: hoveredIndex === index ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#E50914] to-transparent origin-left"
              />

              <div className="relative z-10">
                <motion.div
                  className="mb-6"
                  animate={{
                    scale: hoveredIndex === index ? 1.1 : 1,
                    rotate: hoveredIndex === index ? 5 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <spec.icon className="h-10 w-10 text-[#E50914] transition-all duration-300" />
                </motion.div>
                <h3 className="text-xl font-semibold text-white mb-3">{spec.title}</h3>
                <p className="text-white/50 leading-relaxed">{spec.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
