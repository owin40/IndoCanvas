import "./painting-right.css";
import Kedua from "./Lukisan/ayam-tarung-affandi.png";

function Paint2() {
  return (
    <div className="container4">
      <div className="image-container1 two">
        <img src={Kedua} alt="one" className="image1" />
      </div>
      <div className="content-container1">
        <h2 className="title1">Ayam Tarung</h2>
        <h3 className="sub-title1">Karya: Affandi</h3>
        <p className="description1">
          lukisan Affandi ini Melukiskan sebuah pertarungan ayam yang sangat
          sengit, antara Ayam jago berwarna putih ke emasan dan Ayam jago
          berwarna hitam ke emasan, yang merupakan simbol pertarungan antara
          kejahatan dan kebenaran, itulah yang terjadi dalam kehidupan, dalam
          setiap diri manusia, dimana setiap waktu selalu dihadapkan antara dua
          pilihan baik dan buruk, selalu terjadi pertarungan antara keduanya,
          adakalanya kebenaran harus tersingkirkan, adakalanya kejahatan harus
          terhapuskan, namun yang pasti kebenaran akan selalu menang pada
          akhirnya.
        </p>
      </div>
    </div>
  );
}

export default Paint2;
