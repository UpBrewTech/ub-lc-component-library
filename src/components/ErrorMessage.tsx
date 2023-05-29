import React from 'react';
interface Props {
  error?: any;
}

export const ErrorMessage = ({ error }: Props) => {
  if (!error) {
    return null;
  }

  return <p className='text-error text-sm'>{error.message}</p>;
};
