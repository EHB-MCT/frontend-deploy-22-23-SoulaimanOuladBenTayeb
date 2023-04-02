import { OrbitControls } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';

function Cat() {
    const sphereRef = useRef();
    const coneRef = useRef();
    const groupRef = useRef();
    const colorCat = "black";
    const colorCatW = "white";
    const zCat = 2.5;
  
    useFrame((state, delta) => {
      if (sphereRef.current) {
        sphereRef.current.rotation.y += 0.01;
      }
      if (coneRef.current) {
        coneRef.current.rotation.y += 0.003;
    }if (groupRef.current) {
        groupRef.current.rotation.y += 0.003;
    }
    });
  
    return (
      <>
        <OrbitControls rotateSpeed={2} />
        <group ref={groupRef}>
            <mesh position={[0, 0, zCat]} scale={1}>
                <sphereGeometry />
                <meshBasicMaterial color={colorCat} />
            </mesh>
    
            <mesh position={[-0.5, 1, zCat]} rotation-z={-Math.PI * -0.15} scale={0.3}>
                <coneGeometry args={[1, 1.5, 32]}/>
                <meshBasicMaterial color={colorCat} />
            </mesh>

            <mesh position={[0.5, 1, zCat]} rotation-z={-Math.PI * 0.15} scale={0.3}>
                <coneGeometry args={[1, 1.5, 32]}/>
                <meshBasicMaterial color={colorCat} />
            </mesh>

            <mesh position={[-0.4, 0.3, zCat+0.85]} scale={0.08}>
                <sphereGeometry />
                <meshBasicMaterial color={colorCatW} />
            </mesh>

            <mesh position={[0.4, 0.3, zCat+0.85]} scale={0.08}>
                <sphereGeometry />
                <meshBasicMaterial color={colorCatW} />
            </mesh>

            <mesh position={[0, 0, zCat+1]} scale={0.08}>
                <sphereGeometry />
                <meshBasicMaterial color={colorCatW} />
            </mesh>
          </group>
      </>
    )
  }
  
  export default Cat;
  