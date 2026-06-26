import React, { useRef, useState, useCallback, useMemo } from 'react';

interface RippleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'accent' | 'minimal';
  children: React.ReactNode;
  id: string;
  className?: string;
}

export const RippleButton = React.memo(({
  variant = 'primary',
  children,
  className = '',
  id,
  ...props
}: RippleButtonProps) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [ripples, setRipples] = useState<{ id: number; x: number; y: number }[]>([]);

  const handlePointerDown = useCallback((e: React.PointerEvent<HTMLButtonElement>) => {
    if (!buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const newRipple = {
      id: Date.now() + Math.random(),
      x,
      y
    };
    
    setRipples((prev) => [...prev, newRipple]);

    // Cleanup ripple
    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
    }, 600);
  }, []);

  const variantClasses = useMemo(() => {
    switch (variant) {
      case 'primary':
        return 'bg-[#1A1A1A] hover:bg-[#2C2C2C] text-[#F8F8F6] border border-[#1A1A1A] shadow-sm';
      case 'secondary':
        return 'bg-white hover:bg-[#F3F4F6] text-[#1A1A1A] border border-[#E5E7EB] shadow-sm';
      case 'accent':
        return 'bg-[#0F9D8A] hover:bg-[#0C8575] text-white border border-[#0F9D8A] shadow-sm';
      case 'minimal':
        return 'bg-transparent hover:bg-black/5 text-[#5D6470] hover:text-[#1A1A1A] transition-colors duration-150';
      default:
        return '';
    }
  }, [variant]);

  return (
    <button
      ref={buttonRef}
      id={id}
      onPointerDown={handlePointerDown}
      className={`relative overflow-hidden inline-flex items-center justify-center font-sans font-medium px-5 py-2.5 rounded-lg text-sm select-none transition-all duration-150 active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0F9D8A] ${variantClasses} ${className}`}
      {...props}
    >
      {/* Ripple elements */}
      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          className="absolute rounded-full bg-current opacity-15 pointer-events-none"
          style={{
            left: ripple.x,
            top: ripple.y,
            width: '100px',
            height: '100px',
            transform: 'translate(-50%, -50%) scale(0)',
            animation: 'ripple-effect 0.6s cubic-bezier(0.1, 0.8, 0.3, 1) forwards'
          }}
        />
      ))}
      {/* Content wrapper to maintain z-index above ripples */}
      <span className="relative z-10 flex items-center gap-2">
        {children}
      </span>
    </button>
  );
});

RippleButton.displayName = 'RippleButton';
