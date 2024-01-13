import { Suspense, useEffect, useRef, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'

import CanvasLoader from '../Loader'

const Figma = ({ isMobile }) => {
  const FigmaModel = useGLTF('./figma/scene.gltf')

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
        object={FigmaModel.scene}
        scale={isMobile ? 2 : 4}
        position={isMobile ? [0, -1.25, -0.5] : [0, 0, 0]}
      />
    </mesh>
  )
}

const FigmaCanvas = () => {
  const [isMobile, setIsMobile] = useState(false)

  //changing the isMobile state
  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 500px)')

    setIsMobile(mediaQuery.matches)

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches)
    }

    mediaQuery.addEventListener('change', handleMediaQueryChange)

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange)
    }
  }, [])

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
          // autoRotateSpeed={1}
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Figma isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  )
}

export default FigmaCanvas
