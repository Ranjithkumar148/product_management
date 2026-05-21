import React, { useState } from 'react'
import Navbar from '../Navbar/Navbar'
import { useDispatch, useSelector } from 'react-redux'
import { decreaseQty,increaseQty, removeQty } from '../redux/cartSlice'

const Cart = () => {
    const data = useSelector(state => (state.cart.cart))
    const dispatch=useDispatch()
   
    console.log(data)
    return (
        <div>
            <Navbar />
            <h2>Cart</h2>
            {
                data.length===0?(
                    <h2>Cart is Empty........</h2>
                ):(
                    
                        data.map((item) => {
                    return (
                        <div key={item.id}>
                            <h1>{item.id}</h1>
                            <h2>{item.title}</h2>
                            <p>{item.description}</p>
                            <h3>{item.category}</h3>
                            <h4>${item.price}</h4>
                            <button onClick={()=>(dispatch(decreaseQty(item.id)))} >-</button><span> { item.quantity} </span><button onClick={()=>(dispatch(increaseQty(item.id)))}>+</button><br /><br />
                            <button onClick={()=>(dispatch(removeQty(item.id)))}>Remove</button>

                        </div>
                    )
                })
                    
                )
            }

        </div>
    )
}

export default Cart
