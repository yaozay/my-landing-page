"use server"

import { z } from "zod"

const contactSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Invalid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
})

export async function submitContactForm(prevState: any, formData: FormData) {
  const validatedFields = contactSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  })

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "error",
    }
  }

  // Here you would typically send an email or save to a database
  // For this demo, we'll just log it to the console.
  console.log("Form submitted successfully:")
  console.log(validatedFields.data)

  // Simulate a delay
  await new Promise((resolve) => setTimeout(resolve, 1000))

  return { message: "success", errors: {} }
}
