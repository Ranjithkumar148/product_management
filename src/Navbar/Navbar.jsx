import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Navbar = () => {

  const cartSize=useSelector((state)=>state.cart.cart)
  return (
    <div className="navbar">
<<<<<<< HEAD
        
=======

      <h1 className="navbar-title">Ranjith</h1>  
>>>>>>> 812958322ef69aa527e19a32a31f2e5991da87ce
       <Link to="/Home" className="nav-link">Home </Link>
       <Link to="/ProductList" className="nav-link">ProductList  </Link>
       <Link to="/ProductDetails" className="nav-link">ProductDetails  </Link>
       <Link to ="/Cart" className="nav-link cart-link"> Cart ( {cartSize.length} )</Link>
       
      
    </div>
  )
}

export default Navbar