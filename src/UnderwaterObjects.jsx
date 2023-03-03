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
        <group name="Armature_Medusa_2" position={[-5.73, 5.99, -1.62]}>
          <primitive object={nodes.Bone} />
          <skinnedMesh
            name="Medusa_2"
            geometry={nodes.Medusa_2.geometry}
            material={materials["Material.001"]}
            skeleton={nodes.Medusa_2.skeleton}
          />
        </group>
        <group name="Armature_Medusa_1" position={[-6.56, 6.19, -1.62]}>
          <primitive object={nodes.Bone_1} />
          <skinnedMesh
            name="Medusa_1"
            geometry={nodes.Medusa_1.geometry}
            material={materials["Material.001"]}
            skeleton={nodes.Medusa_1.skeleton}
          />
        </group>
        <group name="Armature_squid" position={[-7.38, 5.59, -1.62]}>
          <primitive object={nodes.Bone_2} />
          <primitive object={nodes.Bone001_2} />
          <skinnedMesh
            name="squid"
            geometry={nodes.squid.geometry}
            material={materials["Material.001"]}
            skeleton={nodes.squid.skeleton}
          />
        </group>
        <group name="Armature_octopus" position={[-5.47, 3.93, -1.62]}>
          <primitive object={nodes.Bone_3} />
          <skinnedMesh
            name="octopus"
            geometry={nodes.octopus.geometry}
            material={materials["Material.001"]}
            skeleton={nodes.octopus.skeleton}
          />
        </group>
        <group name="Armature_skat" position={[-0.95, 3.86, -1.62]}>
          <primitive object={nodes.Bone_4} />
          <skinnedMesh
            name="skat"
            geometry={nodes.skat.geometry}
            material={materials["Material.001"]}
            skeleton={nodes.skat.skeleton}
          />
        </group>
        <group name="Armature_Crab" position={[-2.89, 3.76, -1.62]}>
          <primitive object={nodes.Bone001_4} />
          <skinnedMesh
            name="Crab"
            geometry={nodes.Crab.geometry}
            material={materials["Material.001"]}
            skeleton={nodes.Crab.skeleton}
          />
        </group>
        <group name="Armature_turtle" position={[-6.57, 3.06, -1.62]}>
          <primitive object={nodes.Bone_6} />
          <skinnedMesh
            name="turtle"
            geometry={nodes.turtle.geometry}
            material={materials["Material.001"]}
            skeleton={nodes.turtle.skeleton}
          />
        </group>
        <group name="Armature_fish005" position={[-5.09, 3.29, -1.62]}>
          <primitive object={nodes.Bone005_5} />
          <skinnedMesh
            name="fish005"
            geometry={nodes.fish005.geometry}
            material={materials["Material.001"]}
            skeleton={nodes.fish005.skeleton}
          />
        </group>
        <group name="Armature_fish006" position={[-5.09, 2.73, -1.62]}>
          <primitive object={nodes.Bone005_6} />
          <skinnedMesh
            name="fish006"
            geometry={nodes.fish006.geometry}
            material={materials["Material.001"]}
            skeleton={nodes.fish006.skeleton}
          />
        </group>
        <group name="Armature_fish007" position={[-5.09, 2.25, -1.62]}>
          <primitive object={nodes.Bone005_7} />
          <skinnedMesh
            name="fish007"
            geometry={nodes.fish007.geometry}
            material={materials["Material.001"]}
            skeleton={nodes.fish007.skeleton}
          />
        </group>
        <group name="Armature_fish002" position={[-3.74, 2.16, -1.62]}>
          <primitive object={nodes.Bone005_8} />
          <skinnedMesh
            name="fish002"
            geometry={nodes.fish002.geometry}
            material={materials["Material.001"]}
            skeleton={nodes.fish002.skeleton}
          />
        </group>
        <group name="Armature_fish008" position={[-3.74, 2.63, -1.62]}>
          <primitive object={nodes.Bone005_9} />
          <skinnedMesh
            name="fish008"
            geometry={nodes.fish008.geometry}
            material={materials["Material.001"]}
            skeleton={nodes.fish008.skeleton}
          />
        </group>
        <group name="Armature_fish001" position={[-2.99, 2.18, -1.62]}>
          <primitive object={nodes.Bone005_10} />
          <skinnedMesh
            name="fish001"
            geometry={nodes.fish001.geometry}
            material={materials["Material.001"]}
            skeleton={nodes.fish001.skeleton}
          />
        </group>
        <group name="Armature_fish009" position={[-2.99, 2.64, -1.62]}>
          <primitive object={nodes.Bone005_11} />
          <skinnedMesh
            name="fish009"
            geometry={nodes.fish009.geometry}
            material={materials["Material.001"]}
            skeleton={nodes.fish009.skeleton}
          />
        </group>
        <group name="Armature_fish003" position={[-2.25, 2.22, -1.62]}>
          <primitive object={nodes.Bone005_12} />
          <skinnedMesh
            name="fish003"
            geometry={nodes.fish003.geometry}
            material={materials["Material.001"]}
            skeleton={nodes.fish003.skeleton}
          />
        </group>
        <group name="Armature_fish" position={[-2.27, 2.65, -1.62]}>
          <primitive object={nodes.Bone005_13} />
          <skinnedMesh
            name="fish"
            geometry={nodes.fish.geometry}
            material={materials["Material.001"]}
            skeleton={nodes.fish.skeleton}
          />
        </group>
        <group name="Armature_fish010" position={[-1.56, 2.2, -1.62]}>
          <primitive object={nodes.Bone005_14} />
          <skinnedMesh
            name="fish010"
            geometry={nodes.fish010.geometry}
            material={materials["Material.001"]}
            skeleton={nodes.fish010.skeleton}
          />
        </group>
        <group name="Armature_fish011" position={[-1.58, 2.66, -1.62]}>
          <primitive object={nodes.Bone005_15} />
          <skinnedMesh
            name="fish011"
            geometry={nodes.fish011.geometry}
            material={materials["Material.001"]}
            skeleton={nodes.fish011.skeleton}
          />
        </group>
        <group name="Armature_fish004" position={[-0.73, 2.16, -1.62]}>
          <primitive object={nodes.Bone005_16} />
          <skinnedMesh
            name="fish004"
            geometry={nodes.fish004.geometry}
            material={materials["Material.001"]}
            skeleton={nodes.fish004.skeleton}
          />
        </group>
        <group name="Armature_fish012" position={[-0.73, 2.65, -1.62]}>
          <primitive object={nodes.Bone005_17} />
          <skinnedMesh
            name="fish012"
            geometry={nodes.fish012.geometry}
            material={materials["Material.001"]}
            skeleton={nodes.fish012.skeleton}
          />
        </group>
        <group name="Armature_fish013" position={[0.02, 2.14, -1.62]}>
          <primitive object={nodes.Bone005_18} />
          <skinnedMesh
            name="fish013"
            geometry={nodes.fish013.geometry}
            material={materials["Material.001"]}
            skeleton={nodes.fish013.skeleton}
          />
        </group>
        <group name="Armature_fish014" position={[0.02, 2.58, -1.62]}>
          <primitive object={nodes.Bone005_19} />
          <skinnedMesh
            name="fish014"
            geometry={nodes.fish014.geometry}
            material={materials["Material.001"]}
            skeleton={nodes.fish014.skeleton}
          />
        </group>
        <group name="Armature_fish015" position={[0.96, 2.22, -1.62]}>
          <primitive object={nodes.Bone005_20} />
          <skinnedMesh
            name="fish015"
            geometry={nodes.fish015.geometry}
            material={materials["Material.001"]}
            skeleton={nodes.fish015.skeleton}
          />
        </group>
        <group name="Armature_fish016" position={[0.96, 2.58, -1.62]}>
          <primitive object={nodes.Bone005_21} />
          <skinnedMesh
            name="fish016"
            geometry={nodes.fish016.geometry}
            material={materials["Material.001"]}
            skeleton={nodes.fish016.skeleton}
          />
        </group>
        <group name="Armature_fish017" position={[1.53, 2.21, -1.62]}>
          <primitive object={nodes.Bone005_22} />
          <skinnedMesh
            name="fish017"
            geometry={nodes.fish017.geometry}
            material={materials["Material.001"]}
            skeleton={nodes.fish017.skeleton}
          />
        </group>
        <group name="Armature_fish018" position={[1.53, 2.49, -1.62]}>
          <primitive object={nodes.Bone005_23} />
          <skinnedMesh
            name="fish018"
            geometry={nodes.fish018.geometry}
            material={materials["Material.001"]}
            skeleton={nodes.fish018.skeleton}
          />
        </group>
        <group name="Armature_fish019" position={[2.04, 2.22, -1.62]}>
          <primitive object={nodes.Bone005_24} />
          <skinnedMesh
            name="fish019"
            geometry={nodes.fish019.geometry}
            material={materials["Material.001"]}
            skeleton={nodes.fish019.skeleton}
          />
        </group>
        <group name="Armature_fish020" position={[2.04, 2.47, -1.62]}>
          <primitive object={nodes.Bone005_25} />
          <skinnedMesh
            name="fish020"
            geometry={nodes.fish020.geometry}
            material={materials["Material.001"]}
            skeleton={nodes.fish020.skeleton}
          />
        </group>
        <group name="Armature_fish021" position={[1, 3.23, -1.62]}>
          <primitive object={nodes.Bone005_26} />
          <skinnedMesh
            name="fish021"
            geometry={nodes.fish021.geometry}
            material={materials["Material.001"]}
            skeleton={nodes.fish021.skeleton}
          />
        </group>
        <group name="Armature_fish022" position={[0.15, 3.25, -1.62]}>
          <primitive object={nodes.Bone005_27} />
          <skinnedMesh
            name="fish022"
            geometry={nodes.fish022.geometry}
            material={materials["Material.001"]}
            skeleton={nodes.fish022.skeleton}
          />
        </group>
        <group name="Armature_fish023" position={[-0.78, 3.24, -1.62]}>
          <primitive object={nodes.Bone005_28} />
          <skinnedMesh
            name="fish023"
            geometry={nodes.fish023.geometry}
            material={materials["Material.001"]}
            skeleton={nodes.fish023.skeleton}
          />
        </group>
        <group name="Armature_fish024" position={[-1.5, 3.27, -1.62]}>
          <primitive object={nodes.Bone005_29} />
          <skinnedMesh
            name="fish024"
            geometry={nodes.fish024.geometry}
            material={materials["Material.001"]}
            skeleton={nodes.fish024.skeleton}
          />
        </group>
        <group name="Armature_fish025" position={[-2.27, 3.29, -1.62]}>
          <primitive object={nodes.Bone005_30} />
          <skinnedMesh
            name="fish025"
            geometry={nodes.fish025.geometry}
            material={materials["Material.001"]}
            skeleton={nodes.fish025.skeleton}
          />
        </group>
        <group name="Armature_fish026" position={[-3.02, 3.28, -1.62]}>
          <primitive object={nodes.Bone005_31} />
          <skinnedMesh
            name="fish026"
            geometry={nodes.fish026.geometry}
            material={materials["Material.001"]}
            skeleton={nodes.fish026.skeleton}
          />
        </group>
        <group name="Armature_fish027" position={[-3.74, 3.27, -1.62]}>
          <primitive object={nodes.Bone005_32} />
          <skinnedMesh
            name="fish027"
            geometry={nodes.fish027.geometry}
            material={materials["Material.001"]}
            skeleton={nodes.fish027.skeleton}
          />
        </group>
        <group name="Armature_shark" position={[-4.4, 4.89, -1.62]}>
          <primitive object={nodes.Bone002_34} />
          <skinnedMesh
            name="shark"
            geometry={nodes.shark.geometry}
            material={materials["Material.001"]}
            skeleton={nodes.shark.skeleton}
          />
        </group>
        <group name="Armature_Orcas" position={[-3.24, 7.43, -1.62]}>
          <primitive object={nodes.Bone_35} />
          <skinnedMesh
            name="Orcas"
            geometry={nodes.Orcas.geometry}
            material={materials["Material.001"]}
            skeleton={nodes.Orcas.skeleton}
          />
        </group>
        <group name="Armature_dolphin" position={[1.55, 4.69, -1.62]}>
          <primitive object={nodes.Bone_36} />
          <skinnedMesh
            name="dolphin"
            geometry={nodes.dolphin.geometry}
            material={materials["Material.001"]}
            skeleton={nodes.dolphin.skeleton}
          />
        </group>
        <mesh
          name="ship"
          castShadow
          receiveShadow
          geometry={nodes.ship.geometry}
          material={materials["Material.001"]}
          position={[-67.46, 0.54, -0.78]}
        />
        <mesh
          name="ship001"
          castShadow
          receiveShadow
          geometry={nodes.ship001.geometry}
          material={materials["Material.001"]}
          position={[-68.05, 0.48, -0.86]}
        />
        <mesh
          name="ship002"
          castShadow
          receiveShadow
          geometry={nodes.ship002.geometry}
          material={materials["Material.001"]}
          position={[-52.86, 9.25, -1.45]}
        />
        <mesh
          name="ship003"
          castShadow
          receiveShadow
          geometry={nodes.ship003.geometry}
          material={materials["Material.001"]}
          position={[-64.17, 0.73, -2.07]}
        />
        <mesh
          name="ship004"
          castShadow
          receiveShadow
          geometry={nodes.ship004.geometry}
          material={materials["Material.001"]}
          position={[-64.92, 0.72, -2.07]}
        />
        <mesh
          name="ship005"
          castShadow
          receiveShadow
          geometry={nodes.ship005.geometry}
          material={materials["Material.001"]}
          position={[-63.43, 0.74, -2.07]}
        />
        <mesh
          name="ship006"
          castShadow
          receiveShadow
          geometry={nodes.ship006.geometry}
          material={materials["Material.001"]}
          position={[-62.61, 0.63, -2.07]}
        />
        <mesh
          name="ship007"
          castShadow
          receiveShadow
          geometry={nodes.ship007.geometry}
          material={materials["Material.001"]}
          position={[-70.04, 0.94, -0.83]}
        />
        <mesh
          name="ship008"
          castShadow
          receiveShadow
          geometry={nodes.ship008.geometry}
          material={materials["Material.001"]}
          position={[-68.98, 0.8, -0.85]}
        />
        <mesh
          name="ship009"
          castShadow
          receiveShadow
          geometry={nodes.ship009.geometry}
          material={materials["Material.001"]}
          position={[-68.86, 0.92, -1.93]}
        />
        <mesh
          name="ship010"
          castShadow
          receiveShadow
          geometry={nodes.ship010.geometry}
          material={materials["Material.001"]}
          position={[-66.11, 0.82, -1.96]}
        />
        <mesh
          name="ship011"
          castShadow
          receiveShadow
          geometry={nodes.ship011.geometry}
          material={materials["Material.001"]}
          position={[-67.38, 0.91, -2.03]}
        />
        <mesh
          name="ship012"
          castShadow
          receiveShadow
          geometry={nodes.ship012.geometry}
          material={materials["Material.001"]}
          position={[-67.72, 0.54, -0.86]}
        />
        <mesh
          name="ship013"
          castShadow
          receiveShadow
          geometry={nodes.ship013.geometry}
          material={materials["Material.001"]}
          position={[-45.57, 12.54, -0.55]}
        />
        <mesh
          name="ship014"
          castShadow
          receiveShadow
          geometry={nodes.ship014.geometry}
          material={materials["Material.001"]}
          position={[-68.92, 2.75, -0.59]}
        />
        <mesh
          name="ship015"
          castShadow
          receiveShadow
          geometry={nodes.ship015.geometry}
          material={materials["Material.001"]}
          position={[-63.74, 2.69, -0.32]}
        />
        <mesh
          name="ship016"
          castShadow
          receiveShadow
          geometry={nodes.ship016.geometry}
          material={materials["Material.001"]}
          position={[-66.4, 4.29, -2.67]}
        />
        <mesh
          name="ship017"
          castShadow
          receiveShadow
          geometry={nodes.ship017.geometry}
          material={materials["Material.001"]}
          position={[-66.21, 2.62, 0.42]}
        />
        <mesh
          name="ship018"
          castShadow
          receiveShadow
          geometry={nodes.ship018.geometry}
          material={materials["Material.001"]}
          position={[-69.99, 0.93, -1.96]}
        />
        <mesh
          name="ship019"
          castShadow
          receiveShadow
          geometry={nodes.ship019.geometry}
          material={materials["Material.001"]}
          position={[-54.54, 12.51, 0.82]}
        />
        <mesh
          name="hill001"
          castShadow
          receiveShadow
          geometry={nodes.hill001.geometry}
          material={materials["Material.001"]}
          position={[-66.44, 31.95, 0.02]}
        />
        <mesh
          name="hill002"
          castShadow
          receiveShadow
          geometry={nodes.hill002.geometry}
          material={materials["Material.001"]}
          position={[-66.1, 28.21, -0.76]}
        />
        <mesh
          name="hill009"
          castShadow
          receiveShadow
          geometry={nodes.hill009.geometry}
          material={materials["Material.001"]}
          position={[-65.94, 24.9, -0.72]}
        />
        <mesh
          name="seaweed"
          castShadow
          receiveShadow
          geometry={nodes.seaweed.geometry}
          material={materials["Material.001"]}
          position={[-54.76, -0.54, -1.38]}
        />
        <mesh
          name="seaweed001"
          castShadow
          receiveShadow
          geometry={nodes.seaweed001.geometry}
          material={materials["Material.001"]}
          position={[-53.99, -0.44, -1.39]}
        />
        <mesh
          name="seaweed002"
          castShadow
          receiveShadow
          geometry={nodes.seaweed002.geometry}
          material={materials["Material.001"]}
          position={[-58.82, -0.53, -1.38]}
        />
        <mesh
          name="seaweed003"
          castShadow
          receiveShadow
          geometry={nodes.seaweed003.geometry}
          material={materials["Material.001"]}
          position={[-57.74, -0.63, -1.38]}
        />
        <mesh
          name="seaweed004"
          castShadow
          receiveShadow
          geometry={nodes.seaweed004.geometry}
          material={materials["Material.001"]}
          position={[-55.63, -0.6, -1.38]}
        />
        <mesh
          name="seaweed005"
          castShadow
          receiveShadow
          geometry={nodes.seaweed005.geometry}
          material={materials["Material.001"]}
          position={[-52.71, -0.49, -1]}
        />
        <mesh
          name="seaweed006"
          castShadow
          receiveShadow
          geometry={nodes.seaweed006.geometry}
          material={materials["Material.001"]}
          position={[-51.21, -0.41, -1.03]}
        />
        <mesh
          name="seaweed007"
          castShadow
          receiveShadow
          geometry={nodes.seaweed007.geometry}
          material={materials["Material.001"]}
          position={[-46.79, -0.23, -1]}
        />
        <mesh
          name="seaweed008"
          castShadow
          receiveShadow
          geometry={nodes.seaweed008.geometry}
          material={materials["Material.001"]}
          position={[-43.52, -0.25, -0.86]}
        />
        <mesh
          name="seaweed009"
          castShadow
          receiveShadow
          geometry={nodes.seaweed009.geometry}
          material={materials["Material.001"]}
          position={[-40.29, -0.18, -0.85]}
        />
        <mesh
          name="seaweed010"
          castShadow
          receiveShadow
          geometry={nodes.seaweed010.geometry}
          material={materials["Material.001"]}
          position={[-41.13, -0.21, -0.85]}
          rotation={[0, 1.39, 0]}
        />
        <mesh
          name="seaweed011"
          castShadow
          receiveShadow
          geometry={nodes.seaweed011.geometry}
          material={materials["Material.001"]}
          position={[-42, -0.21, -0.85]}
          rotation={[-2.88, -0.45, -3.08]}
        />
        <mesh
          name="seaweed012"
          castShadow
          receiveShadow
          geometry={nodes.seaweed012.geometry}
          material={materials["Material.001"]}
          position={[-45.05, -0.25, -0.86]}
          rotation={[-Math.PI, 1.2, -Math.PI]}
        />
        <mesh
          name="seaweed013"
          castShadow
          receiveShadow
          geometry={nodes.seaweed013.geometry}
          material={materials["Material.001"]}
          position={[-48.96, -0.24, -1.02]}
        />
        <mesh
          name="seaweed014"
          castShadow
          receiveShadow
          geometry={nodes.seaweed014.geometry}
          material={materials["Material.001"]}
          position={[-60.17, -0.42, -1.44]}
        />
        <mesh
          name="seaweed015"
          castShadow
          receiveShadow
          geometry={nodes.seaweed015.geometry}
          material={materials["Material.001"]}
          position={[-56.69, -0.62, -1.44]}
          rotation={[-Math.PI, 1.35, -Math.PI]}
        />
        <mesh
          name="rock"
          castShadow
          receiveShadow
          geometry={nodes.rock.geometry}
          material={materials["Material.001"]}
          position={[-27.58, 20.98, -0.74]}
        />
        <mesh
          name="rock001"
          castShadow
          receiveShadow
          geometry={nodes.rock001.geometry}
          material={materials["Material.001"]}
          position={[-29.38, 21.04, -0.75]}
        />
        <mesh
          name="rock002"
          castShadow
          receiveShadow
          geometry={nodes.rock002.geometry}
          material={materials["Material.001"]}
          position={[-22.25, 20.97, -0.66]}
        />
        <mesh
          name="rock003"
          castShadow
          receiveShadow
          geometry={nodes.rock003.geometry}
          material={materials["Material.001"]}
          position={[-26.12, 20.97, -0.74]}
        />
        <mesh
          name="rock004"
          castShadow
          receiveShadow
          geometry={nodes.rock004.geometry}
          material={materials["Material.001"]}
          position={[-23.44, 20.98, -0.64]}
        />
        <mesh
          name="rock005"
          castShadow
          receiveShadow
          geometry={nodes.rock005.geometry}
          material={materials["Material.001"]}
          position={[-24.75, 20.98, -0.82]}
        />
        <mesh
          name="rock006"
          castShadow
          receiveShadow
          geometry={nodes.rock006.geometry}
          material={materials["Material.001"]}
          position={[-31.47, 21, -0.89]}
        />
        <mesh
          name="rock007"
          castShadow
          receiveShadow
          geometry={nodes.rock007.geometry}
          material={materials["Material.001"]}
          position={[-33.24, 6.32, -1.42]}
        />
        <mesh
          name="rock008"
          castShadow
          receiveShadow
          geometry={nodes.rock008.geometry}
          material={materials["Material.001"]}
          position={[-29.65, 6.67, -1.65]}
        />
        <mesh
          name="rock009"
          castShadow
          receiveShadow
          geometry={nodes.rock009.geometry}
          material={materials["Material.001"]}
          position={[-26.8, 13.53, -1.39]}
        />
        <mesh
          name="rock010"
          castShadow
          receiveShadow
          geometry={nodes.rock010.geometry}
          material={materials["Material.001"]}
          position={[-37.15, 6.22, -1.47]}
        />
        <mesh
          name="rock011"
          castShadow
          receiveShadow
          geometry={nodes.rock011.geometry}
          material={materials["Material.001"]}
          position={[-31.47, 13.49, -1.38]}
        />
        <mesh
          name="rock012"
          castShadow
          receiveShadow
          geometry={nodes.rock012.geometry}
          material={materials["Material.001"]}
          position={[-21.44, 6.79, -1.33]}
        />
        <mesh
          name="rock013"
          castShadow
          receiveShadow
          geometry={nodes.rock013.geometry}
          material={materials["Material.001"]}
          position={[-2.66, 26.02, 0.05]}
        />
        <mesh
          name="rock014"
          castShadow
          receiveShadow
          geometry={nodes.rock014.geometry}
          material={materials["Material.001"]}
          position={[-25.51, 6.95, -0.95]}
        />
        <mesh
          name="rock015"
          castShadow
          receiveShadow
          geometry={nodes.rock015.geometry}
          material={materials["Material.001"]}
          position={[-22.22, 13.8, -1.62]}
        />
        <mesh
          name="rock016"
          castShadow
          receiveShadow
          geometry={nodes.rock016.geometry}
          material={materials["Material.001"]}
          position={[-17.1, 13.74, -1.23]}
        />
        <mesh
          name="rock017"
          castShadow
          receiveShadow
          geometry={nodes.rock017.geometry}
          material={materials["Material.001"]}
          position={[-35.93, 21.16, -0.9]}
        />
        <mesh
          name="rock018"
          castShadow
          receiveShadow
          geometry={nodes.rock018.geometry}
          material={materials["Material.001"]}
          position={[-33.85, 21.24, -0.83]}
        />
        <mesh
          name="rock019"
          castShadow
          receiveShadow
          geometry={nodes.rock019.geometry}
          material={materials["Material.001"]}
          position={[-37.83, 21.12, -0.72]}
        />
        <mesh
          name="rock020"
          castShadow
          receiveShadow
          geometry={nodes.rock020.geometry}
          material={materials["Material.001"]}
          position={[-70.84, 14.12, -0.89]}
        />
        <mesh
          name="rock021"
          castShadow
          receiveShadow
          geometry={nodes.rock021.geometry}
          material={materials["Material.001"]}
          position={[-53.37, 29.04, -0.47]}
        />
        <mesh
          name="rock022"
          castShadow
          receiveShadow
          geometry={nodes.rock022.geometry}
          material={materials["Material.001"]}
          position={[-54.79, 24.25, -0.9]}
        />
        <mesh
          name="rock023"
          castShadow
          receiveShadow
          geometry={nodes.rock023.geometry}
          material={materials["Material.001"]}
          position={[-46.51, 24.29, -0.34]}
        />
        <mesh
          name="rock024"
          castShadow
          receiveShadow
          geometry={nodes.rock024.geometry}
          material={materials["Material.001"]}
          position={[-42.42, 28.98, 0.66]}
        />
        <mesh
          name="rock025"
          castShadow
          receiveShadow
          geometry={nodes.rock025.geometry}
          material={materials["Material.001"]}
          position={[-32.63, 29.06, -0.83]}
        />
        <mesh
          name="rock026"
          castShadow
          receiveShadow
          geometry={nodes.rock026.geometry}
          material={materials["Material.001"]}
          position={[-39.48, 24.35, -0.7]}
        />
        <mesh
          name="rock027"
          castShadow
          receiveShadow
          geometry={nodes.rock027.geometry}
          material={materials["Material.001"]}
          position={[-30.42, 24.35, -0.43]}
        />
        <mesh
          name="rock028"
          castShadow
          receiveShadow
          geometry={nodes.rock028.geometry}
          material={materials["Material.001"]}
          position={[-4.56, 15.72, -1.28]}
        />
        <mesh
          name="rock029"
          castShadow
          receiveShadow
          geometry={nodes.rock029.geometry}
          material={materials["Material.001"]}
          position={[-11.46, 13.74, -1.46]}
        />
        <mesh
          name="rock030"
          castShadow
          receiveShadow
          geometry={nodes.rock030.geometry}
          material={materials["Material.001"]}
          position={[-36.89, 14.38, -1.1]}
        />
        <mesh
          name="rock031"
          castShadow
          receiveShadow
          geometry={nodes.rock031.geometry}
          material={materials["Material.001"]}
          position={[-13.48, 6.91, -0.63]}
        />
        <mesh
          name="rock032"
          castShadow
          receiveShadow
          geometry={nodes.rock032.geometry}
          material={materials["Material.001"]}
          position={[-9.61, 6.77, -0.33]}
        />
        <mesh
          name="rock033"
          castShadow
          receiveShadow
          geometry={nodes.rock033.geometry}
          material={materials["Material.001"]}
          position={[-17.75, 6.92, -1.46]}
        />
        <mesh
          name="rock034"
          castShadow
          receiveShadow
          geometry={nodes.rock034.geometry}
          material={materials["Material.001"]}
          position={[-17.79, 27.54, -0.52]}
        />
        <mesh
          name="rock035"
          castShadow
          receiveShadow
          geometry={nodes.rock035.geometry}
          material={materials["Material.001"]}
          position={[-42.68, 35.87, 0.28]}
        />
        <mesh
          name="rock036"
          castShadow
          receiveShadow
          geometry={nodes.rock036.geometry}
          material={materials["Material.001"]}
          position={[-54, 36.52, 0.66]}
        />
        <mesh
          name="rock037"
          castShadow
          receiveShadow
          geometry={nodes.rock037.geometry}
          material={materials["Material.001"]}
          position={[-32.63, 35.79, -0.83]}
        />
        <mesh
          name="rock038"
          castShadow
          receiveShadow
          geometry={nodes.rock038.geometry}
          material={materials["Material.001"]}
          position={[-37.21, 0.77, -1.42]}
        />
        <mesh
          name="rock039"
          castShadow
          receiveShadow
          geometry={nodes.rock039.geometry}
          material={materials["Material.001"]}
          position={[-33.67, 0.38, -1.65]}
        />
        <mesh
          name="rock040"
          castShadow
          receiveShadow
          geometry={nodes.rock040.geometry}
          material={materials["Material.001"]}
          position={[-8.86, 0.43, -1.33]}
        />
        <mesh
          name="rock041"
          castShadow
          receiveShadow
          geometry={nodes.rock041.geometry}
          material={materials["Material.001"]}
          position={[-12.94, 0.91, -0.95]}
        />
        <mesh
          name="rock042"
          castShadow
          receiveShadow
          geometry={nodes.rock042.geometry}
          material={materials["Material.001"]}
          position={[-17.2, 0.46, -0.74]}
          rotation={[Math.PI, -0.23, Math.PI]}
        />
        <mesh
          name="rock043"
          castShadow
          receiveShadow
          geometry={nodes.rock043.geometry}
          material={materials["Material.001"]}
          position={[-29.09, 0.33, -0.33]}
        />
        <mesh
          name="rock044"
          castShadow
          receiveShadow
          geometry={nodes.rock044.geometry}
          material={materials["Material.001"]}
          position={[-20.86, 0.57, -1.46]}
          rotation={[0, 0.19, 0]}
        />
        <mesh
          name="rock045"
          castShadow
          receiveShadow
          geometry={nodes.rock045.geometry}
          material={materials["Material.001"]}
          position={[-25.51, 0.76, -0.95]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/underwater.glb");
