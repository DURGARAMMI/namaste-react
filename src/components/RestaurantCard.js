// const RestaurantsComp = (props) =>
//const RestaurantsComp = ({ resName, cuisines })

const styleCard = {
  backgroundColor: "rgb(253 244 244)",
};
const RestaurantsCard = (props) => {
  // const { resName, cuisines } = props;

  const { resData } = props;
  const { name, id, cuisine, avgRating, time } = resData?.data;

  // console.log(props);

  return (
    <div className="res-card" style={styleCard}>
      <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/f01666ac73626461d7455d9c24005cd4" />
      <h3>{name}</h3>
      <h4>{id}</h4>
      <h4>{cuisine.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{time / 100} mns</h4>
    </div>
  );
};

export default RestaurantsCard;
