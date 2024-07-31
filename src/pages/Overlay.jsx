// Overlay.jsx
import React, { useEffect, useState } from 'react';

const Overlay = () => {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
    }, 1000); // Start fade-out after 1.5 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`overlay ${fadeOut ? 'fade-out' : ''}`}>
    </div>
  );
};

export default Overlay;
