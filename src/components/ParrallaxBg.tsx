import { Parallax, ParallaxLayer } from "@react-spring/parallax";

const ParrallaxBg = () => {
  return (
    <Parallax
      pages={1}
      className="relative block z-20"
      style={{ overflow: "hidden" }}
    >
      <ParallaxLayer offset={0} speed={0.25}>
        <div className="bg-parallax-layer-1  w-full h-full z-[5] bg-cover bg-no-repeat bg-bottom " />
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={-0.3}>
        <div className="bg-parallax-layer-2  w-full h-full z-[10] bg-contain bg-no-repeat bg-bottom " />
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={0.5}>
        <div className="bg-parallax-layer-3  w-full h-full z-[15] bg-contain bg-no-repeat bg-bottom " />
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={0.8}>
        <div className="bg-parallax-layer-4  w-full h-full z-[20] bg-contain bg-no-repeat bg-bottom " />
      </ParallaxLayer>
    </Parallax>
  );
};

export default ParrallaxBg;
