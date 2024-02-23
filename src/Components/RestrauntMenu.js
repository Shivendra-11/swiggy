import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { IMG_CDN_URL } from '../config';
import Shimmer from './Shimmer';
import useRestaurant from '../utils/useRestaurant';

function RestrauntMenu() {
    // to read a dynamic url :-- use param is used to get the exact id of the restaurantlist and then we can access it by using destructuring of array...shown below
    // const params = useParams();
    // const {id}=params;
    const {id}=useParams();
    // const [restaurantmenu,setresaturantmenu]=useState(null)
    const restaurantmenu = useRestaurant({id});
 
 
   


  return  (!restaurantmenu) ? <Shimmer/>: (
    <div>
      <h1>Restaurant : {id}</h1>
      <h2>namste react</h2>
       <img src={IMG_CDN_URL+restaurantmenu?.cloudinaryImageId}  />
        <h3>loclity:{restaurantmenu?.locality}</h3>
        <h3>{restaurantmenu?.costForTwo}</h3>
     <h3>{restaurantmenu?.slugs?.city}</h3>
     <h3>{restaurantmenu?.slugs.restaurant}</h3>
     <h3>{restaurantmenu?.totalRatings}</h3> 
     
      
     
    </div>
  )
}

export default RestrauntMenu;