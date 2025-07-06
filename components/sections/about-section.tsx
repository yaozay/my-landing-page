"use client"
import { motion } from "framer-motion"
import { Code, Zap, Heart, Star, Sparkles } from "lucide-react"

export default function AboutSection() {
  return (
    <section id="about" className="container py-24 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <motion.div
          className="absolute top-20 left-1/4 w-32 h-32 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 blur-xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-1/4 w-24 h-24 rounded-full bg-gradient-to-br from-pink-500 to-orange-500 blur-xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.6, 0.3, 0.6],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center text-center relative z-10"
      >
        {/* Animated Title */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            About Me
          </h2>
          <motion.div
            className="h-1 w-24 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          />
        </motion.div>

        {/* Main Content Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-4xl relative"
        >
          {/* Animated Border */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-20 blur-sm" />
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-30" />
          
          {/* Content */}
          <div className="relative bg-background/95 backdrop-blur-xl p-8 md:p-12 rounded-2xl border border-white/10 shadow-2xl">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-balance mb-8">
                I am a passionate <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 font-semibold">Computer Science student</span> with a strong interest in full-stack web development and systems programming. I thrive on solving complex problems and enjoy building efficient, scalable, and user-friendly applications.
              </p>
              
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-balance mb-8">
                My journey in tech has been driven by a curiosity to understand how things work under the hood, which has led me to explore everything from front-end frameworks like <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500 font-semibold">React</span> to low-level languages like <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500 font-semibold">Rust</span>.
              </p>
              
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-balance">
                When I'm not coding, you can find me contributing to open-source projects, participating in hackathons, or exploring the latest advancements in technology.
              </p>
            </motion.div>

            {/* Animated Icons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex justify-center gap-6 mt-8"
            >
              {[
                { Icon: Code, color: "from-blue-500 to-cyan-500", delay: 0 },
                { Icon: Zap, color: "from-yellow-500 to-orange-500", delay: 0.1 },
                { Icon: Star, color: "from-purple-500 to-pink-500", delay: 0.3 },
                { Icon: Sparkles, color: "from-green-500 to-emerald-500", delay: 0.4 },
              ].map(({ Icon, color, delay }, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0, rotate: -180 }}
                  whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.6, 
                    delay: delay + 0.7,
                    type: "spring",
                    stiffness: 200,
                    damping: 10
                  }}
                  whileHover={{ 
                    scale: 1.2, 
                    rotate: [0, -10, 10, -10, 0],
                    transition: { duration: 0.5 }
                  }}
                  className={`p-3 rounded-full bg-gradient-to-r ${color} shadow-lg cursor-pointer group`}
                >
                  <Icon className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Floating Particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + (i % 2) * 40}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "easeInOut",
            }}
          />
        ))}
      </motion.div>
    </section>
  )
}