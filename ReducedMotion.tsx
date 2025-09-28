'use client';
import { useEffect, useState } from 'react';

export default function ReducedMotion() {
  const [prefersReduced, setPrefersReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handler = () => setPrefersReduced(mq.matches);
    handler();
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);
  if (!prefersReduced) return null;
  return (
    <div className="fixed inset-0 z-30 grid place-items-center pointer-events-none">
      <div className="mx-auto max-w-xl text-center card p-6 pointer-events-auto">
        <h2 className="text-xl font-semibold mb-2">Reduced Motion</h2>
        <p className="text-white/80">
          Animations minimized for comfort. A static poster is shown instead of the full 3D tour.
        </p>
      </div>
    </div>
  );
}
