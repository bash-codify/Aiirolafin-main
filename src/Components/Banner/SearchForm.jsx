import React from 'react'
import { MdLocationPin } from "react-icons/md";
import { TbCurrencyNaira } from "react-icons/tb";
import { GiFamilyHouse } from "react-icons/gi";
import { RiSearch2Line } from "react-icons/ri";

const SearchForm = () => {
  return (

    <div className=" absolute top-0 left-0 pt-80  S768:pt-64 w-full flex flex-col items-center justify-center h-screen px-5 S768:items-start S768:px-10 S1024:pl-14 S1200:pl-16">

    <form>
        <div className=' flex flex-col S768:flex-row items-center justify-start gap-5 bg-[#ffffffa9] w-[90vw] px-5 py-5 rounded-3xl S768:p-3 S768:w-fit'>

            <div className=' flex items-center justify-center gap-3'>

                <div className=' flex items-center justify-center w-8 h-8 rounded-full bg-[#111144b4]'>

                    <span className=' flex items-center justify-center h-8 rounded-full text-textColor text-xl'>

                        <MdLocationPin/>

                    </span>

                </div>

                <div className=' flex flex-col items-center justify-center gap-2'>
                    <label htmlFor="location" className=' text-base font-semibold tracking-wider text-primaryColor'>Locations</label>

                    <input type="text" name="location" id="location" placeholder='Surulere, Lagos' className=' w-[65vw] S500:w-[70vw] text-sm h-9 outline-none bg-[#111144de] text-textColor pl-3 rounded-xl S768:w-36 S900:w-fit ' />
                </div>

            </div>

            <div className=' flex items-center justify-center gap-3'>

                <div  className=' flex items-center justify-center w-8 h-8 rounded-full bg-[#111144b4]'>
                    <span className=' flex items-center justify-center h-8 rounded-full text-textColor text-xl'>
                        <TbCurrencyNaira />
                    </span>
                </div>

                <div className=' flex flex-col items-center justify-center gap-2'>

                    <label htmlFor="budget" className=' text-base font-semibold tracking-wider text-primaryColor' >Budgets</label>

                    <input type="text" name="location" id="location" placeholder='$ 1,000,000' className=' w-[65vw] S500:w-[70vw] text-sm h-9 outline-none bg-[#111144de] text-textColor pl-3 rounded-xl S768:w-36 S900:w-fit ' />

                </div>

            </div>

            <div className=' flex items-center justify-center gap-3'>

                <div  className=' flex items-center justify-center w-8 h-8rounded-full bg-[#111144b4]'>

                    <span className=' flex items-center justify-center h-8 rounded-full text-white text-xl'>
                        <GiFamilyHouse />
                    </span>

                </div>

                <div className=' flex flex-col items-center justify-center gap-2'>

                    <label htmlFor="Type" className=' text-base font-semibold tracking-wider text-primaryColor'>Type of Home</label>

                    <input type="text" name="type" id="type" placeholder='Apartment' className=' w-[65vw] S500:w-[70vw] text-sm h-9 outline-none bg-[#111144de] text-textColor pl-3 rounded-xl S768:w-36 S900:w-fit ' />

                </div>

            </div>
            
            <div className=' flex items-center justify-center w-full S768:w-11'>
                <button type='button' className=' w-[80vw] h-10 bg-primaryColor text-white rounded-xl'>
                    <span className='block S768:hidden'>
                        Search
                    </span>
                    <span className='hidden S768:flex items-center justify-center text-2xl'>
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