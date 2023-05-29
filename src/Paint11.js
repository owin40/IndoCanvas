import "./painting-left.css";
import Kesatu from "./Lukisan/perburuanrusa-radensaleh.png";

function Paint11() {
  return (
    <div className="container3">
      <div className="image-container one">
        <img src={Kesatu} alt="one" className="image" />
      </div>
      <div className="content-container">
        <h2 className="title">Perburuan Rusa</h2>
        <h3 className="sub-title">Karya: Raden Saleh</h3>
        <p className="description">
          Dalam lukisan "Pemburuan Rusa" karya Raden Saleh, terdapat makna
          tentang konflik antara keindahan alam dan ambisi manusia. Rusa yang
          elegan melambangkan kebebasan dan harmoni alam, sedangkan pemburu
          mencerminkan dorongan manusia untuk menguasai dan mengendalikan. Karya
          ini mengajak kita untuk merenungkan dampak dari ambisi manusia
          terhadap alam serta pentingnya menjaga keseimbangan dan rasa hormat
          terhadap kehidupan liar.
        </p>
      </div>
    </div>
  );
}

export default Paint11;
