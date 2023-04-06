import logo from './logo.svg';
import './reset.css';
import './master.css';
import './App.css';
import styles from './components/threeheader.module.css';
import { Canvas } from '@react-three/fiber';
import ThreeHeader from './components/ThreeHeader';
import Header from './components/Header';

function App() {
  return (
    <>
    <Header>

    <Canvas className={styles.headerCanvas}>
        <ThreeHeader></ThreeHeader>
      </Canvas>
      

    </Header>
    
    </>
  );
}

export default App;
