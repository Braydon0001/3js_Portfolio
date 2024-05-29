import { OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useRef } from "react";

import CanvasLoader from "../Loader";

const Earth = () => {
  const earth = useGLTF("./planet/scene.gltf");
  return (
    <primitive
      is="x3d"
      object={earth.scene}
      scale={3}
      position-y={0}
      rotation-y={0}
    />
  );
};

const Controls = () => {
  const controlsRef = useRef<any>();

  useFrame(() => {
    if (controlsRef.current) {
      controlsRef.current.update();
    }
  });

  return (
    <OrbitControls
      ref={controlsRef}
      autoRotate
      autoRotateSpeed={0.4}
      enableZoom={false}
      maxPolarAngle={Math.PI / 2}
      minPolarAngle={Math.PI / 2}
    />
  );
};

const EarthCanvas = () => {
  return (
    <Canvas
      frameloop="demand"
      is="x3d"
      shadows
      resize={{ scroll: false }}
      gl={{ preserveDrawingBuffer: true }}
      camera={{ position: [-4, 3, 6], fov: 45, near: 0.1, far: 200 }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <Controls />
        <Earth />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;
