import React, { Suspense, useMemo } from "react";
import { Canvas } from "./canvasImport";
import { Float, OrbitControls, Preload, useTexture } from "./canvasImport";
import CanvasLoader from "./Loader";
import { technologies } from "../../constants";

const generateSquaresPositions = (numSquares, spacing) => {
    const squarePositions = [];

    const radius = numSquares * spacing * Math.sqrt(2) / (2 * Math.PI);
    const phi = (Math.PI * (3 - Math.sqrt(5))) * 2;

    for (let i = 0; i < numSquares; i++) {
        const y = 1 - (i / (numSquares - 1)) * 2;
        const radiusY = Math.sqrt(1 - y * y);
        const theta = phi * i;

        const x = Math.cos(theta) * radiusY * radius;
        const z = Math.sin(theta) * radiusY * radius;

        squarePositions.push([x, y * radius, z]);
    }

    return squarePositions;
};

const Square = ({ imgUrl, position }) => {
    const [decal] = useTexture([imgUrl]);

    return (
        <Float speed={4} floatIntensity={8}>
            <mesh position={position} rotation={[0.4, 0.2, 0]}>
                <boxBufferGeometry args={[1, 1, 1]} />
                <meshStandardMaterial
                    attach="material"
                    map={decal}
                    color="#ffffff"
                />
            </mesh>
        </Float>
    );
};

const Tech = () => {
    const numSquares = technologies.length;
    const spacing = 1.4;

    const squarePositions = useMemo(
        () => generateSquaresPositions(numSquares, spacing),
        [numSquares, spacing]
    );

    return (
        <Canvas
            antialias={0}
            frameloop="demand"
            dpr={[window.devicePixelRatio, window.devicePixelRatio]}
            style={{ width: "100%", height: "100%" }}
            camera={{ position: [0, 0, 12] }}
        >
            <ambientLight intensity={0.5} />
            <directionalLight intensity={0.8} position={[5, 5, 5]} />
            <Suspense fallback={<CanvasLoader />}>
                <OrbitControls
                    enableZoom={false}
                    autoRotate
                    autoRotateSpeed={2.2}
                    maxPolarAngle={Math.PI / 2}
                />
                {technologies.map((technology, index) => (
                    <Square
                        imgUrl={technology.icon}
                        position={squarePositions[index % squarePositions.length]}
                        key={technology.name}
                    />
                ))}
            </Suspense>
            <Preload all />
        </Canvas>
    );
};

export default Tech;
