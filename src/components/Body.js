import resList from '../utils/mockData';
import RestaurantCard from './RestaurantCard' ;
import  { useState } from 'react';


const BodyComponent = () => {
    let [listOfRestaurants , setListOfRestaurants] = useState(resList);
    return (
      <div className="body">
        <div className="filter">
    <button className = 'filter-btn' onClick = {() => {
        const filteredList = listOfRestaurants.filter((res) => {
            
            return res.info.avgRating >4;
        });
        setListOfRestaurants(filteredList);
    }}
    > Top Rated Restaurants
    </button>
        </div>
        <div className="res-container">
          {listOfRestaurants.map((restaurant) =>(
            <RestaurantCard key = {restaurant.info.id} resData = {restaurant} />
          ))}
         
        </div>
      </div>
    );
  };

  export default BodyComponent;