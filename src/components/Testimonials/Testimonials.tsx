import { FaStar } from 'react-icons/fa';
import { TESTIMONIALS } from '../../data/restaurant';
import styles from './Testimonials.module.css';

export const Testimonials = (): JSX.Element => {
  return (
    <section
      id="testimonials"
      className={`section ${styles.testimonials}`}
      aria-labelledby="testimonials-title"
    >
      <div className="container">
        <h2 id="testimonials-title" className="section-title">
          O que dizem nossos clientes
        </h2>
        <p className="section-subtitle">
          Mais de 50 mil pizzas servidas e uma média de 4.9 estrelas no Google e iFood.
        </p>

        <ul className={styles.grid}>
          {TESTIMONIALS.map((testimonial) => (
            <li key={testimonial.id} className={styles.card}>
              <div
                className={styles.stars}
                aria-label={`Avaliação: ${testimonial.rating} de 5 estrelas`}
              >
                {Array.from({ length: testimonial.rating }).map((_, index) => (
                  <FaStar key={index} aria-hidden="true" />
                ))}
              </div>
              <p className={styles.comment}>&ldquo;{testimonial.comment}&rdquo;</p>
              <div className={styles.author}>
                <img
                  src={testimonial.avatar}
                  alt={`Foto de ${testimonial.name}`}
                  loading="lazy"
                  width={48}
                  height={48}
                />
                <strong>{testimonial.name}</strong>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};