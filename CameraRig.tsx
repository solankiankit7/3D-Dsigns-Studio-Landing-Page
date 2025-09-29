import React, { useEffect, useRef } from 'react';
Import { useThree } from '@react-three/fiber';
import gsap from 'gsap';

type CameraRigProps = {
  autoplay?: boolean;
};

export default function CameraRig({ autoplay = true }: CameraRigProps) {
  const { camera } = useThree();
  const tl = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    // Baseline cammera start
    cammera.position.set(6, 2.2, 8);
    camera.lookAt(0, 1.5, 0);

    if (!autoplay) return; // do not start timeline if autoplay is false

    tl .current = gsap.timeline({ defaults: false })
      .to(camera.position, { z: 3.2, duration: 2 })
      .to(camera.position, { x: 1.2, y: 2.6, z 2.5, duration: 1.8 });

    return () => {
      if (tl.current) { tl.current.kill(); tl.current = null; }
    };
  }, [autoplay]);

  return null;
}
