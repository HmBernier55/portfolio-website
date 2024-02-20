import React from 'react';

import { ContactForm } from './index';

const Contact = () => {
  return (
    <div className='py-20 flex flex-col xl:flex-row justify-between border-solid border-x-0 border-t-0 border-b border-custom-gray gap-20 '>
      <div className='flex flex-col xl:max-w-[50%] gap-8'>
        <h2 className='text-white text-6xl xl:text-7xl font-bold'>Contact</h2>
        <p className='text-custom-gray text-medium xl:text-lg font-medium'>If you would like to get in contact with me, please feel free to send me a message, and I will get back to you as soon as possible!</p>
      </div>
      <ContactForm />
    </div>
  )
}

export default Contact;