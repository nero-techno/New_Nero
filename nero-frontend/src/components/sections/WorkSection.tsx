import { ArrowRightCircle } from "lucide-react";
import { motion } from "motion/react";
import ScrollReveal from "../ui/ScrollReveal";
import "./WorkSection.css";
import ukritarmImg from "../../assets/images/Ukritarm.png";
import chilliImg from "../../assets/images/CHILLI GRILLI.png";
import unicornImg from "../../assets/images/Unicorn Kiev.png";
import ukritarm2Img from "../../assets/images/Ukritarm2.png";

const works = [
  {
    id: 1,
    title: "Ukritarm",
    tag: "Company website",
    image: ukritarmImg,
  },
  {
    id: 2,
    title: "CHILLI GRILLI",
    tag: "Mobile app",
    image: chilliImg,
  },
  {
    id: 3,
    title: "Unicorn Kiev",
    tag: "Local LLM",
    image: unicornImg,
  },
  {
    id: 4,
    title: "Ukritarm",
    tag: "Security system",
    image: ukritarm2Img,
  },
];

const WorkSection = () => {
  return (
    <section className="work-section">
      <ScrollReveal>
        <h2 className="work-title">WORK</h2>
      </ScrollReveal>
      <ScrollReveal delay={0.1}>
        <p className="work-subtitle">
          Our work is built to meet the technical demands of industry-leading
          brands
        </p>
      </ScrollReveal>

      <div className="work-list">
        {works.map((work, index) => (
          <motion.div
            key={work.id}
            className="work-card"
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, delay: index * 0.08 }}
          >
            {/* Контейнер для фону / зображення */}
            <div className="work-image-placeholder">
              <img src={work.image} alt={work.title} className="work-image" />
            </div>

            {/* Оверлей для тексту та бейджика знизу картки */}
            <div className="work-card-overlay">
              <span className="work-card-title">{work.title}</span>
              <span className="work-card-tag">{work.tag}</span>
            </div>
          </motion.div>
        ))}
      </div>

      <button className="see-all-button">
        <span>SEE ALL WORK</span>
        <ArrowRightCircle size={24} color="#ffffff" strokeWidth={1} />
      </button>
    </section>
  );
};

export default WorkSection;
