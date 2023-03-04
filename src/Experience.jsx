import * as THREE from 'three'
import { useState } from 'react'
import { useLoader, useFrame } from '@react-three/fiber'
import { PerspectiveCamera,ScrollControls, Scroll, Sparkles, useVideoTexture, Text3D, Center, Float } from '@react-three/drei'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { PlainAnimator } from "three-plain-animator/lib/plain-animator"
import Model from './models/Model'


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
  const videoTexture = useVideoTexture("./water_1_lite_1.mp4")

  videoTexture.needsUpdate = true;

  return (
    <>
      <PerspectiveCamera makeDefault position={[0,13,7]} />
      <fog attach="fog" color={`#0fa2ab`} near={-25} far={50} />
      <ambientLight intensity={.5} />
      
        {/* <OrbitControls maxPolarAngle = {Math.PI/2}/> */}
        


        <ScrollControls pages={1.8} damping={1}>
          <Scroll>
            <Sparkles
              position={[0,10,0]}
              count = {2000}
              speed = {0.1}
              opacity = {0.8}
              size = {1}
              scale = {20}
            />

            <spotLight position={[0, 20, 0]} intensity={1.5} color="#fff" map={videoTexture} penumbra={0.5} castShadow />
            <Float>
              <Model model="Water_Ship_001" scale={1} position={[5,15,-4]} />
            </Float>
            {/* <Model model="Rock_010" scale={1} position={[-3,0,-12]} /> */}
            <Model model="mountains_001" scale={1} position={[-3,0,-23]} />
            {/* <Model model="Rock_010" scale={1} position={[-3,10,-12]} rotation={[0,3.5,0]}/> */}
            <Model model="Coral_reef_001" scale={1} position={[-5,0,-13]} />
            <Model model="Coral_reef_004" scale={1} position={[-5,0,0]} rotation={[0,3.5,0]}/>
            <Model model="Coral_001" scale={3}/>
            <Model model="Coral_001" scale={3} position={[3,0,0]}/>
            {/* <Model model="Rock_021" scale={1} position={[-4.8,3,-2.5]} rotation={[0,.8,0]}/> */}
            <Model model="Rock_021" scale={1} position={[-4.8,3,-2.5]} rotation={[0,.8,0]}/>
            <Model model="Rock_021" scale={1} position={[-8,8.5,-3.5]} rotation={[0,-3,0]}/>
            <Model model="Coralls_008" scale={1} position={[0,2,0]} rotation={[0,-3,0]}/>
            
            <Float>
              <Text3D font="./Kalam_Bold.json" position={[0,2,0]}>
                Oćeane
                <meshLambertMaterial/>
              </Text3D>
            </Float>
            <mesh position-y={0} rotation-x={ - Math.PI * 0.5} scale={250} receiveShadow>
              <planeGeometry/>
              <meshStandardMaterial color="yellow"/>
            </mesh>

          </Scroll>
        </ScrollControls>


      <Center disableY>
        
       </Center>
      
    </>
  )
}