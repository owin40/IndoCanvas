import "./painting-right.css";
import Kedua from "./Lukisan/perburuansinga-radensaleh.png";

function Paint12() {
  return (
    <div className="container4">
      <div className="image-container1 two">
        <img src={Kedua} alt="one" className="image1" />
      </div>
      <div className="content-container1">
        <h2 className="title1">Perburuan Singa</h2>
        <h3 className="sub-title1">Karya: Raden Saleh</h3>
        <p className="description1">
          Lukisan ini menggambarkan konfrontasi antara manusia dan binatang
          buas, yang melambangkan pertarungan antara kekuatan dan keberanian.
        </p>
      </div>
    </div>
  );
}

export default Paint12;
