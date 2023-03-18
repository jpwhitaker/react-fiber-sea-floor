import { useMediaQuery } from "@react-hook/media-query";
import { useRef } from "react";
import { PivotControls, QuadraticBezierLine} from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { Vector3 } from "three";


export default function GroundWire() {
  const isDesktop = useMediaQuery('(min-width: 768px)');
  const pivotControlsRef = useRef();

 
  useFrame(() => {
    if (pivotControlsRef.current) {
      //do something
    }
  });

  return (
    <>
      <PivotControls ref={pivotControlsRef} mode="translate">
        <Wire end={[0,0,0]} start={[1,1,1]}/>
        <object3D/>
      </PivotControls>
    </>
  )
}


const Wire = function({start, end}){
  return (
    <QuadraticBezierLine
      start={start}
      end={end}
      lineWidth={4}
      fog={true}
      color={"#474747"}
    >
    </QuadraticBezierLine> 
  )
}
