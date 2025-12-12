export const slideUpExit = {
  exit: {
    opacity: 0,
    y: -80,
    transition: { duration: 0.45, ease: "easeOut" }
  }
};

export const fadeSlideIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.45 } }
};
