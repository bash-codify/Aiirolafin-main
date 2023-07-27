import React from 'react'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { GrMail } from "react-icons/gr";
import { FaMapMarkedAlt } from "react-icons/fa";
import ContactForm from './ContactForm';

const ContactPage = () => {
  return (
     <section className=' w-full min-h-[88vh] mt-[12vh]'>
        <div className=' w-full min-h-[35vh]  S768:min-h-[35vh] bg-[#111144d2] '>
            <div className=' flex items-center justify-center min-h-[35vh] S768:min-h-[35vh] text-white'>

                <h1 className=' text-[4rem] font-semibold'>
                    Contact
                </h1>

            </div>

        </div>
        <article className=' w-[90%] S600:w-[75%] S768:w-[95%] m-auto S1200:w-[95%]'>

            <div className=' grid  mt-28'>
                <div className=' grid S768:grid-cols-2 S1200:grid-cols-3 gap-10 '>

                    <div className=' w-full h-[22rem] bg-white shadow-shadow p-8 rounded-3xl'>
                        <div className=' flex items-center justify-start w-24 h-24 rounded-full text-primaryColor text-[4rem]' >
                            <BsFillTelephoneFill/>
                        </div>

                        <div className=' w-full flex flex-col items-start justify-start gap-4'>
                            <h2 className=' text-[1.8rem] font-semibold'>
                                (+234)9032321336
                            </h2>
                            <div className='  text-[1.4rem]'>
                                <p>
                                    Customer Support
                                </p>
                                <p>
                                    Mon-Sat:8:00 AM - 5:00 PM
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className=' w-full h-[22rem] bg-white shadow-shadow p-8 rounded-3xl'>
                        <div className=' flex items-center justify-start w-24 h-24 rounded-full text-primaryColor text-[4rem]'>
                            <GrMail/>
                        </div>

                        <div className=' w-full flex flex-col items-start justify-start gap-4'>
                            <h2 className=' text-[1.8rem] font-semibold'>
                                aiirolafinrealestateco@gmail.com
                            </h2>
                            <div className='  text-[1.4rem]'>
                                <p>
                                    24/7 Customer Support
                                </p>
                                <p>
                                    General Questions
                                </p>
                            </div>
                        </div>

                    </div>
                    <div className=' w-full h-[22rem] bg-white shadow-shadow p-8 rounded-3xl'>
                        <div className=' flex items-center justify-start w-24 h-24 rounded-full text-primaryColor text-[4rem]'>
                            <FaMapMarkedAlt/>
                        </div>
                        <div className=' w-full flex flex-col items-start justify-start gap-4'>
                            <h2 className=' text-[1.8rem] font-semibold'>
                                Plot 30, Oba Babington Ashaye Crescent, Omole Estate(phase 1) Ikeja, Lagos, Nigeria.
                            </h2>
                            <div className='  text-[1.4rem]'>
                                <p>
                                    Head Office
                                </p>
                               
                            </div>
                        </div>
                    </div>

                </div>
                <div className=' mt-20 grid S768:grid-cols-2 gap-10'>

                    <div className='  w-full h-fit bg-white shadow-shadow p-8 rounded-3xl'>
                        <div>
                            <h2 className=' text-[1.8rem] font-semibold'>
                                Ask us, We are here to help!
                            </h2>
                        </div>
                        <div className=' pt-10 '>
                            <ContactForm/>
                        </div>
                    </div>

                    <div>
                         <iframe className='w-full h-[63rem] rounded-3xl'  id="gmap_canvas" src="https://maps.google.com/maps?q=plot%2030%20Oba%20Babinton%20Ashaye%20Crescent,%20Omole%20Phase%201,%20101233,%C2%A0Lagos%20Lagos+()&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                    </div>
                    
                </div>
            </div>           


        </article>
    </section>
  )
}

export default ContactPage