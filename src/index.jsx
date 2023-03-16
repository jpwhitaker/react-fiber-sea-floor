import { StrictMode } from 'react'
import './style.css'
import ReactDOM from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import Experience from './Experience'
import { PerspectiveCamera } from '@react-three/drei'
import { NavBar } from './NavBar'


const Nav = function() {
    return (
        <div>Hello</div>
    )
  }


function Root() {
  return (
    <>
      <Experience />
    </>
  );
}



const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render(
    <StrictMode>
        <NavBar/>
        <Canvas shadows camera={{position: [0,13,7], fov: 50}}>
            <color attach="background" args={["#0fa2ab"]}/>
            <Root/>
        </Canvas>
    </StrictMode>
)