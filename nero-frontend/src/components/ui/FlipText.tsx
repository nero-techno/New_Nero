import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";
import type { HTMLAttributes } from "react";

type FlipTextProps = HTMLAttributes<HTMLSpanElement> & {
  words: string[];
  interval?: number;
};

const FlipText = ({ words, interval = 2800, ...props }: FlipTextProps) => {
  const [wordIndex, setWordIndex] = useState(0);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion || words.length < 2) {
      return;
    }

    const timer = window.setInterval(() => {
      setWordIndex((currentIndex) => (currentIndex + 1) % words.length);
    }, interval);

    return () => window.clearInterval(timer);
  }, [interval, prefersReducedMotion, words.length]);

  return (
    <span {...props} className={`flip-text ${props.className ?? ""}`}>
      <span className="flip-text-window" aria-live="polite">
        <AnimatePresence initial={false} mode="wait">
          <motion.span
            className="flip-text-word"
            key={wordIndex}
            initial={
              prefersReducedMotion
                ? { opacity: 0 }
                : { opacity: 0, rotateX: -90, y: 18 }
            }
            animate={{ opacity: 1, rotateX: 0, y: 0 }}
            exit={
              prefersReducedMotion
                ? { opacity: 0 }
                : { opacity: 0, rotateX: 90, y: -18 }
            }
            transition={{ duration: prefersReducedMotion ? 0 : 0.55 }}
          >
            {prefersReducedMotion ? words[0] : words[wordIndex]}
          </motion.span>
        </AnimatePresence>
      </span>
    </span>
  );
};

export default FlipText;
