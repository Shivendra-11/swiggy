import {createSlice} from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name:'cart',
    initialState:{
        items:[], 
    },
    
reducers:{
    addItem:(state,action)=>{
        // Logic to add item to cart
        state.items.push(action.payload);

    },
    removeItem:(state,action)=>{
        // Logic to remove item from cart
        const index=state.items.findIndex((item)=>item.id===action.payload.id);
        let newItems=[...state.items];
        if(index>=0){
            newItems.splice(index,1);
        }else{
            console.warn(`Cant remove product (id:${action.payload.id}) as its not in cart!`);
        }
        state.items=newItems;
    },
    
    clearCart:(state)=>{
        // Logic to clear cart
        state.items=[];
    },

},

});
export default cartSlice.reducer;
export const {addItem,removeItem,clearCart}=cartSlice.actions;