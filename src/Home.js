import { useEffect } from "react";
import ReactGA from "react-ga";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Head from "./Head";
import Kotak from "./Kotak";
import Paint1 from "./Paint1";
import Paint2 from "./Paint2";
import Paint3 from "./Paint3";
import Paint4 from "./Paint4";
import Paint5 from "./Paint5";
import Paint6 from "./Paint6";
import Paint7 from "./Paint7";
import Paint8 from "./Paint8";
import Paint9 from "./Paint9";
import Paint10 from "./Paint10";
import Paint11 from "./Paint11";
import Paint12 from "./Paint12";
import Paint13 from "./Paint13";
import Paint14 from "./Paint14";
import Paint15 from "./Paint15";
import Kesatu from "./Lukisan/a-flood-in-java-raden-saleh.png";
import Kedua from "./Lukisan/ayam-tarung-affandi.png";
import Ketiga from "./Lukisan/enampriaberbururusa-radensaleh.png";
import Keempat from "./Lukisan/hilirmudik-barlisasmitawinata.png";
import Kelima from "./Lukisan/javanesesmailstation-radensaleh.png";
import Keenam from "./Lukisan/mengungsi-s.sudjojono.png";
import Ketujuh from "./Lukisan/pandandengankembangditangannya-s.sudjojono.jpeg";
import Kedelapan from "./Lukisan/pemandanganpriangan-abdullahsuriousbroto.png";
import Kesembilan from "./Lukisan/penangkapanpangerandiponegoro-radensaleh.png";
import Kesepuluh from "./Lukisan/perburuanbanteng-radensaleh.png";
import Kesebelas from "./Lukisan/perburuanrusa-radensaleh.png";
import Keduabelas from "./Lukisan/perburuansinga-radensaleh.png";
import Ketigabelas from "./Lukisan/persiapangerilya-S.Sudjojono.png";
import Keempatbelas from "./Lukisan/resting-s.sudjojono.jpeg";
import Kelimabelas from "./Lukisan/wisdomoftheeast-affandi.png";

function Home() {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
  }, []);

  return (
    <>
      <Parallax
        pages={17}
        style={{ top: "0", left: "0" }}
        className="animation scroll-container"
      >
        <ParallaxLayer offset={0} speed={0}>
          <div className="animation_layer parallax" id="bg-uncut"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={-0.3}>
          <div className="animation_layer parallax" id="title2"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0}>
          <div className="animation_layer parallax" id="bg-cut"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0}>
          <div className="animation_layer parallax" id="overlay"></div>
        </ParallaxLayer>

        <ParallaxLayer offset={0} speed={0}>
          <Head />
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.8}>
          <div className="animation_layer parallax" id="paper"></div>
          <Kotak />
        </ParallaxLayer>

        <ParallaxLayer offset={2} speed={0}>
          <div className="animation_layer parallax" id="white"></div>
          <img src={Kesatu} alt="lukisan" id="strd" />
        </ParallaxLayer>
        <ParallaxLayer offset={2} speed={0}>
          <div className="animation_layer parallax" id="bg3-atas"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={2} speed={0}>
          <div className="animation_layer parallax" id="bg3-bawah"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={2} speed={0}>
          <div className="animation_layer parallax" id="bg3-bawah"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={2} speed={1.5}>
          <div className="animation_layer parallax" id="kris"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={2} speed={1}>
          <Paint1 />
        </ParallaxLayer>

        <ParallaxLayer offset={3} speed={0}>
          <div className="animation_layer parallax" id="white"></div>
          <img src={Kedua} alt="lukisan" id="strd" />
        </ParallaxLayer>
        <ParallaxLayer offset={3} speed={0}>
          <div className="animation_layer parallax" id="bg3-atas"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={3} speed={0}>
          <div className="animation_layer parallax" id="bg3-bawah"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={3} speed={1.5}>
          <div className="animation_layer parallax" id="awan-kiri"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={3} speed={1}>
          <Paint2 />
        </ParallaxLayer>

        <ParallaxLayer offset={4} speed={0}>
          <div className="animation_layer parallax" id="white"></div>
          <img src={Ketiga} alt="lukisan" id="strd" />
        </ParallaxLayer>
        <ParallaxLayer offset={4} speed={0}>
          <div className="animation_layer parallax" id="bg3-atas"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={4} speed={0}>
          <div className="animation_layer parallax" id="bg3-bawah"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={4} speed={1}>
          <div className="animation_layer parallax" id="acc11"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={4} speed={1}>
          <Paint3 />
        </ParallaxLayer>

        <ParallaxLayer offset={5} speed={0}>
          <div className="animation_layer parallax" id="white"></div>
          <img src={Keempat} alt="lukisan" id="strd" />
        </ParallaxLayer>
        <ParallaxLayer offset={5} speed={0}>
          <div className="animation_layer parallax" id="bg3-atas"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={5} speed={0}>
          <div className="animation_layer parallax" id="bg3-bawah"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={5} speed={1.5}>
          <div className="animation_layer parallax" id="acc22"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={5} speed={1}>
          <Paint4 />
        </ParallaxLayer>

        <ParallaxLayer offset={6} speed={0}>
          <div className="animation_layer parallax" id="white"></div>
          <img src={Kelima} alt="lukisan" id="strd" />
        </ParallaxLayer>
        <ParallaxLayer offset={6} speed={0}>
          <div className="animation_layer parallax" id="bg3-atas"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={6} speed={0}>
          <div className="animation_layer parallax" id="bg3-bawah"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={6} speed={1.5}>
          <div className="animation_layer parallax" id="awan-kanan"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={5} speed={1}></ParallaxLayer>
        <ParallaxLayer offset={6} speed={1}>
          <Paint5 />
        </ParallaxLayer>

        <ParallaxLayer offset={7} speed={0}>
          <div className="animation_layer parallax" id="white"></div>
          <img src={Keenam} alt="lukisan" id="strd" />
        </ParallaxLayer>
        <ParallaxLayer offset={7} speed={0}>
          <div className="animation_layer parallax" id="bg3-atas"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={7} speed={0}>
          <div className="animation_layer parallax" id="bg3-bawah"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={7} speed={1.5}>
          <div className="animation_layer parallax" id="awan-kiri"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={7} speed={1}>
          <Paint6 />
        </ParallaxLayer>

        <ParallaxLayer offset={8} speed={0}>
          <div className="animation_layer parallax" id="white"></div>
          <img src={Ketujuh} alt="lukisan" id="strd" />
        </ParallaxLayer>
        <ParallaxLayer offset={8} speed={0}>
          <div className="animation_layer parallax" id="bg3-atas"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={8} speed={0}>
          <div className="animation_layer parallax" id="bg3-bawah"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={8} speed={1.5}>
          <div className="animation_layer parallax" id="awan-kanan"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={8} speed={1}>
          <Paint7 />
        </ParallaxLayer>

        <ParallaxLayer offset={9} speed={0}>
          <div className="animation_layer parallax" id="white"></div>
          <img src={Kedelapan} alt="lukisan" id="strd" />
        </ParallaxLayer>
        <ParallaxLayer offset={9} speed={0}>
          <div className="animation_layer parallax" id="bg3-atas"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={9} speed={0}>
          <div className="animation_layer parallax" id="bg3-bawah"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={9} speed={1.5}>
          <div className="animation_layer parallax" id="awan-kiri"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={9} speed={1}>
          <Paint8 />
        </ParallaxLayer>

        <ParallaxLayer offset={10} speed={0}>
          <div className="animation_layer parallax" id="white"></div>
          <img src={Kesembilan} alt="lukisan" id="strd" />
        </ParallaxLayer>
        <ParallaxLayer offset={10} speed={0}>
          <div className="animation_layer parallax" id="bg3-atas"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={10} speed={0}>
          <div className="animation_layer parallax" id="bg3-bawah"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={10} speed={1.5}>
          <div className="animation_layer parallax" id="awan-kanan"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={10} speed={1}>
          <Paint9 />
        </ParallaxLayer>

        <ParallaxLayer offset={11} speed={0}>
          <div className="animation_layer parallax" id="white"></div>
          <img src={Kesepuluh} alt="lukisan" id="strd" />
        </ParallaxLayer>
        <ParallaxLayer offset={11} speed={0}>
          <div className="animation_layer parallax" id="bg3-atas"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={11} speed={0}>
          <div className="animation_layer parallax" id="bg3-bawah"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={11} speed={1.5}>
          <div className="animation_layer parallax" id="awan-kiri"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={11} speed={1}>
          <Paint10 />
        </ParallaxLayer>

        <ParallaxLayer offset={12} speed={0}>
          <div className="animation_layer parallax" id="white"></div>
          <img src={Kesebelas} alt="lukisan" id="strd" />
        </ParallaxLayer>
        <ParallaxLayer offset={12} speed={0}>
          <div className="animation_layer parallax" id="bg3-atas"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={12} speed={0}>
          <div className="animation_layer parallax" id="bg3-bawah"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={12} speed={1.5}>
          <div className="animation_layer parallax" id="awan-kanan"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={12} speed={1}>
          <Paint11 />
        </ParallaxLayer>

        <ParallaxLayer offset={13} speed={0}>
          <div className="animation_layer parallax" id="white"></div>
          <img src={Keduabelas} alt="lukisan" id="strd" />
        </ParallaxLayer>
        <ParallaxLayer offset={13} speed={0}>
          <div className="animation_layer parallax" id="bg3-atas"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={13} speed={0}>
          <div className="animation_layer parallax" id="bg3-bawah"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={13} speed={1.5}>
          <div className="animation_layer parallax" id="awan-kiri"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={13} speed={1}>
          <Paint12 />
        </ParallaxLayer>

        <ParallaxLayer offset={14} speed={0}>
          <div className="animation_layer parallax" id="white"></div>
          <img src={Ketigabelas} alt="lukisan" id="strd" />
        </ParallaxLayer>
        <ParallaxLayer offset={14} speed={0}>
          <div className="animation_layer parallax" id="bg3-atas"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={14} speed={0}>
          <div className="animation_layer parallax" id="bg3-bawah"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={14} speed={1.5}>
          <div className="animation_layer parallax" id="awan-kanan"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={14} speed={1}>
          <Paint13 />
        </ParallaxLayer>

        <ParallaxLayer offset={15} speed={0}>
          <div className="animation_layer parallax" id="white"></div>
          <img src={Keempatbelas} alt="lukisan" id="strd" />
        </ParallaxLayer>
        <ParallaxLayer offset={15} speed={0}>
          <div className="animation_layer parallax" id="bg3-atas"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={15} speed={0}>
          <div className="animation_layer parallax" id="bg3-bawah"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={15} speed={1.5}>
          <div className="animation_layer parallax" id="awan-kiri"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={15} speed={1}>
          <Paint14 />
        </ParallaxLayer>

        <ParallaxLayer offset={16} speed={0}>
          <div className="animation_layer parallax" id="white"></div>
          <img src={Kelimabelas} alt="lukisan" id="strd" />
        </ParallaxLayer>
        <ParallaxLayer offset={16} speed={0}>
          <div className="animation_layer parallax" id="bg3-atas"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={16} speed={0}>
          <div className="animation_layer parallax" id="bg3-bawah"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={16} speed={1.5}>
          <div className="animation_layer parallax" id="awan-kanan"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={16} speed={1}>
          <Paint15 />
        </ParallaxLayer>
      </Parallax>
    </>
  );
}

export default Home;
