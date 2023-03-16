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
        fontSize={clamp(width*.03, 0.15, 0.3)}
        position={[0,5,zDepth]}
        maxWidth={width* 0.6} 
        
        >
        <meshBasicMaterial
          color={"#FFF"}
          fog={false}
        />
          Ahoy! I'm a Ph.D. student and biophilic technologist at the Scripps Institution of Oceanography in San Diego.
        </Text>
      {/* </Float> */}
    </>
  );
}
