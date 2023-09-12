import React, { useState } from 'react'

const Test = () => {
    const [name, setName]= useState('')
    const Yello = (e)=>{
        e.preventDefault();
        console.log(name);
    }
  return (
    <div className=' w-full min-h-screen mt-36'>
        <form onSubmit={Yello}>
            <input type="text" name="" id="" onChange={(e)=> setName(e.target.value)} className=' w-full h-16 bg-red-300'/>
            <button type="submit" className=' w-full h-10 bg-black text-white'>Submit</button>
        </form>
    </div>
  )
}

export default Test