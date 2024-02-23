import {useState,useEffect} from 'react';
import {RES_MENU_LIST} from '../config';
function useRestaurant(){
    const [restaurantmenu,setresaturantmenu]=useState(null)
 
    useEffect(()=>{
      // api call
      getRestaurantList();

  },[]);
   
    async function getRestaurantList(){
     
        const data = await fetch( RES_MENU_LIST);
        const response= await data.json();
        console.log(response);
        // console.log(response?.data?.cards[3]?.card?.card?.info);
        setresaturantmenu(response?.data?.cards[2]?.card?.card?.info);
    }
    // return restaurantmenu data
return restaurantmenu; 
      
};

export default useRestaurant;
