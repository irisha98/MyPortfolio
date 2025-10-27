import React, { useEffect, useState } from 'react';

const CursorGlow = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });

  useEffect(() => {
    const moveHandler = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', moveHandler);
    return () => window.removeEventListener('mousemove', moveHandler);
  }, []);

  return (
    <div
      className="cursor-glow"
      style={{
        top: `${position.y}px`,
        left: `${position.x}px`,
      }}
    />
  );
};

export default CursorGlow;
