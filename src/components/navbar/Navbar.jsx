import React, { useContext } from "react";
import { UserContext } from "../../contexts/user";
import { CardContext } from "../../contexts/card";
import CardIcon from "../card-icon/card-icon";
import CardDropdown from "../card-dropdown/card-dropdown";
import { Link, Outlet } from "react-router-dom";
import { signOutUser } from "../../utils/firebase/Firebase";
import "./navbar.scss";

const Navbar = () => {
  const { currentUser } = useContext(UserContext);
  const {isCardOpen} = useContext(CardContext)
  
  return (
    <>
      <div className="navbar-container">
        <div className="logo">
          <Link to="/">
            <strong>Shopping App</strong>
          </Link>
        </div>
        <div className="navbar-menu">
          <Link to="/shop" className="nav-link">
            Shop
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={signOutUser}>Sign Out</span>
          ) : (
            <Link to="/auth" className="nav-link">
              Sign In
            </Link>
          )}
          <CardIcon/>
        </div>
        {isCardOpen && <CardDropdown/>}
      </div>
      <Outlet />
    </>
  );
};

export default Navbar;
