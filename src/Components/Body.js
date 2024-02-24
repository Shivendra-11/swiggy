import useStatus from '../utils/useStatus';
import { useState, useEffect } from 'react';
import RestaurantCard from './Restaurantcard';
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';

export const Body = () => {
  function filterData(SearchInput, allRestaurant) {
    const filterData = allRestaurant.filter((restaurant) =>
      restaurant.info?.name.toUpperCase().includes(SearchInput.toUpperCase())
    );
    return filterData;
  }

  const [allRestaurant, setAllrestaurant] = useState([]);
  const [Filteredrestaurant, setFilteredrestaurant] = useState([]);
  const [SearchInput, setSearchInput] = useState("");

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const info = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.66500&lng=77.44770&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await info.json();
    console.log(json);

    setAllrestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredrestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  }

  const isOnline = useStatus();
  if (!isOnline) {
    return <h1 className='bg-red-500  text-black  font-bold' >🔴 Check your internet connection</h1>;
  }

  return  ( allRestaurant.length===0) ? <Shimmer/> : (
    <>
      <div className='container mx-auto px-4'>
        <div className='flex justify-center items-center my-8'>
          <input
            type="text"
            className='border border-gray-300 rounded-lg py-2 px-4 w-64 focus:outline-none focus:border-blue-500'
            placeholder='Search'
            value={SearchInput}
            onChange={(e) => {
              setSearchInput(e.target.value);
            }}
          />
          <button
            className='ml-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded'
            onClick={() => {
              const data = filterData(SearchInput, allRestaurant);
              setFilteredrestaurant(data);
            }}
          >
            Search
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  shadow-slate-400  lg:grid-cols-4 gap-6">
          
          {Filteredrestaurant.map((restaurant) => (
            <Link to={"/restaurant/" + restaurant.info.id} key={restaurant.info.id}>
              <div  className='hover:shadow-2xl hover:backdrop-brightness-100  transition duration-300 ease-in-out' >  
              <RestaurantCard {...restaurant.info} />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};
