import { Suspense, useEffect, useState } from "react";
import { Canvas } from "./canvasImport";
import { OrbitControls, Preload, useGLTF } from "./canvasImport";

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
        color="blue"
      />
      <pointLight intensity={10} />
      <primitive
        object={coolball.scene}
        scale={isMobile ? 0.1 : 0.075}
        position={isMobile ? [-2.2, 0, -2.2] : [0, 0, 0]}
        rotation={[1.569, 0, 0]}
      />
    </mesh>
  );
};

const CoolballCanvas = ({ autoRotateSpeed }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    setIsMobile(mediaQuery.matches);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  const ballCenter = isMobile ? [-2, 0, -2.2] : [0, 0, 0];

  return (
    <Canvas
      frameloop="demand"
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 6, 18], fov: 25 }}
      antialias={0}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          target={ballCenter}
          autoRotate
          autoRotateSpeed={autoRotateSpeed}
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          enableRotate={false}
        />
        <Coolball isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default CoolballCanvas;
