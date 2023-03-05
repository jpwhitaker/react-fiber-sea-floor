import { Float, Text3D, Text } from "@react-three/drei"

export default function AboutText() {

    return (
        <>
        <Float floatIntensity={0.5}>
        <Text3D font="./Kalam_Bold.json" position={[-3,5.5,1]} >
          Oćeane
          <meshLambertMaterial fog={false}/>
        </Text3D>
      </Float>
      <Float rotationIntensity={0.2} floatIntensity={0.5}>
        <Text color="white" anchorX="center" anchorY="middle" fontSize={.2} position={[0,5,1]} maxWidth={6} >
        <meshBasicMaterial          
          color={"#FFF"}
          fog={false}
        />
          Ahoy! I'm a Ph.D. student and biophilic technologist at the Scripps Institution of Oceanography in San Diego.
        </Text>
      </Float>

      <Float rotationIntensity={0.2} floatIntensity={0.5}>
        <Text color="white" anchorX="center" anchorY="middle" fontSize={.2} position={[0,4,1]} maxWidth={6} fog={false} >
        <meshBasicMaterial          
          color={"#FFF"}
          fog={false}
        />
          In my research thrust, I'm keen on rehabilitation of coastal reef ecosystems and exploration of deep-sea habitats. I use deep learning to analyze all sorts of underwater ambient noise and visual surveys use underwater acoustic playback to stimulate reef fish recruitment and coral growth. 
          
        </Text>

      </Float>

      <Float rotationIntensity={0.3} floatIntensity={0.5}>
        <Text color="white" anchorX="center" anchorY="middle" fontSize={.2} position={[0,3,1]} maxWidth={6} >
        <meshBasicMaterial          
          color={"#FFF"}
          fog={false}
        />
         In another life, was a in the Responsive Environments group at the MIT Media Lab and Research Engineer at NOAA's Southeast Fisheries Science Center using deep learning to understand the impact of commercial fisheries on humans & the ecosystem. 
        </Text>
      </Float>

      <Float rotationIntensity={0.3} floatIntensity={0.5}>
        <Text color="white" anchorX="center" anchorY="middle" fontSize={.2} position={[0,2.3,1]} maxWidth={6}>
        <meshBasicMaterial          
          color={"#FFF"}
          fog={false}
        />
         {"\n\n"}When I'm not lost in a sea of spectrograms, I'm like to think about ways we can make science more accessible via performance art ways to communally gather & share blue planet stories, cli-fi (climate change sci-fi) & human adaptation.
        </Text>
      </Float>
      </>
    
)}