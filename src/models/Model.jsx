import { useGLTF, useAnimations, PivotControls } from "@react-three/drei";
import { useRef } from 'react';


export default function Model(props)
{
  const { nodes, materials } = useGLTF(`./meshes/${props.model}.glb`);
  const meshRef = useRef();
  const handleDragEnd = () => {
    const model = meshRef.current
    debugger
  };
  
  var meshes = [];
//   debugger
  for (const key in nodes){
    const node = nodes[key];
    if(node.type === 'Mesh'){
      meshes.push(
        <mesh
        name={node.name}
        castShadow
        receiveShadow
        geometry={nodes[node.name].geometry}
        material={materials.Material}
      />
      )
    }
  }
  

  return (
    <PivotControls anchor={[0, 0, 0]} onDragEnd ={handleDragEnd}>
    <group {...props} dispose={null} ref={meshRef}>
      {/* <mesh
        name={props.model}
        castShadow
        receiveShadow
        geometry={nodes[props.model].geometry}
        material={materials.Material}
      /> */}
      {meshes}
    </group>
    </PivotControls>
  )
}

// debugger
if(typeof props !== 'undefined' && typeof props.model !== 'undefined'){
    useGLTF.preload(`./meshes/${props.model}.glb`)
}


