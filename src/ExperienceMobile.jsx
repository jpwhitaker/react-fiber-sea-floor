import { Suspense } from 'react'
import { PerspectiveCamera,ScrollControls, Scroll, Sparkles, useVideoTexture, Float,  Cylinder, Sphere } from '@react-three/drei'
import Model from './models/Model'
import Jellyfish from './Jellyfish'
import AboutTextMobile from './AboutTextMobile'


export default function ExperienceMobile() {
  const videoTexture = useVideoTexture("./water_1_lite_1.mp4")
  videoTexture.needsUpdate = true;
  // const {backgroundColor, perfVisible} = useControls({
  //   backgroundColor: `#0fa2ab`,
  //   perfVisible: false
  // })

  return (
    <Suspense>
      {/* {perfVisible ? <Perf position='top-left'/>: null} */}
      <PerspectiveCamera makeDefault position={[0,13,7]} />
      <fog attach="fog" color={typeof backgroundColor != 'undefined' ? backgroundColor : "#0fa2ab"} near={-25} far={50} />
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
          {/* Need to position spotlight better */}
          <spotLight position={[0, 20, -20]} intensity={1.5} color="#fff" map={videoTexture} penumbra={0.5} castShadow={false} />

          
            {/* Near Objects */}
            <Float>
              <Model model="Water_Ship_001" scale={1} position={[3,15,-10]} />
            </Float>
            {/* <Model model="Coral_reef_003" scale={1} position={[2,0,1]} /> */}
            <Model model="Coral_reef_004" scale={1} position={[-2,0,0]} rotation={[0,3.5,0]}/>
            <Model model="Rock_021" scale={1} position={[-2.8,3,-2.5]} rotation={[0,.8,0]}/>
            <Model model="Rock_021" scale={1} position={[-4,8.5,-3.5]} rotation={[0,-3,0]}/>
            <Model model="Coralls_008" scale={1} position={[-0.3,5,-3]} rotation={[0,-3,0]}/>
            <Model model="Coral_026" scale={1} position={[-2.9,6.8,-1.3]} rotation={[1,-3,0]}/>{/*Yellow*/}
            <Model model="Coral_005" scale={1} position={[-2.8,10.7,-2.5]} rotation={[1,0,-1.2]}/>{/*Starfish*/}
            <Float rotationIntensity={0.5}>
              <Jellyfish position={[-1,10.7,-0.5]}/>
            </Float>
            <Model model="Octopus_001" scale={1} position={[0,0,1]} rotation={[0,.8,0]}/>
            <group position={[2,0,0]}>
              <Cylinder position={[-1,0,1]} rotation={[0,0,0]} args={[0.03, 0.03, 1, 32]} material-color="#222" />
              <Cylinder position={[-1,0.5,1]} rotation={[1.6,0,1]} args={[0.04, 0.02, 0.6, 32]} material-color="#222" />
              <Sphere args={[0.08, 6,6]} position={[-1.25,0.49,1.15]}>
                <meshStandardMaterial color="#000"  />
              </Sphere>
            </group>
            <AboutTextMobile/>

            {/* Far Objects */}
            <Model model="mountains_001" scale={1} position={[16,0,-23]} />
            
            
            <Model model="Coral_reef_005" scale={1.3} position={[8,-.5,-17.5]} />
            
            {/* <Model model="Coral_reef_009" scale={1} position={[3,0,-18]} rotation={[0,0,0]}/> */}

            <mesh position-y={0} rotation-x={ - Math.PI * 0.5} scale={250} receiveShadow>
              <planeGeometry receiveShadow={true}/>
              <meshStandardMaterial color="yellow"/>
            </mesh>
        </Scroll>
      </ScrollControls>
    </Suspense>
  )
}