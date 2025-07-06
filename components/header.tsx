"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { FaGithub, FaLinkedin } from "react-icons/fa" 
import Link from 'next/link'

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
]

export default function Header() {
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="sticky top-4 z-50"
    >
      <div className="container h-16 flex items-center justify-between rounded-full bg-background/50 backdrop-blur-lg border border-border/30 shadow-lg">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <span className="font-bold text-lg bg-clip-text text-transparent bg-gradient-to-r from-primary to-cyan-400">
            Yahya Ozay
          </span>
        </Link>
        <div className="flex items-center space-x-4">
          {/* GitHub Link */}
          <a
            href="https://github.com/yaozay"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl text-muted-foreground hover:text-primary transition-colors"
          >
            <FaGithub />
          </a>
          {/* LinkedIn Link */}
          <a
            href="https://linkedin.com/in/yahyaozay"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl text-muted-foreground hover:text-primary transition-colors"
          >
            <FaLinkedin />
          </a>
          {/* Download Résumé Button */}
          <Button asChild className="rounded-full shadow-lg shadow-primary/20">
            <a href="/resume.pdf" download>
              Download Résumé
            </a>
          </Button>
        </div>
      </div>
    </motion.header>
  )
}