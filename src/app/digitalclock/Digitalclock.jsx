"use client"
import React, { useEffect, useState } from 'react'

const DigitalClock = () => {
   const [time, setTime] = useState(new Date())

   useEffect(() => {
      const timer = setInterval(() => {
         setTime(new Date())
      }, 1000);
      return () => clearInterval(timer)
   }, [])

   return (
 

    <div className='bg-gradient-to-r from-gray-100 to-zinc-100 text-white min-h-screen w-screen flex flex-col items-center justify-center'>
  <div className='text-center border-[4px] border-blue-600 rounded-lg p-4 bg-blue-800 flex flex-col items-center justify-center'>
    <h1 className='text-3xl mb-8 font-extrabold text-[#75f94d]'>Digital Clock</h1>
    <div className='border-8 border-[#d93f63] rounded-3xl p-4 sm:p-8 w-full sm:w-[300px] md:w-[400px] h-[150px] sm:h-[175px] flex items-center justify-center'>
      <div className='text-[#75f94d] text-4xl sm:text-5xl md:text-6xl font-mono'>
        <span>{time.toLocaleTimeString()}</span>
      </div>
    </div>
  </div>
</div>

   )
}

export default DigitalClock