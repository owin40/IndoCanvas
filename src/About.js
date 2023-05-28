import "./Header.css";
import { Link } from "react-router-dom";

function About() {
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

      <section className="container mt-5">
        <div className="about"></div>

        <div className="row mt-4">
          <div className="col-md-6 col-lg-3 mb-4">
            <div className="card">
              <div className="card-img-top owin" alt="Godwin Gilbert Woisiri" />
              <div className="card-body">
                <h4 className="card-title">Godwin Gilbert Woisiri</h4>
                <p1 className="card-text">Desciption orang 1</p1>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 mb-4">
            <div className="card">
              <div className="card-img-top kyla" alt="Kyla Arynda Salsabila" />
              <div className="card-body">
                <h4 className="card-title">Kyla Arynda Salsabila</h4>
                <p1 className="card-text">Desciption orang 2</p1>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 mb-4">
            <div className="card">
              <div className="card-img-top amar" alt="Muhammad Amar Fadillah" />
              <div className="card-body">
                <h4 className="card-title">Muhammad Amar Fadillah</h4>
                <p1 className="card-text">Decription orang 3</p1>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 mb-4">
            <div className="card">
              <div
                className="card-img-top dhini"
                alt="Siti Maryama Ramadhini Afifah"
              />
              <div className="card-body">
                <h4 className="card-title">Siti Maryama Ramadhini Afifah</h4>
                <p1 className="card-text">Description orang 4</p1>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
