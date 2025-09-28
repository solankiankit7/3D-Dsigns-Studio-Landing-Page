'use client';
import { useFrame, useThree } from '@react-three/fiber';
import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import gsap from 'gsap';

export default function CameraRig({ autoplay=true }: { autoplay?: boolean }) {
  const { camera } = useThree();
  const tl = useRef<gsap.core.Timeline | null>(null);
  useEffect(() => {
    camera.position.set(6, 2.2, 8);
    camera.lookAt(0, 1.5, 0);
    if (!autoplay) return;
    const t = gsap.timeline({ defaults: { duration: 2.0, ease: 'power2.out' } });
    t.to(camera.position, { x: 3.5, y: 2.0, z: 6 }, 0);
    t.to(camera.position, { x: 1.8, y: 1.8, z: 4.2 }, "+=0.2");
    t.to(camera.position, { x: 0.9, y: 1.6, z: 2.6 }, "+=0.2");
    t.call(()=> camera.lookAt(0, 1.4, 0));
    tl.current = t;
    return () => t.kill();
  }, [camera, autoplay]);
  useFrame(() => { /* could add subtle handheld camera jiggle here */ });
  return null;
}
