import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

import GreenCheckMark from '../assets/green-check-mark.svg';

const ContactForm = () => {

  const [confirmation, setConfirmation] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_3qhqu8d', 'template_rc5ma0q', form.current, {
        publicKey: 'sBBFGAIhCbTZc-4wk',
      })
      .then(
        () => {
          console.log('SUCCESS');
          e.target.reset();
          setConfirmation(true);
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div className='xl:w-[35%] flex'>
      {!confirmation &&
        <form ref={form} onSubmit={sendEmail} className='flex flex-col gap-8 w-full'>
          <input
            className='h-10 bg-transparent border-solid border-x-0 border-t-0 border-b border-custom-gray outline-0 outline-transparent text-white indent-4 focus:border-custom-green'
            type="text"
            name="user_name"
            placeholder='NAME'
            required
          />
          <input
            className='h-10 bg-transparent border-solid border-x-0 border-t-0 border-b border-custom-gray outline-0 outline-transparent text-white indent-4 focus:border-custom-green'
            type="email"
            name="user_email"
            placeholder='EMAIL'
            required
          />
          <textarea
            className='h-28 bg-transparent border-solid border-x-0 border-t-0 border-b border-custom-gray outline-0 outline-transparent text-white indent-4 focus:border-custom-green'
            name="message"
            placeholder='MESSAGE'
            required
          />
          <button
            className='w-fit self-end text-white font-bold tracking-[2px] border-solid border-b-2 border-x-0 border-t-0 border-custom-green py-2 transition ease-in-out duration-300 hover:text-custom-green hover:scale-110'
            type="submit"
          >
            SEND MESSAGE
          </button>
        </form>
      }
      {confirmation &&
        <div className='flex flex-col'>
          <div className='flex items-center gap-10'>
            <img className='h-20 w-20' src={GreenCheckMark} alt="check mark" />
            <p className='text-white text-3xl font-bold'>Thanks for reaching out!</p>
          </div>
          <button
            className='w-fit self-end text-white font-bold tracking-[2px] border-b-2 border-custom-green py-2 transition ease-in-out duration-300 hover:text-custom-green hover:scale-110'
            onClick={() => setConfirmation(false)}
          >
            SEND ANOTHER MESSAGE
          </button>
        </div>
      }
    </div>
  )
}

export default ContactForm;