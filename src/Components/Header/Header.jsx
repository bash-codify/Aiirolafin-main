'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react';
import logo from '../../assets/logo.png'
import { VscListFilter } from "react-icons/vsc";
import MobileNavList from './MobileNavList';
import LargeNavlinks from './LargeNavlinks';


const Header = () => {
    const [istoggle, setIsToggle] = useState(false)

    useEffect(()=>{
        istoggle ? document.body.style.overflow = "hidden" : document.body.style.overflow = "auto"
    })
    
  return (
    <header className=' fixed top-0 left-0 w-full h-h10 bg-primaryColor z-50'>

        <nav className=' w-w90 m-auto'>
            <div className=' flex items-center justify-between h-h10'>
                <div  className=' flex items-center justify-center gap-3 cursor-pointer S768:gap-4 z-20'>
                    <div>
                        <Image src={logo} width={2000} height={2000} alt='logo' className=' w-7 S768:w-9 ' />
                    </div>
                    <div>
                        <h1 className=' font-medium text-[1.16rem] tracking-wide text-white S768:text-[1.25rem] '>
                            Aiirolafin
                        </h1>
                    </div>
                </div>

                {/* Large Screen  Nav List Components */}

                <div className='hidden S768:block'>
                    <LargeNavlinks />
                </div>

                {/* End Large Screen  Nav List Components */}


                {/* Menu Icon */}

                <div className=' text-[2.2rem] font-medium cursor-pointer text-white S768:hidden' onClick={()=> setIsToggle(true)}>
                   <VscListFilter/>
                </div>

                 {/* End Menu Icon */}

                {/* Mobile Nav List Components */}

                

                    <div className= {` ${istoggle ? ' translate-x-0 transition-all duration-500 delay-100 ease-linear' : ' translate-x-full transition-all duration-500 delay-100 ease-linear'} fixed top-0 right-0 left-0 w-full min-h-screen bg-neutral-400/50 S768:hidden z-50`} >
                        <MobileNavList istoggle={istoggle} setIsToggle={setIsToggle} />
                    </div>
                

                {/* End Mobile Nav List Components */}

            </div>
        </nav>
        
    </header>
  )
}

export default Header