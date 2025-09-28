'use client';
import { useLoader } from '@react-three/fiber';
import { RGBELoader } from 'three-stdlib/loaders/RGBELoader';
import { Environment } from '@react-three/drei';
import * as THREE from 'three';

export default function HdrEnv() {
  // Loads /public/hdr/studio_small_08_1k.hdr if present; falls back to basic lights if missing.
  try {
    const tex = useLoader(RGBELoader as any, '/hdr/studio_small_08_1k.hdr');
    tex.mapping = THREE.EquirectangularReflectionMapping;
    return <Environment files={tex} background={false} />;
  } catch (e) {
    return (
      <group>
        <hemisphereLight intensity={0.8} groundColor={'#0d101a'} />
        <directionalLight position={[5,5,5]} intensity={1.1} />
      </group>
    );
  }
}
