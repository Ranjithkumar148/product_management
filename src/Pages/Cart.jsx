import React, { useState } from 'react'
import Navbar from '../Navbar/Navbar'
import { useDispatch, useSelector } from 'react-redux'
import { decreaseQty,increaseQty, removeQty } from '../redux/cartSlice'

const Cart = () => {
    const data = useSelector(state => (state.cart.cart))
    const dispatch=useDispatch()

    const price=data.reduce((i,j)=>i+j.price*j.quantity,0)
    console.log(price)
   
    console.log(data)
    return (
        <div>
            <Navbar />
            <h2>Cart Total Items : {data.length}</h2>
            {
                data.length===0?(
                    <h2>Cart is Empty........</h2>
                ):(
                    
                        data.map((item) => {
                    return (
                        <div key={item.id}>
                            <h1>{item.id}</h1>
                            <img   src={item.images[0]} width={200} height={200} alt="" />
                            <h2>{item.title}</h2>
                            <h3>{item.category}</h3>
                            <h4>${item.price}</h4>
                            <button onClick={()=>(dispatch(decreaseQty(item.id)))} >-</button><span> { item.quantity} </span><button onClick={()=>(dispatch(increaseQty(item.id)))}>+</button><br /><br />
                            <button onClick={()=>(dispatch(removeQty(item.id)))}>Remove</button>
                           
                        </div>
                    )
                })
                    
                )
            }
             <h1>Total Amount =<u>{price.toFixed(3)}</u></h1>

        </div>
    )
}

export default Cart
