import {useThree, useFrame } from "@react-three/fiber";
import { useAspect, Scroll, Text,Box, Html } from "@react-three/drei";
import { Color, Vector3, Box3 } from "three";
import { useState } from "react";




const paragraphs = [
    "1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "2. Suspendisse vulputate, mi nec molestie scelerisque, lorem nulla hendrerit neque, laoreet finibus est nunc eu nisi. In quis congue neque.",
    "3. Aliquam placerat, odio at pellentesque euismod, mi ligula consectetur dui, eu pretium ipsum nunc at enim. Proin ut posuere erat. Aliquam ac rutrum mauris."
]



export default function AboutTextFlex() {
    const {viewport, camera} = useThree();
    console.log(viewport, camera, viewport.getCurrentViewport(camera))
    
    return(
        <>
            <Text 
                position={[0,5,0]} 
                maxWidth={12}
            >
                Suspendisse vulputate, mi nec molestie scelerisque, lorem nulla hendrerit neque, laoreet finibus est nunc eu nisi. In quis congue neque. </Text>
            <Box position={[0,5,0]} scale={[12,1,1]}/>
        </>
    )
}






// const { width, height } = useThree((state) => state.viewport)
// return (
//   <Flex size={[width /2, height / 2, 0]} position={[0,5,0]}>
//     <Box width="auto" height="auto" flexGrow={1}>
//       {(width, height) => (
//         <Text color="black" fontSize={0.5} maxWidth={width}>
//           TypeError Failed to construct 'Text': Please use the 'new' operator, this DOM object constructor cannot be called as a function.
//         </Text>
//       )}
//     </Box>
//   </Flex>)