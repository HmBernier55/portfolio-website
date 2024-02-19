import React from 'react';

const ExperienceItem = ({name, experience}) => {
  return (
    <div className='flex flex-col gap-3'>
      <h3 className='text-white text-5xl font-bold'>{name}</h3>
      <p className='text-custom-gray text-lg font-medium'>{`${experience} Experience`}</p>
    </div>
  )
}

export default ExperienceItem;