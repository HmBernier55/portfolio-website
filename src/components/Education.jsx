import React from 'react';

import { EducationItem } from './index';

const Education = () => {
  return (
    <div className='flex flex-col gap-20 pb-36 pt-20'>
      <h2 className='text-white text-6xl xl:text-7xl font-bold tracking-tight'>Education</h2>
      <div className='text-custom-gray grid xl:grid-cols-2 gap-20'>
        <EducationItem
          degree='Bachelor of Engineering'
          degreeName='Mechanical Engineering'
          universityName='Auburn University'
          gpa='3.96'
        />
        <EducationItem
          degree='Master of Science'
          degreeName='Biomedical Engineering'
          universityName='Duke University'
          gpa='3.88'
        />
      </div>
    </div>
  )
}

export default Education;