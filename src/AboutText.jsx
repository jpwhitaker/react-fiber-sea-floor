import { useThree } from "@react-three/fiber";
import { Float, Text } from "@react-three/drei"
import { useRef, useState, useEffect } from "react";



export default function AboutText() {
  const text = [
    "Ahoy! I'm a Ph.D. student and biophilic technologist at the Scripps Institution of Oceanography in San Diego.",
    "In my research thrust, I'm keen on rehabilitation of coastal reef ecosystems and exploration of deep-sea habitats. I use deep learning to analyze all sorts of underwater ambient noise and visual surveys use underwater acoustic playback to stimulate reef fish recruitment and coral growth.",
    "In another life, was a in the Responsive Environments group at the MIT Media Lab and Research Engineer at NOAA's Southeast Fisheries Science Center using deep learning to understand the impact of commercial fisheries on humans & the ecosystem.",
  ]

  const [heights, setHeights] = useState([])
  const startingPosition = 5
  const { viewport } = useThree();

  {/* want to set textheight to something like viewport/100 but right now it only calcs the bounding box once so the heights are off */}
  useEffect(() => {
    console.log('heights updated:', heights);
  }, [heights, viewport]);

  const TextJSX = text.map((paragraph, i)=>{
    const offset = ((i > 0) && heights.length > 0 ) ? heights.slice(0, i).reduce((a, b) => a + b, 0) : 0

    return(
      <Float rotationIntensity={0.2} floatIntensity={.5} key={i}>
        <Text color="white" 
        anchorX="center" 
        anchorY="top" 
        fontSize={0.2} 
        position={[0,startingPosition - (offset),1]} 
        maxWidth={6}
        onSync={(mesh)=> {
          const visibleBounds = mesh.textRenderInfo.visibleBounds;
          const top = Math.abs(visibleBounds[1])
          const bottom = Math.abs(visibleBounds[3])
          const margin =  + 0.2
          setHeights(prevHeights => [...prevHeights, (top + bottom + margin)])
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