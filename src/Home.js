import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Head from "./Head";
import Kotak from "./Kotak";
import Paint1 from "./Paint1";
import Paint2 from "./Paint2";
import Kesatu from "./Lukisan/a-flood-in-java-raden-saleh.png";
import Kedua from "./Lukisan/ayam-tarung-affandi.png";

function Home() {
  return (
    <>
      <Parallax pages={4} style={{ top: "0", left: "0" }} class="animation">
        <ParallaxLayer offset={0} speed={0}>
          <div class="animation_layer parallax" id="bg-uncut"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={-0.3}>
          <div class="animation_layer parallax" id="title2"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0}>
          <div class="animation_layer parallax" id="bg-cut"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0}>
          <div class="animation_layer parallax" id="overlay"></div>
        </ParallaxLayer>

        <ParallaxLayer offset={0} speed={0}>
          <Head />
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.8}>
          <div class="animation_layer parallax" id="paper"></div>
          <Kotak />
        </ParallaxLayer>

        <ParallaxLayer offset={2} speed={0}>
          <div class="animation_layer parallax" id="white"></div>
          <img src={Kesatu} alt="satu" id="strd" />
        </ParallaxLayer>
        <ParallaxLayer offset={2} speed={0}>
          <div class="animation_layer parallax" id="bg3"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={2} speed={1}>
          <Paint1 />
        </ParallaxLayer>

        <ParallaxLayer offset={3} speed={0}>
          <div class="animation_layer parallax" id="white"></div>
          <img src={Kedua} alt="satu" id="strd" />
        </ParallaxLayer>
        <ParallaxLayer offset={3} speed={0}>
          <div class="animation_layer parallax" id="bg3"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={3} speed={1}>
          <Paint2 />
        </ParallaxLayer>
      </Parallax>
    </>
  );
}

export default Home;
