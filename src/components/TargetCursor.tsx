import React, { useEffect, useState, useCallback } from 'react';

interface TargetCursorProps {
  spinDuration?: number;
  hideDefaultCursor?: boolean;
}

const TargetCursor: React.FC<TargetCursorProps> = ({
  spinDuration = 2,
  hideDefaultCursor = true,
}) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [scale, setScale] = useState(1);
  const [opacity, setOpacity] = useState(0);

  const updateCursorPosition = useCallback((e: MouseEvent) => {
    const x = e.clientX;
    const y = e.clientY;
    
    setPosition({ x, y });
    
    const target = e.target as HTMLElement;
    const isTargetElement = target.classList.contains('cursor-target');
    
    if (isTargetElement && !isVisible) {
      setIsVisible(true);
      setScale(1.2);
      setOpacity(1);
      setTimeout(() => setScale(1), 150);
    } else if (!isTargetElement && isVisible) {
      setScale(0.8);
      setOpacity(0);
      setTimeout(() => setIsVisible(false), 150);
    }
  }, [isVisible]);

  useEffect(() => {
    document.addEventListener('mousemove', updateCursorPosition);

    if (hideDefaultCursor) {
      const elements = document.getElementsByClassName('cursor-target');
      Array.from(elements).forEach(el => {
        (el as HTMLElement).style.cursor = 'none';
      });
    }

    return () => {
      document.removeEventListener('mousemove', updateCursorPosition);
      const elements = document.getElementsByClassName('cursor-target');
      Array.from(elements).forEach(el => {
        (el as HTMLElement).style.cursor = 'auto';
      });
    };
  }, [hideDefaultCursor, updateCursorPosition]);

  return (
    <div
      style={{
        position: 'fixed',
        left: position.x,
        top: position.y,
        width: '40px',
        height: '40px',
        pointerEvents: 'none',
        transform: `translate(-50%, -50%) scale(${scale})`,
        zIndex: 9999,
        opacity,
        transition: 'transform 0.15s ease-out, opacity 0.15s ease-out',
        willChange: 'transform',
      }}
    >
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 100 100"
        style={{
          animation: `spin ${spinDuration}s linear infinite`,
        }}
      >
        <circle
          cx="50"
          cy="50"
          r="45"
          fill="none"
          stroke="#000"
          strokeWidth="2"
          strokeDasharray="10 10"
          opacity="0.75"
        />
        <circle 
          cx="50" 
          cy="50" 
          r="4" 
          fill="#000" 
          opacity="0.75" 
        />
      </svg>
    </div>
  );
};

export default TargetCursor;
