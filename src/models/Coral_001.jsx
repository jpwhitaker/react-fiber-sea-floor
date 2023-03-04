import { useGLTF, useAnimations, PivotControls } from "@react-three/drei";

export default function Model({scale})
{
  const model = useGLTF('./meshes/Coral_001.glb')
  
  return (<primitive scale={scale} object={model.scene} />)
}


useGLTF.preload('./meshes/Coral_001.glb')