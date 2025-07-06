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
import { Mail, Send, User, MessageCircle, Sparkles, Heart, Globe, Coffee } from "lucide-react"

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
    <section id="contact" className="container py-24 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <motion.div
          className="absolute top-16 left-1/4 w-36 h-36 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 blur-xl"
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 4.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-16 right-1/3 w-32 h-32 rounded-full bg-gradient-to-br from-violet-500 to-purple-600 blur-xl"
          animate={{
            scale: [1.4, 1, 1.4],
            opacity: [0.8, 0.3, 0.8],
          }}
          transition={{
            duration: 3.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/3 right-16 w-28 h-28 rounded-full bg-gradient-to-br from-rose-500 to-pink-600 blur-xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.4, 0.7, 0.4],
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
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-emerald-600 via-teal-600 to-purple-600 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <motion.div
            className="h-1 w-28 mx-auto rounded-full bg-gradient-to-r from-emerald-500 to-purple-500"
            initial={{ width: 0 }}
            whileInView={{ width: 112 }}
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
            Have a project in mind or just want to chat? I'd love to hear from you!
          </motion.p>
        </motion.div>

        {/* Main Contact Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-2xl mx-auto relative"
        >
          {/* Animated Border */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-emerald-500 via-teal-500 to-purple-500 opacity-20 blur-sm" />
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-emerald-500 via-teal-500 to-purple-500 opacity-30" />
          
          <Card className="relative bg-background/95 backdrop-blur-xl border border-white/10 shadow-2xl overflow-hidden">
            <CardHeader className="text-center pb-8">
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5, type: "spring", stiffness: 200 }}
                className="mx-auto mb-4 p-3 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 w-fit"
              >
                <Mail className="w-8 h-8 text-white" />
              </motion.div>
              <CardTitle className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                Contact Me
              </CardTitle>
              <p className="text-muted-foreground">
                Let's start a conversation about your next project
              </p>
            </CardHeader>
            
            <CardContent className="p-8">
              <form action={formAction} className="space-y-6">
                {/* Name Field */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  <Label htmlFor="name" className="flex items-center gap-2 text-sm font-medium mb-2">
                    <User className="w-4 h-4 text-emerald-500" />
                    Name
                  </Label>
                  <Input 
                    id="name" 
                    name="name" 
                    placeholder="Your Name" 
                    required 
                    className="bg-background/50 backdrop-blur-sm border-emerald-200/30 focus:border-emerald-500/50 focus:ring-emerald-500/20 transition-all duration-300"
                  />
                  {state.errors?.name && (
                    <motion.p 
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-sm text-red-500 mt-1"
                    >
                      {state.errors.name}
                    </motion.p>
                  )}
                </motion.div>

                {/* Email Field */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                >
                  <Label htmlFor="email" className="flex items-center gap-2 text-sm font-medium mb-2">
                    <Mail className="w-4 h-4 text-teal-500" />
                    Email
                  </Label>
                  <Input 
                    id="email" 
                    name="email" 
                    type="email" 
                    placeholder="your.email@example.com" 
                    required 
                    className="bg-background/50 backdrop-blur-sm border-teal-200/30 focus:border-teal-500/50 focus:ring-teal-500/20 transition-all duration-300"
                  />
                  {state.errors?.email && (
                    <motion.p 
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-sm text-red-500 mt-1"
                    >
                      {state.errors.email}
                    </motion.p>
                  )}
                </motion.div>

                {/* Message Field */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                >
                  <Label htmlFor="message" className="flex items-center gap-2 text-sm font-medium mb-2">
                    <MessageCircle className="w-4 h-4 text-purple-500" />
                    Message
                  </Label>
                  <Textarea 
                    id="message" 
                    name="message" 
                    placeholder="Tell me about your project or just say hello!" 
                    required 
                    rows={5}
                    className="bg-background/50 backdrop-blur-sm border-purple-200/30 focus:border-purple-500/50 focus:ring-purple-500/20 transition-all duration-300 resize-none"
                  />
                  {state.errors?.message && (
                    <motion.p 
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-sm text-red-500 mt-1"
                    >
                      {state.errors.message}
                    </motion.p>
                  )}
                </motion.div>

                {/* Submit Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.9 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 shadow-lg hover:shadow-xl transition-all duration-300 text-white font-medium py-3 group"
                    disabled={isPending}
                  >
                    {isPending ? (
                      <>
                        <motion.div
                          className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full mr-2"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                        Send Message
                      </>
                    )}
                  </Button>
                </motion.div>
              </form>
            </CardContent>
          </Card>
        </motion.div>

        {/* Animated Icons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex justify-center gap-6 mt-12"
        >
        
        </motion.div>

        {/* Floating Particles */}
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full"
            style={{
              left: `${10 + i * 9}%`,
              top: `${20 + (i % 4) * 20}%`,
            }}
            animate={{
              y: [0, -25, 0],
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.6, 1],
            }}
            transition={{
              duration: 3.5 + i * 0.3,
              repeat: Infinity,
              delay: i * 0.3,
              ease: "easeInOut",
            }}
          />
        ))}
      </motion.div>
    </section>
  )
}