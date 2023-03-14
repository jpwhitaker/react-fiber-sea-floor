import { Suspense, useMemo } from 'react'
import { OrbitControls, PerspectiveCamera,ScrollControls, Scroll, Sparkles, useVideoTexture, Float,  Cylinder, Sphere } from '@react-three/drei'
import AboutText from './AboutText'
import AboutTextFlex from './AboutTextFlex'
import CausticLight from './CausticLight'
import NearObjects from './NearObjects'
import FarObjects from './FarObjects'
import { useThree } from '@react-three/fiber'


export default function Experience() {
  const { viewport, camera } = useThree()

  console.log(viewport.getCurrentViewport(camera, [0,0,0]) )
  return (
    <Suspense>
      {/* {perfVisible ? <Perf position='top-left'/>: null} */}
      <PerspectiveCamera makeDefault position={[0,13,7]}/>
      {/* <fog attach="fog" color={typeof backgroundColor != 'undefined' ? backgroundColor : "#0fa2ab"} near={-25} far={50} /> */}
      <ambientLight intensity={.5} />

      {/* <OrbitControls maxPolarAngle = {Math.PI/2}/> */}


        <AboutTextFlex/>

    </Suspense>
  )
}

