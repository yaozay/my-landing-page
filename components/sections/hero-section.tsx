"use client"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Users } from "lucide-react"
import { useEffect, useState } from "react"

export default function HeroSection() {
  const [visitorCount, setVisitorCount] = useState(0)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Get current visitor count from localStorage
    const currentCount = localStorage.getItem('visitorCount')
    const hasVisited = sessionStorage.getItem('hasVisited')
    
    if (!hasVisited) {
      // New visitor - increment count
      const newCount = currentCount ? parseInt(currentCount) + 1 : 1
      localStorage.setItem('visitorCount', newCount.toString())
      sessionStorage.setItem('hasVisited', 'true')
      setVisitorCount(newCount)
    } else {
      // Returning visitor in same session - just show count
      setVisitorCount(currentCount ? parseInt(currentCount) : 1)
    }
    
    setIsLoading(false)
  }, [])

  return (
    <section id="hero" className="container py-24 md:py-32">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <div className="space-y-2">
            <p className="text-lg text-muted-foreground">Hi, my name is</p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter">
              <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent animate-gradient-x bg-[length:200%_200%]">
                Yahya Ozay
              </span>
            </h1>
          </div>
          <h2 className="text-2xl md:text-3xl font-medium text-primary">
            Computer Science Student & Aspiring Software Engineer
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl">
            I build elegant, efficient, and scalable web applications, transforming complex problems into beautiful,
            intuitive digital experiences.
          </p>
          
          {/* Visitor Counter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex items-center gap-3 pt-2"
          >
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20">
              <Users className="h-4 w-4 text-purple-600" />
              <span className="text-sm font-medium">
                {isLoading ? (
                  <span className="animate-pulse">Loading...</span>
                ) : (
                  <>
                    <span className="text-muted-foreground">You are my visitor number: </span>
                    <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent font-bold">
                      {visitorCount.toLocaleString()}
                    </span>
                  </>
                )}
              </span>
            </div>
          </motion.div>

          <div className="flex gap-4 pt-4">
            <Button asChild size="lg" className="group">
              <Link href="#projects">
                View My Work <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="#contact">Get in Touch</Link>
            </Button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center"
        >
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-cyan-400 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
            <Image
              src="/yahya.heic"
              alt="Yahya Ozay"
              width={350}
              height={350}
              className="rounded-full object-cover border-4 border-background shadow-lg relative"
            />
          </div>
        </motion.div>
      </div>
      <style jsx>{`
        @keyframes gradient-x {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        .animate-gradient-x {
          animation: gradient-x 3s ease infinite;
        }
      `}</style>
    </section>
  )
}