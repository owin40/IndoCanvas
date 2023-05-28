import "./painting-left.css";
import Kesatu from "./Lukisan/javanesesmailstation-radensaleh.png";

function Paint5() {
  return (
    <div className="container3">
      <div className="image-container one">
        <img src={Kesatu} alt="one" className="image" />
      </div>
      <div className="content-container">
        <h2 className="title">Javanese Mail Station</h2>
        <h3 className="sub-title">Karya: Raden Saleh</h3>
        <p className="description">
          Lukisan "Javanese Mail Station" karya Raden Saleh memiliki makna yang
          dalam. Melalui lukisan ini, Raden Saleh menggambarkan stasiun pos di
          Jawa yang menjadi simbol pentingnya transportasi dalam menghubungkan
          wilayah dan masyarakat. Lukisan ini mencerminkan perubahan sosial dan
          kemajuan yang terjadi pada masa itu, menyoroti peran penting stasiun
          pos dalam mengirim surat, berita, dan informasi penting.
        </p>
      </div>
    </div>
  );
}

export default Paint5;
