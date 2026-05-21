import { configureStore } from "@reduxjs/toolkit";

import logReducer from "./logSlice";
import productReducer from "./productListSlice"
import cartReducer from "./cartSlice"
import ProductDetailsReducer from "../Pages/ProductDetails";

export const store=configureStore({
    reducer:{
        user:logReducer,
        product:productReducer,
        cart:cartReducer
    }
})