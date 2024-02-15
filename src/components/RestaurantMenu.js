import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  // const params = useParams()
  const { resId } = useParams();
  // console.log(params)

  useEffect(() => {
    fetchMenu();
  }, []);
  const fetchMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.450831&lng=78.378523&restaurantId=" + resId + "&catalog_qa=undefined&submitAction=ENTER"
    );
    const json = await data.json();
    setResInfo(json.data);
    // console.log(json.data);
  };
  if (resInfo === null) return (<Shimmer />);
  // const { name, cuisines } = resInfo?.cards[0]?.card?.card?.info;
  // Ensure that resInfo is not null and all nested properties exist before destruturing
  // const { name } = resInfo?.cards[0]?.card?.card?.info;
  const { name, cuisines, costForTwoMessage, avgRating } = resInfo?.cards[0]?.card?.card?.info || {};
  // const name = resInfo?.cards[0]?.card?.card?.info.name;
  // const cuisines = resInfo?.cards[0]?.card?.card?.info?.cuisines || [];
  // const costForTwoMessage = resInfo?.cards[0]?.card?.card?.info?.costForTwoMessage || "";
  // const avgRating = resInfo?.cards[0]?.card?.card?.info?.avgRating || "";
  const { itemCards } = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1].card?.card;
  // console.log(itemCards)

  // resInfo === null ? (
  //   <Shimmer />
  // ) : 


  return (
    <div className="menu" >
      <br />
      <h1>{name}</h1>
      <br />
      <h3>{cuisines.join(", ")} {costForTwoMessage} - Rating: {avgRating}</h3>

      <br />
      <h2>Menu</h2>
      <br />
      <ul>
        {
          itemCards.map((item) =>
            <li key={item.card.info.id}>{item.card.info.name} - {"Rs."}{item.card.info.price / 100 || item.card.info.defaultPrice / 100 || item.card.info.finalPrice / 100}</li>)
        }
      </ul>
    </div >
  );
};
export default RestaurantMenu;
