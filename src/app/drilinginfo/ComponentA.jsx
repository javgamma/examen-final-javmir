import React from 'react'
import ComponentB from './ComponentB'
import ComponentC from './ComponentC'

const ComponentA = ({x, currentX, incrementX}) => {


  return (
    <div className='border p-4 text-left m-4' >
      <h1 className="text-2xl mb-2">ComponenteA</h1>
      <p className='ml-4'>x={x}</p>

      <ComponentB x={currentX} xOtra={x} incrementX={incrementX}/>
     
    </div>
  )
}

export default ComponentA
