import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Navbar = () => {

  const cartSize=useSelector((state)=>state.cart.cart)
  return (
    <div>
        
       <Link to="/Home" >Home </Link>
       <Link to="/ProductList">ProductList  </Link>
       <Link to="/ProductDetails">ProductDetails  </Link>
       <Link to ="/Cart"> Cart ( {cartSize.length} )</Link>
       
      
    </div>
  )
}

export default Navbar