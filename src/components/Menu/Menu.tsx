import { useMemo, useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import type { Pizza } from '../../types/domain';
import { PIZZAS, RESTAURANT_INFO, buildWhatsAppUrl } from '../../data/restaurant';
import { formatCategory, formatCurrency } from '../../utils/format';
import styles from './Menu.module.css';

type Filter = 'all' | Pizza['category'];

const FILTERS: Array<{ key: Filter; label: string }> = [
  { key: 'all', label: 'Todas' },
  { key: 'tradicional', label: 'Tradicionais' },
  { key: 'especial', label: 'Especiais' },
  { key: 'doce', label: 'Doces' },
];

export const Menu = (): JSX.Element => {
  const [activeFilter, setActiveFilter] = useState<Filter>('all');

  const filteredPizzas = useMemo(() => {
    if (activeFilter === 'all') return PIZZAS;
    return PIZZAS.filter((pizza) => pizza.category === activeFilter);
  }, [activeFilter]);

  return (
    <section id="menu" className={`section ${styles.menu}`} aria-labelledby="menu-title">
      <div className="container">
        <h2 id="menu-title" className="section-title">
          Nosso cardápio
        </h2>
        <p className="section-subtitle">
          Sabores clássicos e criações especiais do nosso chef, todas com massa de fermentação
          natural de 48h.
        </p>

        <div className={styles.filters} role="tablist" aria-label="Filtros do cardápio">
          {FILTERS.map(({ key, label }) => (
            <button
              key={key}
              role="tab"
              aria-selected={activeFilter === key}
              className={`${styles.filterButton} ${activeFilter === key ? styles.active : ''}`}
              onClick={() => setActiveFilter(key)}
            >
              {label}
            </button>
          ))}
        </div>

        <ul className={styles.grid}>
          {filteredPizzas.map((pizza) => (
            <li key={pizza.id} className={styles.card}>
              <div className={styles.imageWrap}>
                <img
                  src={pizza.image}
                  alt={`Pizza ${pizza.name}`}
                  loading="lazy"
                  width={600}
                  height={600}
                />
                <span className={styles.category}>{formatCategory(pizza.category)}</span>
              </div>

              <div className={styles.body}>
                <h3>{pizza.name}</h3>
                <p>{pizza.description}</p>

                <ul className={styles.tags} aria-label="Características">
                  {pizza.tags.map((tag) => (
                    <li key={tag} className={styles.tag}>
                      {tag}
                    </li>
                  ))}
                </ul>

                <div className={styles.footer}>
                  <strong className={styles.price}>{formatCurrency(pizza.price)}</strong>
                  <a
                    href={buildWhatsAppUrl(RESTAURANT_INFO.whatsapp, pizza.name)}
                    className="btn btn-primary"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Pedir pizza ${pizza.name} pelo WhatsApp`}
                  >
                    <FaWhatsapp aria-hidden="true" />
                    Pedir
                  </a>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};