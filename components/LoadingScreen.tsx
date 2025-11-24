'use client';

import { useState, useEffect } from 'react';

export default function LoadingScreen() {
  const [isHidden, setIsHidden] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    
    const timer = setTimeout(() => {
      setIsHidden(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (!isMounted) {
    return (
      <div className="loading-screen">
        <div className="loader"></div>
      </div>
    );
  }

  if (isHidden) return null;

  return (
    <div className={`loading-screen ${isHidden ? 'hidden' : ''}`}>
      <div className="loader"></div>
    </div>
  );
}
