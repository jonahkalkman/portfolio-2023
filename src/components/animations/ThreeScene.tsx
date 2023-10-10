"use client";
import React, {useRef} from "react";
import {Canvas, useLoader} from "@react-three/fiber";
import {OBJLoader} from "three/examples/jsm/loaders/OBJLoader.js";
import {MeshBasicMaterial} from "three";

interface Props {
  model: string;
}

export default function ThreeScene({model}: Props) {
  const objRef = useRef(null);
  const obj = useLoader(OBJLoader, model);

  // Create a wireframe material
  const wireframeMaterial = new MeshBasicMaterial({
    wireframe: true,
    color: "white",
    transparent: true,
    opacity: 0.5,
  });

  // Apply the wireframe material to the loaded OBJ object
  obj.traverse((child: any) => {
    if (child.isMesh) {
      child.material = wireframeMaterial;
    }
  });

  // Define the rotation speed (in radians per frame)
  const rotationSpeed = 0.01;

  // Update the object's rotation manually in the render loop
  const animate = () => {
    if (objRef.current) {
      // Rotate the object
      // @ts-ignore
      objRef.current.rotation.y += rotationSpeed;
    }
  };

  return (
    <div className="absolute top-[130px] lg:top-0 left-0 w-full h-[300px] lg:h-screen z-[-1]">
      <Canvas
        className="z-0 h-[300px] w-full lg:h-screen"
        style={{zIndex: -1}}
        shadows
        camera={{
          position: [-6, 7, 7],
        }}
        onCreated={({gl}) => {
          gl.setAnimationLoop(animate); // Start the animation loop
        }}
      >
        <primitive object={obj} scale={[13, 13, 13]} ref={objRef} />
      </Canvas>
    </div>
  );
}
