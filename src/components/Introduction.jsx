import React from 'react';

import ProfilePic from '../assets/profile-pic.jpg';
import Resume from '../assets/Hunter-Bernier-Resume.pdf';

const Introduction = () => {
  return (
    <div className='flex items-center justify-between mb-28'>
      <div className='flex flex-col gap-11 max-w-[50%]'>
        <h1 className='text-white text-[86px] font-bold leading-none tracking-tight'>Nice to meet you! I'm <span className='underline decoration-custom-green underline-offset-8'>Hunter Bernier</span>.</h1>
        <p className='text-custom-gray text-lg font-medium'>Based in Birmingham, AL, I'm a self-taught front-end developer working my way to becoming full-stack. I'm hard-working and self-motivated and feel that I would make a great fit for any team.</p>
        <a
          className='w-fit text-white font-bold tracking-[2px] border-b-2 border-custom-green py-2 transition ease-in-out duration-300 hover:text-custom-green hover:scale-110'
          href={Resume}
          download='Hunter-Bernier-Resume'
        >DOWNLOAD RESUME</a>
      </div>
      <img className='w-[40%] rounded-full' src={ProfilePic} alt="headshot" />
    </div>
  )
}

export default Introduction;