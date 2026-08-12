import { FaClock, FaMapMarkerAlt, FaPhone, FaWhatsapp } from 'react-icons/fa';
import { RESTAURANT_INFO } from '../../data/restaurant';
import styles from './Contact.module.css';

export const Contact = () => {
  const hoursEntries = Object.entries(RESTAURANT_INFO.hours);

  return (
    <section id="contact" className={`section ${styles.contact}`} aria-labelledby="contact-title">
      <div className="container">
        <h2 id="contact-title" className="section-title">
          Venha nos visitar
        </h2>
        <p className="section-subtitle">
          Estamos esperando você para uma experiência gastronômica inesquecível.
        </p>

        <ul className={styles.grid}>
          <li className={styles.card}>
            <div className={styles.iconWrap} aria-hidden="true">
              <FaMapMarkerAlt />
            </div>
            <h3>Endereço</h3>
            <p>{RESTAURANT_INFO.address}</p>
          </li>

          <li className={styles.card}>
            <div className={styles.iconWrap} aria-hidden="true">
              <FaPhone />
            </div>
            <h3>Telefone</h3>
            <p>
              <a href={`tel:${RESTAURANT_INFO.phone.replace(/\D/g, '')}`}>
                {RESTAURANT_INFO.phone}
              </a>
            </p>
            <a
              href={`https://wa.me/${RESTAURANT_INFO.whatsapp}`}
              className="btn btn-primary"
              target="_blank"
              rel="noopener noreferrer"
              style={{ marginTop: '0.75rem' }}
            >
              <FaWhatsapp aria-hidden="true" />
              Chamar no WhatsApp
            </a>
          </li>

          <li className={styles.card}>
            <div className={styles.iconWrap} aria-hidden="true">
              <FaClock />
            </div>
            <h3>Horário de funcionamento</h3>
            <ul className={styles.hours}>
              {hoursEntries.map(([day, time]) => (
                <li key={day}>
                  <span>{day}</span>
                  <strong>{time}</strong>
                </li>
              ))}
            </ul>
          </li>
        </ul>
      </div>
    </section>
  );
};
