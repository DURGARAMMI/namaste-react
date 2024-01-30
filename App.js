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
const jsxHeading = (
  <h1 id="heading" className="heading">
    Namaste React
  </h1>
);

const TitleComponentArrowFunction = () => (
  <h1 id="heading" className="heading">
    Namaste React
  </h1>
);

const TitleComponentNormalFunction = function () {
  return (
    <h1 id="heading" className="heading">
      Namaste React
    </h1>
  );
};

// React Component
// class based components & functional based components -

//React Functional Component - just a js function

// const HeadingComponent = () => {
//   return <h1>This is functional based component!</h1>;
// };
const number = "This is a string!";

const HeadingComponent = () => (
  <div className="container">
    <TitleComponentArrowFunction />
    {number}
    <h1 className="heading">This is functional based component!</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);

// STARTING OF THE FUNDAMENTALS OF THE REACT
