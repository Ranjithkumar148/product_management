import { createSlice } from "@reduxjs/toolkit";


const initialState = {

    cart: []
}

const cartSlice = createSlice({


    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const existingItems = state.cart.find((item) => {
                return item.id === action.payload.id
            })
            if (existingItems) {

                existingItems.quantity += 1
            } else {
                state.cart.push({
                    ...action.payload,
                    quantity: 1
                })
            }
        },
        decreaseQty: (state, action) => {
            const getItem = state.cart.find((item) => item.id === action.payload)
            if (getItem && getItem.quantity > 1) {
                getItem.quantity -= 1
            } else {
                state.cart = state.cart.filter((item) => item.id !== action.payload)
            }
        },
        increaseQty: (state, action) => {
            const getItem = state.cart.find((item) => item.id === action.payload)
            if (getItem) {
                getItem.quantity += 1
            }
        },
        removeQty:(state,action)=>{
            state.cart=state.cart.filter(item=>item.id!==action.payload)

        }

    }
})

export default cartSlice.reducer
export const { addToCart, decreaseQty, increaseQty,removeQty } = cartSlice.actions