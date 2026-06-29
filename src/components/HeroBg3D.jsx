import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Sphere, MeshDistortMaterial } from '@react-three/drei'
import * as THREE from 'three'

const FloatingSphere = ({ position, color, distort, speed, scale, delay }) => {
  const meshRef = useRef()
  useFrame((state) => {
    const t = state.clock.elapsedTime + delay
    meshRef.current.position.y = position[1] + Math.sin(t * 0.4) * 0.5
    meshRef.current.position.x = position[0] + Math.cos(t * 0.3) * 0.3
    meshRef.current.rotation.x = t * 0.05
    meshRef.current.rotation.y = t * 0.08
  })
  return (
    <Sphere ref={meshRef} args={[scale, 100, 100]} position={position}>
      <MeshDistortMaterial
        color={color}
        distort={distort}
        speed={speed}
        roughness={0}
        metalness={0}
        emissive={color}
        emissiveIntensity={0.8}
        transparent
        opacity={0.5}
      />
    </Sphere>
  )
}

const HeroBg3D = () => {
  return (
    <div
      className="absolute inset-0 z-0"
      style={{ height: '100vh', filter: 'blur(55px)', transform: 'scale(1.3)' }}
    >
      <Canvas
        camera={{ position: [0, 0, 12], fov: 90 }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.8} />
        <pointLight position={[0, 0, 8]} color="#f97316" intensity={12} />
        <pointLight position={[-8, 4, 4]} color="#3b82f6" intensity={15} />
        <pointLight position={[8, -4, 4]} color="#1d4ed8" intensity={12} />
        <pointLight position={[0, 8, 2]} color="#fb923c" intensity={8} />
        <pointLight position={[-4, -8, 2]} color="#60a5fa" intensity={10} />

        {/* Top left — blue */}
        <FloatingSphere
          position={[-7, 5, -2]}
          color="#1d4ed8"
          distort={0.4}
          speed={1.5}
          scale={3.5}
          delay={0}
        />

        {/* Top right — orange */}
        <FloatingSphere
          position={[7, 4, -2]}
          color="#ea580c"
          distort={0.5}
          speed={1.8}
          scale={3}
          delay={1}
        />

        {/* Center — blue */}
        <FloatingSphere
          position={[0, 0, -1]}
          color="#2563eb"
          distort={0.3}
          speed={1.2}
          scale={4}
          delay={2}
        />

        {/* Bottom left — orange */}
        <FloatingSphere
          position={[-6, -5, -1]}
          color="#f97316"
          distort={0.6}
          speed={2}
          scale={3.2}
          delay={0.5}
        />

        {/* Bottom right — blue */}
        <FloatingSphere
          position={[6, -5, -1]}
          color="#3b82f6"
          distort={0.4}
          speed={1.6}
          scale={3}
          delay={1.5}
        />

        {/* Top center — orange accent */}
        <FloatingSphere
          position={[2, 6, -3]}
          color="#fb923c"
          distort={0.5}
          speed={1.3}
          scale={2.5}
          delay={3}
        />

        {/* Bottom center — deep blue */}
        <FloatingSphere
          position={[-2, -7, -2]}
          color="#1e40af"
          distort={0.4}
          speed={1.7}
          scale={2.8}
          delay={2.5}
        />

        {/* Mid left — orange */}
        <FloatingSphere
          position={[-9, 0, -3]}
          color="#ea580c"
          distort={0.3}
          speed={1.4}
          scale={2.5}
          delay={4}
        />

        {/* Mid right — blue */}
        <FloatingSphere
          position={[9, 1, -3]}
          color="#2563eb"
          distort={0.5}
          speed={1.9}
          scale={2.3}
          delay={3.5}
        />
      </Canvas>
    </div>
  )
}

export default HeroBg3D