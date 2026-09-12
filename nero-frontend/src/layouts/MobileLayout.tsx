import { Menu, ArrowDownCircle } from "lucide-react";
import WorkSection from "../components/sections/WorkSection";
import MainPage from "../components/sections/MainPage";
import TestimonialsSection from "../components/sections/TestimonialsSection";
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
          <h2 className="hero-title">
            <span className="text-white">NECESSITY</span>
            <br />
            <span className="text-white">FOR YOUR</span>
            <br />
            <span className="text-purple">BUSINESS</span>
          </h2>

          <p className="hero-description">
            We are a digital product studio for companies which see engineering
            and design as their competitive advantage. From local AI models to
            scalable applications, we build products where world-class
            aesthetics meet robust infrastructure
          </p>
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
      </main>
    </div>
  );
};

export default MobileLayout;
