import React from 'react'
import { useParams } from 'react-router-dom'

function ProductDetails() {
   const params = useParams(); 
  return (
    <div>
      <h1>Product Details{params.Id}</h1>
    </div>
  )
}

export default ProductDetails
