'use client';

import { motion } from 'motion/react';
import { theme } from '@/lib/theme';

export default function AnimatedTagline() {
  return (
    <div className="text-center mb-8">
      <div className={`${theme.fontSize['3xl']} md:${theme.fontSize['4xl']} ${theme.fontWeight.bold} text-gray-900`}>
        {/* "The Only" - appears 5th (last) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 1.4 }}
          className="mb-2"
        >
          The Only
        </motion.div>

        <div className="flex flex-wrap justify-center items-center gap-x-2 gap-y-2">
          {/* "One" - appears 1st */}
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-primary"
          >
            One
          </motion.span>

          <span className="text-primary">-</span>

          {/* "Stop" - appears 2nd */}
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-primary"
          >
            Stop
          </motion.span>

          <span className="text-primary">-</span>

          {/* "Shop" - appears 3rd */}
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="text-primary"
          >
            Shop
          </motion.span>
        </div>

        {/* "For Foreigners" - appears 4th */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 1.1 }}
          className="mt-2"
        >
          For Foreigners
        </motion.div>
      </div>
    </div>
  );
}
