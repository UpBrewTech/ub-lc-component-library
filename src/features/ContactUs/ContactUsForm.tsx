import React from 'react';
import { z } from 'zod';
import { ContactUsFormData, contactUsSchema } from './schema';
import { sendMessage } from './sendMessage';
import { ContactUsConfirmation } from './ContactUsConfirmation';

export const ContactUsForm = () => {
  const [formData, setFormData] = React.useState<ContactUsFormData>({
    name: '',
    email: '',
    title: '',
    body: '',
  });
  const [errors, setErrors] = React.useState<Partial<ContactUsFormData>>({});
  const [isLoading, setIsLoading] = React.useState(false);
  const [isError, setIsError] = React.useState(false);
  const [isSuccess, setIsSuccess] = React.useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [id]: value,
    }));

    // clear error on change
    setErrors(prevErrors => ({
      ...prevErrors,
      [id]: undefined,
    }));
  };

  const validateForm = () => {
    try {
      contactUsSchema.parse(formData);
      setErrors({});
      return true;
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors: any = {};
        error.errors.forEach(err => {
          if (err.path) {
            fieldErrors[err.path[0]] = err.message;
          }
        });
        setErrors(fieldErrors);
      }
      return false;
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (validateForm()) {
      setIsLoading(true);
      sendMessage(formData)
        .then(() => {
          setIsLoading(false);
          setIsSuccess(true);
        })
        .catch(() => {
          setIsLoading(false);
          setIsError(true);
        });
    }
  };

  if (isSuccess) {
    return <ContactUsConfirmation />;
  }

  return (
    <div className='bg-base-100'>
      <div className='max-w-lg mx-auto py-24 px-8'>
        <h2 className='text-2xl font-bold mb-4 text-primary'>Contact Us</h2>
        {isError && (
          <div className='text-error mb-4'>
            An error occurred, please try again later.
          </div>
        )}
        <form className='space-y-4' onSubmit={handleSubmit}>
          <div>
            <label htmlFor='name' className='block mb-2'>
              Name
            </label>
            <input
              type='text'
              id='name'
              className='input input-bordered w-full'
              placeholder='John Smith'
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && <div className='text-error'>{errors.name}</div>}
          </div>
          <div>
            <label htmlFor='email' className='block mb-2'>
              Email
            </label>
            <input
              type='email'
              id='email'
              className='input input-bordered w-full'
              placeholder='youremail@example.com'
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <div className='text-error'>{errors.email}</div>}
          </div>
          <div>
            <label htmlFor='title' className='block mb-2'>
              Title
            </label>
            <input
              type='text'
              id='title'
              className='input input-bordered w-full'
              placeholder='Quick question...'
              value={formData.title}
              onChange={handleChange}
            />
            {errors.title && <div className='text-error'>{errors.title}</div>}
          </div>
          <div>
            <label htmlFor='message' className='block mb-2'>
              Message
            </label>
            <textarea
              id='body'
              className='textarea textarea-bordered w-full'
              placeholder='I would like to know more about your product...'
              rows={5}
              maxLength={250}
              value={formData.body}
              onChange={handleChange}
            />
            {errors.body && <div className='text-error'>{errors.body}</div>}
          </div>
          <button
            disabled={isLoading}
            type='submit'
            className='btn btn-primary'
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
