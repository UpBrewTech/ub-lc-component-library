import { ContactUsFormData } from ".";

export const sendMessage = async (formData: ContactUsFormData) => {
  const response = await fetch("/api/contact_us", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });

  if (!response.ok) {
    throw new Error("An error occurred while sending message.");
  }

  return response.json();
};
