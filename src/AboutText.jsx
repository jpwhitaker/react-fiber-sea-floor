import { useThree } from "@react-three/fiber";
import { Float, Text } from "@react-three/drei"
import { useState, useEffect } from "react";

export default function AboutText() {
  const text = [
    "Ahoy! I'm a Ph.D. student and biophilic technologist at the Scripps Institution of Oceanography in San Diego.",
    "In my research thrust, I'm keen on rehabilitation of coastal reef ecosystems and exploration of deep-sea habitats. I use deep learning to analyze all sorts of underwater ambient noise and visual surveys use underwater acoustic playback to stimulate reef fish recruitment and coral growth.",
    "In another life, was a in the Responsive Environments group at the MIT Media Lab and Research Engineer at NOAA's Southeast Fisheries Science Center using deep learning to understand the impact of commercial fisheries on humans & the ecosystem.",
  ]

  const [heights, setHeights] = useState([])
  const startingPosition = 5
  const { viewport } = useThree();
  const clamp = (num, min, max) => Math.min(Math.max(num, min), max);

  
  useEffect(() => {
    // console.log('heights updated:', heights);
  }, [heights, viewport]);

  const TextJSX = text.map((paragraph, i)=>{
    const offset = ((i > 0) && heights.length > 0 ) ? heights.slice(0, i).reduce((a, b) => a + b, 0) : 0
    // console.log(viewport.width)
    return(
      <Float rotationIntensity={0.2} floatIntensity={.5} key={i}>
        <Text color="white" 
        anchorX="left" 
        anchorY="top"
        //need to clamp
        fontSize={clamp(viewport.width / 120, 0.19, 0.3)} 
        position={[-2.5,startingPosition - (offset),1]}
        
        //width of text object, need to clamp
        maxWidth={6}

        //text is async, will run onSync when it gets a height
        onSync={(mesh)=> {
          // console.log("onsync")
          const visibleBounds = mesh.textRenderInfo.visibleBounds;
          const top = Math.abs(visibleBounds[1])
          const bottom = Math.abs(visibleBounds[3])
          const margin =  + 0.2
          
          //heights state will keep building unless it's cleared out.
          setHeights(prevHeights => {
            if(prevHeights.length === text.length){
              return [(top + bottom + margin)];
            } else {
              return [...prevHeights, (top + bottom + margin)]}
            }
          )
        }}
      >
        <meshBasicMaterial
          color={"#FFF"}
          fog={false}
        />
          {paragraph}
        </Text>
      </Float>
    )
  })

  return (
    <>
      {TextJSX}
    </>
)}