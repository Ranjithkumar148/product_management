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
        <div className="cart-container">
            <Navbar />
            <h2 className="cart-title">Cart Total Items : {data.length}</h2>
            {
                data.length===0?(
                    <h2 className="cart-empty">Cart is Empty........</h2>
                ):(
                    
                        data.map((item) => {
                    return (
                        <div key={item.id} className="cart-item">
                            <h1 className="cart-item-id">{item.id}</h1>
                            <img className="cart-item-image" src={item.images[0]} width={200} height={200} alt="" />
                            <h2 className="cart-item-title">{item.title}</h2>
                            <h3 className="cart-item-category">{item.category}</h3>
                            <h4 className="cart-item-price">₹ {Math.floor(item.price*80)}</h4>
                            <div className="cart-qty-controls">
                                <button className="qty-btn" onClick={()=>(dispatch(decreaseQty(item.id)))} >-</button>
                                <span className="qty-val"> { item.quantity} </span>
                                <button className="qty-btn" onClick={()=>(dispatch(increaseQty(item.id)))}>+</button>
                            </div>
                            <br /><br />
                            <button className="remove-btn" onClick={()=>(dispatch(removeQty(item.id)))}>Remove</button>
                           
                        </div>
                    )
                })
                    
                )
            }
             <h1 className="cart-total">Total Amount = ₹ <u>{Math.floor(price * 80)}</u></h1>

        </div>
    )
}

export default Cart
