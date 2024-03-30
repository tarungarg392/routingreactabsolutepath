import React from 'react'
import { Link, useParams } from 'react-router-dom'

function ProductDetails() {
   const params = useParams(); 
  return (
    <div>
      <h1>Product Details{params.Id}</h1>
      <Link to=".." relative='path'>Back</Link>
    </div>
  )
}

export default ProductDetails
