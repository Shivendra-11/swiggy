import { IMG_CDN_URL } from "../config";

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
    return (
      <div className="card">
        <img
          src={
          IMG_CDN_URL +
            cloudinaryImageId
          }
        />
        <h2>{name}</h2>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{area}</h4>
        <h4>{lastMileTravelString}</h4>
        <h4>{ avgRating}</h4>
        <h4>{costForTwo}</h4>
       <h4>{ totalRatingsString}</h4>
       
      </div>
    );
  };
  export default RestaurantCard;