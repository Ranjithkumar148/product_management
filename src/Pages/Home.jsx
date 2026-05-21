import React from 'react'
import { useSelector } from 'react-redux'
import Navbar from '../Navbar/Navbar'


const Home = () => {

    const data=useSelector(state=>state.user.user)
    
  return (
    <div>
        <Navbar/>
        <h1>Welcome to Home  page {data}</h1>
    </div>
  )
}

export default Home