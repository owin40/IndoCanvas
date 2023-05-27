import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Head from "./Head";

const Home = () => {
  return (
    <>
      <Parallax pages={2} style={{ top: "0", left: "0" }} class="animation">
        <ParallaxLayer offset={0} speed={0.2}>
          <div class="animation_layer parallax" id="pg1-bg"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={-0.3}>
          <div class="animation_layer parallax" id="title"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.4}>
          <div class="animation_layer parallax" id="acc11"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.2}>
          <div class="animation_layer parallax" id="overlay"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={1.0}>
          <div class="animation_layer parallax" id="acc22"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={-0.3}>
          <div class="animation_layer parallax" id="title-stroke"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0}>
          <Head />
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={0.2}>
          <div class="animation_layer parallax" id="pg2-bg"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={1.5}>
          <div class="animation_layer parallax" id="acc33"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={2.5}>
          <div class="animation_layer parallax" id="acc44"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={0.35}>
          <div class="animation_layer parallax" id="acc55"></div>
        </ParallaxLayer>
      </Parallax>
    </>
  );
};

export default Home;
