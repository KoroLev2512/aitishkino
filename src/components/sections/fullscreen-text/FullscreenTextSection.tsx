import React from 'react';
import styles from './FullscreenTextSection.module.css';

interface FullscreenTextSectionProps {
  line1: string;
  line2: string;
  backgroundColor?: string;
  textColor?: string;
}

export const FullscreenTextSection: React.FC<FullscreenTextSectionProps> = ({
  line1,
  line2,
  backgroundColor = '#ffffff',
  textColor = '#000000',
}) => {
  return (
    <section 
      className={styles.section}
      style={{ backgroundColor, color: textColor }}
    >
      <div className={styles.container}>
        <h2 className={styles.title}>
          {line1}
          <br />
          <span className={styles.highlight}>
            {line2}
          </span>
        </h2>
      </div>
    </section>
  );
};


