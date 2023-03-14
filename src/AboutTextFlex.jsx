import { useThree, useFrame } from "@react-three/fiber";
import { useAspect, Scroll, Text, Box, Html} from "@react-three/drei";
import { Color, Vector3, Box3 } from "three";
import { MathUtils } from "three";
import { useState } from "react";



  function Boxes() {
    const { viewport } = useThree()
    const currentViewport = viewport
    const width = currentViewport.width
    const boxes = []
    for (let i = 0; i < 10; i++) {
      const color = i % 2 == 0 ? 'hotPink' : 'turquoise'
      //Box is set back by 0.5 so the faces are at origin.
      boxes.push(<Box position={[-(width / 2) + i + 0.5, 13, -0.5]} material-color={color} />)
    }
    return boxes
  }

export default function AboutTextFlex() {
  const { viewport, camera } = useThree();
  const width = viewport.getCurrentViewport(camera, new Vector3([0,0,0]) )
  console.log(camera)
  return (
    <>
      <Text
        position={[0, 14, 0]}
        maxWidth={width}
        fontSize={1}
        color="red"
        overflowWrap="break-word"
      >
        {`${viewport.width.toFixed(2)}`}
      </Text>
      <Boxes/>
    </>
  );
}
