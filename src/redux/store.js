import { configureStore } from "@reduxjs/toolkit";
import userslice from "./userslice";

const store=configureStore({
    reducer:{
        userdata:userslice
        
    }
})

export default store