"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, OrbitControls, Sparkles } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function CoreOrb({ rescue = false }) {
  const mesh = useRef();
  useFrame((state) => {
    mesh.current.rotation.y += 0.006;
    mesh.current.material.emissiveIntensity = rescue ? 1.45 + Math.sin(state.clock.elapsedTime * 6) * 0.35 : 0.95;
  });

  return (
    <Float speed={2.2} rotationIntensity={0.35} floatIntensity={0.55}>
      <mesh ref={mesh}>
        <sphereGeometry args={[1.12, 96, 96]} />
        <meshPhysicalMaterial
          color={rescue ? "#ff6338" : "#35d7ff"}
          emissive={rescue ? "#ff2f48" : "#0577ff"}
          roughness={0.12}
          metalness={0.18}
          transmission={0.42}
          thickness={0.9}
          clearcoat={1}
        />
      </mesh>
      <mesh>
        <torusGeometry args={[1.55, 0.012, 16, 160]} />
        <meshBasicMaterial color={rescue ? "#ffb347" : "#9b7cff"} transparent opacity={0.72} />
      </mesh>
      <mesh rotation={[Math.PI / 2.6, 0, 0.7]}>
        <torusGeometry args={[1.82, 0.01, 16, 160]} />
        <meshBasicMaterial color={rescue ? "#ff345f" : "#56f0c4"} transparent opacity={0.5} />
      </mesh>
    </Float>
  );
}

function Planet({ radius, speed, color, size, offset }) {
  const ref = useRef();
  useFrame((state) => {
    const t = state.clock.elapsedTime * speed + offset;
    ref.current.position.set(Math.cos(t) * radius, Math.sin(t * 0.7) * 0.35, Math.sin(t) * radius);
  });
  return (
    <mesh ref={ref}>
      <sphereGeometry args={[size, 32, 32]} />
      <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.42} roughness={0.3} />
    </mesh>
  );
}

export default function ThreeAIOrb({ rescue = false, compact = false }) {
  return (
    <div className={`orb-glow h-full min-h-[320px] w-full ${compact ? "min-h-[240px]" : ""}`}>
      <Canvas camera={{ position: [0, 0, 5.5], fov: 48 }} dpr={[1, 1.7]}>
        <ambientLight intensity={0.25} />
        <pointLight position={[4, 2, 4]} intensity={3.8} color={rescue ? "#ff8a3d" : "#36d6ff"} />
        <pointLight position={[-3, -2, 2]} intensity={1.6} color="#9b7cff" />
        <Sparkles count={90} size={2.5} speed={0.25} color={rescue ? "#ff9b55" : "#7be8ff"} scale={[6, 4, 6]} />
        <CoreOrb rescue={rescue} />
        <Planet radius={2.15} speed={0.75} color="#ff345f" size={0.12} offset={0.2} />
        <Planet radius={2.65} speed={0.48} color="#ffb347" size={0.09} offset={1.6} />
        <Planet radius={1.85} speed={0.95} color="#56f0c4" size={0.075} offset={2.9} />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.45} />
      </Canvas>
    </div>
  );
}


