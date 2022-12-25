import React from "react";
import { Sling as Hamburger } from "hamburger-react";
import "./Hamburger.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

function HamburgerMenu() {
    const [isOpen, setOpen] = useState(false);

  return (
    <div className="hamburger-container">
        <div className="navbar-logo">
            <div className="logo-icon-container" >
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
              <div>Home</div>
            </li>
            <li className="hamburger-navbar-item hamburger-dropdown">
              <div>
                Products <FontAwesomeIcon icon={faCaretDown} />
              </div>
              <div className="hamburger-dropdown-content">
                <div className="hamburger-dropdown-item">
                  Product 1
                </div>
                <div className="hamburger-dropdown-item">
                  Product 2
                </div>
                <div className="hamburger-dropdown-item">
                  Product 3
                </div>
              </div>
            </li>
            <li className="hamburger-navbar-item hamburger-dropdown">
              <div>
                Resources <FontAwesomeIcon icon={faCaretDown} />
              </div>
              <div className="hamburger-dropdown-content">
                <div className="hamburger-dropdown-item">
                  Resource 1
                </div>
                <div className="hamburger-dropdown-item">
                  Resource 2
                </div>
                <div className="hamburger-dropdown-item">
                  Resource 3
                </div>
              </div>
            </li>
            <li className="hamburger-navbar-item">
              <div>Pricing</div>
            </li>
          </ul>
        </nav>
      )} 
      <Hamburger duration={0.8} className="hamburger-icon" toggled={isOpen} toggle={setOpen} />
    
    </div>
  );
}

export default HamburgerMenu;
