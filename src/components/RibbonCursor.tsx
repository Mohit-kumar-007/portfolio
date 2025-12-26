import React, { useEffect, useRef } from 'react';

interface Point {
  x: number;
  y: number;
  age: number;
}

const NUM_POINTS = 50;
const POINT_LIFETIME = 50;

const RibbonCursor: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointsRef = useRef<Point[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const frameRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const updateMouse = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    const addPoint = (x: number, y: number) => {
      pointsRef.current.push({ x, y, age: 0 });
      if (pointsRef.current.length > NUM_POINTS) {
        pointsRef.current.shift();
      }
    };

    const draw = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Add new point based on mouse position
      addPoint(mouseRef.current.x, mouseRef.current.y);

      // Age points
      pointsRef.current.forEach(point => {
        point.age++;
      });

      // Remove old points
      pointsRef.current = pointsRef.current.filter(point => point.age < POINT_LIFETIME);

      // Draw ribbon
      if (pointsRef.current.length > 2) {
        ctx.beginPath();
        ctx.moveTo(pointsRef.current[0].x, pointsRef.current[0].y);

        for (let i = 1; i < pointsRef.current.length - 1; i++) {
          const xc = (pointsRef.current[i].x + pointsRef.current[i + 1].x) / 2;
          const yc = (pointsRef.current[i].y + pointsRef.current[i + 1].y) / 2;
          ctx.quadraticCurveTo(pointsRef.current[i].x, pointsRef.current[i].y, xc, yc);
        }

        const gradient = ctx.createLinearGradient(
          pointsRef.current[0].x,
          pointsRef.current[0].y,
          pointsRef.current[pointsRef.current.length - 1].x,
          pointsRef.current[pointsRef.current.length - 1].y
        );

        gradient.addColorStop(0, 'rgba(255, 255, 255, 0)');
        gradient.addColorStop(0.5, 'rgba(255, 255, 255, 0.5)');
        gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');

        ctx.strokeStyle = gradient;
        ctx.lineWidth = 2;
        ctx.lineCap = 'round';
        ctx.stroke();
      }

      frameRef.current = requestAnimationFrame(draw);
    };

    // Initialize
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('mousemove', updateMouse);
    draw();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', updateMouse);
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 9998, // Just below the target cursor
      }}
    />
  );
};

export default RibbonCursor;
