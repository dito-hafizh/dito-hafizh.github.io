'use client';

import { motion, useAnimation, useInView } from 'framer-motion';
import React, { useEffect, useRef } from 'react';

interface Props {
  children: React.ReactNode;
  width?: 'fit-content' | '100%';
  delay?: number;
  y?: number;
}

export const Reveal = ({ children, width = 'fit-content', delay = 0.25, y = 30 }: Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start('visible');
    }
  }, [isInView, mainControls]);

  return (
    <div ref={ref} style={{ position: 'relative', width, overflow: 'visible' }}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: y },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ 
          type: "spring",
          damping: 20,
          stiffness: 100,
          delay: delay,
          duration: 0.6
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};
