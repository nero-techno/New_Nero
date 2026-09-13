import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import mykolaiPhoto from "../../assets/images/team/mykolai.jpg";
import michaelPhoto from "../../assets/images/team/michael.jpg";
import vsevolodPhoto from "../../assets/images/team/vsevolod.jpg";
import vadymPhoto from "../../assets/images/team/Vadym.jpg";
import alexandraPhoto from "../../assets/images/team/Alexandra.jpg";
import "./TeamSection.css";

const teamMembers = [
  { name: "Mykolai", role: "CEO", image: mykolaiPhoto },
  { name: "Michael", role: "Lead Backend Developer", image: michaelPhoto },
  {
    name: "Vsevolod",
    role: "Lead Frontend Developer",
    image: vsevolodPhoto,
  },
  { name: "Vadym", role: "Frontend Developer", image: vadymPhoto },
  { name: "Alexandra", role: "Lead UI/UX Designer", image: alexandraPhoto },
];

const TeamSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const dragStartX = useRef<number | null>(null);
  const dragEndX = useRef<number | null>(null);

  const changeMember = (nextIndex: number) => {
    setCurrentIndex((nextIndex + teamMembers.length) % teamMembers.length);
  };

  const handlePointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    dragStartX.current = event.clientX;
    dragEndX.current = event.clientX;
    setIsDragging(true);
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (isDragging) {
      dragEndX.current = event.clientX;
    }
  };

  const handlePointerUp = (event: React.PointerEvent<HTMLDivElement>) => {
    if (dragStartX.current !== null && dragEndX.current !== null) {
      const distance = dragStartX.current - dragEndX.current;

      if (Math.abs(distance) > 45) {
        changeMember(currentIndex + (distance > 0 ? 1 : -1));
      }
    }

    setIsDragging(false);
    dragStartX.current = null;
    dragEndX.current = null;
    event.currentTarget.releasePointerCapture(event.pointerId);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "ArrowLeft") {
      changeMember(currentIndex - 1);
    }

    if (event.key === "ArrowRight") {
      changeMember(currentIndex + 1);
    }
  };

  return (
    <section className="team-section">
      <h2 className="team-title">OUR TEAM</h2>

      <div
        className={`team-carousel-container${isDragging ? " is-dragging" : ""}`}
        onKeyDown={handleKeyDown}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        role="region"
        aria-label="Team members carousel"
        tabIndex={0}
      >
        <button
          className="team-nav-arrow left"
          type="button"
          aria-label="Previous team member"
          onClick={() => changeMember(currentIndex - 1)}
        >
          <ChevronLeft size={20} />
        </button>

        <div className="team-carousel-track">
          {teamMembers.map((member, index) => {
            const offset =
              (index - currentIndex + teamMembers.length) % teamMembers.length;
            const position =
              offset === 0
                ? "center"
                : offset === 1
                  ? "right-1"
                  : offset === 2
                    ? "right-2"
                    : offset === teamMembers.length - 1
                      ? "left-1"
                      : "left-2";

            return (
              <button
                className={`team-card ${position}`}
                key={member.name}
                type="button"
                onClick={() => changeMember(index)}
                aria-label={`Show ${member.name}`}
              >
                <img
                  className="team-card-image"
                  src={member.image}
                  alt={`${member.name}, ${member.role}`}
                />
              </button>
            );
          })}
        </div>

        <button
          className="team-nav-arrow right"
          type="button"
          aria-label="Next team member"
          onClick={() => changeMember(currentIndex + 1)}
        >
          <ChevronRight size={20} />
        </button>
      </div>

      <div className="team-member-info" aria-live="polite">
        <h3>{teamMembers[currentIndex].name}</h3>
        <p>{teamMembers[currentIndex].role}</p>
      </div>

      <div className="team-dots" aria-label="Select team member">
        {teamMembers.map((member, index) => (
          <button
            className={`team-dot${index === currentIndex ? " active" : ""}`}
            key={member.name}
            type="button"
            aria-label={`Show ${member.name}`}
            aria-current={index === currentIndex}
            onClick={() => changeMember(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
