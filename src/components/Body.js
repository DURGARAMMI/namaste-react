import RestaurantCard from "./RestaurantCard";
// import resList from "../utils/mockData";
// import resList2 from "../utils/mockData2";
import Shimmer from "./Shimmer";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listOfRestaurants, setlistOfRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurant, setFilteredRestaurant] = useState("");
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
      // https://corsproxy.io/?
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.459316&lng=78.365153&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    // console.log(
    //   json?.data?.cards[4].card.card.gridElements.infoWithStyle.restaurants
    // );
    // Optional chaining
    // setlistOfRestaurants(json?.data?.card[2]?.data?.data?.cards);
    setlistOfRestaurants(
      json?.data?.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
    setFilteredRestaurant(
      json?.data?.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
  };
  //conditional rendering
  // if (listOfRestaurants.length === 0) {
  //   return <Shimmer />;
  // }

  const onlineStatus = useOnlineStatus()

  if (onlineStatus === false) {

    return <h1 style={{ color: "red" }}>Offline</h1>
  }
  // else { return <h2 style={{ color: "green" }}>Online</h2> }


  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter filter-container">
        <div className="search">
          <label>Seach Restaurant:</label>
          <br></br>
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              console.log(searchText);
              const filteredRestaurant = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );

              console.log(filteredRestaurant);
              setFilteredRestaurant(filteredRestaurant);
              // setlistOfRestaurants(filtedRestaurants);
            }}
          >
            Search
          </button>
        </div>
        <div>
          <button
            className="top-rated-btn"
            onClick={() => {
              const filteredList = listOfRestaurants.filter(
                (res) => res.info.avgRating > 4
              );
              // setlistOfRestaurants(filteredList);
              setFilteredRestaurant(filteredList);
            }}
          >
            Top Rated |
          </button>
          <button
            className="top-rated-btn"
            onClick={() => {
              const filteredList = listOfRestaurants.filter(
                (res) => res.info.sla?.deliveryTime < 30
              );
              // setlistOfRestaurants(filteredList);
              setFilteredRestaurant(filteredList);
            }}
          >
            Early
          </button>
        </div>
      </div>
      <div className="res-container">
        {/* <RestaurantsComp resName="Meghana Foods" cuisines="Asian, Fast Food" /> */}
        {/* <RestaurantsComp resData={resList[0]} />
          <RestaurantsComp resData={resList[1]} />
          <RestaurantsComp resData={resList[2]} /> */}
        {filteredRestaurant.map((restaurant) => (
          <Link to={"/restaurants/" + restaurant.info.id} key={restaurant.info.id}>
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
