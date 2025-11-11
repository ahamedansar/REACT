
// import { Link, Route, Routes } from 'react-router-dom'
// import Home from './react-router-dom/Home'
// import About from './react-router-dom/About'
// import './App.css'
// import { UserApiProvider } from './Functional-Components/hooks/useContext/user-list/UserApiContext'
// import UserList from './Functional-Components/hooks/useContext/user-list/UserList'
// import Basic from './Functional-Components/Basic'
// import Home from './Functional-Components/hooks/useContext/theme/Home'
// import { ThemeProvider } from './Functional-Components/hooks/useContext/theme/ThemeContext'
// import UseEff from './Functional-Components/hooks/useEffect/UseEff'
// import UserList from './Functional-Components/hooks/useEffect/UserList'
// import Counter from './Functional-Components/hooks/useState/Counter'
// import Props from './Functional-Components/Props'
// import State from './Functional-Components/state'
// import Welcome from './embedding-expression/Welcome'
// import Basic from './basic'
// import CallingFunction from './embedding-expression/CallingFunction'
// import Conditional from './embedding-expression/Conditional'

import { Route, Routes } from "react-router-dom"
import Products from "./dynamic-routing/Products"
import ProductDetail from "./dynamic-routing/ProductDetail"



function App() {


  return (
    <>
      {/* -----------embedding-expression---------- */}
      {/* <Basic />
      <Welcome />
      <CallingFunction/>
      <Conditional/> */}

      {/* -----functional-components----- */}
      {/* <Basic/> */}
      {/* <State/>
      <Props/> */}
      {/* <Counter/> */}
      {/* <UseEff/> */}
      {/* <UserList/> */}
      
      {/* ----use context---- */}
      {/* ----1.theme---- */}

      {/* <ThemeProvider>
       <Home/>
      </ThemeProvider> */}

      {/* ---2.userlist--- */}
      {/* <UserApiProvider>
        <UserList/>
      </UserApiProvider> */}


      {/* ----react-router-dom---- */}
      {/* 1.Basic */}

      {/* <div>
        <nav>
          <Link to = '/'> Home </Link> |
          <Link to = '/about'> About </Link> |
          <Link to = '/contact'>  Contact </Link> |
         

        </nav>

             <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element= {<About/>}/>
      </Routes>
      </div> */}

      {/* ----2. Dynamic Routing---- */}
    
        <Routes>
          <Route path = '/' element = {<Products/>}/>
          <Route path = '/products/:id' element = {<ProductDetail/>}/>
        </Routes>

 

      


    </>
  )
}

export default App

// import React, { Component } from 'react'
// import BasicClass from './ClassComponents/BasicClass'

// export default class App extends Component {
//   render() {
//     return (
//       <div>
//         <BasicClass/>
//       </div>
//     )
//   }
// }


// import React, { Component } from 'react'
// import Counter from './ClassComponents/Counter'

// export default class App extends Component {
//   render() {
//     return (
//       <div>
//         <Counter/>
//       </div>
//     )
//   }
// }



// life cycle method
// import React, { Component } from 'react'
// import Mounting from './ClassComponents/Life-Cycling-Method/Mounting'

// export default class App extends Component {
//   render() {
//     return (
//       <div>
//         <Mounting/>
        
//       </div>
//     )
//   }
// }



// import React, { Component } from 'react'
// import Update from './ClassComponents/Life-Cycling-Method/update'

// export default class App extends Component {
//   render() {
//     return (
//       <div>
//         <Update/>
//       </div>
//     )
//   }
// }

// import React, { Component } from 'react'
// import UnMounting from './ClassComponents/Life-Cycling-Method/UnMounting'

// export default class App extends Component {
//   render() {
//     return (
//       <> 
//         <UnMounting/>
//       </>
//     )
//   }
// }








