"use client"
import { motion, Variants } from "framer-motion"
import { experience, education } from "@/lib/data"
import { Briefcase, GraduationCap, Sparkles, Star } from "lucide-react"

export default function ExperienceSection() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  return (
    <section id="experience" className="container py-24 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <motion.div
          className="absolute top-1/4 right-1/4 w-40 h-40 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 blur-xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/3 left-1/3 w-28 h-28 rounded-full bg-gradient-to-br from-violet-500 to-purple-600 blur-xl"
          animate={{
            scale: [1.3, 1, 1.3],
            opacity: [0.5, 0.2, 0.5],
          }}
          transition={{
            duration: 4,
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
        className="relative z-10"
      >
        {/* Animated Title */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
            My Journey
          </h2>
          <motion.div
            className="h-1 w-28 mx-auto rounded-full bg-gradient-to-r from-emerald-500 to-purple-500"
            initial={{ width: 0 }}
            whileInView={{ width: 112 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Experience Section */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative"
          >
            {/* Section Header */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-8"
            >
              <div className="relative inline-block">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg blur opacity-20" />
                <h3 className="relative text-2xl font-semibold mb-2 flex items-center gap-3 bg-background/80 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/10">
                  <motion.div
                    className="p-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Briefcase className="h-5 w-5 text-white" />
                  </motion.div>
                  Experience
                </h3>
              </div>
            </motion.div>

            {/* Timeline */}
            <div className="relative">
              {/* Animated Timeline Line */}
              <motion.div
                className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 rounded-full"
                initial={{ height: 0 }}
                whileInView={{ height: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.3 }}
              />
              
              <div className="pl-16 space-y-12">
                {experience.map((item, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="relative group"
                  >
                    {/* Animated Timeline Dot */}
                    <motion.div
                      className="absolute -left-[67px] top-2 w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 border-4 border-background shadow-lg"
                      initial={{ scale: 0, rotate: -180 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      viewport={{ once: true }}
                      transition={{ 
                        duration: 0.5, 
                        delay: index * 0.2 + 0.5,
                        type: "spring",
                        stiffness: 200
                      }}
                      whileHover={{ scale: 1.2 }}
                    />

                    {/* Content Card */}
                    <motion.div
                      className="relative bg-background/50 backdrop-blur-sm p-6 rounded-xl border border-white/10 shadow-lg hover:shadow-xl transition-all duration-300"
                      whileHover={{ y: -2, scale: 1.02 }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      
                      <div className="relative z-10">
                        <p className="font-semibold text-lg bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                          {item.role}
                        </p>
                        <p className="text-sm text-muted-foreground mb-3">
                          {item.company} | {item.period}
                        </p>
                        <ul className="space-y-2">
                          {item.achievements.map((ach, i) => (
                            <motion.li
                              key={i}
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: index * 0.1 + i * 0.05 + 0.7 }}
                              className="flex items-start gap-2 text-sm text-muted-foreground"
                            >
                              <Star className="h-3 w-3 text-yellow-500 mt-1 flex-shrink-0" />
                              {ach}
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Education Section */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative"
          >
            {/* Section Header */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-8"
            >
              <div className="relative inline-block">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg blur opacity-20" />
                <h3 className="relative text-2xl font-semibold mb-2 flex items-center gap-3 bg-background/80 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/10">
                  <motion.div
                    className="p-2 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500"
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.3 }}
                  >
                    <GraduationCap className="h-5 w-5 text-white" />
                  </motion.div>
                  Education
                </h3>
              </div>
            </motion.div>

            {/* Timeline */}
            <div className="relative">
              {/* Animated Timeline Line */}
              <motion.div
                className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-emerald-500 via-teal-500 to-cyan-500 rounded-full"
                initial={{ height: 0 }}
                whileInView={{ height: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.3 }}
              />
              
              <div className="pl-16 space-y-12">
                {education.map((item, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="relative group"
                  >
                    {/* Animated Timeline Dot */}
                    <motion.div
                      className="absolute -left-[67px] top-2 w-6 h-6 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 border-4 border-background shadow-lg"
                      initial={{ scale: 0, rotate: -180 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      viewport={{ once: true }}
                      transition={{ 
                        duration: 0.5, 
                        delay: index * 0.2 + 0.5,
                        type: "spring",
                        stiffness: 200
                      }}
                      whileHover={{ scale: 1.2 }}
                    />

                    {/* Content Card */}
                    <motion.div
                      className="relative bg-background/50 backdrop-blur-sm p-6 rounded-xl border border-white/10 shadow-lg hover:shadow-xl transition-all duration-300"
                      whileHover={{ y: -2, scale: 1.02 }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 to-teal-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      
                      <div className="relative z-10">
                        <p className="font-semibold text-lg bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                          {item.degree}
                        </p>
                        <p className="text-sm text-muted-foreground mb-3">
                          {item.institution} | {item.period}
                        </p>
                        <motion.p
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 + 0.7 }}
                          className="text-sm text-muted-foreground flex items-start gap-2"
                        >
                          <Sparkles className="h-3 w-3 text-emerald-500 mt-1 flex-shrink-0" />
                          {item.details}
                        </motion.p>
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Floating Elements */}
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
            style={{
              left: `${15 + i * 20}%`,
              top: `${20 + (i % 2) * 50}%`,
            }}
            animate={{
              y: [0, -15, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.8, 1],
            }}
            transition={{
              duration: 2.5 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.8,
              ease: "easeInOut",
            }}
          />
        ))}
      </motion.div>
    </section>
  )
}