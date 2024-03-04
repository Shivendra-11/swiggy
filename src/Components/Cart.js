import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import RestaurantCard from './Restaurantcard';
import { clearCart } from '../utils/cartSlice';

const Cart = () => {
    const dispatch=useDispatch();
    
    const handleclearCart=()=>{
        dispatch(clearCart());
    }  

    const  cartItem=useSelector(store=>store.cart.items);
  return (
    <div>
      <h1>Cart Item -{cartItem.length} </h1>
      <button className='bg-gray-400 ' onClick={()=>handleclearCart()}  > Clear cart</button>
      
    </div>
  )
}

export default Cart;

