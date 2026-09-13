import { Menu, ArrowDownCircle } from "lucide-react";
import { motion } from "motion/react";
import WorkSection from "../components/sections/WorkSection";
import MainPage from "../components/sections/MainPage";
import TestimonialsSection from "../components/sections/TestimonialsSection";
import TeamSection from "../components/sections/TeamSection";
import FlipText from "../components/ui/FlipText";
import "./MobileLayout.css";

const MobileLayout = () => {
  return (
    <div className="mobile-layout">
      {/* Header */}
      <header className="header">
        <div className="logo-container">
          <h1 className="logo">NERO</h1>
          <span className="copyright-symbol">©</span>
        </div>
        <button className="menu-button">
          <Menu size={24} color="#ffffff" strokeWidth={1.5} />
        </button>
      </header>

      {/* Main Content */}
      <main className="main-content">
        <section className="hero">
          <motion.h2
            className="hero-title"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.12 } },
            }}
          >
            <motion.span
              className="text-white hero-flip-line"
              variants={{
                hidden: { opacity: 0, y: 24 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <FlipText
                words={[
                  "NECESSITY",
                  "WEB DEV",
                  "UI/UX DESIGN",
                  "CYBERSECURITY",
                ]}
              />
            </motion.span>
            <br />
            <motion.span
              className="text-white"
              variants={{
                hidden: { opacity: 0, y: 24 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              FOR YOUR
            </motion.span>
            <br />
            <motion.span
              className="text-purple"
              variants={{
                hidden: { opacity: 0, y: 24 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              BUSINESS
            </motion.span>
          </motion.h2>

          <motion.p
            className="hero-description"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            We are a digital product studio for companies which see engineering
            and design as their competitive advantage. From local AI models to
            scalable applications, we build products where world-class
            aesthetics meet robust infrastructure
          </motion.p>
        </section>

        {/* Footer / Scroll Down Indicator */}
        <div className="footer-indicator">
          <ArrowDownCircle
            size={40}
            color="#ffffff"
            strokeWidth={1.5}
            className="scroll-icon"
          />
        </div>

        {/* Work Section */}
        <WorkSection />

        {/* What We Create Section */}
        <MainPage />

        {/* Client Testimonials Section */}
        <TestimonialsSection />

        {/* Team Section */}
        <TeamSection />
      </main>
    </div>
  );
};

export default MobileLayout;
