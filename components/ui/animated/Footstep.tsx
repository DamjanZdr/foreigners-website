'use client';

import { motion } from 'framer-motion';

interface FootstepProps {
  x: number;
  y: number;
  rotation: number;
  delay?: number;
  side?: 'left' | 'right';
}

export default function Footstep({ x, y, rotation, delay = 0, side = 'right' }: FootstepProps) {
  return (
    <motion.g
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 0.6, scale: 1 }}
      transition={{ duration: 0.3, delay }}
      transform={`translate(${x}, ${y}) rotate(${rotation})`}
    >
      {/* Actual footprint from the image */}
      <path
        d={side === 'right' 
          ? "M50,10 Q45,5 40,8 Q35,11 32,18 Q30,25 28,35 Q27,45 30,55 Q33,63 40,68 Q47,72 55,70 Q60,68 63,62 Q65,55 65,45 Q64,35 62,28 Q58,18 52,12 Z M25,50 Q20,48 18,53 Q17,58 20,62 Q23,65 28,64 Q32,62 33,57 Q33,52 30,50 Z M35,75 Q30,73 28,78 Q27,83 30,87 Q33,90 38,89 Q42,87 43,82 Q43,77 40,75 Z"
          : "M50,10 Q55,5 60,8 Q65,11 68,18 Q70,25 72,35 Q73,45 70,55 Q67,63 60,68 Q53,72 45,70 Q40,68 37,62 Q35,55 35,45 Q36,35 38,28 Q42,18 48,12 Z M75,50 Q80,48 82,53 Q83,58 80,62 Q77,65 72,64 Q68,62 67,57 Q67,52 70,50 Z M65,75 Q70,73 72,78 Q73,83 70,87 Q67,90 62,89 Q58,87 57,82 Q57,77 60,75 Z"
        }
        fill="black"
        opacity="0.7"
        transform="scale(0.5)"
      />
    </motion.g>
  );
}
