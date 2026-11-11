import React from 'react';
import styles from './AdvantagesSection.module.css';
import { AdvantageCard } from '@/components/ui/AdvantageCard/AdvantageCard';
import { AdvantageIcon } from '@/components/ui/AdvantageIcons';
import { ADVANTAGES_ITEMS } from '@/content/advantages';

export const AdvantagesSection = () => {
  return (
    <section className={styles.section} id="advantages">
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Наши преимущества</h2>
          <p className={styles.subtitle}>
            Мы создаем среду, где каждый ребенок может раскрыть свой потенциал и полюбить обучение
          </p>
        </div>

        <div className={styles.grid}>
          {ADVANTAGES_ITEMS.map((advantage) => (
            <AdvantageCard
              key={advantage.id}
              title={advantage.title}
              description={advantage.description}
              icon={<AdvantageIcon type={advantage.icon} className="w-10 h-10 text-primary" />}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
