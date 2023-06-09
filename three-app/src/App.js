import logo from './logo.svg';
import './App.css';
import { Canvas } from '@react-three/fiber';
import Shape from './components/Shape';
import Cat from './components/Cat';

function App() {
  return (
    <>
      <Canvas camera={{fov:45, near:0.1,far:200, position:[3,2,6]}}>
          <Shape></Shape>
          <Cat></Cat>
          
        </Canvas>
        
    </>
)
}

export default App;
