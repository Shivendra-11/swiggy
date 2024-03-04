import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { IMG_CDN_URL } from '../config';
import Shimmer from './Shimmer';
import useRestaurant from '../utils/useRestaurant';
import { addItem, removeItem} from '../utils/cartSlice';
import { useDispatch, useSelector } from 'react-redux';

function RestrauntMenu() {
    // to read a dynamic url :-- use param is used to get the exact id of the restaurantlist and then we can access it by using destructuring of array...shown below
    // const params = useParams();
    // const {id}=params;
    const {id}=useParams();
    // const [restaurantmenu,setresaturantmenu]=useState(null)
    const restaurantmenu = useRestaurant({id});
 

    const dispatch=useDispatch();
 
   
    const handleAdditem=(name)=>{
            dispatch(addItem(name));
    }

  // const cartItems=()=>useSelector(state=>state.cart.items);

  // console.log(cartItems);

  return  (!restaurantmenu) ? <Shimmer/>: (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-red-600 mb-4">Restaurant : {id}</h1>
      {/* <h2 className="text-2xl font-normal text-gray-800 mb-2">namste react</h2> */}
       <img className="w-96 h-64 object-cover rounded-lg" src={IMG_CDN_URL+restaurantmenu?.cloudinaryImageId}  />
       <h3 className="text-xl font-medium text-gray-800 mt-4">Name:{restaurantmenu?.name}</h3> 
       <button className='p-2 bg-gray-500 ' onClick={()=>handleAdditem(restaurantmenu?.name)} >Add item</button>

            <h3 className="text-xl font-medium text-gray-800 mt-4">loclity:{restaurantmenu?.locality}</h3>
        <h3 className="text-xl font-medium text-gray-800 mt-2">{restaurantmenu?.costForTwo}</h3>
     <h3 className="text-xl font-medium text-gray-800 mt-2">{restaurantmenu?.slugs?.city}</h3>
     <h3 className="text-xl font-medium text-gray-800 mt-2">{restaurantmenu?.slugs.restaurant}</h3>
     <h3 className="text-xl font-medium text-gray-800 mt-2">{restaurantmenu?.totalRatings}</h3> 

     {/* to add items */}
      <div>   
      </div>
     
      {/* to remove item */}
      
     
    </div>
  )
}

export default RestrauntMenu;
