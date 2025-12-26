import React, { useEffect, useRef } from 'react';

interface Cube {
  x: number;
  y: number;
  z: number;
  size: number;
  speedX: number;
  speedY: number;
  speedZ: number;
  rotation: number;
  rotationSpeed: number;
}

const CubesBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const cubesRef = useRef<Cube[]>([]);
  const animationFrameRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    // Initialize canvas size
    resizeCanvas();

    // Initialize cubes
    const initCubes = () => {
      const numberOfCubes = 50;
      const cubes: Cube[] = [];

      for (let i = 0; i < numberOfCubes; i++) {
        cubes.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          z: Math.random() * 200 - 100, // Random z position between -100 and 100
          size: Math.random() * 30 + 10, // Random size between 10 and 40
          speedX: (Math.random() - 0.5) * 2,
          speedY: (Math.random() - 0.5) * 2,
          speedZ: (Math.random() - 0.5) * 2,
          rotation: Math.random() * Math.PI * 2,
          rotationSpeed: (Math.random() - 0.5) * 0.02,
        });
      }

      cubesRef.current = cubes;
    };

    const drawCube = (cube: Cube) => {
      const { x, y, z, size, rotation } = cube;
      const perspective = 1000;
      const scale = perspective / (perspective + z);
      
      ctx.save();
      ctx.translate(x, y);
      ctx.scale(scale, scale);
      ctx.rotate(rotation);
      
      // Draw cube
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.5)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      
      // Front face
      ctx.rect(-size / 2, -size / 2, size, size);
      
      // Connect to back face
      ctx.moveTo(-size / 2, -size / 2);
      ctx.lineTo(-size / 3, -size / 3);
      ctx.moveTo(size / 2, -size / 2);
      ctx.lineTo(size * 2/3, -size / 3);
      ctx.moveTo(size / 2, size / 2);
      ctx.lineTo(size * 2/3, size * 2/3);
      ctx.moveTo(-size / 2, size / 2);
      ctx.lineTo(-size / 3, size * 2/3);
      
      // Back face
      ctx.moveTo(-size / 3, -size / 3);
      ctx.rect(-size / 3, -size / 3, size * 2/3, size * 2/3);
      
      ctx.stroke();
      ctx.restore();
    };

    const animate = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.2)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      cubesRef.current.forEach((cube) => {
        // Update position
        cube.x += cube.speedX;
        cube.y += cube.speedY;
        cube.z += cube.speedZ;
        cube.rotation += cube.rotationSpeed;

        // Bounce off walls
        if (cube.x < 0 || cube.x > canvas.width) cube.speedX *= -1;
        if (cube.y < 0 || cube.y > canvas.height) cube.speedY *= -1;
        if (cube.z < -100 || cube.z > 100) cube.speedZ *= -1;

        drawCube(cube);
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    // Handle window resize
    window.addEventListener('resize', resizeCanvas);

    // Initialize and start animation
    initCubes();
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
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
        zIndex: -1,
        background: 'rgba(0, 0, 0, 0.95)', // Slightly transparent background
        pointerEvents: 'none', // Ensures clicks pass through to content
      }}
    />
  );
};

export default CubesBackground;
