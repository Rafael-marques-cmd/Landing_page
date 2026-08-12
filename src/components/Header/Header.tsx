import { useEffect, useState } from 'react';
import { FaPizzaSlice } from 'react-icons/fa';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { NAV_LINKS, RESTAURANT_INFO } from '../../data/restaurant';
import { useMediaQuery } from '../../hooks/useMediaQuery';
import { useScrollSpy } from '../../hooks/useScrollSpy';
import styles from './Header.module.css';

const SECTION_IDS = NAV_LINKS.map((link) => link.href.replace('#', ''));

export const Header = (): JSX.Element => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useMediaQuery('(max-width: 768px)');
  const activeId = useScrollSpy(SECTION_IDS);

  useEffect(() => {
    const onScroll = (): void => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Fecha menu mobile ao trocar para desktop.
  useEffect(() => {
    if (!isMobile) setIsOpen(false);
  }, [isMobile]);

  const handleLinkClick = (): void => setIsOpen(false);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.inner}`}>
        <a href="#home" className={styles.logo} aria-label="Ir para o início">
          <FaPizzaSlice className={styles.logoIcon} aria-hidden="true" />
          <span>{RESTAURANT_INFO.name}</span>
        </a>

        <nav
          className={`${styles.nav} ${isOpen ? styles.navOpen : ''}`}
          aria-label="Navegação principal"
        >
          <ul className={styles.navList}>
            {NAV_LINKS.map((link) => {
              const linkId = link.href.replace('#', '');
              const isActive = activeId === linkId;
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={handleLinkClick}
                    className={`${styles.navLink} ${isActive ? styles.active : ''}`}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <button
          className={styles.menuButton}
          aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={isOpen}
          aria-controls="primary-navigation"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </div>
    </header>
  );
};