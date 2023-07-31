import React from 'react'
import logo from '../../assets/logo.png'
import {links} from '../Header/navlinks'
import Link from 'next/link'
import Image from 'next/image'
import { BsLinkedin, BsTwitter } from 'react-icons/bs'
import { FaInstagramSquare } from 'react-icons/fa'


const Footer = () => {
  return (
    <footer className=' w-full min-h-[50vh] bg-primaryColor pb-8'>
      
      <div className=' w-[90%] S820:w-[85%] S1024:w-[60%] m-auto'>

        <div  className=' flex items-center justify-center cursor-pointer'>
          <div className=' pt-1'>
              <Image src={logo} width={2000} height={2000} priority alt='logo' className=' w-[14rem] object-contain ' />
          </div>
                  
        </div>

        <div className=' flex items-center justify-between text-white'>

          <div className=' grid gap-4 text-[1.6rem]'>
            {
              links.map((item, index)=>{
                const {link, path} = item;
                return (
                  <div className=' ' key={index}>

                    <Link href={path}>

                      {
                        link
                      }

                    </Link>
                  </div>
                )
              })
            }
            
          </div>

          <div className=' flex flex-col gap-4 items-center justify-start text-[1.6rem] '>
            
            <Link href=''>
              Terms & Conditions
            </Link>
            <Link href=''>
              Privacy & Policy
            </Link>
            <div className=' grid gap-8'>
              <a href="https://www.linkedin.com/company/aiirolafin-real-estate-company/" className=' flex items-center justify-start gap-5'>
                <BsLinkedin/> Linkedin
              </a>
              <a href="https://twitter.com/aiirolafin?s=20" className=' flex items-center justify-start gap-5'>
                <BsTwitter/> Twitter
              </a>
              <a href="https://instagram.com/aiirolafin?igshid=MzRlODBiNWFlZA==" className=' flex items-center justify-start gap-5'>
                <FaInstagramSquare/> Instagram
              </a>
            </div>
            
          </div>

        </div>
        <div className=' w-full flex items-center justify-center cursor-pointer text-[1.3rem] S768:text-[1.6rem] mt-8 text-white italic'>
          <p> <span className=' text-[1.8rem]'>&copy;</span> Aiirolafin - 2023. All rights reserved. Web Design by Bash-Tech</p>
        </div>
      </div>

    </footer>
  )
}

export default Footer