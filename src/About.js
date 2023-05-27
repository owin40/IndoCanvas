import "./Header.css";
import { Link } from "react-router-dom";

function About() {
  return (
    <div>
      <header>
        <div class="container">
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

      <section class="container mt-5">
        <div class="about"></div>

        <div class="row mt-4">
          <div class="col-md-6 col-lg-3 mb-4">
            <div class="card">
              <img class="card-img-top" src="foto" alt="Card image" />
              <div class="card-body">
                <h4 class="card-title">Godwin Gilbert Woisiri</h4>
                <p1 class="card-text">Desciption orang 1</p1>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-3 mb-4">
            <div class="card">
              <img class="card-img-top" src="foto" alt="Card image" />
              <div class="card-body">
                <h4 class="card-title">Kyla Arynda Salsabila</h4>
                <p1 class="card-text">Desciption orang 2</p1>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-3 mb-4">
            <div class="card">
              <img class="card-img-top" src="foto" alt="Card image" />
              <div class="card-body">
                <h4 class="card-title">Muhammad Amar Fadillah</h4>
                <p1 class="card-text">Decription orang 3</p1>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-3 mb-4">
            <div class="card">
              <img class="card-img-top" src="foto" alt="Card image" />
              <div class="card-body">
                <h4 class="card-title">Siti Maryama Ramadhini Afifah</h4>
                <p1 class="card-text">Description orang 4</p1>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
