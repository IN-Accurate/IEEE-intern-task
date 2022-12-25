import React from "react";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import Hamburger from "../Hamburger/Hamburger";

function Navbar() {
  const [isMobile, setIsMobile] = useState(false);
  const handleLogoClick = () => {
    window.location.href = '/';
  }
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div>
      {!isMobile && (
        <nav className="navbar">
          <div className="navbar-logo">
            <div className="logo-icon-container" onClick={handleLogoClick}>
              <div className="square">
                <div className="circle" />
              </div>
            </div>
            <div className="navbar-logo-text">UntitledUI</div>
          </div>
          <ul className="navbar-items">
            <li className="navbar-item">
              <div>Home</div>
            </li>
            <li className="navbar-item dropdown">
              <div>
                Products <FontAwesomeIcon icon={faCaretDown} />
              </div>
              <div className="dropdown-content">
                <a href="/product1" className="dropdown-item">
                  Product 1
                </a>
                <a href="/product2" className="dropdown-item">
                  Product 2
                </a>
                <div className="dropdown-item">
                  Product 3
                </div>
              </div>
            </li>
            <li className="navbar-item dropdown">
              <div>
                Resources <FontAwesomeIcon icon={faCaretDown} />
              </div>
              <div className="dropdown-content">
                <div className="dropdown-item">
                  Resource 1
                </div>
                <div className="dropdown-item">
                  Resource 2
                </div>
                <div className="dropdown-item">
                  Resource 3
                </div>
              </div>
            </li>
            <li className="navbar-item">
              <div>Pricing</div>
            </li>
          </ul>
        </nav>
      )}
      {isMobile && (
        <Hamburger/>
      )}
    </div>
  );
}

export default Navbar;
