"use server"

import { Resend } from 'resend'
import { z } from 'zod'

const resend = new Resend(process.env.RESEND_API_KEY)

const contactSchema = z.object({
  name: z.string().min(1, "Name is required").max(100),
  email: z.string().email("Invalid email address"),
  message: z.string().min(1, "Message is required").max(1000),
})

export async function submitContactForm(prevState: any, formData: FormData) {
  try {
    // Extract form data
    const name = formData.get('name') as string
    const email = formData.get('email') as string
    const message = formData.get('message') as string

    // Validate the data
    const validatedFields = contactSchema.safeParse({
      name,
      email,
      message,
    })

    if (!validatedFields.success) {
      return {
        message: "validation-error",
        errors: validatedFields.error.flatten().fieldErrors,
      }
    }

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>', // Use your verified domain
      to: ['yahyaozay1905@gmail.com'], // Replace with your email
      subject: `Portfolio Contact from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">New Contact Form Submission</h2>
          <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong></p>
            <p style="background: white; padding: 15px; border-radius: 4px; border-left: 4px solid #007bff;">
              ${message.replace(/\n/g, '<br>')}
            </p>
          </div>
          <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
          <p style="color: #666; font-size: 12px;">
            This email was sent from your portfolio contact form.
          </p>
        </div>
      `,
      replyTo: email, // This allows you to reply directly to the sender
    })

    if (error) {
      console.error('Email sending failed:', error)
      return {
        message: "error",
        errors: {},
      }
    }

    return {
      message: "success",
      errors: {},
    }
  } catch (error) {
    console.error('Contact form error:', error)
    return {
      message: "error",
      errors: {},
    }
  }
}