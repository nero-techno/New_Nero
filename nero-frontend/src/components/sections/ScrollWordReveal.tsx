// import { Fragment, useRef } from "react";
// import {
//   motion,
//   useReducedMotion,
//   useScroll,
//   useTransform,
//   type MotionValue,
// } from "motion/react";
// import "./ScrollWordReveal.css";

// const STATEMENT = "NERO TECHNOLOGIES ";
// const START_OPACITY = 0.18;
// const SPREAD = 0.8;
// const WORD_DURATION = 0.2;

// const getWordRange = (index: number, count: number) => {
//   const start = count <= 1 ? 0 : (index / (count - 1)) * SPREAD;

//   return { start, end: Math.min(1, start + WORD_DURATION) };
// };

// const Word = ({
//   children,
//   progress,
//   index,
//   count,
//   reducedMotion,
// }: {
//   children: string;
//   progress: MotionValue<number>;
//   index: number;
//   count: number;
//   reducedMotion: boolean;
// }) => {
//   const { start, end } = getWordRange(index, count);
//   const opacity = useTransform(progress, (latest) => {
//     if (latest <= start) return START_OPACITY;
//     if (latest >= end) return 1;

//     return (
//       START_OPACITY + ((latest - start) / (end - start)) * (1 - START_OPACITY)
//     );
//   });

//   return (
//     <motion.span style={reducedMotion ? undefined : { opacity }}>
//       {children}
//     </motion.span>
//   );
// };

// const ScrollWordReveal = () => {
//   const sectionRef = useRef<HTMLElement>(null);
//   const reducedMotion = useReducedMotion();
//   const { scrollYProgress } = useScroll({
//     target: sectionRef,
//     offset: ["start start", "end end"],
//   });
//   const words = STATEMENT.split(" ");

//   return (
//     <section
//       ref={sectionRef}
//       className="scroll-word-reveal"
//       aria-labelledby="scroll-word-reveal-heading"
//     >
//       <div className="scroll-word-reveal-stage">
//         <div className="scroll-word-reveal-layout">
//           <div className="scroll-word-reveal-progress" aria-hidden="true">
//             <motion.span
//               style={{ scaleY: reducedMotion ? 1 : scrollYProgress }}
//             />
//           </div>

//           <div className="scroll-word-reveal-content">
//             <p className="scroll-word-reveal-kicker"></p>
//             <h2
//               id="scroll-word-reveal-heading"
//               className="scroll-word-reveal-heading"
//               aria-label={STATEMENT}
//             >
//               {words.map((word, index) => (
//                 <Fragment key={`${word}-${index}`}>
//                   <Word
//                     progress={scrollYProgress}
//                     index={index}
//                     count={words.length}
//                     reducedMotion={Boolean(reducedMotion)}
//                   >
//                     {word}
//                   </Word>
//                   {index < words.length - 1 ? " " : null}
//                 </Fragment>
//               ))}
//             </h2>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ScrollWordReveal;
