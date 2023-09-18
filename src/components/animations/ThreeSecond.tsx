"use client";
import React, { useRef } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { OBJLoader, } from "three/examples/jsm/loaders/OBJLoader.js";
import { MeshBasicMaterial } from "three";

interface Props {
  model: string;
}

export default function ThreeScene({ model }: Props) {
  const newRef = useRef(null);
  const obj = useLoader(OBJLoader, model);

  // Create a wireframe material
  const wireframeMaterial = new MeshBasicMaterial({
    wireframe: true,
    color: "white",
    transparent: true,
    opacity: 1,
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
    if (newRef.current) {
      // Rotate the object
      // @ts-ignore
      newRef.current.rotation.y += rotationSpeed;
    }
  };

  return (
    <div className="relative w-full h-[300px]">
      <Canvas
        className="z-0 relative w-full h-full"
        shadows
        camera={{
          position: [100, 0, 10],
        }}
        onCreated={({ gl }) => {
          gl.setAnimationLoop(animate); // Start the animation loop
        }}
      >
        <primitive object={obj} scale={[1.5, 1.5, 1.5]} ref={newRef} />
      </Canvas>
    </div>
  );
}
