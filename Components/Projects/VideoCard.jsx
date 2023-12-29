import Image from 'next/image'
import React from 'react'
import img from '../../public/placeholder.jpg'

const VideoCard = ({data}) => {
  return (
    <a
     target='_blank'
     href={`${data.source}`}
    >
       <Image className='w-[260px] h-[260px' src={img} />
    </a>
  )
}

export default VideoCard