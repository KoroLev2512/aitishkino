import React from 'react';
import styles from './StudentsSection.module.css';
import { StudentCard } from '@/components/ui/StudentCard/StudentCard';
import { STUDENT_PROJECTS } from '@/content/students';

export const StudentsSection: React.FC = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Проекты учеников</h2>
        <p className={styles.subtitle}>Узнайте о достижениях наших студентов</p>

        <div className={styles.gridContainer}>
          <div className={styles.grid}>
            {STUDENT_PROJECTS.map((student) => (
              <StudentCard
                key={student.id}
                name={student.name}
                age={student.age}
                course={student.course}
                imageUrl={student.imagePath}
              />
            ))}
          </div>
          <div className={styles.scrollIndicator}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 10L12 14L16 10"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <div>Листайте вбок</div>
          </div>
        </div>
      </div>
    </section>
  );
};
