import { z } from 'zod';

export const contactFormSchema = z.object({
  fullName: z.string().min(2, { message: 'Full name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid work email address.' }),
  phone: z.string().min(7, { message: 'Please enter a valid phone number with country code.' }),
  company: z.string().min(2, { message: 'Company name is required.' }),
  service: z.string().min(1, { message: 'Please select a primary service of interest.' }),
  budget: z.string().optional(),
  message: z.string().min(15, { message: 'Please describe your project scope (at least 15 characters).' }),
  consent: z.literal(true, {
    errorMap: () => ({ message: 'You must agree to the privacy policy to proceed.' }),
  }),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

export const jobApplicationSchema = z.object({
  fullName: z.string().min(2, { message: 'Full name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  phone: z.string().min(7, { message: 'Please enter a valid phone number.' }),
  role: z.string().min(1, { message: 'Position is required.' }),
  experience: z.string().min(1, { message: 'Please select your years of experience.' }),
  portfolioUrl: z.string().url({ message: 'Please enter a valid URL (e.g. LinkedIn or GitHub).' }).or(z.literal('')),
  coverNote: z.string().min(20, { message: 'Please provide a brief note on why you are interested (at least 20 characters).' }),
  consent: z.literal(true, {
    errorMap: () => ({ message: 'You must confirm that your details are accurate.' }),
  }),
});

export type JobApplicationData = z.infer<typeof jobApplicationSchema>;

export const newsletterSchema = z.object({
  email: z.string().email({ message: 'Please enter a valid corporate email.' }),
});

export type NewsletterData = z.infer<typeof newsletterSchema>;
