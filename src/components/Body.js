import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData.js";

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {/* <RestaurantsComp resName="Meghana Foods" cuisines="Asian, Fast Food" /> */}
        {/* <RestaurantsComp resData={resList[0]} />
          <RestaurantsComp resData={resList[1]} />
          <RestaurantsComp resData={resList[2]} /> */}
        {resList.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;