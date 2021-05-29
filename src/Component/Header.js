import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <img className="header_logo" src="netmeds.jpg" alt="logo" />
      <div className="header_search">
        <div className="icons">
          <input
            className="header_searchInput"
            placeholder="Search for Medicines/ Healthcare Products"
            type="text"
          />
          <SearchIcon className="header_searchIcon" />
        </div>

        <div className="main_navigation">
          <div className="nav_option">
            <img className="medicine" src="medicine.jpg" alt="" />
            <span className="nav_optionOne">
              Medicine
              <small>over 2500 Medicine</small>
            </span>
          </div>
          <div className="nav_option">
            <img className="medicine" src="wellness.jpg" alt="" />
            <span className="nav_optionOne">
              Wellness
              <small>Health Products</small>
            </span>
          </div>
          <div className="nav_option">
            <img className="medicine" src="diagnostic.png" alt="" />
            <span className="nav_optionOne">
              Diagnostic
              <small>Book tests and checkups</small>
            </span>
          </div>
          <div className="nav_option">
            <img className="medicine" src="health.png" alt="" />
            <span className="nav_optionOne">
              Health Corner
              <small>Trending tips from health experts</small>
            </span>
          </div>
        </div>
      </div>

      <div className="header_nav">
        <div className="header_option">
          <LocalOfferIcon className="offer_icon" />
          <span className="header_optionOne">Offers</span>
        </div>
        <div className="header_option">
          <AccountCircleIcon className="user_icon" />
          <span className="header_optionOne">User</span>
        </div>
        <div className="header_option">
          <ShoppingCartIcon className="cart_icon" />
          <span className="header_optionOne">Cart</span>
        </div>
      </div>
    </div>
  );
}

export default Header;