import React from 'react';

const EducationItem = ({degree, degreeName, universityName, gpa}) => {
  return (
    <div className='flex flex-col gap-3 border-y-4 border-custom-green px-5 py-10 rounded-lg'>
      <h3 className='text-white text-5xl font-bold'>{degree}</h3>
      <p className='text-xl font-medium'><span className='text-white font-bold pr-2'>Degree:</span> {degreeName}</p>
      <p className='text-xl font-medium'><span className='text-white font-bold pr-2'>University:</span> {universityName}</p>
      <p className='text-xl font-medium'><span className='text-white font-bold pr-2'>GPA:</span> {gpa}</p>
    </div>
  )
}

export default EducationItem;