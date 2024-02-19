import React from 'react';

import { ExperienceItem } from './index';

const Experience = () => {
  return (
    <div className='pt-20 border-t border-white grid grid-cols-3 gap-14'>
      <ExperienceItem
        name="Matlab"
        experience="7 Years"
      />
      <ExperienceItem
        name="Python"
        experience="2 Years"
      />
      <ExperienceItem
        name="Git"
        experience="2 Years"
      />
      <ExperienceItem
        name="JavaScript"
        experience="1.5 Years"
      />
      <ExperienceItem
        name="HTML"
        experience="1.5 Years"
      />
      <ExperienceItem
        name="CSS"
        experience="1.5 Years"
      />
      <ExperienceItem
        name="React"
        experience="0.5 Years"
      />
      <ExperienceItem
        name="Django"
        experience="0.5 Years"
      />
      <ExperienceItem
        name="Tailwind"
        experience="2 Months"
      />
    </div>
  )
}

export default Experience;