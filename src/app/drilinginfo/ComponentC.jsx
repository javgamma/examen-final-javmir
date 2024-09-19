import React from 'react'
import ComponentA from './ComponentA'

const ComponentC = ({x, incrementX}) => {
  

  return (
    <div className='border bg-white-200 w-[300px] text-left mr-2 p-4'>
      <h1 className="text-2xl mb-2">ComponentC</h1>
      <p>x={x}</p>
      <button 
      onClick={incrementX}
      className='bg-blue-500 text-white px-4 py-2 rounded mt-2 border'>x++</button>
    </div>


  )
}

export default ComponentC
