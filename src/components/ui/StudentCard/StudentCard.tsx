import React from 'react';
import styles from './StudentCard.module.css';

interface StudentCardProps {
  name: string;
  age: string;
  course: string;
  imageUrl: string;
}

export const StudentCard: React.FC<StudentCardProps> = ({ 
  name, 
  age, 
  course,
  imageUrl 
}) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img 
          src={imageUrl} 
          className={styles.studentImage}
        />
        <div className={styles.overlay} />
      </div>
      <div className={styles.infoContainer}>
        <div className={styles.age}>{age} лет</div>
        <div className={styles.name}>{name}</div>
        <div className={styles.courseRow}>
          <span className={styles.courseLabel}>Курс: </span>
          <span className={styles.courseName}>{course}</span>
        </div>
      </div>
    </div>
  );
};

export default StudentCard;
