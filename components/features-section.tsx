"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Headphones, Monitor, MapPin, Wifi, Clock, Volume2 } from "lucide-react"

const features = [
  {
    icon: Headphones,
    title: "Cyclflix Smart Helmet",
    description: "Premium helmet with built-in noise-canceling headphones. Crystal-clear audio for podcasts and documentaries while maintaining safety awareness.",
  },
  {
    icon: Monitor,
    title: "5-inch Smart Display",
    description: "High-resolution touchscreen showing current podcast/documentary, playback controls, volume adjustment, and ride statistics in real-time.",
  },
  {
    icon: MapPin,
    title: "GPS Navigation",
    description: "Integrated GPS with phone connectivity. Track your location, plan routes, and never lose your way during long rides.",
  },
  {
    icon: Wifi,
    title: "Phone Integration",
    description: "Seamless smartphone connection via Bluetooth and WiFi. Sync your Netflix account, playlists, and riding preferences.",
  },
  {
    icon: Clock,
    title: "Ride Analytics",
    description: "Real-time tracking of ride time, distance covered, average speed, and remaining show duration. Perfect for planning your entertainment.",
  },
  {
    icon: Volume2,
    title: "Adaptive Audio",
    description: "Smart volume control that adjusts based on ambient noise and speed. Safety-first audio that lets you hear traffic while enjoying content.",
  },
]

export function FeaturesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section id="features" className="bg-black py-24 md:py-32 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[#E50914] text-sm uppercase tracking-widest mb-4 font-medium"
          >
            Features
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-4xl md:text-6xl font-black text-white uppercase tracking-tight mb-4"
          >
            Smart Entertainment
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-white/50 text-lg max-w-xl mx-auto"
          >
            Revolutionary cycling experience with integrated entertainment and navigation.
          </motion.p>
        </motion.div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative bg-white/[0.02] border border-white/10 rounded-xl p-8 transition-all duration-500 hover:border-[#E50914]/50 hover:bg-white/[0.04] overflow-hidden"
            >
              <motion.div
                initial={{ opacity: 0, rotate: 0 }}
                animate={{
                  opacity: hoveredIndex === index ? 1 : 0,
                  rotate: hoveredIndex === index ? 180 : 0,
                }}
                transition={{ duration: 0.6 }}
                className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-br from-[#E50914]/20 via-transparent to-transparent rounded-full pointer-events-none"
              />

              <motion.div
                className="w-14 h-14 rounded-xl bg-[#E50914]/10 flex items-center justify-center mb-6 relative overflow-hidden"
                animate={{
                  scale: hoveredIndex === index ? 1.1 : 1,
                  rotate: hoveredIndex === index ? 5 : 0,
                }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  animate={{
                    scale: hoveredIndex === index ? [1, 1.5] : 1,
                    opacity: hoveredIndex === index ? [0.5, 0] : 0,
                  }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0 bg-[#E50914]/30 rounded-xl"
                />
                <feature.icon className="h-7 w-7 text-[#E50914] relative z-10" />
              </motion.div>

              <h3 className="text-xl font-bold text-white mb-3 relative z-10">{feature.title}</h3>
              <p className="text-white/50 leading-relaxed relative z-10">{feature.description}</p>

              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: hoveredIndex === index ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#E50914] via-[#E50914]/50 to-transparent origin-left"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
