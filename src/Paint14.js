import "./painting-right.css";
import Kedua from "./Lukisan/resting-s.sudjojono.jpeg";

function Paint14() {
  return (
    <div className="container4">
      <div className="image-container1 two">
        <img src={Kedua} alt="one" className="image1" />
      </div>
      <div className="content-container1">
        <h2 className="title1">Resting</h2>
        <h3 className="sub-title1">Karya: S.Sudjojono</h3>
        <p className="description1">
          Lukisan "Resting" karya S. Sudjojono menggambarkan makna pentingnya
          istirahat dan introspeksi dalam kehidupan yang sibuk. Lukisan ini
          mengajak kita untuk menghargai momen ketenangan, refleksi diri, dan
          mengisi ulang energi untuk menghadapi tantangan dengan lebih baik dan
          menemukan keseimbangan dalam kehidupan yang cepat.
        </p>
      </div>
    </div>
  );
}

export default Paint14;
