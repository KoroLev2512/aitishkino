import React from 'react';
import styles from './EarningStepCard.module.css';

interface EarningStepCardProps {
  number: string;
  title: string;
  description: string | React.ReactNode;
}

export const EarningStepCard: React.FC<EarningStepCardProps> = ({ 
  number, 
  title, 
  description 
}) => {
  return (
    <div className={styles.card}>
      <div className={styles.number}>{number}</div>
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
};


