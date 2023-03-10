import { Suspense, useMemo, useRef } from 'react'
import { SpotLight } from 'three'
import {useVideoTexture, useTexture } from '@react-three/drei'

export default function CausticLight() {
  let videoTexture = null;
  let ref = useRef
  {/**There has to be a better way to get the video to load consistently */}
  try {
    videoTexture = useVideoTexture("./water_1_lite_1.mp4");
    
  } catch (error) {
    console.error('Failed to load video texture', error);
  }
    console.log("1",<VideoMaterial url={"./water_1_lite.mp4"}/>)
    console.log("2", videoTexture)


    const causticLight = useMemo(() => new SpotLight('#fff'), []);
    
    if (videoTexture != null){
      return <group>
          <primitive
            object={causticLight}
            position={[0, 20, 2]}
            intensity={1.5}
            map={videoTexture}
            castShadow={false}
            penumbra={0.5} />
          <primitive object={causticLight.target} position={[0, 0, 0]} />
      </group>
    } else {
      return null
    }
}

function VideoMaterial({ url}) {
  const texture = useVideoTexture(url)
  return <meshBasicMaterial map={texture} toneMapped={false} />
}