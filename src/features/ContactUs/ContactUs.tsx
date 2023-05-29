import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ContactUsForm } from './ContactUsForm';

const client = new QueryClient();

const ContactUs = () => {
  return (
    <QueryClientProvider client={client}>
      <ContactUsForm />
    </QueryClientProvider>
  );
};

export default ContactUs;
