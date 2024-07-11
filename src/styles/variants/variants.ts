export const modalBackgroundVariants = {
  initial: { backgroundColor: 'rgba(0,0,0,0)' },
  animate: { backgroundColor: 'rgba(0,0,0,0.7)' },
  exit: { backgroundColor: 'rgba(0,0,0,0)' },
};

export const staggerContainerVariants = {
  hidden: {
    transition: {
      staggerChildren: 0.3,
    },
  },
  visible: {
    transition: {
      duration: 0.3,
      staggerChildren: 1,
    },
  },
};

export const staggerItemVariants = {
  hidden: { y: -1000, opacity: 1 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.7,
      ease: 'easeOut',
    },
  },
};

export const tapVariants = {
  tap: {
    scale: 0.95,
    opacity: 0.9,
    transition: { duration: 0 },
  },
};

export const pointing = {
  animate: {
    opacity: [1, 1, 0],
    scale: [0, 1],
  },
  transition: {
    duration: 1.5,
    repeat: Infinity,
    repeatDelay: 0.8,
    ease: 'linear',
  },
};
