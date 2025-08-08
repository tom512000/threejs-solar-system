import { useRef } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';

export default function Planet({ textureUrl, size = 1, distance = 5, speed = 0.01, name }) {
  const planetRef = useRef();
  const texture = useLoader(TextureLoader, textureUrl);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    const angle = t * speed;
    planetRef.current.position.x = Math.cos(angle) * distance;
    planetRef.current.position.z = Math.sin(angle) * distance;
    planetRef.current.rotation.y += 0.01; // rotation sur elle-même
  });

  return (
    <mesh ref={planetRef}>
      <sphereGeometry args={[size, 32, 32]} />
      <meshStandardMaterial map={texture} />
    </mesh>
  );
}
