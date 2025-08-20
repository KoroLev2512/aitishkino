import React from 'react';
import styles from './CourseCard.module.css';

interface CourseCardProps {
  id: string;
  title: string;
  age: string;
  modules: number;
  icon: React.ReactNode;
  modulesList: string[];
  outcomes: string[];
  isExpanded: boolean;
  onToggleExpand: (id: string) => void;
}

export const CourseCard: React.FC<CourseCardProps> = React.memo(({ 
  id,
  title, 
  age, 
  modules, 
  icon, 
  modulesList, 
  outcomes,
  isExpanded,
  onToggleExpand
}) => {
  
  const handleToggle = React.useCallback(() => {
    onToggleExpand(id);
  }, [id, isExpanded, onToggleExpand]);

  return (
    <div className={`${styles.courseCard} ${isExpanded ? styles.expanded : ''}`}>
      <div className={styles.cardContent}>
        <div className={styles.iconContainer}>
          {icon}
        </div>
        <h3 className={styles.courseTitle}>{title}</h3>
        <p className={styles.courseInfo}>Возраст: {age}</p>
        <p className={styles.courseInfo}>Модулей: {modules}</p>
        <button 
          className={styles.detailsButton}
          onClick={handleToggle}
          aria-expanded={isExpanded}
          aria-controls={`course-${id}-content`}
          aria-label={isExpanded ? 'Свернуть детали' : 'Показать детали'}
        >
          {isExpanded ? 'Свернуть' : 'Подробнее'}
        </button>
      </div>
      
      <div 
        id={`course-${id}-content`}
        className={`${styles.expandedContent} ${isExpanded ? styles.visible : ''}`}
        aria-hidden={!isExpanded}
        role="region"
      >
        <div className={styles.modulesHeader}>
          Основные модули:
        </div>
        <ul className={styles.modulesList}>
          {modulesList.map((module, index) => (
            <li key={index} className={styles.moduleItem}>
              {module}
            </li>
          ))}
        </ul>
        <div className={styles.outcomesHeader}>
          Итог
        </div>
        <ul className={styles.outcomesList}>
          {outcomes.map((outcome, index) => (
            <li key={index} className={styles.outcomeItem}>
              {outcome}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
});

CourseCard.displayName = 'CourseCard';


