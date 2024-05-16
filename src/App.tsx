import { BrowserRouter } from "react-router-dom";
import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";
import Demos from "./components/Demos";
import ParrallaxBg from "./components/ParrallaxBg";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-bottom">
          <Navbar />
          <Hero />
        </div>
        <div className="bg-gradient-to-t from-[#11235f] to-primary bg-contain bg-no-repeat bg-top">
          <About />
        </div>
        <div className="relative">
          <div className="absolute w-full bg-gradient-to-b from-[#11235f] to-transparent top-0 h-[300px] z-30" />
          <ParrallaxBg>
            <Experience />
          </ParrallaxBg>
          <div className="absolute w-full bg-gradient-to-t from-[#11235f] to-transparent bottom-0 h-[300px] z-30" />
        </div>
        {/* <Tech /> */}
        <div className="relative">
          <div className="absolute w-full bg-gradient-to-b from-[#11235f] to-transparent top-0 h-[300px] z-30" />
          <div className="absolute w-full bg-[#11235f] h-full opacity-60 z-30" />
          <div className="absolute w-full bg-b9  h-full z-20 bg-cover bg-no-repeat bg-top" />
          <Demos />
          <div className="absolute w-full bg-gradient-to-t from-[#11235f] to-transparent bottom-0 h-[300px] z-30" />
        </div>
        <div className="relative">
          <div className="absolute w-full bg-gradient-to-b from-[#11235f] to-transparent top-0 h-[300px] z-30" />
          <div className="absolute w-full bg-[#11235f] h-full opacity-80 z-30" />
          <div className="absolute w-full bg-b7  h-full z-20 bg-cover bg-no-repeat bg-top" />
          <Works />
          <div className="absolute w-full bg-gradient-to-t from-[#11235f] to-transparent bottom-0 h-[300px] z-30" />
        </div>
        <Feedbacks />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
