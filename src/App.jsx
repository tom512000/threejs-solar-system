import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import SolarSystem from './components/SolarSystem';

export default function App() {
  return (
    <Canvas camera={{ position: [0, 5, 20], fov: 60 }} style={{ width: '100vw', height: '100vh' }}>
      <color attach="background" args={['black']} />
      <ambientLight intensity={0.1} />
      <Stars radius={100} depth={50} count={5000} />
      <SolarSystem />
      <OrbitControls />
    </Canvas>
  );
}
