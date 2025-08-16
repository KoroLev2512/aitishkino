import React from 'react';
import styles from './KeyDirectionsSection.module.css';
import { Code2, Bot } from 'lucide-react';

export const KeyDirectionsSection = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          Наши два ключевых направления идеально дополняют друг друга:
        </h2>
        
        <div className={styles.directionsWrapper}>
          {/* Карточка с программированием */}
          <div className={`${styles.direction} ${styles.programming}`}>
            <div className={styles.directionContent}>
              <div className={`${styles.iconContainer} ${styles.programmingIcon}`}>
                <Code2 className={styles.icon} size={36} color="#00B18F" strokeWidth={2} />
              </div>
              <h3 className={styles.directionTitle}>
                Программирование
              </h3>
              <p className={styles.directionText}>
                Написание кода развивает логику, алгоритмическое мышление и цифровую грамотность.
              </p>
            </div>
          </div>

          {/* Карточка с робототехникой */}
          <div className={`${styles.direction} ${styles.robotics}`}>
            <div className={styles.directionContent}>
              <div className={`${styles.iconContainer} ${styles.roboticsIcon}`}>
                <Bot className={styles.icon} size={36} color="white" strokeWidth={2} />
              </div>
              <h3 className={styles.directionTitle}>
                Робототехника
              </h3>
              <p className={styles.directionText}>
                Превращает этот код в настоящие движущиеся механизмы и умные устройства.
              </p>
            </div>
          </div>
        </div>
        
        <div className={styles.footer}>
          <p className={styles.footerText}>
            Оба направления тесно связаны и позволяют получить полное представление о современном мире технологий
          </p>
        </div>
      </div>
    </section>
  );
};
