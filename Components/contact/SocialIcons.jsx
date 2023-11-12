import React from 'react'
import {BsFacebook} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs';
import {FaLinkedin} from 'react-icons/fa';
import {SiGmail} from 'react-icons/si'

    const SocialIcons = () => {
        return (
          <div className='flex justify-center items-center gap-2'>
             <a href='https://www.facebook.com/profile.php?id=100023706070669' target='_blank' className='text-3xl hover:opacity-70' >
              <BsFacebook/>
              </a> 
             <a href='https://github.com/mona09209?tab=following' target='_blank' className='text-3xl hover:opacity-70'>
              <BsGithub/>
              </a>
             <a href='https://www.linkedin.com/in/mona-mohamed-525862204' target='_blank' className='text-3xl hover:opacity-70'>
              <FaLinkedin/>
              </a>
             <a target='_blank' href='milto:monamohamed729222@gmail.com' className='text-3xl hover:opacity-70'>
              <SiGmail/>
              </a>
          </div>
        )
      }

export default SocialIcons