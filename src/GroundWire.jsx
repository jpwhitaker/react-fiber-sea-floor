import { useRef } from "react";
import { PivotControls, QuadraticBezierLine, Box} from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { Vector3, Object3D } from "three";
import { Matrix4 } from "three";

export default function GroundWire() {
  const pivotControlsRef1 = useRef();
  const pivotControlsRef2 = useRef();
  const object3DRef1 = useRef();
  const object3DRef2 = useRef();
  const wireStart = useRef(new Vector3());
  const wireEnd = useRef(new Vector3());
  const initialPosition1 = [1, 1, 1];
  const initialPosition2 = [0, 0, 0];
  const gizmoMatrix1 = new Matrix4();
  gizmoMatrix1.setPosition(1, 1, 1);


  // useFrame(() => {
  //   if (pivotControlsRef1.current && pivotControlsRef2.current) {
  //     wireStart.current.copy(object3DRef1.current.position);
  //     wireEnd.current.copy(object3DRef2.current.position);
  //   }
  // });

  return (
    <>
      <PivotControls ref={pivotControlsRef1} mode="translate" matrix={gizmoMatrix1} anchor={[0,0,0]}>
        <Box ref={object3DRef1} position={initialPosition1} />
      </PivotControls>

      
      <PivotControls ref={pivotControlsRef2} mode="translate" position={initialPosition2}>
        <Box ref={object3DRef2} position={initialPosition2} />
      </PivotControls>
      <Wire start={wireStart.current} end={wireEnd.current} />
    </>
  );
}

const Wire = function ({ start, end }) {
  return (
    <QuadraticBezierLine
      start={start}
      end={end}
      lineWidth={4}
      fog={true}
      color={"#474747"}
    ></QuadraticBezierLine>
  );
};
