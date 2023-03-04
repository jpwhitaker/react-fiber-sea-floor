import React, { useRef } from "react";
import { useGLTF, MeshWobbleMaterial, MeshDistortMaterial } from "@react-three/drei";

export default function Octopus_001(props) {
  const { nodes, materials } = useGLTF("./meshes/Octopus_001.glb");
//   debugger
  return (
    <group {...props} dispose={null}>
      <mesh
        name="Octopus_001"
        castShadow
        receiveShadow
        geometry={nodes.Octopus_001.geometry}
        material={materials.Material}
      >
        </mesh>
    </group>
  );
}

useGLTF.preload("/Octopus_001.glb");
