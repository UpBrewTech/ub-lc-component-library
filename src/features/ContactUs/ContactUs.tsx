import { useForm } from 'react-hook-form';
import { ErrorMessage } from '../../components/ErrorMessage';
import { ContactUsConfirmation } from './ContactUsConfirmation';
import { ContactUsFormData, contactUsSchema } from '.';
import { useMutation } from 'react-query';
import { sendMessage } from './sendMessage';
import { zodResolver } from '@hookform/resolvers/zod';

export const ContactUs = () => {
  const { mutate, isLoading, isError, isSuccess } = useMutation({
    mutationFn: sendMessage,
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactUsFormData>({
    resolver: zodResolver(contactUsSchema),
  });

  const onSubmit = (data: ContactUsFormData) => {
    mutate(data);
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
            An error occured, please try again later.
          </div>
        )}
        <form className='space-y-4' onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label htmlFor='name' className='block mb-2'>
              Name
            </label>
            <input
              type='text'
              id='name'
              className='input input-bordered w-full'
              placeholder='John Smith'
              {...register('name')}
            />
            <ErrorMessage error={errors.name} />
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
              {...register('email')}
            />
            <ErrorMessage error={errors.email} />
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
              {...register('title')}
            />
            <ErrorMessage error={errors.title} />
          </div>
          <div>
            <label htmlFor='message' className='block mb-2'>
              Message
            </label>
            <textarea
              id='message'
              className='textarea textarea-bordered w-full'
              placeholder='I would like to know more about your product...'
              rows={5}
              maxLength={250}
              {...register('body')}
            />
            <ErrorMessage error={errors.body} />
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
