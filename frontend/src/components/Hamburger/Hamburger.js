import React from "react";
import { Sling as Hamburger } from "hamburger-react";
import "./Hamburger.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

function HamburgerMenu() {
    const [isOpen, setOpen] = useState(false);

    const handleLogoClick = () => {
        window.location.href = '/';
      }
  return (
    <div className="hamburger-container">
        <div className="navbar-logo">
            <div className="logo-icon-container" onClick={handleLogoClick}>
              <div className="square">
                <div className="circle" />
              </div>
            </div>
            <div className="navbar-logo-text">UntitledUI</div>
          </div>
      {isOpen &&(
        <nav className="hamburger-navbar">
          
          <ul className="hamburger-navbar-items">
            <li className="hamburger-navbar-item">
              <a href="/">Home</a>
            </li>
            <li className="hamburger-navbar-item hamburger-dropdown">
              <a href="/products">
                Products <FontAwesomeIcon icon={faCaretDown} />
              </a>
              <div className="hamburger-dropdown-content">
                <a href="/product1" className="hamburger-dropdown-item">
                  Product 1
                </a>
                <a href="/product2" className="hamburger-dropdown-item">
                  Product 2
                </a>
                <a href="/product3" className="hamburger-dropdown-item">
                  Product 3
                </a>
              </div>
            </li>
            <li className="hamburger-navbar-item hamburger-dropdown">
              <a href="/resources">
                Resources <FontAwesomeIcon icon={faCaretDown} />
              </a>
              <div className="hamburger-dropdown-content">
                <a href="/resource1" className="hamburger-dropdown-item">
                  Resource 1
                </a>
                <a href="/resource2" className="hamburger-dropdown-item">
                  Resource 2
                </a>
                <a href="/resource3" className="hamburger-dropdown-item">
                  Resource 3
                </a>
              </div>
            </li>
            <li className="hamburger-navbar-item">
              <a href="/pricing">Pricing</a>
            </li>
          </ul>
        </nav>
      )} 
      <Hamburger duration={0.8} className="hamburger-icon" toggled={isOpen} toggle={setOpen} />
    
    </div>
  );
}

export default HamburgerMenu;
