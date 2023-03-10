import { useMediaQuery } from "@react-hook/media-query";
import { forwardRef, useLayoutEffect } from "react";
import { Float, Cylinder, Sphere, QuadraticBezierLine} from "@react-three/drei";
import Model from "./models/Model";
import Jellyfish from "./Jellyfish";

export default function NearObjects() {
    const isDesktop = useMediaQuery('(min-width: 768px)');


    return(
        <>
            <Float>
              <Model
                model="Water_Ship_001" 
                scale={1} 
                position={isDesktop ? [10,15,-10] : [3,15,-10]} 
            />
            </Float>

            <Model
              model="Coral_reef_003" 
              scale={1} 
              position={[5,0,1]}
              visible={isDesktop ? true : false}
            />
            <Model
              model="Coral_reef_004" 
              scale={1} 
              position={isDesktop ? [-5,0,0] : [-2, 0, 0]} 
              rotation={[0,3.5,0]} 
            />
            <Model
              model="Rock_021" 
              scale={1} 
              position={isDesktop ? [-4.8, 3, -2.5] : [-2.8, 3, -2.5]} 
              rotation={[0, .8, 0]}
            />
            <Model
              model="Rock_021" 
              scale={1} 
              position={isDesktop ? [-8,8.5,-3.5] : [-4, 8.5, -3.5]} 
              rotation={[0,-3,0]}
            />

            <Model
              model="Coralls_008" 
              scale={1} 
              position={isDesktop ? [-2.8,5,-3] : [-0.3, 5. -3]} 
              rotation={[0,-3,0]}
            />

            <Model
              model="Coral_026" 
              scale={1} 
              position={isDesktop ? [-4.9,6.8,-1.3] : [-2.9, 6.8, -1.3]} 
              rotation={[1,-3,0]}
            />

            {/*Starfish*/}
            <Model
              model="Coral_005" 
              scale={1} 
              position={isDesktop ? [-6.7,10.7,-2.5] : [-2.8, 10.7, -2.5]} 
              rotation={isDesktop ? [1,0,-1.6] : [1, 0, -1.2]}
            />

            <Float rotationIntensity={0.5}>
              <Jellyfish
                position={isDesktop ? [-2, 10.7, -0.5] : [-1, 10.7, -0.5]}
              />
            </Float>

            <Model
              model="Octopus_001" 
              scale={1} 
              position={isDesktop ? [-2, 0, 1] : [0, 0, 1]} 
              rotation={[0, .8, 0]}
            />

            <group
              position={isDesktop ? [0,0,0] : [2, 0, 0]}
            >
              <Cylinder 
                position={[-1,0,1]} 
                rotation={[0,0,0]} 
                args={[0.03, 0.03, 1, 32]} 
                material-color="#222" 
              />
              <Cylinder 
                position={[-1,0.5,1]} 
                rotation={[1.6,0,1]} 
                args={[0.04, 0.02, 0.6, 32]} 
                material-color="#222" 
              />
              <Sphere 
                args={[0.08, 6,6]} 
                position={[-1.25,0.49,1.15]}
              >
                <meshStandardMaterial color="#000"  />
              </Sphere>
            </group>
        </>
    )
}