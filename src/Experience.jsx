import * as THREE from 'three'
import { Suspense, useState } from 'react'
import { useLoader, useFrame } from '@react-three/fiber'
import { OrbitControls, Stage, Sparkles, useVideoTexture, Text3D, Center } from '@react-three/drei'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import UnderwaterObjects from './UnderwaterObjects'
import { PlainAnimator } from "three-plain-animator/lib/plain-animator"
import Seaweed01 from './meshes/Seaweed01'
import Seaweed02 from './meshes/Seaweed02'
import Seaweed03 from './meshes/Seaweed03'
import Crab from './meshes/Crab'
import Rock01 from './meshes/Rock01'






function Sprite({ textureSrc, IconPosition, IconSize }) {
  const spriteTexture = useLoader(THREE.TextureLoader, textureSrc)
  const [animator] = useState(() => new PlainAnimator(spriteTexture, 4, 4, 10, 10))
  useFrame(() => animator.animate())
  spriteTexture.needsUpdate = true;
  return (
      <spotLight position={[0, 10, 0]} intensity={1} color="#fff" map={spriteTexture}  />
  )
}

export default function Experience() {

  const model = useLoader(GLTFLoader, './uploads_files_3661723_Tile_pack_environment_4.glb')
  const colorMap = useLoader(TextureLoader, './3s0F.gif')
  const videoTexture = useVideoTexture("./water-grayscale-darker.mp4")
  videoTexture.needsUpdate = true;

  return (
    <>
      <fog attach="fog" color={`#0fa2ab`} near={-80} far={80} />
      <Sparkles
        position={[0,20,0]}
        /** Number of particles (default: 100) */
        count = {4000}
        /** Speed of particles (default: 1) */
        speed = {0.1}
        /** Opacity of particles (default: 1) */
        opacity = {0.8}
        /** Color of particles (default: 100) */
       
        /** Size of particles (default: randomized between 0 and 1) */
        size = {1}
        /** The space the particles occupy (default: 1) */
        scale = {40}
        /** Movement factor (default: 1) */
      />
      
      <spotLight position={[0, 20, 0]} intensity={1} color="#fff" map={videoTexture} penumbra={0.5} castShadow />
      <ambientLight intensity={0.4} />
      
        <OrbitControls maxPolarAngle = {Math.PI/2}/>


        {/* <mesh position={[0, 1, 0]} castShadow>
          <sphereGeometry 
          />
          <meshStandardMaterial color="red" />
        </mesh> */}
        
        <mesh position-y={0} rotation-x={ - Math.PI * 0.5} scale={250} receiveShadow>
          <planeGeometry/>
          <meshStandardMaterial color="yellow"/>
        </mesh>

        {/* <primitive object={model.scene}/> */}
        <Seaweed01 position={[-3,0,0]}/>
        <Seaweed02 position={[-9.5,0,-7]}/>
        <Seaweed03 position={[-8,0,-6]}/>
        <Crab position={[1,0,-1]}/>
        <Rock01 position={[0,0,-2]}/>
      <Center disableY>
        <Text3D font="./Kalam_Bold.json" position={[0,2,0]}>
          Oćeane
          <meshLambertMaterial/>
        </Text3D>
       </Center>
      
    </>
  )
}