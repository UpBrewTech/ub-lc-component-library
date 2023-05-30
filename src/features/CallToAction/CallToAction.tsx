import React from 'react';

interface Props {
  title: string
  subtitle?: string
  buttonText?: string
  buttonLink?: string
}

export const CallToAction = ({ title, subtitle, buttonText, buttonLink }: Props) => { 
  return <div className='flex w-full items-center justify-center h-96 bg-white'>
    <div className='text-center text-black'>
      <h2 className='text-4xl font-bold mb-4'>{title}</h2>
      {subtitle ? <p>{subtitle}</p> : ""}
      {buttonText ? <a href={buttonLink} className="btn mt-4">{buttonText}</a> : ""}
    </div>
  </div>
}