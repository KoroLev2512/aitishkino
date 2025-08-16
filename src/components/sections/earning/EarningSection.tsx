import React from 'react';
import styles from './EarningSection.module.css';
import EarningStepCard from '@/components/ui/EarningStepCard/EarningStepCard';
import Lottie from 'lottie-react';
import earningAnimation from '@/assets/animations/EarningSection.json';

export const EarningSection = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Зарабатывай знаниями!</h2>
        
        <div className={styles.animationContainer}>
          <Lottie
            animationData={earningAnimation}
            loop={true}
            autoplay={true}
            className={styles.animation}
            style={{ width: '100%', height: '100%' }}
          />
        </div>
        
        <div className={styles.cardsContainer}>
          <EarningStepCard 
            number="01"
            title="Зарабатывай"
            description={
              <>
                За выполнение заданий, активность
                <br />и успехи в учебе.
              </>
            }
          />
          
          <EarningStepCard 
            number="02"
            title="Копи"
            description="Учись планировать бюджет и принимать решения."
          />
          
          <EarningStepCard 
            number="03"
            title="Трать"
            description="В нашем «Айтишопе» на крутые гаджеты, мерч или оплату курсов!"
          />
        </div>
      </div>
    </section>
  );
};

export default EarningSection;
