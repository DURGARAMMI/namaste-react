import { LOGO_URL } from "../../src/utils/constants";
import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
// import ContactUs from "./ContactUs";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnNameAuth, setBtnNameAuth] = useState("Login");
  console.log("Header Called");

  // creates new variable.
  // callback function and dependency array
  // if dependency array is not there?
  // if dependency array is [] empty?
  // if dependency array is [btnNameAuth]?
  // useEffect(() => {
  //   console.log("Header useEffect Called");
  // }, []);

  //customhook
  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);
  // console.log(loggedInUser)
  //selector is nothing but hook in react
  //we are subscribing to the store using a selector
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

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
            <Link to="/cart" className="font-bold text-xl">
              <span className="w-3 size-4">
                <svg className="w-5" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 512 512" id="cart"><g data-name="<Group>"><path fill="#00efd1" d="M462.1,121.9,424.8,240.4a50.028,50.028,0,0,1-47.7,35H141.6l-.5.1L115,122l.4-.1Z"></path><path fill="#00acea" d="M393.1 402.1a40.8 40.8 0 1 1-40.8 40.8A40.843 40.843 0 0 1 393.1 402.1zM179.2 402.1a40.8 40.8 0 1 1-40.8 40.8A40.779 40.779 0 0 1 179.2 402.1zM423.9 357.8H195.7a59.918 59.918 0 0 1-59.2-50L96.4 71.6A39.929 39.929 0 0 0 57 38.3H39.9a10 10 0 0 1 0-20H57a59.737 59.737 0 0 1 59.1 50l40.1 236.3a39.929 39.929 0 0 0 39.4 33.3H423.8a10.029 10.029 0 0 1 10 10A9.859 9.859 0 0 1 423.9 357.8z"></path></g></svg>
                {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" id="cart"><circle cx="90" cy="102" r="8" fill="none" stroke="#00aeef" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="4"></circle><circle cx="50" cy="102" r="8" fill="none" stroke="#00aeef" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="4"></circle><path fill="none" stroke="#00aeef" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="4" d="M30 34h83.1c2.8 0 4.7 2.8 3.7 5.4l-15.9 41.4C99.7 84 96.7 86 93.4 86H46.6c-3.8 0-7.1-2.7-7.9-6.5L30 34zm-.1 0-1.5-7.6c-.7-3.7-4-6.4-7.8-6.4h-7.2M90.9 46h3M33 46h48.9"></path></svg> */}
              </span>
              <span className="absolute"> -({cartItems.length} items)</span></Link>
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
          <li className="font-bold">
            {loggedInUser}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
