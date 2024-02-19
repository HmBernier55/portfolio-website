import React from 'react';

import { ContactForm } from './index';

const Contact = () => {
  return (
    <div className='py-20 flex justify-between border-b border-custom-gray'>
      <div className='flex flex-col max-w-[50%]'>
        <h2 className='text-white text-[86px] font-bold'>Contact</h2>
        <p className='text-custom-gray text-lg font-medium'>If you would like to get in contact with me, please feel free to send me a message, and I will get back to you as soon as possible!</p>
      </div>
      <ContactForm />
    </div>
  )
}

export default Contact;