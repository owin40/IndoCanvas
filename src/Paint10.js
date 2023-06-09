import "./painting-right.css";
import Kedua from "./Lukisan/perburuanbanteng-radensaleh.png";

function Paint10() {
  return (
    <div className="container4">
      <div className="image-container1 two">
        <img src={Kedua} alt="one" className="image1" />
      </div>
      <div className="content-container1">
        <h2 className="title1">Perburuan Banteng</h2>
        <h3 className="sub-title1">Karya: Raden Saleh</h3>
        <p className="description1">
          Banteng sebagai objek buruan melambangkan kebebasan dan keberanian
          alam, sementara para pemburu mencerminkan ambisi manusia untuk
          menguasai alam.
        </p>
      </div>
    </div>
  );
}

export default Paint10;
