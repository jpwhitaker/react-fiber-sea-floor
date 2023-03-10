/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export default function(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/underwater.glb");
  const { actions } = useAnimations(animations, group);
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">

        <mesh
          name="seaweed001"
          castShadow
          receiveShadow
          geometry={nodes.seaweed001.geometry}
          material={materials["Material.001"]}
          position={[0, 0, 0]}
        />
        
      </group>
    </group>
  );
}

useGLTF.preload("/underwater.glb");
