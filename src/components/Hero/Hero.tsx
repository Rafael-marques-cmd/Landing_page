import { FaWhatsapp } from 'react-icons/fa';
import { RESTAURANT_INFO, buildWhatsAppUrl } from '../../data/restaurant';
import styles from './Hero.module.css';

export const Hero = () => {
  const whatsappUrl = buildWhatsAppUrl(RESTAURANT_INFO.whatsapp, 'tradicional Margherita');

  return (
    <section id="home" className={styles.hero}>
      <div className={styles.overlay} aria-hidden="true" />
      <div className={`container ${styles.content}`}>
        <p className={styles.kicker}>Desde 2009 · Forno a lenha</p>
        <h1 className={styles.title}>
          Pizza <em>artesanal</em>
          <br />
          que alimenta a alma
        </h1>
        <p className={styles.subtitle}>{RESTAURANT_INFO.description}</p>
        <div className={styles.actions}>
          <a
            href={whatsappUrl}
            className="btn btn-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp aria-hidden="true" size={20} />
            Pedir pelo WhatsApp
          </a>
          <a href="#menu" className="btn btn-outline">
            Ver Cardápio
          </a>
        </div>

        <div className={styles.stats}>
          <div className={styles.stat}>
            <strong>15+</strong>
            <span>anos de tradição</span>
          </div>
          <div className={styles.stat}>
            <strong>50k+</strong>
            <span>pizzas servidas</span>
          </div>
          <div className={styles.stat}>
            <strong>4.9★</strong>
            <span>avaliação média</span>
          </div>
        </div>
      </div>
    </section>
  );
};
