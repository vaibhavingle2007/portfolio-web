'use client';

import { useEffect, useRef } from 'react';

export default function LoadingScreen() {
  const screenRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (screenRef.current) {
        screenRef.current.style.display = 'none';
      }
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div ref={screenRef} className="loading-screen">
      <div className="loader"></div>
    </div>
  );
}
