import * as THREE from 'three'
import { useState } from 'react'
import { useLoader, useFrame } from '@react-three/fiber'
import { OrbitControls, Sparkles, useVideoTexture, Text3D, Center } from '@react-three/drei'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { PlainAnimator } from "three-plain-animator/lib/plain-animator"
import SeaObj from './meshes/SeaObj'

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
  const colorMap = useLoader(TextureLoader, './3s0F.gif')
  const videoTexture = useVideoTexture("./water-grayscale-darker-2.mp4")
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
      
      <spotLight position={[0, 20, 0]} intensity={2} color="#fff" map={videoTexture} penumbra={0.5} castShadow />
      <ambientLight intensity={.5} />
      
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

        <SeaObj name="seaweed001" position={[-3,0,-.3]}/>
        <SeaObj name="seaweed002" position={[-4,0,-15]}/>
        <SeaObj name="seaweed008" position={[12,0,-20]}/>
        <SeaObj name="seaweed009" position={[-3,0,-6]}/>
        <SeaObj name="seaweed010" position={[6,0,2]}/>
        <SeaObj name="seaweed011" position={[-1,0,-2]}/>
        <SeaObj name="Crab" position={[2.1,.58,1.3]} rotateY={-.8} bones="Bone001_4"/>
        <SeaObj name="octopus" position={[-4,0,0]} rotateY={.8} bones="Bone_3"/>
        <SeaObj name="rock" position={[-2.8,0,0.08]}/>
        <SeaObj name="rock001" position={[-0.8,0,-1]}/>
        <SeaObj name="rock002" position={[4,0,-2]}/>
        <SeaObj name="seaweed008" position={[4.4,0,-1.8]}/>
        <SeaObj name="rock018" position={[1,0,0.5]} />
      <Center disableY>
        <Text3D font="./Kalam_Bold.json" position={[0,2,0]}>
          Oćeane
          <meshLambertMaterial/>
        </Text3D>
       </Center>
      
    </>
  )
}