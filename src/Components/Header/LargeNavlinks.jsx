import Link from 'next/link'
import React from 'react'
import {links} from './navlinks'
import { usePathname } from 'next/navigation'

import './header.css'

const LargeNavlinks = () => {

    const pathName = usePathname()

    
  return (

    <section >

        <div className=' flex items-center justify-center gap-8 h-h85 text-[1.1rem] S768:text-[.88rem] tracking-wider font-normal ' >

            {
                links.map((item, i) =>{

                    return(
                        <div className= {` ${ pathName === item.path ? 'active' : null} links`} key={i}>

                         <Link href={''}>
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