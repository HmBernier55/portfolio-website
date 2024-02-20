import React from 'react';

import ProfilePic from '../assets/profile-pic.jpg';
import Resume from '../assets/Hunter-Bernier-Resume.pdf';

const Introduction = () => {
  return (
    <div className='flex flex-col gap-20 xl:flex-row items-center justify-between mb-28'>
      <div className='flex flex-col gap-11 xl:max-w-[50%] order-2 xl:order-1'>
        <h1 className='text-white text-6xl xl:text-[86px] font-bold leading-none tracking-tight text-center xl:text-left'>Nice to meet you! I'm <span className='underline decoration-custom-green underline-offset-8'>Hunter Bernier</span>.</h1>
        <p className='text-custom-gray text-medium xl:text-lg font-medium text-center xl:text-left'>Based in Birmingham, AL, I'm a self-taught front-end developer working my way to becoming full-stack. I'm hard-working and self-motivated and feel that I would make a great fit for any team.</p>
        <a
          className='w-fit self-center xl:self-start text-white font-bold tracking-[2px] border-solid border-b-2 border-custom-green py-2 transition ease-in-out duration-300 hover:text-custom-green hover:scale-110'
          href={Resume}
          download='Hunter-Bernier-Resume'
        >DOWNLOAD RESUME</a>
      </div>
      <img className='w-full xl:w-[40%] rounded-full order-1 xl:order-2' src={ProfilePic} alt="headshot" />
    </div>
  )
}

export default Introduction;