import React from 'react';
import styles from './AdvantageCard.module.css';

export interface AdvantageCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  className?: string;
}

export const AdvantageCard: React.FC<AdvantageCardProps> = ({ 
  title, 
  description, 
  icon,
  className = ''
}) => {
  return (
    <div className={`${styles.card} ${className}`}>
      {icon && (
        <div className={styles.iconContainer}>
          {icon}
        </div>
      )}
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </div>
  );
};

export default AdvantageCard;
