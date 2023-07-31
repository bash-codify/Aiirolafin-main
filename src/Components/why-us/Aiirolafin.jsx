
'use client'
import React from 'react';
import { BsFillHousesFill } from "react-icons/bs";
import { GoLaw } from "react-icons/go";
import { Icon } from '@iconify/react';

const Aiirolafin = () => {
  return (
    <section className=' w-full min-h-[90vh] pt-10'>

        <article className=' w-[95%] S1024:w-[90%] m-auto mt-16'>
            <div>
                <div  className=' flex flex-col items-start justify-start gap-4 '>
                    <p className=' text-[1.6rem] text-primaryColor font-semibold tracking-widest border-b-2 border-primaryColor'>
                        Why Choose Aiirolafin
                    </p>

                    <div className=' w-full flex items-center justify-between'>
                        <div className=' pt-5'>
                            <h2 className=' text-[2.6rem] S768:text-[3rem] S1024:text-[3.4rem] font-bold tracking-wider leading-[2.8rem] S768:leading-[4.8rem] S1024:leading-[5.8rem]'>
                                Provides the most <br /> complete list of property
                            </h2>

                        </div>

                        <div>
                            <p className='hidden w-[43rem] S768:w-[35rem] text-[1.2rem] S900:flex items-end justify-end gap-1 italic pt-10 cursor-pointer test-primaryColor tracking-widest '>
                                Find the ideal propery that is most suitable for you. Starting from houses for sale that are minimalist, apartments for sale that are exclusive.
                            </p>

                        </div>

                    </div>

                    <div className=' w-full flex items-end justify-end'>

                        <p className='S900:hidden flex  items-end justify-end gap-1 w-[42rem] text-[1.4rem] pt-6 cursor-pointer test-primaryColor tracking-widest italic'>
                            Find the ideal propery that is most suitable for you. Starting from houses for sale that are minimalist, apartments for sale that are exclusive.
                        </p>

                    </div>

                </div>

                <div className=' w-[80%] S768:w-[50%] m-auto S820:w-full mt-24 flex flex-col S820:grid  S820:grid-cols-3 items-center justify-center gap-14'>

                    <div className=' w-full h-fit bg-white'>
                        <div className=' flex items-center justify-start w-24 h-24 rounded-full text-primaryColor text-[4rem]'>
                            <BsFillHousesFill/>
                        </div>
                        <div className=' w-full flex flex-col items-center justify-center gap-4' >
                            <h2 className=' text-[1.8rem] font-semibold' >Find your Dream house</h2>
                            <p className=' w-full text-center text-[1.2rem]'>
                                Many ads for apartment and houses for sale in various locations. Tap your fingers on the screen the open the door of your dream house from here.
                            </p>
                        </div>
                    </div>
                    <div className=' w-full h-[24rem] bg-white shadow-shadow p-8 mt-5 S820:-mt-0 rounded-3xl'>
                        <div  className=' flex items-center justify-start w-24 h-24 rounded-full text-primaryColor text-[4rem]'>
                            <GoLaw/>
                        </div>
                        <div className=' w-full flex flex-col items-center justify-center gap-4'>
                            <h2 className=' text-[1.8rem] font-semibold'>
                                Legally Documented
                            </h2>
                            <p className=' w-full text-center text-[1.2rem]'>
                                Our Properties have the following titles :Deed of Assignment Global Certificate of Occupancy (Global C of O) It also comes with after sales services.
                            </p>
                        </div>
                    </div>
                    <div className=' w-full h-[24rem] bg-white p-8 -mt-4 S820:-mt-0'>
                        <div  className=' flex items-center justify-start w-24 h-24 rounded-full text-primaryColor text-[4rem]'>
                            <Icon icon="vaadin:handshake" />
                        </div>
                        <div className=' w-full flex flex-col items-center justify-center gap-4'>
                            <h2 className=' text-[2rem] font-semibold'>Become a Partner</h2>
                            <p className=' w-full text-center text-[1.2rem]'>
                                This is in a bid to foster a better profitable relationship with our clients and to create Investment opportunities for them in the field of Real Estates.
                            </p>
                        </div>
                    </div>
                </div>

            </div>

        </article>
    </section>
  )
}

export default Aiirolafin