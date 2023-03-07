import { StrictMode } from 'react'
import './style.css'
import ReactDOM from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import Experience from './Experience'
import ExperienceMobile from './ExperienceMobile'
import { useMediaQuery } from '@react-hook/media-query';
import { NavBar } from './NavBar'


const Nav = function() {
    return (
        <div>Hello</div>
    )
  }


function Root() {
    const isDesktop = useMediaQuery('(min-width: 768px)');
    
    if (!isDesktop) {
    
      return( 
        <>
            <ExperienceMobile /> // only render ExperienceMobile on mobile screens
        </>
      )
    }
  
    return (
      <>
        <Experience />
      </>
    );
  }

const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render(
    <StrictMode>
        <NavBar>
            <Canvas shadows>
                <color attach="background" args={["#0fa2ab"]}/>
                <Root/>
            </Canvas>
        </NavBar>
        
    </StrictMode>
)