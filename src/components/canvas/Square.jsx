import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
    Float,
    OrbitControls,
    Preload,
    useTexture,
} from "@react-three/drei";

import CanvasLoader from "./Loader";




const Square = (props) => {
    const [decal] = useTexture([props.imgUrl]);

    return (
        <Float speed={1.75} floatIntensity={5}>
            <ambientLight intensity={.6} />
            <directionalLight position={[10, 10, 0.15]} />
            <mesh scale={3.5}>
                {/* <circleBufferGeometry args={[1, 1]} /> */}
                <boxBufferGeometry args={[1, 1, 1]} />
                <meshStandardMaterial
                    attach="material"
                    map={decal}
                    // color="#fafafa"
                    polygonOffset
                    polygonOffsetFactor={-5}
                    flatShading

                />
            </mesh>
        </Float >
    );
};

const SquareCanvas = ({ icon }) => {
    return (

        <Canvas
            frameloop='demand'
            dpr={[2, 2]}
            gl={{ preserveDrawingBuffer: true }}
        >
            <Suspense fallback={<CanvasLoader />}>
                <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1.2} />
                <Square imgUrl={icon} />
            </Suspense>

            <Preload all />
        </Canvas>
    );
};

export default SquareCanvas;
