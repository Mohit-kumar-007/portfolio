import { useEffect, useRef } from "react";
import "./background.css";

const BackgroundAnimation = () => {
  const sceneRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const createCubes = () => {
      if (!sceneRef.current) return;
      
      const scene = sceneRef.current;
      scene.innerHTML = ''; // Clear existing cubes
      
      // Calculate number of cubes based on viewport size
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;
      const cubeSize = viewportWidth <= 480 ? 40 : viewportWidth <= 768 ? 48 : 64; // Including gaps
      const cols = Math.ceil(viewportWidth / cubeSize);
      const rows = Math.ceil(viewportHeight / cubeSize);
      
      for (let i = 0; i < rows * cols; i++) {
        const cube = document.createElement('div');
        cube.className = 'cube';
        cube.style.setProperty('--animation-delay', `${Math.random() * 4}`);
        
        // Create cube faces
        ['front', 'back', 'top', 'bottom', 'left', 'right'].forEach(face => {
          const cubeFace = document.createElement('div');
          cubeFace.className = `cube-face cube-face--${face}`;
          cube.appendChild(cubeFace);
        });
        
        scene.appendChild(cube);
      }
    };

    // Initial creation
    createCubes();

    // Recreate on resize
    const handleResize = () => {
      requestAnimationFrame(createCubes);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="background-animation-wrapper">
      <div className="default-animation">
        <div ref={sceneRef} className="default-animation--scene" />
      </div>
    </div>
  );
};

export default BackgroundAnimation;
