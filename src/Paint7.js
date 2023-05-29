import "./painting-left.css";
import Kesatu from "./Lukisan/pandandengankembangditangannya-s.sudjojono.jpeg";

function Paint7() {
  return (
    <div className="container3">
      <div className="image-container one">
        <img src={Kesatu} alt="one" className="image" />
      </div>
      <div className="content-container">
        <h2 className="title">Pandan dengan Kembang ditangannya</h2>
        <h3 className="sub-title">Karya: S.Sudjojono</h3>
        <p className="description">
          Dalam karya "Pandan dengan Kembang Ditangannya" karya S. Sudjojono,
          terdapat makna mendalam. Pandan dan kembang ditangannya melambangkan
          perjuangan dan keindahan dalam hidup, mengajarkan kita untuk tetap
          tegar dan berjuang mencari kebahagiaan di tengah kesulitan. Karya ini
          menggambarkan perpaduan antara dua elemen yang tampak bertentangan
          namun dapat hidup berdampingan dalam harmoni, mengajarkan kita untuk
          menerima dan menghargai keberagaman dalam kehidupan.
        </p>
      </div>
    </div>
  );
}

export default Paint7;
