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
          Lukisan karya Barli Sasmita Winata ini menjelaskan, menunjukan arus
          aliran sungai dikawasan dengan kata “hilir” yang berarti arus aliran
          sungai. Dan di tambah lagi dengan para perantau atau perkerja migran
          yang bertransportasi perahu untuk kembali ke kampung halamannya . itu
          kenapa ada kata “mudik“dijudulnya Jadi hilir mudik menjelaskan para
          perantauatau perkerja migran yang ingin pulang ke kampunghalamnnya
          dengan alat transportasi perahu diatas arus aliran sungai
        </p>
      </div>
    </div>
  );
}

export default Paint4;
