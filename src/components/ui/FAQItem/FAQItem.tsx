import { useState, useRef, useEffect, useId } from 'react';
import styles from './FAQItem.module.css';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

export const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, onClick }) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);
  const id = useId();
  const buttonId = `faq-btn-${id}`;
  const panelId = `faq-panel-${id}`;

  useEffect(() => {
    if (contentRef.current) {
      setHeight(isOpen ? contentRef.current.scrollHeight : 0);
    }
  }, [isOpen]);

  return (
    <div className={`${styles.faqItem} ${isOpen ? styles.isOpen : ''}`}>
      <button
        id={buttonId}
        type="button"
        className={styles.questionButton}
        onClick={onClick}
        aria-expanded={isOpen}
        aria-controls={panelId}
      >
        <span className={styles.questionText}>{question}</span>
        <span className={styles.icon} aria-hidden="true">
          <span className={`${styles.iconLine} ${styles.horizontal}`} />
          <span
            className={`${styles.iconLine} ${styles.vertical} ${isOpen ? styles.rotated : ''}`}
          />
        </span>
      </button>

      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        ref={contentRef}
        className={styles.answer}
        style={{ height: `${height}px` }}
        aria-hidden={!isOpen}
      >
        <div className={styles.answerContent}>
          {answer.split('\n\n').map((paragraph, index) => (
            <p key={index} className={styles.answerParagraph}>
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};
