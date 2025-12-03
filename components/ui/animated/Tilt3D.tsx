'use client';

import { motion } from 'motion/react';
import { ReactNode } from 'react';
import { use3DTilt } from '@/hooks';

interface Tilt3DProps {
  children: ReactNode;
  className?: string;
  scale?: number;
}

export function Tilt3D({ children, className = '', scale = 1.05 }: Tilt3DProps) {
  const { ref, rotateX, rotateY, handleMouseMove, handleMouseLeave, style } = use3DTilt();

  return (
    <motion.div
      ref={ref}
      style={{
        ...style,
        rotateX,
        rotateY,
      }}
      whileHover={{ scale }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default Tilt3D;