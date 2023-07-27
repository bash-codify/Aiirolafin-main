import Link from 'next/link'
import React from 'react'
import {links} from './navlinks'
import { usePathname } from 'next/navigation'

import './header.css'

const LargeNavlinks = () => {

    const pathName = usePathname()

    
  return (

    <section >

        <div className=' flex items-center justify-center gap-8 h-0 S768:text-[1.5rem] S900:text-[1.6rem] tracking-wider font-normal ' >

            {
                links.map((item, i) =>{

                    return(
                        <div className= {` ${ pathName === item.path ? 'active' : null} links hover:tracking-widest hover:font-medium`} key={i}>

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

export default LargeNavlinks