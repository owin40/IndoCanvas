import "./painting-left.css";
import Kesatu from "./Lukisan/enampriaberbururusa-radensaleh.png";

function Paint3() {
  return (
    <div className="container3">
      <div className="image-container one">
        <img src={Kesatu} alt="one" className="image" />
      </div>
      <div className="content-container">
        <h2 className="title">Enam Pria Berburu Rusa</h2>
        <h3 className="sub-title">Karya: Raden Saleh</h3>
        <p className="description">
          Karya ini merupakan salah satu lukisan paling simbolis Raden Saleh
          yang menggambarkan perjuangan untuk bertahan hidup.
        </p>
      </div>
    </div>
  );
}

export default Paint3;
