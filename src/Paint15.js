import "./painting-left.css";
import Kesatu from "./Lukisan/wisdomoftheeast-affandi.png";

function Paint15() {
  return (
    <div className="container3">
      <div className="image-container one">
        <img src={Kesatu} alt="one" className="image" />
      </div>
      <div className="content-container">
        <h2 className="title">Wisdom of The East</h2>
        <h3 className="sub-title">Karya: Affandi</h3>
        <p className="description">
          Lukisan ini mengajak kita untuk menghormati dan mengambil pelajaran
          dari tradisi Timur, serta menjaga kekayaan warisan budaya sebagai
          sumber inspirasi yang berharga dalam kehidupan masa kini.
        </p>
      </div>
    </div>
  );
}

export default Paint15;
