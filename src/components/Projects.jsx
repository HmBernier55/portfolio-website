import React from 'react';
import { ProjectItem } from './index';
import GymWebsite from '../assets/reflex-fitness.png';
import AudioWebsite from '../assets/audio-store.png';

const Projects = () => {
  return (
    <div className='flex flex-col mt-20 gap-14 xl:gap-20 pb-36 border-solid border-b border-x-0 border-t-0 border-custom-gray'>
      <h2 className='text-white text-6xl xl:text-7xl font-bold tracking-tight'>Projects</h2>
      <div className='grid xl:grid-cols-2 gap-10'>
        <ProjectItem
          websiteURL='https://reflex-gym-site.netlify.app/'
          codeURL='https://github.com/HmBernier55/gym-site'
          image={GymWebsite}
          name='Gym Website'
          languagesUsed={['React', 'JS', 'HTML', 'Tailwind', 'React-Router-DOM']}
        />
        <ProjectItem
          websiteURL='https://audio-store.netlify.app/'
          codeURL='https://github.com/HmBernier55/audio-store'
          image={AudioWebsite}
          name='Audio Store Website'
          languagesUsed={['React', 'JS', 'HTML', 'Tailwind', 'React-Redux', 'Redux-Toolkit', 'React-Router-DOM']}
        />
      </div>
    </div>
  )
}

export default Projects;