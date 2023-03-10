import { Suspense, useMemo } from 'react'
import { OrbitControls, PerspectiveCamera,ScrollControls, Scroll, Sparkles, useVideoTexture, Float,  Cylinder, Sphere } from '@react-three/drei'
import AboutText from './AboutText'
import { Perf } from 'r3f-perf'
import { useControls } from 'leva'
import CausticLight from './CausticLight'
import NearObjects from './NearObjects'
import FarObjects from './FarObjects'

export default function Experience() {

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
          {/**Caustic light seems to make page error out every 1/20 times */}       
          <CausticLight/>  
          <NearObjects/>
          <AboutText/>
          <FarObjects/>

          <mesh position-y={0} rotation-x={ - Math.PI * 0.5} scale={250} receiveShadow>
            <planeGeometry receiveShadow={true}/>
            <meshStandardMaterial color="yellow"/>
          </mesh>

        </Scroll>
      </ScrollControls>
    </Suspense>
  )
}

