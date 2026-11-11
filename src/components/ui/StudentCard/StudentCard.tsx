import React from 'react';
import styles from './StudentCard.module.css';
import Image, { StaticImageData } from 'next/image';

interface StudentCardProps {
  name: string;
  age: string;
  course: string;
  imageUrl: string | StaticImageData;
}

export const StudentCard: React.FC<StudentCardProps> = ({ name, age, course, imageUrl }) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <Image
          src={imageUrl}
          alt={`Проект ученика: ${name}, ${age} лет, курс ${course}`}
          className={styles.studentImage}
          fill
          sizes="(max-width: 768px) 80vw, 320px"
          style={{ objectFit: 'cover' }}
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
