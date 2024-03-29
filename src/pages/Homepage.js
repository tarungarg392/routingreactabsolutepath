import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Homepage() {
  const navigate = useNavigate();


  const handleClick = () =>{
    navigate('/products');
  }


  return (
    <>
      <h1>This is homepage</h1>
      <Link to='/products'>Products</Link>
      <button onClick={handleClick}>Click Me!</button>
    </>
  )
}

export default Homepage
