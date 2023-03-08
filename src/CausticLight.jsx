import { useMemo } from 'react'
import { SpotLight } from 'three'
import {useVideoTexture } from '@react-three/drei'

export default function CausticLight() {
    const videoTexture = useVideoTexture("./water_1_lite_1.mp4")
    videoTexture.needsUpdate = true;
    const causticLight = useMemo(() => new SpotLight('#fff'), []);

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
}