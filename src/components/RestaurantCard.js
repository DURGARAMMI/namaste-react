// const RestaurantsComp = (props) =>
//const RestaurantsComp = ({ resName, cuisines })

const styleCard = {
  backgroundColor: "rgb(253 244 244)",
};
const RestaurantsCard = (props) => {
  // const { resName, cuisines } = props; 

  const { resData } = props;
  if (!resData || !resData.info) {
    return null; // or handle the case where resData is not available
  }
  const { name, id, cuisines, avgRating, costForTwo, sla, cloudinaryImageId } =
    resData?.info;
  const urlImage =
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
    cloudinaryImageId;
  // console.log(props);

  return (
    <div className="res-card m-4 p-4 w-[250px] h-[95%] flex flex-col hover:text-[white] rounded-md bg-pink-100 hover:bg-pink-400" >
      {/* style={styleCard} */}
      <img alt={name} src={urlImage} className="h-[200] object-cover rounded-md" />
      <h3 className="font-extrabold py-2 text-xl text-[purple] ">{name}</h3>
      {/* <h4>{id}</h4> */}
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla?.deliveryTime} mns</h4>
    </div>
  );
};

export default RestaurantsCard;
