import React from 'react'

const AllProducts = () => {
    const products= [
        {id:'p1', name:'t-shirt'},
        {id:'p2', name:'jeans'},
        
    ]
  return (
    <div>
      {products.map(ansar => (
        <li style={{ background: 'blue', color: 'white', padding:'40px', margin: '20px',}} key={ansar.id}>
            {ansar.name}

        </li>
      ))}



    </div>
  )
}

export default AllProducts
