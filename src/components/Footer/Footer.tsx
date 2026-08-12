import { FaFacebookF, FaInstagram, FaTiktok, FaWhatsapp } from 'react-icons/fa';
import { FaPizzaSlice } from 'react-icons/fa';
import { RESTAURANT_INFO } from '../../data/restaurant';
import styles from './Footer.module.css';

const currentYear = new Date().getFullYear();

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.brand}>
          <div className={styles.logo}>
            <FaPizzaSlice aria-hidden="true" />
            <span>{RESTAURANT_INFO.name}</span>
          </div>
          <p>{RESTAURANT_INFO.tagline}</p>
        </div>

        <div className={styles.column}>
          <h4>Navegação</h4>
          <ul>
            <li>
              <a href="#home">Início</a>
            </li>
            <li>
              <a href="#menu">Cardápio</a>
            </li>
            <li>
              <a href="#about">Sobre</a>
            </li>
            <li>
              <a href="#contact">Contato</a>
            </li>
          </ul>
        </div>

        <div className={styles.column}>
          <h4>Contato</h4>
          <ul>
            <li>{RESTAURANT_INFO.address}</li>
            <li>
              <a href={`tel:${RESTAURANT_INFO.phone.replace(/\D/g, '')}`}>
                {RESTAURANT_INFO.phone}
              </a>
            </li>
          </ul>
        </div>

        <div className={styles.column}>
          <h4>Redes sociais</h4>
          <div className={styles.social}>
            {RESTAURANT_INFO.social.instagram && (
              <a
                href={RESTAURANT_INFO.social.instagram}
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>
            )}
            {RESTAURANT_INFO.social.facebook && (
              <a
                href={RESTAURANT_INFO.social.facebook}
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF />
              </a>
            )}
            {RESTAURANT_INFO.social.tiktok && (
              <a
                href={RESTAURANT_INFO.social.tiktok}
                aria-label="TikTok"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTiktok />
              </a>
            )}
            <a
              href={`https://wa.me/${RESTAURANT_INFO.whatsapp}`}
              aria-label="WhatsApp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>

      <div className={styles.copyright}>
        <div className="container">
          <p>
            © {currentYear} {RESTAURANT_INFO.name}. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};
