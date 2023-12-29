import React from 'react'
import { montageProjects } from '../../Data'
import VideoCard from './VideoCard'
import SubTitle from '../SubTitle'

const MontageProjects = () => {
  return (
    <main className='flex flex-col justify-center items-center gap-4 pt-4'>
        <SubTitle title={"Video Editing projects"} />
    <div className='flex justify-center items-center gap-2 flex-wrap'>
        {montageProjects.map((vedio)=>{
            return <VideoCard key={vedio.id} data={vedio} />
        })}
    </div>
    </main>
  )
}

export default MontageProjects