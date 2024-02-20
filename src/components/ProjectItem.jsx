import React from 'react'

const ProjectItem = ({websiteURL, codeURL, image, name, languagesUsed}) => {
  return (
    <div className='flex flex-col gap-5'>
      <img src={image} alt={`${name} screenshot`} />
      <div className='flex flex-col gap-2'>
        <h4 className='text-white text-xl sm:text-2xl font-bold uppercase'>{name}</h4>
        <div className='flex gap-4 flex-wrap'>
          {languagesUsed.map((language, index) => (
            <p key={index} className='text-custom-gray text-medium sm:text-lg font-medium'>{language}</p>
          ))}
        </div>
        <div className='flex gap-5'>
          <a className='w-fit self-end text-white font-bold tracking-[2px] border-solid border-x-0 border-t-0 border-b-2 border-custom-green py-2 transition ease-in-out duration-300 hover:text-custom-green hover:scale-110' href={websiteURL} target='_blank'>VIEW PROJECT</a>
          <a className='w-fit self-end text-white font-bold tracking-[2px] border-solid border-x-0 border-t-0 border-b-2 border-custom-green py-2 transition ease-in-out duration-300 hover:text-custom-green hover:scale-110' href={codeURL} target='_blank'>VIEW CODE</a>
        </div>
      </div>
    </div>
  )
}

export default ProjectItem