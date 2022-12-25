import React from "react";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

import { useState, useEffect } from "react";
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
              <a href="/">Home</a>
            </li>
            <li className="navbar-item dropdown">
              <a href="/products">
                Products <FontAwesomeIcon icon={faCaretDown} />
              </a>
              <div className="dropdown-content">
                <a href="/product1" className="dropdown-item">
                  Product 1
                </a>
                <a href="/product2" className="dropdown-item">
                  Product 2
                </a>
                <a href="/product3" className="dropdown-item">
                  Product 3
                </a>
              </div>
            </li>
            <li className="navbar-item dropdown">
              <a href="/resources">
                Resources <FontAwesomeIcon icon={faCaretDown} />
              </a>
              <div className="dropdown-content">
                <a href="/resource1" className="dropdown-item">
                  Resource 1
                </a>
                <a href="/resource2" className="dropdown-item">
                  Resource 2
                </a>
                <a href="/resource3" className="dropdown-item">
                  Resource 3
                </a>
              </div>
            </li>
            <li className="navbar-item">
              <a href="/pricing">Pricing</a>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
}

export default Navbar;
