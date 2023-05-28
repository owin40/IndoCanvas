import "./Header.css";
import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import ReactGA from "react-ga";

function Head() {
  const location = useLocation();

  useEffect(() => {
    ReactGA.pageview(location.pathname + location.search);
  }, [location]);

  const trackLinkClick = () => {
    ReactGA.event({
      category: "Link Click",
      action: "Clicked a link",
      label: "Link clicked",
    });
  };

  return (
    <div>
      <header>
        <div className="container">
          <div id="logo"></div>
          <nav>
            <ul>
              <li className="atas">
                <Link to="/" onClick={trackLinkClick}>
                  Home
                </Link>
              </li>
              <li className="atas">
                <Link to="/about" onClick={trackLinkClick}>
                  About Us
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
}

export default Head;
