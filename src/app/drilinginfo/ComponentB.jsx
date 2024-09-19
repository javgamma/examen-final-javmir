import React from 'react'
import ComponentC from './ComponentC'
import ComponentA from './ComponentA'

const ComponentB = ({x, xOtra, incrementX}) => {
   

  return (
    
      <div className="border m-4 p-4 text-left">
      <h1 className="text-2xl mb-2">ComponentB</h1>
      <p className='mb-4'> x={x}</p>
     <ComponentC x={xOtra} incrementX={incrementX}/>
    </div>
    
  )
}

export default ComponentB
