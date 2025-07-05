"use client"

import { motion } from "framer-motion"
import { experience, education } from "@/lib/data"
import { Briefcase, GraduationCap } from "lucide-react"

export default function ExperienceSection() {
  return (
    <section id="experience" className="container py-16">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-bold text-center mb-12">My Journey</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3">
              <Briefcase className="h-6 w-6 text-primary" />
              Experience
            </h3>
            <div className="relative border-l-2 border-primary/30 pl-8 space-y-10">
              {experience.map((item, index) => (
                <div key={index} className="relative">
                  <div className="absolute -left-[42px] top-1 h-5 w-5 rounded-full bg-primary border-4 border-background" />
                  <p className="font-semibold text-lg">{item.role}</p>
                  <p className="text-sm text-muted-foreground">
                    {item.company} | {item.period}
                  </p>
                  <ul className="mt-2 list-disc list-inside text-muted-foreground space-y-1 text-sm">
                    {item.achievements.map((ach, i) => (
                      <li key={i}>{ach}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3">
              <GraduationCap className="h-6 w-6 text-primary" />
              Education
            </h3>
            <div className="relative border-l-2 border-primary/30 pl-8 space-y-10">
              {education.map((item, index) => (
                <div key={index} className="relative">
                  <div className="absolute -left-[42px] top-1 h-5 w-5 rounded-full bg-primary border-4 border-background" />
                  <p className="font-semibold text-lg">{item.degree}</p>
                  <p className="text-sm text-muted-foreground">
                    {item.institution} | {item.period}
                  </p>
                  <p className="mt-2 text-muted-foreground text-sm">{item.details}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
