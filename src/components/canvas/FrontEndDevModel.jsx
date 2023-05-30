import React, { Suspense, useMemo } from "react";
import { Line, Sphere, Stage, OrbitControls } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import * as THREE from "three";
import { Canvas } from "@react-three/fiber";

const Atom = () => {
  const points = useMemo(
    () =>
      new THREE.EllipseCurve(0, 0, 3, 1.15, 0, 2 * Math.PI, false, 0).getPoints(
        100
      ),
    []
  );
  return (
    <group>
      <Line worldUnits points={points} color="#cae6f1" lineWidth={0.3} />
      <Line
        worldUnits
        points={points}
        color="#cae6f1"
        lineWidth={0.3}
        rotation={[0, 0, 1]}
      />
      <Line
        worldUnits
        points={points}
        color="#cae6f1"
        lineWidth={0.3}
        rotation={[0, 0, -1]}
      />
      <Sphere args={[0.55, 64, 64]}>
        <meshBasicMaterial color={[6, 0.5, 2]} toneMapped={false} />
      </Sphere>
    </group>
  );
};

const FrontEndDevModel = () => {
  return (
    <Canvas resize={{ scroll: false }} camera={{ position: [0, 0, 5] }}>
      <Suspense fallback={null}>
        {/* <Stage environment="city" intensity={0.6}> */}
        <Atom />
        <EffectComposer>
          <Bloom mipmapBlur luminanceThreshold={1} radius={0.5} />
        </EffectComposer>
        {/* </Stage> */}
        <OrbitControls enableZoom={false} autoRotate />
      </Suspense>
    </Canvas>
  );
};

export default FrontEndDevModel;
