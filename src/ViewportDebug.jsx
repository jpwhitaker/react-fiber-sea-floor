import { Suspense } from "react";
import { useThree } from "@react-three/fiber";
import { Text, Box, PerspectiveCamera} from "@react-three/drei";
import { Vector3 } from "three";

function Width() {
  const { viewport, camera } = useThree()
  const currentViewport = viewport.getCurrentViewport(camera, [0,13,0])
  const width = currentViewport.width
  return (
    <>
      <Suspense fallback={<></>}>
        <Text position={[0, 2, 0]}>
          {width.toFixed(2)}
        </Text>
        {/*maxWidth not working, it should wrap*/}
        <Text position={[0, 1, 0]} maxWidth={width} anchorY="top" overflowWrap="break-word">
          {width}
        </Text>
      </Suspense>
    </>
  )
}

function Boxes() {
  const { viewport, camera } = useThree()
  const currentViewport = viewport.getCurrentViewport(camera, [0,13,0])
  const width = currentViewport.width
  const boxes = []
  for (let i = 0; i < 10; i++) {
    const color = i % 2 == 0 ? 'hotPink' : 'turquoise'
    //Box is set back by 0.5 so the faces are at origin.
    boxes.push(<Box position={[-(width / 2) + i + 0.5, 0, -0.5]} material-color={color} />)
  }
  return boxes
}

export default function ViewportDebug() {
  
  const { viewport, camera } = useThree();
  const width = viewport.getCurrentViewport(camera, new Vector3([0,0,0]) )
  console.log(camera)
  return (
    <>
      <Width/>
      <Boxes/>
    </>
  );
}
