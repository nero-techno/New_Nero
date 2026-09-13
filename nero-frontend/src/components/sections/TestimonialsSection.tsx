import { ArrowRightCircle } from "lucide-react";
import ukritarmReview from "../../assets/images/UkritarmForRevie.png";
import pichReview from "../../assets/images/rewie2.png";
import unicornReview from "../../assets/images/unicornReview3.png";
import "./TestimonialsSection.css";

const testimonials = [
  {
    id: 1,
    company: "Ukritarm Ltd",
    image: ukritarmReview,
    text: "Зменшили податкове навантаження на працівників з оптимізацією для підприємства, роботою задоволені",
  },
  {
    id: 2,
    company: "Піч - страви на дровах",
    image: pichReview,
    text: "Крутий досвід роботи з вашою командою. Розроблено бот в Telegram для отримання персональних звітів клієнтам",
  },
  {
    id: 3,
    company: "Unicorn Ltd",
    image: unicornReview,
    text: "Проведено пентест всієї мережі компанії, та знайдено багато вразливостей, які могли коштувати для нас дуже дорого",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="testimonials-section">
      <h2 className="testimonials-title">
        CLIENT
        <br />
        TESTIMONIALS
      </h2>
      <p className="testimonials-subtitle">What our clients say about us</p>

      <div className="testimonials-list">
        {testimonials.map((testimonial) => (
          <article className="testimonial-card" key={testimonial.id}>
            <div className="testimonial-card-header">
              <div className="testimonial-logo">
                <img src={testimonial.image} alt="" />
              </div>
              <h3>{testimonial.company}</h3>
            </div>
            <p className="testimonial-text">
              &ldquo; {testimonial.text} &rdquo;
            </p>
          </article>
        ))}
      </div>

      <button className="testimonials-button">
        <span>SEE ALL TESTIMONIALS</span>
        <ArrowRightCircle size={24} color="#ffffff" strokeWidth={1} />
      </button>
    </section>
  );
};

export default TestimonialsSection;
