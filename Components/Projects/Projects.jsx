import React from 'react'
import SubTitle from '../SubTitle'

import WebProjects from './WebProjects'
import MontageProjects from './MontageProjects'


const Projects = () => {
  return (
    <div className='container mx-auto flex flex-col justify-center 
    items-center gap-4' id='projects'>
      <SubTitle title={"projects"}/>
      <div className='flex flex-col justify-between items-center gap-4'>
  
        <WebProjects/>
        <MontageProjects/>
      </div>
    

    </div>
  )
}

export default Projects