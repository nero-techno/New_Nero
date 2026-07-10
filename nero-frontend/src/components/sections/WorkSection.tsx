import { ArrowRightCircle } from "lucide-react";
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
      <h2 className="work-title">WORK</h2>
      <p className="work-subtitle">
        Our work is built to meet the technical demands of industry-leading
        brands
      </p>

      <div className="work-list">
        {works.map((work) => (
          <div key={work.id} className="work-card">
            {/* Контейнер для фону / зображення */}
            <div className="work-image-placeholder">
              <img src={work.image} alt={work.title} className="work-image" />
            </div>

            {/* Оверлей для тексту та бейджика знизу картки */}
            <div className="work-card-overlay">
              <span className="work-card-title">{work.title}</span>
              <span className="work-card-tag">{work.tag}</span>
            </div>
          </div>
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
