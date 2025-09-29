
'use client'
import { Canvas } from '@react-three/fiber'
import { Environment, OrbitControls, ContactShadows, PresentationControls, Float } from '@react-three/drei'
import { Suspense } from 'react'

function Villa() {
  return (
    <group>
      {/* main volume */}
      <mesh position={[0,0.5,0]}>
        <boxGeometry args={[3,1,2]} />
        <meshStandardMaterial metalness={0.2} roughness={0.35} color={'#f3f3f3'} />
      </mesh>
      {/* upper block */}
      <mesh position={[1.5,1.1,0]}>
        <boxGeometry args={[1,2.2,2]} />
        <meshStandardMaterial color={'#ffffff'} metalness={0.1} roughness={0.6} />
      </mesh>
      {/* fin */}
      <mesh position={[-1.6,0.3,0.8]}>
        <boxGeometry args={[0.2,0.6,1.6]} />
        <meshStandardMaterial color={'#b3b3b3'} />
      </mesh>
      {/* ground */}
      <mesh rotation={[-Math.PI/2,0,0]} position={[0,0,0]}>
        <planeGeometry args={[16,12]} />
        <meshStandardMaterial color={'#e6e6e6'} />
      </mesh>
    </group>
  )
}

export default function Hero3D() {
  return (
    <div style={{ height: 560 }}>
      <Canvas camera={{ position: [6, 3, 6], fov: 45 }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[5,5,5]} intensity={0.9} />
        <Suspense fallback={null}>
          <PresentationControls global config={{ mass: 2, tension: 400 }} snap>
            <Float floatIntensity={0.4} rotationIntensity={0.2}>
              <Villa />
            </Float>
          </PresentationControls>
          <Environment preset="sunset" background />
        </Suspense>
        <OrbitControls makeDefault />
        <ContactShadows position={[0,-0.001,0]} blur={2} opacity={0.5} scale={14} />
      </Canvas>
    </div>
  )
}
