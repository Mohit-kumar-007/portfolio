import React, { useState, useEffect } from 'react';
import LiquidEther from './LiquidEther';

const PageLayout = ({ children, showBackground = true }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [isLowPerf, setIsLowPerf] = useState(false);

  useEffect(() => {
    // Detect mobile and low-performance devices
    const checkPerformance = () => {
      const isMobileDevice = window.innerWidth < 1024;
      setIsMobile(isMobileDevice);
      
      // Disable heavy animations on lower-end devices
      const cores = navigator.hardwareConcurrency || 2;
      setIsLowPerf(cores < 4 || isMobileDevice);
    };
    
    checkPerformance();
    window.addEventListener('resize', checkPerformance);

    return () => window.removeEventListener('resize', checkPerformance);
  }, []);

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden">
      {showBackground && !isLowPerf && (
        <div className="fixed inset-0 z-0">
          <LiquidEther
            colors={['#9333ea', '#c084fc', '#a855f7']}
            mouseForce={15}
            cursorSize={80}
            resolution={0.3}
            autoDemo={true}
            autoSpeed={0.3}
            autoIntensity={1.5}
          />
        </div>
      )}
      <div className="relative z-10 min-h-screen">
        {children}
      </div>
    </div>
  );
};

export default PageLayout;
