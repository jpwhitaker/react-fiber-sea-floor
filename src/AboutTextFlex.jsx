import { Suspense } from "react";
import { useThree } from "@react-three/fiber";
import { Text, Box, Float} from "@react-three/drei";
import { Vector3 } from "three";
const startingPosition = 5
const clamp = (num, min, max) => Math.min(Math.max(num, min), max);

export default function AboutTextFlex() {
  
  const { viewport, camera } = useThree();
  const zDepth=1

  const width = viewport.getCurrentViewport(camera, [0,camera.position.y,zDepth] ).width
  console.log(width)
  return (
    <>
      {/* <Float rotationIntensity={0.2} floatIntensity={.5}> */}
        <Text color="white" 
        anchorX="center" 
        anchorY="top"
        //need to clamp
        // fontSize={.3}
        fontSize={clamp(width*.03, 0.2, 0.3)}
        lineHeight={1.1}
        letterSpacing={0}
        position={[0,14,zDepth]}
        maxWidth={width* 0.6} 
        >
        <meshBasicMaterial
          color={"#FFF"}
          fog={false}
        />
          CollectivSea is an immersive art collective reimagining science education through interactive experiences.
        </Text>
      {/* </Float> */}
    </>
  );
}
