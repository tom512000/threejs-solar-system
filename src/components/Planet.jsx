import { useRef, useState } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';
import { Text } from '@react-three/drei';

export default function Planet({ textureUrl, size = 1, distance = 5, speed = 0.01, name }) {
  const planetRef = useRef();
  const texture = useLoader(TextureLoader, textureUrl);
  const [hovered, setHovered] = useState(false);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    const angle = t * speed;
    planetRef.current.position.x = Math.cos(angle) * distance;
    planetRef.current.position.z = Math.sin(angle) * distance;
    planetRef.current.rotation.y += 0.01; // rotation sur elle-même
  });

  return (
    <group>
      <mesh
        ref={planetRef}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <sphereGeometry args={[size, 32, 32]} />
        <meshStandardMaterial map={texture} />
      </mesh>

      {hovered && (
        <Text
          position={[planetRef.current?.position.x || 0, size + 0.5, planetRef.current?.position.z || 0]}
          fontSize={0.4}
          color="white"
          anchorX="center"
          anchorY="middle"
        >
          {name}
        </Text>
      )}
    </group>
  );
}
