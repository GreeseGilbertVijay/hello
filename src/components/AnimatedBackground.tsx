import React, { useEffect, useState } from 'react';

const AnimatedBackground = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Layer 1: Base gradient */}
      <div className="absolute inset-0 bg-gradient-dynamic animate-gradient-shift" />
      
      {/* Layer 2: Secondary gradient */}
      <div className="absolute inset-0 bg-gradient-dynamic animate-gradient-shift-delayed" />
      
      {/* Layer 3: Floating geometric shapes */}
      <div className="absolute inset-0">
        {Array.from({ length: 5 }).map((_, i) => (
          <div
            key={`shape-${i}`}
            className={`absolute w-32 h-32 bg-gradient-to-br from-slate-700/10 to-slate-600/5 backdrop-blur-sm rounded-lg animate-geometric-float`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${20 + Math.random() * 10}s`,
            }}
          />
        ))}
      </div>
      
      {/* Layer 4: Diagonal particles */}
      <div className="absolute inset-0">
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={i}
            className={`absolute w-2 h-2 bg-gradient-to-r from-slate-600/40 to-slate-700/30 rounded-full animate-particle-diagonal-${i % 4}`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 20}s`,
              animationDuration: `${15 + Math.random() * 15}s`,
            }}
          />
        ))}
      </div>
      
      {/* Layer 5: Twinkling stars */}
      <div className="absolute inset-0 animate-zoom-cycle">
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={`star-${i}`}
            className="absolute w-1 h-1 bg-slate-400/30 rounded-full animate-twinkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${4 + Math.random() * 8}s`,
            }}
          />
        ))}
      </div>
      
      {/* Layer 6: Floating bubbles */}
      <div className="absolute inset-0">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={`bubble-${i}`}
            className="absolute rounded-full bg-gradient-to-br from-slate-700/8 to-slate-600/12 backdrop-blur-sm animate-bubble-float"
            style={{
              width: `${20 + Math.random() * 40}px`,
              height: `${20 + Math.random() * 40}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 15}s`,
              animationDuration: `${25 + Math.random() * 20}s`,
            }}
          />
        ))}
      </div>
      
      {/* Layer 7: Subtle grid with parallax */}
      <div
        className="absolute inset-0 opacity-[0.02] animate-grid-shift"
        style={{
          transform: `translateY(${scrollY * 0.1}px)`,
          backgroundImage: `
            linear-gradient(rgba(100,116,139,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(100,116,139,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px',
        }}
      />
      
      {/* Layer 8: Animated SVG paths */}
      <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="pathGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(100,116,139,0.2)" />
            <stop offset="50%" stopColor="rgba(71,85,105,0.15)" />
            <stop offset="100%" stopColor="rgba(100,116,139,0)" />
          </linearGradient>
          <linearGradient id="pathGradient2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgba(71,85,105,0.2)" />
            <stop offset="50%" stopColor="rgba(100,116,139,0.1)" />
            <stop offset="100%" stopColor="rgba(71,85,105,0)" />
          </linearGradient>
        </defs>
        
        <path
          d="M0,300 Q500,150 1000,400 T2000,300"
          stroke="url(#pathGradient1)"
          strokeWidth="2"
          fill="none"
          className="animate-path-draw"
        />
        <path
          d="M0,500 Q700,350 1400,600 T2800,500"
          stroke="url(#pathGradient2)"
          strokeWidth="1.5"
          fill="none"
          className="animate-path-draw-delayed"
        />
      </svg>
      
      {/* Layer 10: Moving light rays */}
      <div className="absolute inset-0">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={`ray-${i}`}
            className="absolute bg-gradient-to-r from-transparent via-slate-600/5 to-transparent h-px animate-ray-sweep"
            style={{
              width: `${300 + Math.random() * 400}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 12}s`,
              animationDuration: `${20 + Math.random() * 15}s`,
              transform: `rotate(${Math.random() * 360}deg)`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default AnimatedBackground;
