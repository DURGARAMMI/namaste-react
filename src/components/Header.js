import { LOGO_URL } from "../../src/utils/constants";
import { useState } from "react";

const Header = () => {
  const [btnNameAuth, setBtnNameAuth] = useState("Login");

  // creates new variable.

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
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
