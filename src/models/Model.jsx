import { useGLTF, useAnimations, PivotControls } from "@react-three/drei";
import { useRef } from 'react';


export default function Model(props)
{
//   const loadedModel = useGLTF(`./meshes/${model}.glb`)
//   const { nodes, materials } = loadedModel

  const { nodes, materials } = useGLTF(`./meshes/${props.model}.glb`);
  const meshRef = useRef();
  const handleDragEnd = () => {
    const model = meshRef.current
    debugger
  };
  
  return (
    <PivotControls anchor={[0, 0, 0]} onDragEnd ={handleDragEnd}>
    <group {...props} dispose={null} ref={meshRef}>
      <mesh
        name={props.model}
        castShadow
        receiveShadow
        geometry={nodes[props.model].geometry}
        material={materials.Material}
      />
    </group>
    </PivotControls>
  )
}

// debugger
if(typeof props !== 'undefined' && typeof props.model !== 'undefined'){
    useGLTF.preload(`./meshes/${props.model}.glb`)
}


