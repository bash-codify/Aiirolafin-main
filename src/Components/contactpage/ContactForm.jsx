'use client'
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

const ContactForm = () => {

    const [state, handleSubmit] = useForm("xwkdpgqa");
    if (state.succeeded) {
        return <p className=' flex items-center justify-center text-[1.6rem] '>Thanks for joining!</p>;
    }
  return (

        <div>
            <form onSubmit={handleSubmit} className=' grid gap-8'>
                <label htmlFor="name" className=' text-[1.6rem] font-semibold tracking-wider'>
                    Name
                </label>
                <input

                    type="text" 
                    id="name"
                    name="name"
                    placeholder='Your Name'
                    required
                    className=' w-full h-20 border border-primaryColor rounded-2xl outline-none focus:border pl-6 text-[1.4rem] font-medium '
                />
                <ValidationError 
                    prefix="Name" 
                    field="name"
                    errors={state.errors}
                />
                <label htmlFor="email" className=' text-[1.6rem] font-semibold tracking-wider'>
                    Email Address
                </label>
                <input
                    id="email"
                    type="email" 
                    name="email"
                    required
                    placeholder='Your Name'
                    className=' w-full h-20 border border-primaryColor rounded-2xl outline-none focus:border pl-6 text-[1.4rem] font-medium '
                />
                <ValidationError 
                    prefix="Email" 
                    field="email"
                    errors={state.errors}
                />
                <label htmlFor="message" className=' text-[1.6rem] font-semibold tracking-wider'>
                    Message
                </label>
                <textarea
                    id="message"
                    name="message"
                    required
                    placeholder='Your Name'
                    className=' w-full h-80 border border-primaryColor rounded-2xl outline-none focus:border p-6 text-[1.4rem] font-medium '
                />
                <ValidationError 
                    prefix="Message" 
                    field="message"
                    errors={state.errors}
                />
                <div className=' w-full S600:w-[80%] S1024:w-[75%] S1200:w-[80%] h-20 bg-primaryColor flex items-center justify-center rounded-2xl'>
                    <button type="submit" disabled={state.submitting} className=' text-white text-[1.6rem] flex items-center justify-center gap-6 '>
                            Send Message
                    </button>

                </div>
            </form>
        </div>

  )
}

export default ContactForm