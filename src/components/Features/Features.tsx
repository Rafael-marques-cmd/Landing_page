import { FaClock, FaFire, FaLeaf, FaTruck } from 'react-icons/fa';
import type { IconType } from 'react-icons';
import type { Feature } from '../../types/domain';
import { FEATURES } from '../../data/restaurant';
import styles from './Features.module.css';

const ICONS: Record<Feature['icon'], IconType> = {
  clock: FaClock,
  flame: FaFire,
  leaf: FaLeaf,
  truck: FaTruck,
};

export const Features = () => {
  return (
    <section className={`section ${styles.features}`} aria-labelledby="features-title">
      <div className="container">
        <h2 id="features-title" className="section-title">
          Por que somos diferentes
        </h2>
        <p className="section-subtitle">
          Tradição, técnica e ingredientes selecionados em cada detalhe da nossa pizza.
        </p>

        <ul className={styles.grid}>
          {FEATURES.map((feature) => {
            const Icon = ICONS[feature.icon];
            return (
              <li key={feature.id} className={styles.card}>
                <div className={styles.iconWrap} aria-hidden="true">
                  <Icon />
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
