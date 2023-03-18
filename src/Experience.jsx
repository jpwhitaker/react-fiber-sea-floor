import { Suspense, useEffect, useMemo } from 'react'
import { PerspectiveCamera, OrbitControls,ScrollControls, Scroll, Sparkles, useVideoTexture, Float,  Cylinder, Sphere } from '@react-three/drei'
import AboutText from './AboutText'
import AboutTextFlex from './AboutTextFlex'

import CausticLight from './CausticLight'
import NearObjects from './NearObjects'
import FarObjects from './FarObjects'
import Sand from './Sand'
import SubAndMic from './SubAndMic'
import GroundWire from './GroundWire'

export default function Experience() {

  return (
    <Suspense>
      <PerspectiveCamera makeDefault position={[0,13,7]} />
      <fog attach="fog" color={typeof backgroundColor != 'undefined' ? backgroundColor : "#0fa2ab"} near={-25} far={50} />
      <ambientLight intensity={.5} />
      {/* <OrbitControls maxPolarAngle = {Math.PI/2}/> */}
      <ScrollControls pages={1.8} damping={0.5}>
     
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
        
        <FarObjects/>
        <AboutTextFlex/>
        <Sand/>
        <GroundWire/>
      </Scroll>
      <SubAndMic/>
      </ScrollControls>
    </Suspense>
  )
}

