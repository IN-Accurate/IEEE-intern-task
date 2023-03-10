import React from "react";
import "./Footerwidget.css";

import {useState,useEffect} from 'react';
const FooterWidget = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <footer>
    {!isMobile&&(
      <div className="footer-widget">
        <div className="left-side">
          <div className="icon-header-container">
            <div>
              <div className="square">
                <div className="circle" />
              </div>
            </div>
            <div className="icon-header">UntitledUI</div>
          </div>
          <div className="icon-text">
            <div>Design amazing digital experiences that</div>
            <div>create more happy in the world.</div>
          </div>
        </div>
        <div className="footer-widget-column first-col">
          <h3>Product</h3>
          <ul>
            <li>Overview</li>
            <li>Features</li>
            <li>
              Solutions <span className="new">New</span>
            </li>
            <li>Tutorials</li>
            <li>Pricing</li>
            <li>Releases</li>
          </ul>
        </div>
        <div className="footer-widget-column">
          <h3>Company</h3>
          <ul>
            <li>About us</li>
            <li>Careers</li>
            <li>Press</li>
            <li>News</li>
            <li>Media kit</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="footer-widget-column">
          <h3>Resources</h3>
          <ul>
            <li>Blog</li>
            <li>Newsletter</li>
            <li>Events</li>
            <li>Help centre</li>
            <li>Tutorials</li>
            <li>Support</li>
          </ul>
        </div>
        <div className="footer-widget-column">
          <h3>Social</h3>
          <ul>
            <li>Twitter</li>
            <li>LinkedIn</li>
            <li>Facebook</li>
            <li>GitHub</li>
            <li>AngelList</li>
            <li>Dribbble</li>
          </ul>
        </div>
        <div className="footer-widget-column">
          <h3>Legal</h3>
          <ul>
            <li>Terms</li>
            <li>Privacy</li>
            <li>Cookies</li>
            <li>Licenses</li>
            <li>Settings</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>)}
    {isMobile&&(
      <div className="footer-widget">
        <div className="left-side">
          <div className="icon-header-container">
            <div>
              <div className="square">
                <div className="circle" />
              </div>
            </div>
            <div className="icon-header">UntitledUI</div>
          </div>
          <div className="icon-text">
            <span>Design amazing digital experiences that create more happy in the world.</span>
          </div>
        </div>
        <div className="footer-widget-container">
        <div className="footer-widget-column first-col">
          <h3>Product</h3>
          <ul>
            <li>Overview</li>
            <li>Features</li>
            <li>
              Solutions <span className="new">New</span>
            </li>
            <li>Tutorials</li>
            <li>Pricing</li>
            <li>Releases</li>
          </ul>
        </div>
        <div className="footer-widget-column">
          <h3>Company</h3>
          <ul>
            <li>About us</li>
            <li>Careers</li>
            <li>Press</li>
            <li>News</li>
            <li>Media kit</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="footer-widget-column">
          <h3>Resources</h3>
          <ul>
            <li>Blog</li>
            <li>Newsletter</li>
            <li>Events</li>
            <li>Help centre</li>
            <li>Tutorials</li>
            <li>Support</li>
          </ul>
        </div>
        <div className="footer-widget-column">
          <h3>Social</h3>
          <ul>
            <li>Twitter</li>
            <li>LinkedIn</li>
            <li>Facebook</li>
            <li>GitHub</li>
            <li>AngelList</li>
            <li>Dribbble</li>
          </ul>
        </div>
        <div className="footer-widget-column">
          <h3>Legal</h3>
          <ul>
            <li>Terms</li>
            <li>Privacy</li>
            <li>Cookies</li>
            <li>Licenses</li>
            <li>Settings</li>
            <li>Contact</li>
          </ul>
        </div></div>
      </div>)}
    
      
    </footer>
  );
};

export default FooterWidget;
