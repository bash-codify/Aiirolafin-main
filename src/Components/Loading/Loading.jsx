import React from 'react';


import './loading.css'

const Loading = () => {
  return (
    
    <div className=' fixed top-0 left-0 right-0 bottom-0 w-full flex flex-col items-center justify-center min-h-screen bg-primaryColor'>

        <div className=' w-32 h-32 bg-white rounded-full animate-spin'>
            <div className=' w-32 h-32 bg-primaryColor rounded-full translate-x-2'>

            </div>
        </div>
        <div className=' mt-6 text-white'>
          <p className=' text-[1.4rem] tracking-widest'>
            Loading.....
          </p>
        </div>

    </div>

  )
}

export default Loading