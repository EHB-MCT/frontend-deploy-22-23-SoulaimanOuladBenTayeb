import { OrbitControls } from '@react-three/drei';
import { useEffect, useRef } from 'react';
import { Euler } from 'three';

function ThreeHeader() {
  const groupRef = useRef();
  const colorCat = "orange";
  const colorCatW = "white";
  const zCat = 2.5;

  useEffect(() => {
    if (groupRef.current) {
      groupRef.current.rotation.setFromVector3(new Euler(-Math.PI * 1.6, 0.1, -0.42));
    }
  }, []);

  return (
    <>
      <OrbitControls rotateSpeed={2} />
      <group ref={groupRef}>
        <mesh position={[0, 0, zCat]} scale={1}>
          <sphereGeometry />
          <meshBasicMaterial color={colorCat} />
        </mesh>

        <mesh position={[-0.5, 1, zCat]} rotation-z={-Math.PI * -0.15} scale={0.3}>
          <coneGeometry args={[1, 1.5, 32]} />
          <meshBasicMaterial color={colorCat} />
        </mesh>

        <mesh position={[0.5, 1, zCat]} rotation-z={-Math.PI * 0.15} scale={0.3}>
          <coneGeometry args={[1, 1.5, 32]} />
          <meshBasicMaterial color={colorCat} />
        </mesh>

        <mesh position={[-0.4, 0.3, zCat + 0.85]} scale={0.08}>
          <sphereGeometry />
          <meshBasicMaterial color={colorCatW} />
        </mesh>

        <mesh position={[0.4, 0.3, zCat + 0.85]} scale={0.08}>
          <sphereGeometry />
          <meshBasicMaterial color={colorCatW} />
        </mesh>

        <mesh position={[0, 0, zCat + 1]} scale={0.08}>
          <sphereGeometry />
          <meshBasicMaterial color={colorCatW} />
        </mesh>
      </group>
    </>
  );
}

export default ThreeHeader;
