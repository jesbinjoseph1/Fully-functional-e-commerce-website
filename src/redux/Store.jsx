import { configureStore } from "@reduxjs/toolkit";
// import Reducer from "./cartSlice";
import cartReducer  from "./cartSlice";
export default  configureStore({
    reducer:{
        cart:cartReducer

    }
})