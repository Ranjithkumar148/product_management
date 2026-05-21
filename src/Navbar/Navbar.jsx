import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        
       <Link to="/Home" >Home</Link>
       <Link to="/ProductList">ProductList</Link>
       <Link to="/ProductDetails">ProductDetails</Link>
       <Link to ="/Cart">Cart</Link>
       
      
    </div>
  )
}

export default Navbar