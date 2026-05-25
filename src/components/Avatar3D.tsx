import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, Environment, ContactShadows } from '@react-three/drei';
import * as THREE from 'three';

const Model = () => {
  // IMPORTANT: Replace 'avatar.glb' with the actual name of your 3D model file in the public folder.
  const { scene, nodes } = useGLTF('/avatar.glb'); 
  const group = useRef<THREE.Group>(null);
  
  // State to track if the user is clicking/touching the avatar
  const [isSmiling, setIsSmiling] = useState(false);

  useFrame((state) => {
    if (!group.current) return;

    // 1. CURSOR TRACKING: Smoothly rotate the entire model to follow the mouse
    // We map the normalized pointer coordinates (-1 to 1) to a rotation angle in radians
    const targetX = (state.pointer.x * Math.PI) / 4;
    const targetY = (state.pointer.y * Math.PI) / 4;
    
    // lerp (linear interpolation) makes the movement buttery smooth instead of snapping
    group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, targetX, 0.1);
    group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, -targetY, 0.1);

    // 2. EXPRESSIONS: Animate the morph targets
    // NOTE: The exact name of your mesh ('Wolf3D_Head') and morph target ('smile') 
    // will depend entirely on how your specific .glb model was exported.
    
    /* UNCOMMENT THIS BLOCK ONCE YOUR MODEL IS LOADED
    
    const headMesh = nodes.Wolf3D_Head as THREE.Mesh; 
    
    if (headMesh && headMesh.morphTargetDictionary && headMesh.morphTargetInfluences) {
      // Find the index of the 'smile' expression in the 3D model data
      const smileIndex = headMesh.morphTargetDictionary['smile'];
      
      if (smileIndex !== undefined) {
        // If clicking, target value is 1 (full smile). If not, 0 (neutral).
        const targetValue = isSmiling ? 1 : 0;
        
        // Smoothly animate the expression slider
        headMesh.morphTargetInfluences[smileIndex] = THREE.MathUtils.lerp(
          headMesh.morphTargetInfluences[smileIndex],
          targetValue,
          0.15
        );
      }
    }
    */
  });

  return (
    <group 
      ref={group} 
      // Trigger expressions on click / touch
      onPointerDown={() => setIsSmiling(true)} 
      onPointerUp={() => setIsSmiling(false)}
      onPointerOut={() => setIsSmiling(false)}
    >
      <primitive object={scene} scale={2} position={[0, -2, 0]} />
    </group>
  );
};

export const Avatar3D = () => {
  return (
    <div className="w-full h-[300px] sm:h-[400px] md:h-[500px] cursor-grab active:cursor-grabbing">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        {/* Lighting to make the model look premium */}
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 10]} intensity={2} />
        <Environment preset="city" />
        
        <Model />
        
        {/* Adds a nice grounded shadow underneath the floating 3D model */}
        <ContactShadows position={[0, -2.5, 0]} opacity={0.5} scale={10} blur={2} far={4} />
      </Canvas>
    </div>
  );
};