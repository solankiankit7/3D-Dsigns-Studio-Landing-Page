'use client';
import { Canvas } from '@react-three/fiber';
import { Html, OrbitControls, ContactShadows, Loader, useGLTF, StatsGl } from '@react-three/drei';
import { Suspense } from 'react';
import CameraRig from './CameraRig';
import HdrEnv from './HdrEnv';
import * as THREE from 'three';

function VillaModel() {
  // Attempts to load /public/models/villa.glb, otherwise shows a tasteful architectural massing fallback.
  try {
    const gltf = useGLTF(process.env.NEXT_PUBLIC_MODEL_URL || 'https://raw.githubusercontent.com/SpectraStudios/SourceCityToolkit_glb/main/SKY_apartment_4_sky_day_ar2.glb');
    return <primitive object={gltf.scene} dispose={null} />;
  } catch (e) {
    return (
      <group position={[0,0,0]}>
        {/* Architectural volume fallback */}
        <mesh position={[0,0.6,0]} castShadow receiveShadow>
          <boxGeometry args={[3.6, 1.2, 2.2]} />
          <meshStandardMaterial color={'#c9d2e0'} metalness={0.1} roughness={0.6} />
        </mesh>
        <mesh position={[0.9,1.3,0.1]} castShadow>
          <boxGeometry args={[1.2, 0.5, 1.0]} />
          <meshStandardMaterial color={'#e8edf5'} metalness={0.05} roughness={0.4} />
        </mesh>
        <mesh position={[-1.2,0.2,-0.9]} receiveShadow>
          <boxGeometry args={[0.2, 0.2, 0.8]} />
          <meshStandardMaterial color={'#9fb3ca'} />
        </mesh>
      </group>
    );
  }
}

export default function VillaScene() {
  return (
    <div className="relative w-full h-[75vh] md:h-[90vh] rounded-3xl overflow-hidden border border-white/10">
      <Canvas shadows camera={{ position: [6, 2.2, 8], fov: 45 }} dpr={[1, 2]}>
        <color attach="background" args={['#0b0f16']} />
        <Suspense fallback={<Html center><div className="card px-4 py-2">Loading 3D…</div></Html>}>
          <HdrEnv />
          <CameraRig autoplay />
          <group position={[0,0,0]}>
            <VillaModel />
          </group>
          <ContactShadows position={[0, -0.001, 0]} opacity={0.35} blur={2.2} far={12} scale={20} />
        </Suspense>
        <OrbitControls enablePan={false} minDistance={2} maxDistance={12} />
      </Canvas>
      <Loader />
    </div>
  );
}
