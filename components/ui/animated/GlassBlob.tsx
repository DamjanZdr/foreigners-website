'use client';

import { CSSProperties } from 'react';

interface GlassBlobProps {
  color?: string;
  size?: number;
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
  delay?: number;
  duration?: number;
  blur?: number;
  opacity?: number;
}

export default function GlassBlob({
  color = '#FF0000',
  size = 200,
  top,
  bottom,
  left,
  right,
  delay = 0,
  duration = 20,
  blur = 60,
  opacity = 0.4
}: GlassBlobProps) {
  const style: CSSProperties = {
    position: 'absolute',
    width: `${size}px`,
    height: `${size}px`,
    top,
    bottom,
    left,
    right,
    background: `radial-gradient(circle at center, ${color}80 0%, ${color}50 30%, ${color}20 60%, transparent 100%)`,
    borderRadius: '50%',
    filter: `blur(${blur}px)`,
    opacity,
    animation: `float ${duration}s ease-in-out infinite`,
    animationDelay: `${delay}s`,
    pointerEvents: 'none',
    zIndex: 1,
    mixBlendMode: 'normal',
  };

  return <div style={style} className="glass-blob" />;
}
