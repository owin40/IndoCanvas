import "./painting-left.css";
import Kesatu from "./Lukisan/a-flood-in-java-raden-saleh.png";

function Paint1() {
  return (
    <div className="container3">
      <div className="image-container one">
        <img src={Kesatu} alt="one" className="image" />
      </div>
      <div className="content-container">
        <h2 className="title">Banjir di Jawa</h2>
        <h3 className="sub-title">Karya: Raden Saleh</h3>
        <p className="description">
          Sapuan kuas Raden Saleh mampu menggambarkan adegan kesengsaraan yang
          menyentuh. Terlihat orang-orang pribumi Jawa Tengah yang bertahan
          hidup dari banjir dahsyat yang melanda wilayah Banyumas. Digambarkan,
          bagaimana warga di tempat tertinggi tengah duduk dan berdiri
          berhimpit-himpitan, sementara air terus naik mengejar.
        </p>
      </div>
    </div>
  );
}

export default Paint1;
