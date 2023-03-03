import React, { useRef } from "react";
import { useGLTF, useAnimations, PivotControls } from "@react-three/drei";

export default function({name, ...props}) {
  // debugger
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/underwater.glb");
  const { actions } = useAnimations(animations, group);
  console.log(nodes)
  
  if (nodes[name].type === "Mesh"){
    return (
      <group ref={group} {...props} dispose={null}>
        <group name="Scene">
  
          <mesh
            // name="rock002"
            name={name}
            castShadow
            receiveShadow
            geometry={nodes[name].geometry}
            material={materials["Material.001"]}
            position= {props.position}
          />
          
        </group>
      </group>
    );
  } else {
    const rotation = props.rotateY ? [0, props.rotateY ,0] : [0, 0, 0]
    return (
      <group name={name} position={props.position} >
        <primitive object={nodes[props.bones]} rotation={rotation} />
        <skinnedMesh
          frustumCulled={false}
          name={name}
          geometry={nodes[name].geometry}
          material={materials["Material.001"]}
          skeleton={nodes[name].skeleton}
          position={[0,0,0]}
          
        />
      </group>
    )
  }

}

useGLTF.preload("/underwater.glb");