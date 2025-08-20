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
            Готовьтесь
              <span className={styles.highlight}>к настоящему и будущему!</span>

            </h2>
            <p className={styles.description}>
            В Айтишкино мы развиваем ребенка как личность, прокачивая не только технические навыки, но и soft скиллы. Дети с нами учатся работать в команде и не боятся ошибок, чтобы быть востребованными абсолютно в любой сфере!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
