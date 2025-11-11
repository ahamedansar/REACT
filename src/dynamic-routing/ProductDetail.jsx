import React from 'react'
import { useParams } from 'react-router-dom'
import { MdProductionQuantityLimits } from "react-icons/md";


const ProductDetail = () => {
  
  const {id} = useParams();
  
  
    return (
    <div>
      <h2> <MdProductionQuantityLimits />Product id: {id} </h2>
    </div>
  )
}

export default ProductDetail
