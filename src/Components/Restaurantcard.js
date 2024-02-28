import { IMG_CDN_URL } from "../config";
import { useContext } from "react";
import UserContext from "../utils/usercontext";
const RestaurantCard = ({
    cloudinaryImageId,
    name,
    cuisines,
    area,
    lastMileTravelString,
    avgRating,
    areaName,
    costForTwo,
    totalRatingsString,
    
  }) => {
    const {user}=useContext(UserContext);
    return (
      <div className="card ">
        <img className="rounded-lg w-50 h-50 object-cover"
          src={
          IMG_CDN_URL +
            cloudinaryImageId
          }
        />
        <div className="font-mono text-blue-900 mt-5  mx-5  " >
        <h2  >{name}</h2>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{area}</h4>
        <h4>{lastMileTravelString}</h4>
        <h4>{ avgRating}</h4>
        <h4>{costForTwo}</h4>
       <h4>{ totalRatingsString}</h4>
       <h4>{user.email}</h4>
       </div>
       
      </div>
    );
  };
  export default RestaurantCard;