import { Suspense, useEffect, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computers = ({ isMobile, isTablet }) => {
  const computer = useGLTF("./gaming_desktop_pc/scene.gltf");

  return (
    // @ts-ignore
    <mesh is="x3d">
      {/* @ts-ignore */}
      <hemisphereLight is="x3d" intenstity={0.15} groundColor="#aaa" />
      {/* @ts-ignore */}
      <pointLight is="x3d" intenstity={1} />
      <spotLight
        position={[-20, -50, -50]}
        angle={0.12}
        // @ts-ignore
        penubra={1}
        intenstity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive
        is="x3d"
        object={computer.scene}
        scale={isMobile ? 0.3 : isTablet ? 0.4 : 0.7}
        position={
          isMobile
            ? [0, -1.25, -0.5]
            : isTablet
            ? [0, -1.95, -0.7]
            : [0, -3.25, -1.5]
        }
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputerCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  //changing the isMobile state
  useEffect(() => {
    const mobileMediaQuery = window.matchMedia("(max-width: 500px)");
    const tabletMediaQuery = window.matchMedia("(max-width: 1366px)");

    setIsMobile(mobileMediaQuery.matches);
    setIsTablet(tabletMediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    const handleTabletMediaQueryChange = (event) => {
      setIsTablet(event.matches);
    };

    mobileMediaQuery.addEventListener("change", handleMediaQueryChange);
    tabletMediaQuery.addEventListener("change", handleTabletMediaQueryChange);

    return () => {
      mobileMediaQuery.removeEventListener("change", handleMediaQueryChange);
      tabletMediaQuery.removeEventListener(
        "change",
        handleTabletMediaQueryChange
      );
    };
  }, []);

  return (
    <Canvas
      resize={{ scroll: false }}
      is="x3d"
      frameloop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          autoRotateSpeed={0.4}
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} isTablet={isTablet} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputerCanvas;
