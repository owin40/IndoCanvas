import "./Header.css";
import { Link } from "react-router-dom";

function Head() {
  return (
    <div>
      <header>
        <div className="container">
          <div id="logo"></div>
          <nav>
            <ul>
              <li className="atas">
                <Link to="/">Home</Link>
              </li>
              <li className="atas">
                <Link to="/about">About Us</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
}

export default Head;
