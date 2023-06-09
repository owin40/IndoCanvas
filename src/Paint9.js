import "./painting-left.css";
import Kesatu from "./Lukisan/penangkapanpangerandiponegoro-radensaleh.png";

function Paint9() {
  return (
    <div className="container3">
      <div className="image-container one">
        <img src={Kesatu} alt="one" className="image" />
      </div>
      <div className="content-container">
        <h2 className="title">Penangkapan Pangeran Diponegoro</h2>
        <h3 className="sub-title">Karya: Raden Saleh</h3>
        <p className="description">
          Makna dari "Penangkapan Diponegoro" karya Raden Saleh adalah tentang
          perlawanan dan ketegasan Diponegoro dalam menghadapi penjajahan
          Belanda.
        </p>
      </div>
    </div>
  );
}

export default Paint9;
