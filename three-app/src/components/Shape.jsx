import { OrbitControls } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';

function Shape() {
  const sphereRef = useRef();
  const spherePurpleRef = useRef();
  const torusRef = useRef();
  const boxRef = useRef();

  useFrame((state, delta) => {
    if (sphereRef.current) {
      sphereRef.current.rotation.y += 0.01;
    }
    if (spherePurpleRef.current) {
        spherePurpleRef.current.rotation.z += -0.005;
    }
    if (torusRef.current) {
        torusRef.current.rotation.x += -0.005;
    }
    if (boxRef.current) {
        boxRef.current.rotation.y += delta;
    }
  });

  return (
    <>
      <OrbitControls rotateSpeed={2} />
      
      <mesh ref={sphereRef} position={[-2, 0, 0]} rotation-x={-Math.PI * 0.5 } scale={1}>
        <sphereGeometry />
        <meshBasicMaterial color="blue" wireframe />
      </mesh>
      
      <mesh ref={boxRef} position={[2, 0, 0]} rotation-y={-Math.PI * 0.3} scale={1.5}>
        <boxGeometry />
        <meshBasicMaterial color="red" wireframe/>
      </mesh>

      <mesh ref={spherePurpleRef} position={[0, 0, 0]} rotation-z={0} scale={0.5}>
        <sphereGeometry />
        <meshBasicMaterial color="purple" wireframe/>
      </mesh>

      <mesh ref={torusRef} position={[0, 0, 0]} rotation-y={-Math.PI * 0.7} scale={0.5}>
        <torusGeometry />
        <meshBasicMaterial color="yellow"/>
      </mesh>

      <mesh position={[0, -1, 0]} rotation-x={-Math.PI * 0.5} scale={7}>
        <planeGeometry />
        <meshBasicMaterial color="green" />
      </mesh>
    </>
  )
}

export default Shape;
