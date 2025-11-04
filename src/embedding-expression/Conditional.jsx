import React from 'react'

const Conditional = () => {
 

  const isLoggedIn = true;
  
    return (

    <div>
        <p>{isLoggedIn ? 'welcome back' : 'login please' }</p>
    </div>
  )
}

export default Conditional