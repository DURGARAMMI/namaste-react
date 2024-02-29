import RestaurantCard, { withOpenedLabel } from "./RestaurantCard";
// import resList from "../utils/mockData";
// import resList2 from "../utils/mockData2";
import Shimmer from "./Shimmer";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [listOfRestaurants, setlistOfRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurant, setFilteredRestaurant] = useState("");

  //whenever state variable is update, react triggers a recounciliation cycle(re-renders the component)

  console.log("Body Render", listOfRestaurants)

  const RestaurantCardopened = withOpenedLabel(RestaurantCard);

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

  const { loggedInUser, setUserName } = useContext(UserContext)


  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter filter-container flex items-baseline m-4 justify-between">
        <div className="search m-4 p-4">
          <input
            type="text"
            className="search-box border border-solid border-black mr-1"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="px-1 bg-green-300"
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
        <div className="flex items-center">
          <button
            className="top-rated-btn bg-gray-200 mr-2 px-4 py-2 rounded-lg"
            onClick={() => {
              const filteredList = listOfRestaurants.filter(
                (res) => res.info.avgRating > 4
              );
              // setlistOfRestaurants(filteredList);
              setFilteredRestaurant(filteredList);
            }}
          >
            Top Rated
          </button>
          <button
            className="top-rated-btn bg-gray-200 px-4 py-2 rounded-lg"
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

        <div className="flex items-center">
          <label>USER</label>
          <input type="text" className="border-black-100 p-2 m-2 border-2"
            value={loggedInUser}
            onChange={(e) => {
              setUserName(e.target.value)
            }}
          ></input>
        </div>
      </div>

      <div className="res-container flex flex-wrap justify-center">
        {/* <RestaurantsComp resName="Meghana Foods" cuisines="Asian, Fast Food" /> */}
        {/* <RestaurantsComp resData={resList[0]} />
          <RestaurantsComp resData={resList[1]} />
          <RestaurantsComp resData={resList[2]} /> */}
        {filteredRestaurant.map((restaurant) => (
          < Link to={"/restaurants/" + restaurant.info.id} key={restaurant.info.id} >
            {/* higherorder component */}
            {restaurant.info.isOpen ? (<RestaurantCardopened resData={restaurant} />) : (<RestaurantCard resData={restaurant} />)}
          </Link>

        ))}
      </div>
    </div >
  );
};

export default Body;
