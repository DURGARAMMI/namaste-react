import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import resList2 from "../utils/mockData2";

import { useEffect, useState } from "react";

const Body = () => {
  const [listOfRestaurants, setlistOfRestaurants] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  // array destructuring
  // const arr  = useState (resList)
  // const [listOfRestaurants, setlistOfRestaurants] = arr;
  // const listOfRestaurants = arr[0];
  // const setlistOfRestaurants = arr[1];
  // console.log(listOfRestaurants);
  //   let listOfRestaurants = [];
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.459316&lng=78.365153&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    console.log(
      json?.data?.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
    // Optional chaining
    // setlistOfRestaurants(json?.data?.card[2]?.data?.data?.cards);
    setlistOfRestaurants(
      json?.data?.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
  };
  return (
    <div className="body">
      {/* <div className="search">Search</div> */}
      <div className="filter">
        <button
          className="top-rated-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4
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
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
