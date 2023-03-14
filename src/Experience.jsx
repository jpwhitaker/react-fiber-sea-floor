import { Suspense, useMemo } from 'react'
import { Text, Box, PerspectiveCamera,ScrollControls, Scroll, Sparkles, useVideoTexture, Float,  Cylinder, Sphere } from '@react-three/drei'
import AboutText from './AboutText'
import AboutTextFlex from './AboutTextFlex'
import CausticLight from './CausticLight'
import NearObjects from './NearObjects'
import FarObjects from './FarObjects'
import { useThree } from '@react-three/fiber'
import { Vector3 } from "three";




export default function Experience() {
  const { viewport, camera } = useThree()

  return (
    <>
      <AboutTextFlex/>
    </>
  )
}

