import { createSlice } from "@reduxjs/toolkit";
import ProductList from "../Pages/ProductList";


const initialState={
    products:[]
}
const productListSlice=createSlice({
    name:"product",
    initialState,
    reducers:{
        setProducts:(state,action)=>{
            state.products=action.payload
        }
    }

})

export default productListSlice.reducer
export const {setProducts}=productListSlice.actions