import "./painting-left.css";
import Kesatu from "./Lukisan/persiapangerilya-S.Sudjojono.png";

function Paint13() {
  return (
    <div className="container3">
      <div className="image-container one">
        <img src={Kesatu} alt="one" className="image" />
      </div>
      <div className="content-container">
        <h2 className="title">Persiapan Gerilya</h2>
        <h3 className="sub-title">Karya: S.Sudjojono</h3>
        <p className="description">
          Lukisan ini menggambarkan seorang perempuan yang tegar dan penuh
          ketabahan, siap menghadapi perubahan dan tantangan hidup.
        </p>
      </div>
    </div>
  );
}

export default Paint13;
