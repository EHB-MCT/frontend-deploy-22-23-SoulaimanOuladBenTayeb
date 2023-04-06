import logo from '../logo.svg';
import styles from './header.module.css';
import { Canvas } from '@react-three/fiber';
import ThreeHeader from './ThreeHeader';

function Header() {
    return(
        <header className={styles.exercise}>

            <nav>
            <img src={logo} className={styles.appLogo} alt="logo" />

                <ul>

                    <li>
                        <a href='#'>TEST</a>
                    </li>
                    <li>
                        <a href='#'>TEST</a>
                    </li>
                    <li>
                        <a href='#'>TEST</a>
                    </li>
                    <li>
                        <a href='#'>TEST</a>
                    </li>

                </ul>

            </nav>

            <article>
                
                <h1>DIT IS EEN HEADER!</h1>

                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non suscipit alias 
                    repudiandae, dolorem veniam perferendis at dicta voluptatum, iure, quos id harum 
                    modi maiores hic! In optio autem quis maxime! Lorem ipsum dolor sit amet, 
                    consectetur adipisicing elit. Non suscipit alias repudiandae, dolorem</p>

                <button>VERZEND</button>
            </article>
            

            <div className={styles.headerBox}>

                <div className={styles.headerCircle}>
                </div>

            </div>

            <Canvas camera={{fov:45, near:0.1,far:200, position:[3,-10,6]}} className={styles.headerCanvas}>
        <ThreeHeader></ThreeHeader>
      </Canvas>
            

        </header>
    );
}

export default Header;