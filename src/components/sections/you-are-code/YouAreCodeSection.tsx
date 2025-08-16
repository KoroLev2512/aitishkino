import React from 'react';
import styles from './YouAreCodeSection.module.css';
import Lottie from 'lottie-react';
import secondblockAnimation from '@/assets/animations/secondblock.json';

export const YouAreCodeSection = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.content}>
          {/* Animation - Moved to top on mobile */}
          <div className={styles.animationContainer}>
            <Lottie
              animationData={secondblockAnimation}
              loop={true}
              autoplay={true}
              className={styles.animation}
              style={{ width: '100%', height: '100%' }}
            />
          </div>
          
          {/* Text content */}
          <div className={styles.textContent}>
            <h2 className={styles.title}>
              Ты — код,
              <span className={styles.highlight}>который изменит мир.</span>
              <span className={styles.highlight}>Пора запустить программу.</span>
            </h2>
            <p className={styles.description}>
              В &ldquo;Айтишкино&rdquo; мы не просто учим — мы создаём юных инноваторов! Наши два ключевых направления идеально дополняют друг друга:
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
