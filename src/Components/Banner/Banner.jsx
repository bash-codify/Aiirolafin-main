
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
    
    <section className=" w-full min-h-[88vh] mt-[12vh]">
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
                  <Imag  src={urlForImage(image).url()} width={2000} height={2000} priority alt='banner' className=" w-full h-[88vh] S500:h-[100vh] S768:h-[88vh] object-cover object-center relative -z-50" />
                </div>

                <div className=" absolute top-0 S768:left-0 w-full pt-[12rem] S412:pt-[16rem] S500:pt-[10rem] S768:pt-60 flex flex-col items-center justify-center S768:items-start S768:justify-start px-5 S768:pl-24 S1024:pl-28 S1200:pl-32 ">

                  <div className=" text-center S768:text-left S360:text-[3.2rem] S500:w-[45rem] font-extrabold S500:text-[3.8rem] S768:text-[5.2rem] S1024:text-[6.2rem] S768:w-[55rem] S1024:w-[65rem] ">
                    <h1>
                      {title}
                    </h1>
                  </div>
                  <div className=" text-[1.5rem] pt-3 text-center S768:text-left S500:w-[45rem] font-semibold S768:w-[55rem] S500:text-[1.4rem] S768:text-[1.6rem]">
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
