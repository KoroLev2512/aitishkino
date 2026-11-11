import React from 'react';
import styles from './ApproachSection.module.css';
import { LazyLottie } from '@/components/ui/LazyLottie/LazyLottie';

export const ApproachSection = () => {
  return (
    <section className={styles.section}>
      <div className={styles.background}>
        <div className={styles.backgroundLeft}></div>
        <div className={styles.backgroundRight}></div>
      </div>

      <div className={styles.container}>
        <div className={styles.content}>
          {/* Left side - Animation */}
          <div className={styles.animationContainer}>
            <LazyLottie
              animationPath="/animations/AdvantagesSection.json"
              className={styles.animation}
              style={{ width: '100%', height: '100%' }}
            />
          </div>

          {/* Right side - Text content */}
          <div className={styles.textContent}>
            <h2 className={styles.title}>Уникальный подход к объяснению материала</h2>
            <p className={styles.description}>
              «Айтишкино» — это не просто курсы, а образовательная экосистема, где каждый элемент
              продуман для максимального вовлечения и практической пользы. Вот что делает наш подход
              уникальным:
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
