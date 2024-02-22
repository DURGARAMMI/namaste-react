import { LOGO_URL } from "../../src/utils/constants";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import ContactUs from "./ContactUs";
import useOnlineStatus from "../utils/useOnlineStatus";

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

  const onlineStatus = useOnlineStatus()
  return (
    <div className="flex justify-between shadow-md mb-5 bg-red-400 align-middle">
      <div className="logo-container">
        <img className="w-32" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul className="flex p-4 m-4 gap-5">
          <li>
            Online Status : {onlineStatus ? "Online" : "Offline"}
          </li>
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
          <li>
            <Link to="/grocery">Grocery</Link>
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
