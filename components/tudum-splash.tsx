"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"

export function TudumSplash({ onComplete }: { onComplete: () => void }) {
  const [phase, setPhase] = useState<"line" | "logo" | "glow" | "shatter">("line")
  const audioRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    audioRef.current = new Audio("/tudum.mp3")
    audioRef.current.volume = 0.5

    const lineTimer = setTimeout(() => setPhase("logo"), 400)
    const glowTimer = setTimeout(() => {
      audioRef.current?.play().catch(() => {})
      setPhase("glow")
    }, 800)
    const shatterTimer = setTimeout(() => setPhase("shatter"), 1600)
    const completeTimer = setTimeout(() => onComplete(), 2500)

    return () => {
      clearTimeout(lineTimer)
      clearTimeout(glowTimer)
      clearTimeout(shatterTimer)
      clearTimeout(completeTimer)
    }
  }, [onComplete])

  const NetflixN = () => (
    <svg viewBox="0 0 100 100" className="w-32 h-32 md:w-48 md:h-48">
      <defs>
        <linearGradient id="netflix-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#E50914" />
          <stop offset="50%" stopColor="#B20710" />
          <stop offset="100%" stopColor="#E50914" />
        </linearGradient>
      </defs>
      {/* Left vertical bar */}
      <motion.polygon
        points="15,5 35,5 35,95 15,95"
        fill="url(#netflix-gradient)"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      />
      {/* Diagonal ribbon */}
      <motion.polygon
        points="15,5 35,5 85,95 65,95"
        fill="#E50914"
        initial={{ opacity: 0, scaleY: 0 }}
        animate={{ opacity: 1, scaleY: 1 }}
        transition={{ duration: 0.3, delay: 0.1, ease: "easeOut" }}
        style={{ transformOrigin: "top" }}
      />
      {/* Right vertical bar */}
      <motion.polygon
        points="65,5 85,5 85,95 65,95"
        fill="url(#netflix-gradient)"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.2, ease: "easeOut" }}
      />
    </svg>
  )

  return (
    <motion.div
      className="fixed inset-0 z-[100] bg-black flex items-center justify-center overflow-hidden"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <AnimatePresence mode="wait">
        {phase === "line" && (
          <motion.div
            key="line"
            className="bg-[#E50914] rounded-sm"
            initial={{ height: 0, width: 16 }}
            animate={{ height: 160, width: 16 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
          />
        )}

        {(phase === "logo" || phase === "glow") && (
          <motion.div
            key="logo"
            className="relative flex items-center justify-center"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <NetflixN />

            {/* Glow effect */}
            {phase === "glow" && (
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 0.5] }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <div className="w-32 h-32 md:w-48 md:h-48 bg-[#E50914]/50 blur-3xl rounded-full" />
              </motion.div>
            )}
          </motion.div>
        )}

        {phase === "shatter" && (
          <motion.div
            key="shatter"
            className="relative flex items-center justify-center"
            initial={{ scale: 1, opacity: 1 }}
            animate={{ scale: 20, opacity: 0 }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          >
            <svg viewBox="0 0 100 100" className="w-32 h-32 md:w-48 md:h-48">
              <polygon points="15,5 35,5 35,95 15,95" fill="#E50914" />
              <polygon points="15,5 35,5 85,95 65,95" fill="#E50914" />
              <polygon points="65,5 85,5 85,95 65,95" fill="#E50914" />
            </svg>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
