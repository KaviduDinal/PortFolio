"use client";

import { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Html, Float } from "@react-three/drei";
import * as THREE from "three";

type ProjectCardProps = {
  title: string;
  description: string;
  tech: string[];
  color: string;
};

function Card({ title, description, tech, color }: ProjectCardProps) {
  const meshRef = useRef<THREE.Group>(null!);
  const [hovered, setHovered] = useState(false);
  const targetRot = useRef({ x: 0, y: 0, s: 1 });

  useFrame((state, delta) => {
    if (meshRef.current) {
      // Smoothly interpolate toward the cursor-driven target rotations/scale
      meshRef.current.rotation.y = THREE.MathUtils.lerp(meshRef.current.rotation.y, targetRot.current.y, delta * 8);
      meshRef.current.rotation.x = THREE.MathUtils.lerp(meshRef.current.rotation.x, targetRot.current.x, delta * 8);
      const currentScale = meshRef.current.scale.x;
      const goalScale = targetRot.current.s;
      const nextScale = THREE.MathUtils.lerp(currentScale, goalScale, delta * 6);
      meshRef.current.scale.set(nextScale, nextScale, nextScale);
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.2} floatIntensity={0.2}>
      <group
        ref={meshRef}
        onPointerOver={(e) => {
          e.stopPropagation();
          setHovered(true);
          targetRot.current.s = 1.06;
        }}
        onPointerOut={(e) => {
          e.stopPropagation();
          setHovered(false);
          // reset targets
          targetRot.current.x = 0;
          targetRot.current.y = 0;
          targetRot.current.s = 1;
        }}
        onPointerMove={(e: any) => {
          // Convert the pointer intersection point to the group's local space
          if (!meshRef.current) return;
          const p = e.point.clone();
          meshRef.current.worldToLocal(p);

          // p.x and p.y are in local units based on the mesh geometry size (~3.8x5.2)
          // Map them to small rotation angles
          const maxRot = 0.25; // radians (~14deg)
          const rx = THREE.MathUtils.clamp(-p.y / 3.5 * maxRot, -maxRot, maxRot);
          const ry = THREE.MathUtils.clamp(p.x / 2.0 * maxRot, -maxRot, maxRot);
          targetRot.current.x = rx;
          targetRot.current.y = ry;
          targetRot.current.s = 1.06;
        }}
      >
        {/* Glass Card Background */}
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[3.8, 5.2, 0.1]} />
          <meshPhysicalMaterial
            color="#1a1a1a"
            roughness={0.2}
            metalness={0.1}
            transmission={0.6} // Glass effect
            thickness={0.5}
            clearcoat={1}
            clearcoatRoughness={0.1}
          />
        </mesh>

        {/* Holographic Border - Minimal */}
        <mesh position={[0, 0, 0]} scale={[1.02, 1.02, 1]}>
          <boxGeometry args={[3.8, 5.2, 0.08]} />
          <meshBasicMaterial
            color={hovered ? color : "#333"}
            transparent
            opacity={hovered ? 0.3 : 0.0}
            wireframe
          />
        </mesh>

        {/* Inner Content Plane */}
        <Html transform position={[0, 0, 0.06]} scale={0.45} style={{ pointerEvents: 'none' }}>
          <div className={`w-72 p-6 text-left select-none ${hovered ? 'scale-105' : ''} transition-transform duration-500`}>
            <div className="text-6xl font-black text-white/5 absolute -top-10 -left-10 z-0">
              0{Math.floor(Math.random() * 9) + 1}
            </div>

            <h3 className="text-3xl font-bold mb-4 text-white font-mono tracking-tighter relative z-10">{title}</h3>

            <p className="text-sm text-gray-400 mb-8 leading-relaxed font-light relative z-10 border-l border-acid-lime/50 pl-4">{description}</p>

            <div className="flex flex-wrap gap-2 relative z-10">
              {tech.map(t => (
                <span key={t} className="px-2 py-1 bg-white/5 text-[10px] text-acid-lime border border-white/10 uppercase tracking-widest font-mono">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </Html>
      </group>
    </Float>
  );
}

export default function ProjectCard3D(props: ProjectCardProps) {
  return (
    <div className="h-[450px] w-full">
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
        <pointLight position={[-10, -10, -10]} color={props.color} intensity={1} />
        <Card {...props} />
      </Canvas>
    </div>
  );
}
