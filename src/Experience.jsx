import * as THREE from 'three'
import { useState } from 'react'
import { useLoader, useFrame } from '@react-three/fiber'
import { PerspectiveCamera,ScrollControls, Scroll, Sparkles, useVideoTexture, Text3D, Center, Float, Text } from '@react-three/drei'
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
              <Model model="Water_Ship_001" scale={1} position={[10,15,-10]} />
            </Float>
            {/* <Model model="Rock_010" scale={1} position={[-3,0,-12]} /> */}
            <Model model="mountains_001" scale={1} position={[23,0,-23]} />
            <Model model="mountains_001" scale={1} position={[-15,0,-35]} />
            {/* <Model model="Rock_010" scale={1} position={[-3,10,-12]} rotation={[0,3.5,0]}/> */}
            <Model model="Coral_reef_001" scale={1.3} position={[-13,0,-24]} />
            <Model model="Coral_reef_005" scale={1.3} position={[-3,0,-24]} />
            {/* <Model model="Seaweed_014" scale={1} position={[-5,0.6,-16.0]} /> */}
            <Model model="Coral_reef_003" scale={1} position={[5,0,1]} />
            <Model model="Seaweed_007" scale={1} position={[11,0,-28.0]} />
            <Model model="Coral_reef_004" scale={1} position={[-5,0,0]} rotation={[0,3.5,0]}/>
            {/* <Model model="Coral_001" scale={3}/>
            <Model model="Coral_001" scale={3} position={[3,0,0]}/> */}
            {/* <Model model="Rock_021" scale={1} position={[-4.8,3,-2.5]} rotation={[0,.8,0]}/> */}
            <Model model="Rock_021" scale={1} position={[-4.8,3,-2.5]} rotation={[0,.8,0]}/>
            <Model model="Rock_021" scale={1} position={[-8,8.5,-3.5]} rotation={[0,-3,0]}/>
            <Model model="Coralls_008" scale={1} position={[-2.8,5,-3]} rotation={[0,-3,0]}/>
            <Model model="Coral_026" scale={1} position={[-4.9,6.8,-1.3]} rotation={[1,-3,0]}/>
            <Model model="Coral_005" scale={1} position={[-6.7,10.7,-2.5]} rotation={[1,0,-1.6]}/>
            <Float rotationIntensity={0.5}>
            <Model model="Medusa_001" scale={1} position={[-2,10.7,-0.5]} rotation={[0,0,0]}/>
            </Float>
            <Model model="Coral_reef_006" scale={1} position={[16.5,0,-13]} rotation={[0,-0.5,0]}/>
            {/* <Model model="Seaweed_001" scale={1} position={[12,0,-17]} rotation={[0,0,0]}/> */}
            <Model model="Seaweed_002" scale={1} position={[13,0,-16]} rotation={[0,0,0]}/>
            <Model model="Seaweed_003" scale={1} position={[14,0,-16]} rotation={[0,0,0]}/>
            <Model model="Coral_reef_009" scale={1} position={[12,0,-20]} rotation={[0,0,0]}/>


            <Float floatIntensity={0.5}>
              <Text3D font="./Kalam_Bold.json" position={[-3,4.5,1]} >
                Oćeane
                <meshLambertMaterial fog={false}/>
              </Text3D>
            </Float>
            <Float rotationIntensity={0.2} floatIntensity={0.5}>
              <Text color="white" anchorX="center" anchorY="middle" fontSize={.2} position={[0,4,1]} maxWidth={6} >
              <meshBasicMaterial          
                color={"#FFF"}
                fog={false}
              />
                Ahoy! I'm a Ph.D. student and biophilic technologist at the Scripps Institution of Oceanography in San Diego.
              </Text>
            </Float>

            <Float rotationIntensity={0.2} floatIntensity={0.5}>
              <Text color="white" anchorX="center" anchorY="middle" fontSize={.2} position={[0,3,1]} maxWidth={6} fog={false} >
              <meshBasicMaterial          
                color={"#FFF"}
                fog={false}
              />
                In my research thrust, I'm keen on rehabilitation of coastal reef ecosystems and exploration of deep-sea habitats. I use deep learning to analyze all sorts of underwater ambient noise and visual surveys use underwater acoustic playback to stimulate reef fish recruitment and coral growth. 
                
              </Text>

            </Float>

            <Float rotationIntensity={0.3} floatIntensity={0.5}>
              <Text color="white" anchorX="center" anchorY="middle" fontSize={.2} position={[0,2,1]} maxWidth={6} >
              <meshBasicMaterial          
                color={"#FFF"}
                fog={false}
              />
               In another life, was a in the Responsive Environments group at the MIT Media Lab and Research Engineer at NOAA's Southeast Fisheries Science Center using deep learning to understand the impact of commercial fisheries on humans & the ecosystem. 
              </Text>
            </Float>

            <Float rotationIntensity={0.3} floatIntensity={0.5}>
              <Text color="white" anchorX="center" anchorY="middle" fontSize={.2} position={[0,1.3,1]} maxWidth={6}>
              <meshBasicMaterial          
                color={"#FFF"}
                fog={false}
              />
               {"\n\n"}When I'm not lost in a sea of spectrograms, I'm like to think about ways we can make science more accessible via performance art ways to communally gather & share blue planet stories, cli-fi (climate change sci-fi) & human adaptation.
              </Text>
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