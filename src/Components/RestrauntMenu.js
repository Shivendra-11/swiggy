import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';


function RestrauntMenu() {
    // to read a dynamic url :-- use param is used to get the exact id of the restaurantlist and then we can access it by using destructuring of array...shown below
    // const params = useParams();
    // const {id}=params;
    const {id}=useParams();
    console.log("hello i am at line 10")
    useEffect(()=>{
      // api call
      getRestaurantList();

  },[]);
   
    async function    getRestaurantList(){
      console.log("hello  i am inside async");
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.66500&lng=77.44770&restaurantId=58915&catalog_qa=undefined&submitAction=ENTER");

        const response= await data.json();
        // console.log("h");
    }
   


  return (
    <div>
      <h1>Restaurant : {id}</h1>
      <h2>namste react</h2>
     
    </div>
  )
}

export default RestrauntMenu;
