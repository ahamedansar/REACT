import React from 'react'
import { Link } from 'react-router-dom'

const Products = () => {
  
    const  my_Product = [
        {id:'1', name:"laptap"},
        {id:'2', name:"phone"},

    ]
  
  
  
  
    return (
    <div>
      <h2>Product List</h2>
      <ul>
        {my_Product.map(p =>(
            <li key = {p.id}>
               <Link to = {`/products/${p.id}`}>{p.name}</Link>
            </li>
        ))}
      </ul>
    </div>
  )
}

export default Products
