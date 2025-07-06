"use client"
import { motion, Variants } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { skills } from "@/lib/data"
import { Code, Database, Server, Sparkles, Zap, Target } from "lucide-react"

const skillCategories = [
  { 
    name: "Languages", 
    icon: <Code className="h-6 w-6" />, 
    skills: skills.languages,
    gradient: "from-blue-500 to-purple-500",
    bgGradient: "from-blue-500/10 to-purple-500/10"
  },
  { 
    name: "AI/ML", 
    icon: <Server className="h-6 w-6" />, 
    skills: skills.frameworks,
    gradient: "from-emerald-500 to-teal-500",
    bgGradient: "from-emerald-500/10 to-teal-500/10"
  },
  { 
    name: "Frameworks/Tools", 
    icon: <Database className="h-6 w-6" />, 
    skills: skills.tools,
    gradient: "from-orange-500 to-red-500",
    bgGradient: "from-orange-500/10 to-red-500/10"
  },
]

export default function SkillsSection() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  }

  const skillItemVariants: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  }

  return (
    <section id="skills" className="container py-24 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <motion.div
          className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 blur-xl"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/3 w-24 h-24 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 blur-xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.2, 0.4],
          }}
          transition={{
            duration: 4.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/3 right-1/4 w-20 h-20 rounded-full bg-gradient-to-br from-orange-500 to-red-600 blur-xl"
          animate={{
            scale: [1, 1.8, 1],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 5.5,
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
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-orange-600 bg-clip-text text-transparent">
            My Skills
          </h2>
          <motion.div
            className="h-1 w-28 mx-auto rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-orange-500"
            initial={{ width: 0 }}
            whileInView={{ width: 112 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          />
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.name}
              variants={cardVariants}
              className="group"
            >
              <Card className="relative bg-background/50 backdrop-blur-sm border-white/10 shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden">
                {/* Animated background gradient */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${category.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />
                
                {/* Glowing border effect */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-r ${category.gradient} opacity-0 group-hover:opacity-20 blur-sm transition-opacity duration-500`}
                />
                
                <CardHeader className="relative z-10">
                  <CardTitle className="flex items-center gap-3 text-xl">
                    <motion.div
                      className={`p-2 rounded-full bg-gradient-to-r ${category.gradient} shadow-lg`}
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="text-white">
                        {category.icon}
                      </div>
                    </motion.div>
                    <span className={`bg-gradient-to-r ${category.gradient} bg-clip-text text-transparent font-semibold`}>
                      {category.name}
                    </span>
                  </CardTitle>
                </CardHeader>

                <CardContent className="space-y-6 relative z-10">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      variants={skillItemVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                      className="group/skill"
                    >
                      <div className="flex justify-between items-center mb-3">
                        <span className="font-medium text-foreground group-hover/skill:text-foreground transition-colors flex items-center gap-2">
                          <motion.div
                            className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
                            animate={{
                              scale: [1, 1.2, 1],
                              opacity: [0.5, 1, 0.5],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              delay: skillIndex * 0.3,
                            }}
                          />
                          {skill.name}
                        </span>
                        <motion.span
                          className={`text-sm font-semibold bg-gradient-to-r ${category.gradient} bg-clip-text text-transparent`}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.05 + 0.2 }}
                        >
                          {skill.level}%
                        </motion.span>
                      </div>
                      
                      {/* Custom animated progress bar */}
                      <div className="relative">
                        <div className="h-2 bg-muted rounded-full overflow-hidden">
                          <motion.div
                            className={`h-full bg-gradient-to-r ${category.gradient} rounded-full relative`}
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ 
                              duration: 1.5, 
                              delay: categoryIndex * 0.1 + skillIndex * 0.1 + 0.3,
                              ease: "easeOut"
                            }}
                          >
                            {/* Animated shine effect */}
                            <motion.div
                              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                              animate={{
                                x: ['-100%', '100%'],
                              }}
                              transition={{
                                duration: 2,
                                repeat: Infinity,
                                delay: categoryIndex * 0.5 + skillIndex * 0.2,
                                ease: "easeInOut",
                              }}
                            />
                          </motion.div>
                        </div>
                        
                        {/* Skill level indicator */}
                        <motion.div
                          className="absolute -top-1 bg-white rounded-full w-4 h-4 shadow-md border-2 border-background"
                          style={{ left: `${skill.level}%` }}
                          initial={{ left: '0%', opacity: 0 }}
                          whileInView={{ left: `${skill.level}%`, opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ 
                            duration: 1.5, 
                            delay: categoryIndex * 0.1 + skillIndex * 0.1 + 0.3,
                            ease: "easeOut"
                          }}
                        >
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${category.gradient} absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2`} />
                        </motion.div>
                      </div>
                    </motion.div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Floating Skill Icons */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
            style={{
              left: `${10 + i * 15}%`,
              top: `${15 + (i % 3) * 25}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 2, 1],
            }}
            transition={{
              duration: 3 + i * 0.3,
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