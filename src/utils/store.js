import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartslice";


const store=configureStore({
    reducer:{
        cart:cartSlice,
    },
    
});

export default store;   // store is a object which is used to store the data of the application and it is used to access the data from the store and also to update the data in the store.