import "./painting-right.css";
import Kedua from "./Lukisan/mengungsi-s.sudjojono.png";

function Paint6() {
  return (
    <div className="container4">
      <div className="image-container1 two">
        <img src={Kedua} alt="one" className="image1" />
      </div>
      <div className="content-container1">
        <h2 className="title1">Mengungsi</h2>
        <h3 className="sub-title1">Karya: S.Sudjojono</h3>
        <p className="description1">
          "Mengungsi" adalah karya seni lukis yang dibuat oleh S. Sudjojono,
          seorang pelukis Indonesia terkenal. Dalam karya ini, Sudjojono
          menggambarkan pengalaman dan perjuangan manusia dalam menghadapi
          konflik dan ketidakpastian. Lukisan tersebut mengungkapkan emosi yang
          kuat dan intens melalui pilihan warna yang dramatis dan komposisi yang
          ekspresif. Dalam lukisan "Mengungsi," Sudjojono menyampaikan pesan
          tentang keadaan manusia yang terdorong untuk meninggalkan rumah
          mereka, mencari perlindungan, dan mencoba bertahan dalam situasi yang
          sulit. Karya ini menggambarkan kemanusiaan yang rentan dan daya tahan
          yang luar biasa, serta mengajak pemirsa untuk merenungkan makna
          mendalam dari kehilangan, perubahan, dan harapan dalam konteks kondisi
          sosial dan politik yang tidak stabil.
        </p>
      </div>
    </div>
  );
}

export default Paint6;
