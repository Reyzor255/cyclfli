"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

export function BikeShowcase() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1.05, 0.95])
  const rotateY = useTransform(scrollYProgress, [0, 0.5, 1], [-5, 0, 5])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0.5])

  return (
    <section ref={ref} className="bg-black py-24 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative"
        >
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <motion.div
              animate={{
                scale: [1, 1.15, 1],
                opacity: [0.25, 0.4, 0.25],
              }}
              transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              className="w-[600px] h-[400px] bg-[#E50914]/25 rounded-full blur-[150px]"
            />
          </div>

          <motion.div
            animate={{ opacity: [0.15, 0.25, 0.15] }}
            transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-[150px] bg-gradient-to-t from-[#E50914]/15 to-transparent blur-2xl"
          />

          <motion.div
            style={{ scale, rotateY, opacity }}
            className="relative z-10 flex items-center justify-center py-8 perspective-1000"
          >
            <motion.img
              src="/images/ni.jpeg"
              alt="Netflix N1 electric bicycle"
              className="w-full max-w-4xl mx-auto"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.5 }}
              style={{
                filter: "drop-shadow(0 0 80px rgba(229,9,20,0.4)) drop-shadow(0 20px 40px rgba(0,0,0,0.8))",
              }}
            />
          </motion.div>

          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-[#E50914]/60 rounded-full"
                style={{
                  left: `${15 + i * 15}%`,
                  top: `${20 + (i % 3) * 25}%`,
                }}
                animate={{
                  y: [0, -30, 0],
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0],
                }}
                transition={{
                  duration: 3 + i * 0.5,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: i * 0.5,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
