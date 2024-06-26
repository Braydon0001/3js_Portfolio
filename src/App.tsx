import { BrowserRouter } from "react-router-dom";
import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Works,
  StarsCanvas,
} from "./components";
import Demos from "./components/Demos";
import ParrallaxBg from "./components/ParrallaxBg";
import { Icon } from "./components/Icon";

const App = () => {
  return (
    <BrowserRouter>
      <div id="home" className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-bottom">
          <Navbar />
          <Hero />
        </div>
        <div
          id="about"
          className="bg-gradient-to-t from-[#11235f] to-primary bg-contain bg-no-repeat bg-top -mt-[1px] md:-mt-1"
        >
          <About />
        </div>
        <div id="experience" className="relative md:mt-0 mt-[-1px]">
          <div className="absolute w-full bg-gradient-to-b from-[#11235f] to-transparent top-0 h-[300px] z-30" />

          <div className="absolute w-full bg-[#11235f] h-full opacity-50 z-[5] md:hidden" />
          <ParrallaxBg>
            <Experience />
          </ParrallaxBg>
          <div className="absolute w-full bg-gradient-to-t from-[#11235f] to-transparent bottom-0 h-[300px] z-30" />
        </div>
        {/* <Tech /> */}
        <div id="demos" className="relative">
          <div className="absolute w-full bg-gradient-to-b from-[#11235f] to-transparent top-0 h-[300px] z-30" />
          <div className="absolute w-full bg-[#11235f] h-full opacity-60 z-30" />
          <div className="absolute w-full bg-b9  h-full z-20 bg-contain md:bg-cover bg-no-repeat bg-top" />
          <Demos />
          <div className="absolute w-full bg-gradient-to-t from-[#11235f] to-transparent bottom-0 h-[300px] z-30" />
        </div>
        <div id="projects" className="relative">
          <div className="absolute w-full bg-gradient-to-b from-[#11235f] to-transparent top-0 h-[300px] z-30" />
          <div className="absolute w-full bg-[#11235f] h-full opacity-90 z-30" />
          <div className="absolute w-full bg-b7  h-full z-20 bg-cover bg-no-repeat bg-top" />
          <Works />
          <div className="absolute w-full bg-gradient-to-t from-[#020f3d] to-transparent bottom-0 h-[300px] z-30" />
        </div>
        <div id="contact" className="relative z-0">
          <div className="absolute w-full bg-gradient-to-b from-[#020f3d] to-transparent top-0 h-[100px] z-40" />
          <div className="absolute w-full bg-[#020f3d] h-full  z-30" />
          <Contact />
          <StarsCanvas />
          <div className="absolute w-full bg-gradient-to-t from-[#11235f] to-transparent bottom-0 h-[120px] opacity-70 z-20 md:z-30" />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
