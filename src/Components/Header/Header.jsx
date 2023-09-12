'use client'
import Image from 'next/image'
import React, { use, useEffect, useState } from 'react';
import logo from '../../assets/logo.png'
import { VscListFilter } from "react-icons/vsc";
import MobileNavList from './MobileNavList';
import LargeNavlinks from './LargeNavlinks';
import Link from 'next/link';
// import { useGlobalContext } from '../context/contextapi';


const Header = () => {
    const [istoggle, setIsToggle] = useState(false)
    const [isfix, setIsFix]= useState(false)
    // const {isfix, setIsFix} = useGlobalContext();


       

    useEffect(()=>{
        const Fixed = () => {

            if(window.scrollY > 650){
                setIsFix(true);
            }
            if(window.scrollY < 650){
                setIsFix(false)
            }
            else {
                setIsFix(true)
            }

        }
        window.addEventListener('scroll', Fixed)
        return ()=> window.removeEventListener('scroll', Fixed)

    }, [isfix])



    useEffect(()=>{
        istoggle ? document.body.style.overflow = "hidden" : document.body.style.overflow = "auto"
    })
    
  return (
    <header className={` ${isfix ? 'fixed top-0 left-0 transition-all duration-500 ease-linear' : null} w-full h-[12vh] bg-primaryColor z-50`}>

        <nav className=' w-[90%] m-auto'>
            <div className=' flex items-center justify-between h-[12vh]'>
                <div  className=' flex items-center justify-center gap-3 cursor-pointer S768:gap-4 z-20'>
                    <Link href='/' className=' pt-1'>
                        <Image src={logo} width={2000} height={2000} priority alt='logo' className=' w-[14rem] object-contain ' />
                    </Link>
                    
                </div>

                {/* Large Screen  Nav List Components */}

                <div className='hidden S768:block z-50'>
                    <LargeNavlinks />
                </div>

                {/* End Large Screen  Nav List Components */}


                {/* Menu Icon */}

                <div className=' text-[3.6rem] font-medium cursor-pointer text-white S768:hidden z-50' onClick={()=> setIsToggle(true)}>
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