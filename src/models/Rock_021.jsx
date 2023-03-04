import { useGLTF, useAnimations, PivotControls } from "@react-three/drei";

export default function Model({scale, position, rotation})
{
  const model = useGLTF('./meshes/Rock_021.glb')
  
  return (<primitive scale={scale} position={position} rotation={rotation} object={model.scene} />)
}

useGLTF.preload('./meshes/Rock021.glb')