// Animation variants for consistent animations across components
export const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

export const staggerChildren = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { staggerChildren: 0.1 }
};

export const scaleOnHover = {
  whileHover: { scale: 1.05 },
  transition: { duration: 0.2 }
};