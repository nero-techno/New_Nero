import { motion, type Variants } from "motion/react";
import "./BrandSection.css";

const brandWord = "NERO";
const brandSubtitle = "TECHNOLOGIES";

const letterVariants: Variants = {
  hidden: { opacity: 0, y: 24, filter: "blur(8px)" },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      delay: index * 0.09,
      duration: 0.7,
      ease: "easeOut",
    },
  }),
};

const BrandSection = () => {
  return (
    <section className="brand-section" aria-label="Nero Technologies">
      <motion.div
        className="brand-lockup"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.45 }}
      >
        <motion.div className="brand-name" aria-label={brandWord}>
          {brandWord.split("").map((letter, index) => (
            <motion.span
              key={`${letter}-${index}`}
              custom={index}
              variants={letterVariants}
            >
              {letter}
            </motion.span>
          ))}
        </motion.div>

        <motion.div
          className="brand-subtitle"
          initial={{ opacity: 0, x: 24, letterSpacing: "0.02em" }}
          whileInView={{ opacity: 1, x: 0, letterSpacing: "0.08em" }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ delay: 0.45, duration: 0.8, ease: "easeOut" }}
        >
          {brandSubtitle}
        </motion.div>

        <motion.span
          className="brand-scan-line"
          aria-hidden="true"
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ delay: 0.3, duration: 0.9, ease: "easeOut" }}
        />
      </motion.div>
    </section>
  );
};

export default BrandSection;