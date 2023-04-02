import {OrbitControls} from '@react-three/drei';
import { useFrame } from '@react-three/fiber'

function Shape() {
    return(
        <>
            <OrbitControls rotateSpeed={2}></OrbitControls>

            <mesh position={ [ -2, 0, 0 ] } rotation-x={0} scale={1}>
                <sphereGeometry/>
                <meshBasicMaterial color="blue"/>
                
            </mesh>
            
            <mesh position={ [ 2, 0, 0 ] } rotation-x={0} scale={1.5}>
                <boxGeometry />
                <meshBasicMaterial color="red" />
            </mesh>

            <mesh position={ [ 0, 0, 0 ] } rotation-x={0} scale={0.5}>
                <sphereGeometry/>
                <meshBasicMaterial color="purple"/>
            
                
            </mesh>

            <mesh position={ [ 0, 0, 0 ] } rotation-x={0} scale={0.5}>
                <torusGeometry/>
                <meshBasicMaterial color="yellow"/>
            
                
            </mesh>
            
            <mesh position={ [ 0, -1, 0 ] } rotation-x={-Math.PI * 0.5} scale={7}>
                <planeGeometry />
                <meshBasicMaterial color="green" />
            </mesh>

        </>
        
        
    )

    useFrame(() =>
    {
        console.log('tick')
    })
    
    
}



export default Shape