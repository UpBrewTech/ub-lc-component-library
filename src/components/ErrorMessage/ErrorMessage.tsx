import { FieldError } from 'react-hook-form';

interface Props {
  error?: FieldError;
}

export const ErrorMessage = ({ error }: Props) => {
  if (!error) {
    return null;
  }

  return <p className='text-error text-sm'>{error.message}</p>;
};
