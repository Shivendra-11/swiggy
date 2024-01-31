// Body Component for body section: It contain all restaurant cards
// We are mapping restaurantList array and passing data to RestaurantCard component as props with unique key as index


import { restaurantList } from '../config';
import { useState, useEffect } from 'react';
import RestaurantCard from './Restaurantcard';
import  Shimmer  from './Shimmer';
// named export:-
export const Body = () => {

  function filterData(SearchInput, allRestaurant) {
    const filterData = allRestaurant.filter((restaurant) =>
      restaurant.info?.name.toUpperCase().includes(SearchInput.toUpperCase())
      
    );
    return filterData;
  }
   const [allRestaurant ,setAllrestaurant]=useState([]);
  const [Filteredrestaurant, setFilteredrestaurant] = useState([]);
  const [SearchInput, setSearchInput] = useState("");

  useEffect(()=>{

    getRestaurants();    

    },[]);

  async function getRestaurants(){

    const info=await fetch(

      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.66500&lng=77.44770&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      

      );

    const json=await info.json();
    console.log(json);
    
    
      setAllrestaurant (json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

      setFilteredrestaurant (json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  }


  
  // not render component (Early return )
// if(!allRestaurant) return null;

// if(Filteredrestaurant?.length === 0) {
//   return(
//     <>
    
//     <h1>no restaurant</h1>
//     </>
//   ) 
//   }
 

  return   (allRestaurant?.length === 0) ? (<Shimmer/>) :
  
  (
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
          const data=filterData (SearchInput , allRestaurant)
// Now ui is stored the input restaurant list 
            setFilteredrestaurant(data);
        }}  >Search</button>

      </div>



      <div className="restaurant-list">
        {/* writ logic to no restaurant found */}
        {Filteredrestaurant.map((restaurant) => {
          return <RestaurantCard key={restaurant.info.id} {...restaurant.info} />;
        })}
      </div>
    </>
  );
}