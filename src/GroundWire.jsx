import { useRef, forwardRef } from "react";
import { PivotControls, QuadraticBezierLine, Box} from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { Vector3, Object3D } from "three";
import { Matrix4 } from "three";

export default function GroundWire() {

  const boxRef1 = useRef();
  const boxRef2 = useRef();
  const gizmoRef1 = useRef();
  const gizmoRef2 = useRef();
  const wireRef = useRef();
  

  const initialPosition1 = [1, 1, 1];
  const initialPosition2 = [0, 0, 0];
  
  const gizmoMatrix1 = new Matrix4();
  gizmoMatrix1.setPosition(1, 1, 1);


  useFrame(() => {
    
    if (boxRef1.current && boxRef2.current && wireRef.current) {
      const position1 = boxRef1.current.position
      const position2 = boxRef2.current.position
      wireRef.current.setPoints(position1, position2)
      // console.log(`1: ${boxRef1.current.position.toArray()} 2. ${boxRef2.current.position.toArray()}`)
      // console.log(`1: ${gizmoRef1.current.position.toArray()} 2. ${gizmoRef2.current.position.toArray()}`)
      // debugger
      
    }
  });

  return (
    <>
      <PivotControls ref={gizmoRef1} onDrag={(e) => {
        const pos = new Vector3().setFromMatrixPosition(e); 
        console.log(pos);
        //logging the position but wire isnt updating.  Look to SlackWire implementation in SubAndMic
        wireRef.current.setPoints([0,0,0], pos)
        }} autoTransform={true} mode="translate" matrix={gizmoMatrix1} anchor={[0,0,0]}>
        <Box ref={boxRef1} position={initialPosition1} />
      </PivotControls>

      
      <PivotControls ref={gizmoRef2} autoTransform={true} mode="translate" anchor={[0,0,0]}>
        <Box ref={boxRef2} position={initialPosition2} />
      </PivotControls>
      <Wire ref={wireRef} start={[0,0,0]} end={[2,2,2]} />
    </>
  );
}

const Wire = forwardRef(({ start, end }, ref) =>{
  return (
    <QuadraticBezierLine
      ref={ref}
      start={start}
      end={end}
      lineWidth={4}
      fog={true}
      color={"#474747"}
    ></QuadraticBezierLine>
  );
});
