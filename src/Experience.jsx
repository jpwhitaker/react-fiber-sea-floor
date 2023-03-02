import * as THREE from 'three'
import img from '../public/ground.png'
import { Suspense } from 'react'
import { useLoader } from '@react-three/fiber'
import { OrbitControls, Stage, Sparkles } from '@react-three/drei'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import UnderwaterObjects from './UnderwaterObjects'

function Image() {
  const texture = useLoader(THREE.TextureLoader, img)
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set( 4, 4 );
  return (
    <mesh position-y={-2} rotation-x={ - Math.PI * 0.5} scale={10}>
      <planeBufferGeometry attach="geometry"  />
      <meshStandardMaterial attach="material" map={texture} transparent={true} roughness={0.10}/>
    </mesh>
  )
}

export default function Experience() {

  const model = useLoader(GLTFLoader, './uploads_files_3661723_Tile_pack_environment_4.glb')
  
  return (
    <>
      <fog attach="fog" color={`#0fa2ab`} near={-30} far={80} />
      <Sparkles
        /** Number of particles (default: 100) */
        count = {300}
        /** Speed of particles (default: 1) */
        speed = {0.1}
        /** Opacity of particles (default: 1) */
        opacity = {0.8}
        /** Color of particles (default: 100) */
       
        /** Size of particles (default: randomized between 0 and 1) */
        size = {1}
        /** The space the particles occupy (default: 1) */
        scale = {10}
        /** Movement factor (default: 1) */
      />
      <directionalLight color="#FFFFFF" position={[20, 40, 0]} castShadow />
      <ambientLight intensity={0.5} />
      
        <OrbitControls/>
        {/* <pointLight position={[0, 500, 0]} intensity={.5} color="#fff" /> */}

        {/* <Suspense fallback={null}>
          <Image />
        </Suspense> */}
        <mesh position={[0, 1, 0]} castShadow>
          <sphereGeometry 
          />
          <meshStandardMaterial color="red" />
        </mesh>
        
        <mesh position-y={0} rotation-x={ - Math.PI * 0.5} scale={200} receiveShadow>
          <planeGeometry/>
          <meshStandardMaterial color="yellow"/>
        </mesh>

        {/* <primitive object={model.scene}/> */}
        <UnderwaterObjects position={[-15,-1,0]}/>
      
    </>
  )
}