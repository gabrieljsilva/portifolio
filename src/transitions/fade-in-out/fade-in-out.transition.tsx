import { ReactElement } from "react";
import { motion } from "framer-motion";

interface FadeInOutTransitionProps {
  children: ReactElement;
}

export function FadeInOutTransition({ children }: FadeInOutTransitionProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
      }}
    >
      {children}
    </motion.div>
  );
}
