import "./MainPage.css";
import { ArrowRightCircle } from "lucide-react";
import developmentBackground from "../../assets/images/webSitesAndDevelope1.png";
import cybersecurityBackground from "../../assets/images/Cybersecurity2.png";
import designBackground from "../../assets/images/UiUxDesign3.png";
import businessBackground from "../../assets/images/bisnees4.png";

const creations = [
  {
    id: 1,
    title: "Websites & App Development",
    number: "01",
    description:
      "High-end projects developed to shape perception and strengthen your brand. We create custom projects to suit our clients' needs",
    tags: [
      "Company Website",
      "App",
      "Platform Development",
      "Custom example development",
    ],
    backgroundClass: "bg-development",
    backgroundImage: developmentBackground,
  },
  {
    id: 2,
    title: "Cybersecurity",
    number: "02",
    description:
      "Enterprise-grade security architectures designed to safeguard digital assets and fortify your infrastructure. We combine proactive threat intelligence with rigorous defense protocols - without sacrificing system agility or user experience",
    tags: ["Custom systems"],
    backgroundClass: "bg-cybersecurity",
    backgroundImage: cybersecurityBackground,
  },
  {
    id: 3,
    title: "UI/UX Design",
    number: "03",
    description:
      "Sophisticated digital interfaces designed to elevate brand perception and drive meaningful user engagement. We combine striking visual aesthetics with intuitive, data-driven architecture - without sacrificing conversion metrics or platform performance",
    tags: ["UI/UX Design", "Custom Design"],
    backgroundClass: "bg-design",
    backgroundImage: designBackground,
  },
  {
    id: 4,
    title: "Business solutions",
    number: "04",
    description:
      "Tailored enterprise solutions designed to digitize operations and scale business efficiency. We combine advanced process automation with data-driven infrastructure - without sacrificing operational continuity",
    tags: [
      "Enterprise Digitization",
      "ERP & CRM Integration",
      "Legacy System Migration",
    ],
    backgroundClass: "bg-business",
    backgroundImage: businessBackground,
  },
];

const MainPage = () => {
  return (
    <section className="MainPage-section">
      <h2 className="MainPage-title">WHAT WE CREATE</h2>
      <p className="MainPage-subtitle">
        We focus on the intersection of needs and technical complexity – where
        our approach creates the most value for digital products
      </p>

      <div className="cards-stack-container">
        {creations.map((item, index) => (
          <div
            key={item.id}
            className={`stack-card ${item.backgroundClass}`}
            style={{
              backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.12) 0%, rgba(0, 0, 0, 0.92) 100%), url("${item.backgroundImage}")`,
              top: `${index * 40}px`, // Кожна наступна картка нижче на 40px, щоб було видно верхівки (sticky)
              zIndex: index + 1, // Нижні картки перекривають верхні
            }}
          >
            <div className="card-header">
              <h3 className="card-title">{item.title}</h3>
              <span className="card-number">{item.number}</span>
            </div>

            <div className="card-body">
              <p className="card-description">{item.description}</p>

              <div className="card-tags">
                {item.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="card-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <button className="idea-button">
        <span>HAVE ANOTHER IDEA</span>
        <ArrowRightCircle size={24} color="#ffffff" strokeWidth={1} />
      </button>
    </section>
  );
};

export default MainPage;
