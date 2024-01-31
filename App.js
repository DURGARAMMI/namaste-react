import React from "react";
import ReactDOM from "react-dom/client";

// const parent = React.createElement(
//   "div",
//   { id: "parent" },
//   React.createElement("div", { id: "child" }, [
//     React.createElement("h1", {}, "am h1 tag"),
//     React.createElement("h2", {}, "am h2 tag"),
//   ])
// );

// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Hello World from React!"
// );

// console.log(heading);
// console.log(jsxHeading);

//JSX - Babel transpiles it to React.createElement => ReactElement - JS object => HTML element(render)

//React Element - js object

// const elem = <span>This is Just a Span</span>;
// const jsxHeading = (
//   <>
//     <h1 id="heading" className="heading">
//       Namaste React
//     </h1>
//     <h3>{elem}</h3>
//     {/* <HeadingComponent />  */}
//     {/* const can't access before */}
//   </>
// );

// const TitleComponentArrowFunction = () => (
//   <h1 id="heading" className="heading">
//     Namaste React
//   </h1>
// );

// const TitleComponentNormalFunction = function () {
//   return (
//     <h1 id="heading" className="heading">
//       Namaste React
//     </h1>
//   );
// };

// React Component
// class based components & functional based components -

//React Functional Component - just a js function

// const HeadingComponent = () => {
//   return <h1>This is functional based component!</h1>;
// };
// const number = "This is a string!";

// const HeadingComponent = () => (
//   <div className="container">
//     <TitleComponentArrowFunction />
//     {number}
//     {/* {} curly braces inside the jsx code allows you to write any js code */}
//     {jsxHeading}
//     {/* just including React Element */}
//     <h1 className="heading">This is functional based component!</h1>
//   </div>
// );
// Food Delivery App
/*
 * Header -> logo, nav items
 * Body -> restuarants, cards
 * Footer -> copy right, address, link
 *
 */
const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const styleCard = {
  backgroundColor: "rgb(253 244 244)",
};

const resList = [
  {
    type: "restaurants",
    data: {
      type: "F",
      id: "12345",
      name: "KFC",
      city: "1",
      avgRating: "3.8",
      time: "4000",
      cuisine: ["burger", "snacks", "american", "biryani"],
    },
  },
  {
    type: "restaurants",
    data: {
      type: "F",
      id: "12346",
      name: "KFC",
      city: "1",
      avgRating: "3.8",
      time: "4000",
      cuisine: ["burger", "snacks", "american", "biryani"],
    },
  },
  {
    type: "restaurants",
    data: {
      type: "F",
      id: "12347",
      name: "KFC",
      city: "1",
      avgRating: "3.8",
      time: "4000",
      cuisine: ["burger", "snacks", "american", "biryani"],
    },
  },
];
// const RestaurantsComp = (props) =>
//const RestaurantsComp = ({ resName, cuisines })

const RestaurantsComp = (props) => {
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
          <RestaurantsComp key={restaurant.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="apps">
      <Header></Header>
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);

// STARTING OF THE FUNDAMENTALS OF THE REACT
