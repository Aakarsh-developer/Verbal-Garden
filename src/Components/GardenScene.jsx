import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, Sky, useGLTF, Html } from "@react-three/drei";
import plants from "../data/plants";

/* Load small plant model */
function PlantModel({ modelPath, position, scale = 0.8 }) {
  const gltf = useGLTF(modelPath, true);
  return <primitive object={gltf.scene} position={position} scale={[scale, scale, scale]} />;
}

/* Load large decorative plants / trees */
function BackgroundPlant({ modelPath, position, scale = 2 }) {
  const gltf = useGLTF(modelPath, true);
  return <primitive object={gltf.scene} position={position} scale={[scale, scale, scale]} />;
}

/* Marker label */
function PlantMarker({ position, label, onClick }) {
  return (
    <Html position={position} center>
      <div
        onClick={onClick}
        style={{
          background: "rgba(255,255,255,0.85)",
          padding: "6px 10px",
          borderRadius: "10px",
          cursor: "pointer",
          fontSize: "14px",
          fontWeight: "600",
          color: "#2a2a2a",
          boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
        }}
      >
        {label}
      </div>
    </Html>
  );
}

export default function GardenScene({ onSelectPlant, isAIPopupOpen }) {
  const plantsToShow = plants.slice(0, 15);
  const radius = 3.8;

  const circlePlants = plantsToShow.map((plant, index) => {
    const angle = (index / plantsToShow.length) * 2 * Math.PI;
    const x = Math.cos(angle) * radius;
    const z = Math.sin(angle) * radius;
    return { ...plant, position: [x, 0, z] };
  });

  return (
    <div
      className="border-2 border-green-500 rounded-2xl shadow-lg bg-gradient-to-b from-green-100 to-blue-100
                 w-full lg:w-[64%] h-[45vh] sm:h-[55vh] lg:h-[87vh] mt-4 lg:mt-[35px] mx-auto lg:ml-[53px] mb-4 overflow-hidden"
    >
      <Canvas camera={{ position: [0, 2.5, 9], fov: 60 }} shadows>
        {/* 🌤 Natural sky */}
        <Sky sunPosition={[100, 20, 100]} turbidity={8} />
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 10, 5]} intensity={1.2} castShadow />

        <Suspense fallback={null}>
          {/*  Plain 3D ground */}
          <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
            <meshStandardMaterial color="#88c67e" />
          </mesh>

          {/*  Background large plants / trees */}
          <BackgroundPlant
            modelPath="/assets/3D models/plant4.glb"
            position={[-6, 60, -4]}
            scale={2.5}
          />
          <BackgroundPlant
            modelPath="/assets/3D models/plant4.glb"
            position={[6, 60, -4]}
            scale={2.5}
          />

          {/*  Circular small plants */}
          {circlePlants.map((p) => (
            <PlantModel key={p.id} modelPath={p.model} position={p.position} />
          ))}

          {!isAIPopupOpen &&
            circlePlants.map((p) => (
              <PlantMarker
                key={p.id}
                position={[p.position[0], p.position[1] + 1.2, p.position[2]]}
                label={p.name}
                onClick={() => onSelectPlant(p)}
              />
            ))}

          <Environment preset="forest" />
        </Suspense>

        <OrbitControls enablePan enableZoom />
      </Canvas>
    </div>
  );
}
