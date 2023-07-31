import Image from "next/image"
import Link from "next/link"
import { urlForImage } from "../../sanity/lib/image"


export const PortableTextComponent = {

    types:{
        image:({value})=>{
            return(
                <div className=" w-full flex items-center justify-center">
                    <Image src={urlForImage(value).url()} width={2000} height={2000} priority alt='content image' className=" w-[50rem] h-[30rem] object-contain aspect-auto " />
                </div>
            );
        },
    },
    list:{
        bullet:({cildren})=>(
            <ul>
                {cildren}
            </ul>
        ),
        number:({cildren})=>(
            <ol>
                {cildren}
            </ol>
        )
    },
    block:{
        h1:({children})=>(
            <h1 className=" text-[3.2rem] font-semibold">
                {children}
            </h1>
        ),
        h2:({children})=>(
            <h2 className=" text-[2.8rem] font-semibold">
                {children}
            </h2>
        ),
        h3:({children})=>(
            <h3 className=" text-[2.6rem] font-semibold">
                {children}
            </h3>
        ),
        h4:({children})=>(
            <h4 className=" text-[2.2rem] font-semibold">
                {children}
            </h4>
        ),
        h5:({children})=>(
            <h5 className=" text-[1.6rem] font-semibold">
                {children}
            </h5>
        ),
        h6:({children})=>(
            <h6 className=" text-[1.2rem] font-semibold">
                {children}
            </h6>
        ),
        p:({children})=>(
            <p className=" text-[1.6rem] font-medium">
                {children}
            </p>
        ),
        blockquote:({children})=>(
            <blockquote>
                {children}
            </blockquote>
        ),
    },
    marks:{
        link:({children, value})=>{
            const rel = !value.href.startsWith('/') ? 'noreferrer noopener' : undefined;

            return (
                <Link href={value.href} rel={rel} >
                    {children}
                </Link>
            )
        }
    }
}