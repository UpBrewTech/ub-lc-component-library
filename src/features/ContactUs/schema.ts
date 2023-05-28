import { z } from "zod";

export const contactUsSchema = z.object({
  body: z.string().min(1, "Message is required"),
  title: z.string().min(1, "Title is required"),
  email: z.string().min(1, "Email is required"),
  name: z.string().min(1, "Name is required"),
});

export type ContactUsFormData = z.infer<typeof contactUsSchema>;
