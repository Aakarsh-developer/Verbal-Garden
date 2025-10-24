import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stage } from '@react-three/drei';
import { useGLTF } from '@react-three/drei';

function Model({ modelPath }) {
  const { scene } = useGLTF(modelPath);
  return <primitive object={scene} />;
}

export default function ThreeDViewer({ modelPath }) {
  return (
    <Canvas style={{ height: '400px' }}>
      <ambientLight />
      <Stage>
        <Model modelPath={modelPath} />
      </Stage>
      <OrbitControls />
    </Canvas>
  );
}