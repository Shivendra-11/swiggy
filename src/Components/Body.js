// Body Component for body section: It contain all restaurant cards
// We are mapping restaurantList array and passing data to RestaurantCard component as props with unique key as index


import { restaurantList } from '../config';
import { useState, useEffect } from 'react';
import RestaurantCard from './Restaurantcard';
// named export:-
export const Body = () => {

  function filterData(SearchInput, restaurants) {
    const filterData = restaurants.filter((restaurant) =>
      restaurant.data?.name.toUpperCase().includes(SearchInput.toUpperCase())
      
    );
    return filterData;
  }

  const [restaurant, setrestaurant] = useState(restaurantList);
  const [SearchInput, setSearchInput] = useState("");

  

  async function getRestaurants(){

    const data=await fetch(
      
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.66500&lng=77.44770&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      

      );

    const json=await data.json();
   
    // console.log(json);
   
         setrestaurant(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

  }

  
  useEffect(()=>{

    getRestaurants();    

    },[]);
 

  return (
    <>
      <div className='Search-Container' >
        <input type="text"
          className='Search-input'
          placeholder='search'
          value={SearchInput}
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}


        />
        <button onClick={()=>{
          // filter the data..
          const data=filterData(SearchInput,restaurant)
// Now ui is stored the input restaurant list 
            setrestaurant(data);
        }}  >Search</button>

      </div>



      <div className="restaurant-list">
        {restaurant.map((restaurant) => {
          return <RestaurantCard key={restaurant.data.id} {...restaurant.data} />;
        })}
      </div>
    </>
  );
};