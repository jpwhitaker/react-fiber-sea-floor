import { StrictMode } from 'react'
import './style.css'
import ReactDOM from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import Experience from './Experience'

const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render(
    <StrictMode>
        <Canvas shadows>
            <color attach="background" args={["#0fa2ab"]}/>
            <Experience/>
        </Canvas>
    </StrictMode>
)