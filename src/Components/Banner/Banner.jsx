
import Imag from "next/image";


import SearchForm from "./SearchForm";
import { client } from "../../../sanity/lib/client";
import { urlForImage } from "../../../sanity/lib/image";

function getBanner(){
    
    
    const query = client.fetch(`*[_type == "banner" ]`)
    
    return query
    
}

export const Banner = async () => {

    const query = await getBanner()
    
  return (
    
    <section className=" w-full min-h-screen mt-[10vh]">
      <article >
        {
          query.map((item, index) => {
            const image = item.image;
            const desc = item.desc;
            const title = item.headerText
            
            
            return (
              <>
              <div className=" w-full" key={index}>
                <div className=" w-full ">
                  <Imag  src={urlForImage(image).url()} width={2000} height={2000} alt='banner' className=" w-full h-screen object-cover object-center relative -z-50" />
                </div>

                <div className=" absolute top-0 S768:left-0 w-full pt-24 S768:pt-40 flex flex-col items-center justify-center S768:items-start S768:justify-start px-5 S768:px-10 S1024:pl-14 S1200:pl-16 ">

                  <div className=" text-center S768:text-left text-[2rem] S500:w-[28rem] font-extrabold S500:text-[2.3rem] S768:text-[3.2rem] S768:w-[34rem] ">
                    <h1>
                      {title}
                    </h1>
                  </div>
                  <div className=" text-[1rem] text-center S768:text-left S500:w-[28rem] font-semibold S768:w-[35rem] S500:text-sm S768:text-sm S500:pt-3">
                    <p>
                      {desc}
                    </p>
                  </div>

                </div>

              </div>
              <div className=" -z-50">
                <SearchForm/>
              </div>
            </>
            )
          })
        }
      </article>
    </section>
  )
}
