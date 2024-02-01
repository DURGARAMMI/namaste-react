import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";

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
  return (
    <div className="apps">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);

// STARTING OF THE FUNDAMENTALS OF THE REACT
