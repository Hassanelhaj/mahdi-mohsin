import React from 'react'
import {BsFacebook} from 'react-icons/bs'
import { FaBehance } from "react-icons/fa";
import {FaLinkedin} from 'react-icons/fa';
import {SiGmail} from 'react-icons/si'

    const SocialIcons = () => {
        return (
          <div className='flex justify-center items-center gap-2'>
             <a href='https://www.facebook.com/profile.php?id=100069395312682' target='_blank' className='text-3xl hover:opacity-70' >
              <BsFacebook/>
              </a> 
             <a href='https://www.behance.net/mahdimuhsin' target='_blank' className='text-3xl hover:opacity-70'>
              <FaBehance />
              </a>
             {/* <a href='https://www.linkedin.com/in/mona-mohamed-525862204' target='_blank' className='text-3xl hover:opacity-70'>
              <FaLinkedin/>
              </a> */}
             <a target='_blank' href='milto:mahdimuhsin064@gmail.com' className='text-3xl hover:opacity-70'>
              <SiGmail/>
              </a>
          </div>
        )
      }

export default SocialIcons