import { LOGO_URL } from "../../src/utils/constants";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import ContactUs from "./ContactUs";

const Header = () => {
  const [btnNameAuth, setBtnNameAuth] = useState("Login");
  console.log("Header Called");

  // creates new variable.
  // callback function and dependency array
  // if dependency array is not there?
  // if dependency array is [] empty?
  // if dependency array is [btnNameAuth]?
  useEffect(() => {
    console.log("Header useEffect Called");
  }, []);

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
          <button
            className="btn btn-login"
            onClick={() => {
              btnNameAuth === "Login"
                ? setBtnNameAuth("Logout")
                : setBtnNameAuth("Login");
            }}
          >
            {btnNameAuth}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
