import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import ContactUs from "./components/ContactUs";
import ErrorComp from "./components/ErrorComp";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
// import Grocery from "./components/Grocery";

const Grocery = lazy(() => import("./components/Grocery"));

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

const AppLayout = () => {

  const [userName, setUserName] = useState()
  //authentication
  useEffect(() => {
    const data = {
      name: "Ramesh"
    }
    setUserName(data.name)
  }, [])
  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
        <div className="apps">
          <Header />
          <Outlet />
        </div>
      </UserContext.Provider>
    </Provider>
  );
};
// takes list of paths
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
      {
        path: "/grocery",
        element: <Suspense fallback={<h2>Loading...</h2>}><Grocery /></Suspense>,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <ErrorComp />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<AppLayout />);
root.render(<RouterProvider router={appRouter} />);

// STARTING OF THE FUNDAMENTALS OF THE REACT
