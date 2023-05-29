import "./painting-right.css";
import Kedua from "./Lukisan/pemandanganpriangan-abdullahsuriousbroto.png";

function Paint8() {
  return (
    <div className="container4">
      <div className="image-container1 two">
        <img src={Kedua} alt="one" className="image1" />
      </div>
      <div className="content-container1">
        <h2 className="title1">Pemandangan Priangan</h2>
        <h3 className="sub-title1">Karya: Abdullah Suriosubroto</h3>
        <p className="description1">
          "Pemandangan Priangan" karya Abdullah Suriosubroto adalah lukisan yang
          menggambarkan kekayaan alam Pegunungan Priangan dengan keindahannya.
          Lukisan ini mengajak kita untuk menjaga harmoni antara manusia dan
          alam serta menghargai keberagaman hayati yang ada di sekitar kita.
        </p>
      </div>
    </div>
  );
}

export default Paint8;
