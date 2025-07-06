"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useActionState, useEffect } from "react"
import { submitContactForm } from "@/app/actions"
import { useToast } from "@/components/ui/use-toast"
import { Label } from "@/components/ui/label"

interface FormErrors {
  name?: string[];
  email?: string[];
  message?: string[];
}

const initialState = {
  message: "",
  errors: {} as FormErrors,
}

export default function ContactSection() {
  const [state, formAction, isPending] = useActionState(submitContactForm, initialState)
  const { toast } = useToast()

  useEffect(() => {
    if (state.message === "success") {
      toast({
        title: "Thanks for your message!",
        description: "I'll reach out to you soon.",
        duration: 5000,
      })
    } else if (state.message === "error") {
      toast({
        title: "Uh oh! Something went wrong.",
        description: "There was a problem with your request. Please try again.",
        variant: "destructive",
      })
    }
  }, [state, toast])

  return (
    <section id="contact" className="container py-16">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-bold text-center mb-12">Get In Touch</h2>
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle>Contact Me</CardTitle>
          </CardHeader>
          <CardContent>
            <form action={formAction} className="space-y-4">
              <div>
                <Label htmlFor="name">Name</Label>
                <Input id="name" name="name" placeholder="Your Name" required />
                {state.errors?.name && <p className="text-sm text-red-500 mt-1">{state.errors.name}</p>}
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" name="email" type="email" placeholder="Your Email" required />
                {state.errors?.email && <p className="text-sm text-red-500 mt-1">{state.errors.email}</p>}
              </div>
              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" name="message" placeholder="Your Message" required />
                {state.errors?.message && <p className="text-sm text-red-500 mt-1">{state.errors.message}</p>}
              </div>
              <Button type="submit" className="w-full" disabled={isPending}>
                {isPending ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  )
}
