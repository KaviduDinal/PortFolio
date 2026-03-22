"use client";

import { useMemo, useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Text, TrackballControls, Float, OrbitControls, Stars } from "@react-three/drei";
import * as THREE from "three";

function Word({ children, position }: { children: string; position: THREE.Vector3 }) {
  const color = new THREE.Color();
  const fontProps = { fontSize: 2.5, letterSpacing: -0.05, lineHeight: 1, "material-toneMapped": false };
  const ref = useRef<THREE.Mesh>(null!);
  const [hovered, setHovered] = useState(false);

  const over = (e: any) => {
    e.stopPropagation();
    setHovered(true);
    document.body.style.cursor = 'pointer';
  };
  const out = () => {
    setHovered(false);
    document.body.style.cursor = 'auto';
  };

  useFrame(({ camera }) => {
  if (ref.current) {
    ref.current.quaternion.copy(camera.quaternion);
  }
});

  return (
    <Float floatIntensity={2} rotationIntensity={0.5}>
      <Text
        ref={ref}
        position={position}
        fontSize={2}
        color={hovered ? "#ff0000" : "#ffffff"}
      
        onPointerOver={over}
        onPointerOut={out}
      >
        {children}
      </Text>
    </Float>
  );
}

function Cloud({ count = 4, radius = 20, words }: { count?: number; radius?: number; words: string[] }) {
  // Create a count x count random words with spherical distribution
  const cloudWords = useMemo(() => {
    const temp: [THREE.Vector3, string][] = [];
    const spherical = new THREE.Spherical();

    // Improved spherical distribution (Fibonacci Sphere)
    for (let i = 0; i < words.length; i++) {
      const phi = Math.acos(-1 + (2 * i) / words.length);
      const theta = Math.sqrt(words.length * Math.PI) * phi;
      const p = new THREE.Vector3().setFromSpherical(spherical.set(radius, phi, theta));
      temp.push([p, words[i]]);
    }
    return temp;
  }, [count, radius, words]);

  return (
    <>
      {cloudWords.map(([pos, word], index) => (
        <Word key={index} position={pos} children={word} />
      ))}
    </>
  );
}

export default function Skills3D() {
  const skills = [
    "Python", "TensorFlow", "PyTorch", "MLOps", "Docker", "Kubernetes", "AWS", "Azure",
    "React", "Next.js", "Three.js", "TypeScript", "Git", "CI/CD", "Linux", "SQL",
    "Hugging Face", "LangChain", "OpenAI", "FastAPI", "MongoDB", "PostgreSQL", "Redis",
    "Tailwind", "Figma", "Jira", "Grafana", "Prometheus"
  ];

  return (
    <div className="w-full h-[600px] relative">
      <Canvas camera={{ position: [0, 0, 35], fov: 50 }}>
        <color attach="background" args={["black"]} />

        <ambientLight intensity={2} />

        <Cloud words={skills} />

        <OrbitControls autoRotate autoRotateSpeed={1} enableZoom={false} enablePan={false} />
      </Canvas>
    </div>
  );
}
