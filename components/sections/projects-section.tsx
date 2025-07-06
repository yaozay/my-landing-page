"use client"
import { motion } from "framer-motion"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { projects } from "@/lib/data"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Github, ExternalLink, Rocket, Code2, Palette, Zap } from "lucide-react"

export default function ProjectsSection() {
  return (
    <section id="projects" className="container py-24 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <motion.div
          className="absolute top-10 right-1/4 w-40 h-40 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 blur-xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-10 left-1/3 w-36 h-36 rounded-full bg-gradient-to-br from-purple-500 to-pink-600 blur-xl"
          animate={{
            scale: [1.3, 1, 1.3],
            opacity: [0.7, 0.3, 0.7],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/2 left-10 w-28 h-28 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 blur-xl"
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            duration: 3.5,
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
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <motion.div
            className="h-1 w-32 mx-auto rounded-full bg-gradient-to-r from-cyan-500 to-purple-500"
            initial={{ width: 0 }}
            whileInView={{ width: 128 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto"
          >
            A collection of projects that showcase my skills and passion for creating innovative solutions
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -8 }}
              className="group"
            >
              {/* Animated Border */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 opacity-0 group-hover:opacity-30 blur-sm transition-opacity duration-300" />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
              
              <Card className="h-full flex flex-col relative overflow-hidden bg-background/95 backdrop-blur-xl border border-white/10 shadow-2xl group-hover:shadow-3xl transition-all duration-300">
                <CardHeader className="p-0 relative">
                  <div className="aspect-video relative overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Floating project type icon */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                      className="absolute top-4 right-4 p-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 shadow-lg"
                    >
                      <Rocket className="w-4 h-4 text-white" />
                    </motion.div>
                  </div>
                </CardHeader>
                
                <div className="p-6 flex flex-col flex-grow">
                  <CardTitle className="mb-3 text-xl font-bold group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-600 group-hover:to-blue-600 transition-all duration-300">
                    {project.title}
                  </CardTitle>
                  
                  <CardContent className="p-0 flex-grow">
                    <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                      {project.description}
                    </p>
                    
                    {/* Animated tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, tagIndex) => (
                        <motion.div
                          key={tag}
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ 
                            duration: 0.3, 
                            delay: index * 0.1 + tagIndex * 0.05 + 0.5,
                            type: "spring",
                            stiffness: 200
                          }}
                          whileHover={{ scale: 1.05 }}
                        >
                          <Badge 
                            variant="outline" 
                            className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border-cyan-500/30 text-cyan-700 dark:text-cyan-300 hover:from-cyan-500/20 hover:to-blue-500/20 transition-all duration-300"
                          >
                            {tag}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                  
                  <CardFooter className="p-0 pt-6 flex justify-between gap-4">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1"
                    >
                      <Button 
                        asChild 
                        variant="outline" 
                        size="sm" 
                        className="w-full bg-gradient-to-r from-gray-500/10 to-slate-500/10 border-gray-500/30 hover:from-gray-500/20 hover:to-slate-500/20 transition-all duration-300"
                      >
                        <Link href={project.github} target="_blank" className="group/btn">
                          <Github className="h-4 w-4 mr-2 group-hover/btn:rotate-12 transition-transform" />
                          Source Code
                        </Link>
                      </Button>
                    </motion.div>
                    
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1"
                    >
                      <Button 
                        asChild 
                        size="sm" 
                        className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 shadow-lg hover:shadow-xl transition-all duration-300"
                      >
                        <Link href={project.liveDemo} target="_blank" className="group/btn">
                          <ExternalLink className="h-4 w-4 mr-2 group-hover/btn:rotate-12 transition-transform" />
                          Live Demo
                        </Link>
                      </Button>
                    </motion.div>
                  </CardFooter>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Animated Icons Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex justify-center gap-8 mt-16"
        >
          {[
            { Icon: Code2, color: "from-cyan-500 to-blue-500", delay: 0 },
            { Icon: Palette, color: "from-purple-500 to-pink-500", delay: 0.1 },
            { Icon: Zap, color: "from-yellow-500 to-orange-500", delay: 0.2 },
            { Icon: Rocket, color: "from-green-500 to-emerald-500", delay: 0.3 },
          ].map(({ Icon, color, delay }, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0, rotate: -180 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.6, 
                delay: delay + 0.6,
                type: "spring",
                stiffness: 200,
                damping: 12
              }}
              whileHover={{ 
                scale: 1.3, 
                rotate: [0, -15, 15, -15, 0],
                transition: { duration: 0.6 }
              }}
              className={`p-4 rounded-full bg-gradient-to-r ${color} shadow-lg cursor-pointer group`}
            >
              <Icon className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
            </motion.div>
          ))}
        </motion.div>

        {/* Floating Particles */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"
            style={{
              left: `${15 + i * 12}%`,
              top: `${25 + (i % 3) * 25}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.9, 0.3],
              scale: [1, 1.8, 1],
            }}
            transition={{
              duration: 4 + i * 0.3,
              repeat: Infinity,
              delay: i * 0.4,
              ease: "easeInOut",
            }}
          />
        ))}
      </motion.div>
    </section>
  )
}