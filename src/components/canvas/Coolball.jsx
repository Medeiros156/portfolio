import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "./Loader";

const Coolball = ({ isMobile }) => {
  const coolball = useGLTF("./coolball/coolball.glb");

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="blue" skyColor="blue" />
      <spotLight
        position={[20, 50, 11]}
        angle={0.32}
        penumbra={1}
        intensity={1}
        color={"blue"}
      // castShadow
      // shadow-mapSize={1024}
      />
      <pointLight intensity={10} />
      <primitive
        object={coolball.scene}
        scale={isMobile ? 0.08 : 0.075}
        position={isMobile ? [-2.2, 0, -2.2] : [0, 0, 0]}
        rotation={[1.569, 0, 0]}
      // opacity={0.1}
      />
    </mesh>
  );
};

const CoolballCanvas = ({ autoRotateSpeed }) => {
  console.log(autoRotateSpeed)
  const [isMobile, setIsMobile] = useState(false);

  const ballCenter = isMobile ? [-2, 0, -2.2] : [0, 0, 0];
  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);



  return (
    <Canvas
      frameloop='demand'
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 6, 18], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          target={ballCenter}
          autoRotate
          autoRotateSpeed={autoRotateSpeed}
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Coolball isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default CoolballCanvas;
