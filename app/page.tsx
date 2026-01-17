"use client"

import { useState, useCallback } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { TudumSplash } from "@/components/tudum-splash"
import { HomeContent } from "@/components/home-content"

export default function Home() {
  const [showSplash, setShowSplash] = useState(true)

  const handleSplashComplete = useCallback(() => {
    setShowSplash(false)
  }, [])

  return (
    <>
      <AnimatePresence mode="wait">{showSplash && <TudumSplash onComplete={handleSplashComplete} />}</AnimatePresence>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: showSplash ? 0 : 1 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <HomeContent />
      </motion.div>
    </>
  )
}
