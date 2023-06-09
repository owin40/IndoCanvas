import "./painting-right.css";
import Kedua from "./Lukisan/hilirmudik-barlisasmitawinata.png";

function Paint4() {
  return (
    <div className="container4">
      <div className="image-container1 two">
        <img src={Kedua} alt="one" className="image1" />
      </div>
      <div className="content-container1">
        <h2 className="title1">Hilir Mudik</h2>
        <h3 className="sub-title1">Karya: Barli Sasmita Winata</h3>
        <p className="description1">
          Dari “mudik“ menjadi hilir mudik menjelaskan para perantaun atau
          perkerja migran yang ingin pulang ke kampung halamannya dengan alat
          transportasi perahu diatas arus aliran sungai.
        </p>
      </div>
    </div>
  );
}

export default Paint4;
