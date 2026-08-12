import { FaCheckCircle } from 'react-icons/fa';
import { RESTAURANT_INFO } from '../../data/restaurant';
import styles from './About.module.css';

const HIGHLIGHTS = [
  'Massa de fermentação natural de 48h',
  'Molho de tomate San Marzano DOP',
  'Mussarela de búfala importada',
  'Forno a lenha de tijolo refratário',
];

export const About = (): JSX.Element => {
  return (
    <section id="about" className={`section ${styles.about}`} aria-labelledby="about-title">
      <div className={`container ${styles.grid}`}>
        <div className={styles.imageWrap}>
          <img
            src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&h=900&fit=crop"
            alt="Pizzaiolo preparando pizza artesanal"
            loading="lazy"
            width={800}
            height={900}
          />
          <div className={styles.badge} aria-hidden="true">
            <strong>15+</strong>
            <span>anos</span>
          </div>
        </div>

        <div className={styles.content}>
          <p className={styles.kicker}>Nossa história</p>
          <h2 id="about-title">Tradição italiana no coração de São Paulo</h2>
          <p className={styles.lead}>{RESTAURANT_INFO.description}</p>
          <p>
            Cada pizza que sai do nosso forno carrega a dedicação de uma equipe apaixonada. Do
            pizzaiolo ao atendimento, trabalhamos para que cada mordida seja uma pequena viagem
            à Itália.
          </p>

          <ul className={styles.list}>
            {HIGHLIGHTS.map((item) => (
              <li key={item}>
                <FaCheckCircle aria-hidden="true" className={styles.icon} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};