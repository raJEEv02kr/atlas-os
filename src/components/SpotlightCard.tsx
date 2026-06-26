import React, { useState, useRef, useCallback } from 'react';

interface SpotlightCardProps {
  children: React.ReactNode;
  className?: string;
  id: string;
}

export const SpotlightCard = React.memo(({
  children,
  className = '',
  id
}: SpotlightCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [tilt, setTilt] = useState({ rx: 0, ry: 0 });

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    setCoords({ x, y });

    // Calculate mild tilt angles (max 3 degrees)
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rx = ((y - centerY) / centerY) * -2; // max -2deg to 2deg
    const ry = ((x - centerX) / centerX) * 2;  // max -2deg to 2deg

    setTilt({ rx, ry });
  }, []);

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
    setTilt({ rx: 0, ry: 0 });
  }, []);

  return (
    <div
      ref={cardRef}
      id={id}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative overflow-hidden bg-white border border-[#E5E7EB] rounded-2xl p-6 transition-all duration-300 shadow-xs hover:shadow-md hover:-translate-y-1 ${className}`}
      style={{
        transform: isHovered 
          ? `perspective(1000px) rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg) translateY(-4px)`
          : 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)',
        willChange: 'transform'
      }}
    >
      {/* Dynamic Cursor Spotlight Effect */}
      <div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-300"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(400px circle at ${coords.x}px ${coords.y}px, rgba(15, 157, 138, 0.05), transparent 80%)`,
        }}
      />
      
      {/* Outer subtle outline spotlight */}
      <div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-300 border-2"
        style={{
          opacity: isHovered ? 0.3 : 0,
          borderColor: '#0F9D8A',
          maskImage: `radial-gradient(120px circle at ${coords.x}px ${coords.y}px, white, transparent)`,
          WebkitMaskImage: `radial-gradient(120px circle at ${coords.x}px ${coords.y}px, white, transparent)`,
        }}
      />

      <div className="relative z-10 h-full flex flex-col justify-between">
        {children}
      </div>
    </div>
  );
});

SpotlightCard.displayName = 'SpotlightCard';
