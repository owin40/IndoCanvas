import "./Kotak.css";
import { useEffect, useRef } from "react";
import Aos from "aos";

function Kotak() {
  const containerRef = useRef(null);

  useEffect(() => {
    Aos.init({ duration: 2000 });

    const containerElement = containerRef.current;
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5, // Adjust threshold as needed
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          containerElement.classList.add("slide-in");
        } else {
          containerElement.classList.remove("slide-in");
        }
      });
    }, observerOptions);

    observer.observe(containerElement);

    return () => {
      observer.unobserve(containerElement);
    };
  }, []);

  return (
    <div>
      <div ref={containerRef} className="container2" data-aos="fade-down">
        <h1 id="judulkotak">INDO CANVAS</h1>
        <p>
          Selamat datang di dunia yang menakjubkan dari "Indo Canvas", di mana
          batas-batas fisik terbangkan dan kreasi seni mengalir bebas melalui
          serangkaian piksel yang memukau. Eksplorasi tak terbatas, temukan
          cerita di balik setiap kanvas, dan rasakan keajaiban seni dalam
          genggaman Anda. Selamat menikmati keindahan tak terbatas dari galeri
          seni online ini!!
        </p>
      </div>
    </div>
  );
}

export default Kotak;
