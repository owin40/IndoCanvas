import "./painting-right.css";
import Kedua from "./Lukisan/mengungsi-s.sudjojono.png";

function Paint6() {
  return (
    <div className="container4">
      <div className="image-container1 two">
        <img src={Kedua} alt="one" className="image1" />
      </div>
      <div className="content-container1">
        <h2 className="title1">Mengungsi</h2>
        <h3 className="sub-title1">Karya: S.Sudjojono</h3>
        <p className="description1">
          Dalam karya ini, Sudjojono menggambarkan pengalaman dan perjuangan
          manusia dalam menghadapi konflik dan ketidakpastian.
        </p>
      </div>
    </div>
  );
}

export default Paint6;
