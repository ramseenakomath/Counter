import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import './Body.css'

const Body = () => {
  const [count,setCount] = useState(0); 

  const increment = () => { setCount(count + 1)}
  const decrement = () => { setCount(count - 1)}
  const reset = () => { setCount(0)}
  
  return (
    <>
        <h1>{count}</h1>
        <Button onClick={increment}>+</Button>
        <Button onClick={decrement}>-</Button>
        <Button onClick={reset}>Reset</Button>
        
    </>
  )
}

export default Body