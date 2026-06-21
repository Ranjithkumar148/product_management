import React from 'react'
import { useSelector } from 'react-redux'
import Navbar from '../Navbar/Navbar'


const Home = () => {

    const data=useSelector(state=>state.user.user)
    
    
  return (
    <div className="home-container">
        <Navbar/>
        <div className="home-hero">
<<<<<<< HEAD
            <h1 className="home-title">Welcome,{data.name} — Your Shopping Journey Starts Here 🛒 </h1>
=======
            <h1 className="home-title">Welcome, {data} — Your Shopping Journey Starts Here 🛒 </h1>
>>>>>>> 812958322ef69aa527e19a32a31f2e5991da87ce
            <img src="/hero_neon_cart.png" className="home-image" alt="Neon Shopping Cart" />
        </div>
    </div>
  )
}

export default Home