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
          Dalam karya "Persiapan Griliya" karya S. Sudjojono, terdapat makna
          yang tajam. Lukisan ini menggambarkan seorang perempuan yang tegar dan
          penuh ketabahan, siap menghadapi perubahan dan tantangan hidup. Karya
          ini menginspirasi untuk menghargai kekuatan dan ketahanan perempuan
          serta menggambarkan pentingnya persiapan dan keberanian dalam
          menghadapi perubahan.
        </p>
      </div>
    </div>
  );
}

export default Paint13;
