import { FaWhatsapp } from 'react-icons/fa';
import { RESTAURANT_INFO, buildWhatsAppUrl } from '../../data/restaurant';
import styles from './CallToAction.module.css';

export const CallToAction = (): JSX.Element => {
  return (
    <section className={`section ${styles.cta}`} aria-labelledby="cta-title">
      <div className={`container ${styles.content}`}>
        <h2 id="cta-title">Fome de pizza?</h2>
        <p>Faça seu pedido agora e receba quentinha na sua casa em até 40 minutos.</p>
        <a
          href={buildWhatsAppUrl(RESTAURANT_INFO.whatsapp, 'do cardápio')}
          className="btn btn-secondary"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp aria-hidden="true" size={20} />
          Pedir agora pelo WhatsApp
        </a>
      </div>
    </section>
  );
};