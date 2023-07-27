import React from 'react';


import './loadings.css'

const Loadings = () => {
  return (
    
    <div className=' fixed top-0 left-0 right-0 bottom-0 w-full flex flex-col items-center justify-center min-h-screen bg-primaryColor z-50'>

        <div className=' w-[12rem] h-[12rem] bg-white rounded-full animate-spin'>
            <div className=' w-[12rem] h-[12rem] bg-primaryColor rounded-full translate-x-3'>

            </div>
        </div>
        <div className=' mt-6 text-white'>
          <p className=' text-[1.2rem] tracking-widest'>
            Loading.....
          </p>
        </div>

    </div>

  )
}

export default Loadings