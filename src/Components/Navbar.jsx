import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MdOutlineTravelExplore } from "react-icons/md";
import { HiMenu } from "react-icons/hi";
import { MdClose } from "react-icons/md";
import { Buttton } from "./Button";
import "./Navbar.css";
import { TbDeviceAnalytics } from "react-icons/tb";
function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            TRVL
            <i>
              <MdOutlineTravelExplore className="fa-typo3" />
            </i>
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i>
              {click ? (
                <MdClose className="fa-times" />
              ) : (
                <HiMenu className="fa-bars" />
              )}{" "}
            </i>
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-items">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-items">
              <Link
                to="/services"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Services
              </Link>
            </li>
            <li className="nav-items">
              <Link
                to="/products"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Products
              </Link>
            </li>
            <li className="nav-items">
              <Link
                to="/sign-up"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                Sign Up
              </Link>
            </li>
          </ul>
          {button && <Buttton buttonStyle="btn--outline">SIGN UP</Buttton>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
