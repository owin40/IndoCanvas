import "./Header.css";
import { Link } from "react-router-dom";

function Head() {
  return (
    <div>
      <header>
        <div className="container">
          <h1>Culture Gallery</h1>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
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
