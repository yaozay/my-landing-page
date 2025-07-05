"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { skills } from "@/lib/data"
import { Code, Database, Server } from "lucide-react"

const skillCategories = [
  { name: "Languages", icon: <Code className="h-6 w-6" />, skills: skills.languages },
  { name: "Frameworks & Libraries", icon: <Server className="h-6 w-6" />, skills: skills.frameworks },
  { name: "Databases & Tools", icon: <Database className="h-6 w-6" />, skills: skills.tools },
]

export default function SkillsSection() {
  return (
    <section id="skills" className="container py-16">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-bold text-center mb-12">My Skills</h2>
        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <Card key={category.name}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  {category.icon}
                  {category.name}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} aria-label={`${skill.name} proficiency`} />
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
