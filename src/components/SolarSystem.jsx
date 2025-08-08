import Planet from './Planet';

export default function SolarSystem() {
  return (
    <>
      {/* Soleil */}
      <pointLight intensity={2} position={[0, 0, 0]} />
      <mesh>
        <sphereGeometry args={[2, 32, 32]} />
        <meshBasicMaterial color="yellow" />
      </mesh>

      {/* Planètes */}
      <Planet name="Mercury" textureUrl="/textures/mercury.jpg" size={0.3} distance={3} speed={0.6} />
      <Planet name="Venus" textureUrl="/textures/venus.jpg" size={0.55} distance={4} speed={0.55} />
      <Planet name="Earth" textureUrl="/textures/earth.jpg" size={0.5} distance={5} speed={0.5} />
      <Planet name="Mars" textureUrl="/textures/mars.jpg" size={0.4} distance={7} speed={0.3} />
      <Planet name="Jupiter" textureUrl="/textures/jupiter.jpg" size={1} distance={10} speed={0.2} />
      <Planet name="Saturn" textureUrl="/textures/saturn.jpg" size={0.8} distance={12} speed={0.15} />
      <Planet name="Uranus" textureUrl="/textures/uranus.jpg" size={0.7} distance={14} speed={0.1} />
      <Planet name="Neptune" textureUrl="/textures/neptune.jpg" size={0.6} distance={16} speed={0.08} />
    </>
  );
}
