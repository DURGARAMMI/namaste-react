import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  const [listOfRestaurants, setlistOfRestaurants] = useState(resList);
  console.log(listOfRestaurants);
  //   let listOfRestaurants = [];
  return (
    <div className="body">
      {/* <div className="search">Search</div> */}
      <div className="filter">
        <button
          className="top-rated-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.data.avgRating > 4
            );
            setlistOfRestaurants(filteredList);
          }}
        >
          Top Rated
        </button>
      </div>
      <div className="res-container">
        {/* <RestaurantsComp resName="Meghana Foods" cuisines="Asian, Fast Food" /> */}
        {/* <RestaurantsComp resData={resList[0]} />
          <RestaurantsComp resData={resList[1]} />
          <RestaurantsComp resData={resList[2]} /> */}
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
