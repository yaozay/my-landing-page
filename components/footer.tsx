import { ThemeToggle } from "@/components/theme-toggle"
import { Github, Linkedin } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="w-full border-t border-border/40">
      <div className="container py-6 flex items-center justify-between">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Yahya Ozay. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <Link href="https://github.com/yaozay" aria-label="GitHub" target="_blank">
            <Github className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors" />
          </Link>
          <Link href="https://linkedin.com/in/yahyaozay" aria-label="LinkedIn" target="_blank">
            <Linkedin className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors" />
          </Link>
          <ThemeToggle />
        </div>
      </div>
    </footer>
  )
}
