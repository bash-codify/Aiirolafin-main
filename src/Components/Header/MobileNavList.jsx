import Link from 'next/link'
import React from 'react'
import { VscClose } from 'react-icons/vsc'
import {links} from './navlinks';
import { usePathname } from 'next/navigation';

import './header.css';


const MobileNavList = ({istoggle, setIsToggle}) => {
   
    const pathName = usePathname()

  return (

    <section className= {`${istoggle ? ' translate-x-0 transition-all duration-500 delay-300 ease-linear' : ' translate-x-full transition-all duration-500 delay-500 ease-linear'}  fixed right-0 w-[26rem] min-h-screen bg-primaryColor z-50`}>

        <div className=' flex items-end justify-end mr-10 pt-10 text-[2.8rem] cursor-pointer text-white' onClick={()=> setIsToggle(false)}>
            <VscClose/>
        </div>

        <div className=' flex flex-col items-center justify-center gap-8 h-[85vh] text-[2rem] tracking-wide font-normal '>

            {
                links.map((item, i) =>{
                    return(
                        <div className= {` ${pathName === item.path ? 'active' : null} links hover:tracking-widest hover:font-medium`} key={i}>

                         <Link href={item.path}>
                            {item.link}
                        </Link>

                        </div>
                    )
                })
            }

        </div>
    </section>

  )
}

export default MobileNavList