import React from 'react';
import marvin from '@/../public/images/students/marvin.jpg';
import fedya from '@/../public/images/students/fedya.jpg';
import roma from '@/../public/images/students/roma.jpg';
import styles from './StudentsSection.module.css';
import { StudentCard } from '@/components/ui/StudentCard/StudentCard';

const students = [
  {
    name: 'Рома',
    age: '9',
    course: 'Робототехника',
    imageUrl: roma
  },
  {
    name: 'Марвин',
    age: '12',
    course: 'Программирование',
    imageUrl: marvin
  },
  {
    name: 'Федя',
    age: '7',
    course: 'Робототехника',
    imageUrl: fedya
  }
];

export const StudentsSection: React.FC = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Проекты учеников</h2>
        <p className={styles.subtitle}>Узнайте о достижениях наших студентов</p>
        
        <div className={styles.gridContainer}>
          <div className={styles.grid}>
            {students.map((student, index) => (
              <StudentCard
                key={index}
                name={student.name}
                age={student.age}
                course={student.course}
                imageUrl={student.imageUrl}
              />
            ))}
          </div>
          <div className={styles.scrollIndicator}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 10L12 14L16 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <div>Листайте вбок</div>
          </div>
        </div>
      </div>
    </section>
  );
};
