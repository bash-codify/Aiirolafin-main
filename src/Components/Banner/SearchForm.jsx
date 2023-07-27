import React from 'react'
import { MdLocationPin } from "react-icons/md";
import { TbCurrencyNaira } from "react-icons/tb";
import { GiFamilyHouse } from "react-icons/gi";
import { RiSearch2Line } from "react-icons/ri";

const SearchForm = () => {
  return (

    <div className=" absolute top-0 left-0 pt-[30rem]  S768:pt-[28rem] S71024:pt-[32rem] w-full flex flex-col items-center justify-center h-screen px-5 S768:items-start S768:pl-24 S1024:pl-28 S1200:pl-32">

    <form>
        <div className=' flex flex-col S768:flex-row items-center justify-start gap-6 bg-[#ffffffa9] w-[90vw] py-5 rounded-3xl S768:p-3 S768:w-fit'>

            <div className=' flex items-center justify-center gap-3'>

                <div className=' flex items-center justify-center w-16 h-16 rounded-full bg-[#111144b4] translate-y-7'>

                    <span className=' flex items-center justify-center h-16 rounded-full text-textColor text-[2.3rem]'>

                        <MdLocationPin/>

                    </span>

                </div>

                <div className=' flex flex-col items-center justify-center gap-2'>
                    <label htmlFor="location" className=' text-[2rem] S500:text-[1.5rem] font-semibold tracking-wider text-primaryColor'>Locations</label>

                    <input type="text" name="location" id="location" placeholder='Surulere, Lagos' className=' w-[65vw] text-[1.4rem] h-[4rem] S500:w-[70vw] outline-none bg-[#111144de] text-textColor pl-5 rounded-xl S768:w-56 S820:w-60 S1024:w-80 ' />
                </div>

            </div>

            <div className=' flex items-center justify-center gap-3'>

                <div  className=' flex items-center justify-center w-16 h-16 rounded-full bg-[#111144b4] translate-y-7'>
                    <span className=' flex items-center justify-center h-16 rounded-full text-textColor text-[2.3rem]'>
                        <TbCurrencyNaira />
                    </span>
                </div>

                <div className=' flex flex-col items-center justify-center gap-2'>

                    <label htmlFor="budget" className=' text-[2rem] S500:text-[1.5rem] font-semibold tracking-wider text-primaryColor' >Budgets</label>

                    <input type="text" name="location" id="location" placeholder='$ 1,000,000' className=' w-[65vw] text-[1.4rem] h-[4rem] S500:w-[70vw] outline-none bg-[#111144de] text-textColor pl-3 rounded-xl S768:w-56 S820:w-60 S1024:w-80' />

                </div>

            </div>

            <div className=' flex items-center justify-center gap-3'>

                <div  className=' flex items-center justify-center w-16 h-16 rounded-full bg-[#111144b4] translate-y-7'>

                    <span className=' flex items-center justify-center h-16 rounded-full text-white text-[2.3rem]'>
                        <GiFamilyHouse />
                    </span>

                </div>

                <div className=' flex flex-col items-center justify-center gap-2'>

                    <label htmlFor="Type" className=' text-[2rem] S500:text-[1.5rem] font-semibold tracking-wider text-primaryColor'>Type of Home</label>

                    <input type="text" name="type" id="type" placeholder='Apartment' className=' w-[65vw] text-[1.4rem] h-[4rem] S500:w-[70vw] outline-none bg-[#111144de] text-textColor pl-3 rounded-xl S768:w-56 S820:w-60 S1024:w-80' />

                </div>

            </div>
            
            <div className=' flex items-center justify-center w-full S768:w-14'>
                <button type='button' className=' w-[80vw] h-16 bg-primaryColor text-white rounded-xl text-[1.6rem]'>
                    <span className='block S768:hidden'>
                        Search
                    </span>
                    <span className='hidden S768:flex items-center justify-center text-4xl'>
                        < RiSearch2Line />
                    </span>
                </button>
            </div>
        </div>
    
    </form>
    </div>

  )
}

export default SearchForm