import React from 'react'
import { useSelector } from 'react-redux'
import Navbar from '../Navbar/Navbar'


const Home = () => {

    const data=useSelector(state=>state.user.user)
    
    
  return (
    <div className="home-container">
        <Navbar/>
        <div className="home-hero">
            <h1 className="home-title">Welcome,{data.name} — Your Shopping Journey Starts Here 🛒 </h1>
            <img src="/hero_neon_cart.png" className="home-image" alt="Neon Shopping Cart" />
        </div>
    </div>
  )
}

export default Home