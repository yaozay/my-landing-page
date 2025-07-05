"use client"

import { motion } from "framer-motion"

export default function AboutSection() {
  return (
    <section id="about" className="container py-16">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center text-center"
      >
        <h2 className="text-3xl font-bold mb-8">About Me</h2>
        <div className="max-w-3xl bg-secondary/50 p-8 rounded-lg border border-border/30">
          <p className="text-lg text-muted-foreground leading-relaxed text-balance">
            I am a passionate Computer Science student with a strong interest in full-stack web development and systems
            programming. I thrive on solving complex problems and enjoy building efficient, scalable, and user-friendly
            applications. My journey in tech has been driven by a curiosity to understand how things work under the
            hood, which has led me to explore everything from front-end frameworks like React to low-level languages
            like Rust. When I'm not coding, you can find me contributing to open-source projects, participating in
            hackathons, or exploring the latest advancements in technology.
          </p>
        </div>
      </motion.div>
    </section>
  )
}
