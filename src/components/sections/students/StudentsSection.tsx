import React from 'react';
import styles from './StudentsSection.module.css';
import StudentCard from '@/components/ui/StudentCard/StudentCard';

const students = [
  {
    name: 'Егор Корякин',
    age: '12',
    course: 'Робототехника',
    imageUrl: '/images/students/student1.jpg'
  },
  {
    name: 'Анна Смирнова',
    age: '13',
    course: 'Программирование',
    imageUrl: '/images/students/student2.jpg'
  },
  {
    name: 'Иван Петров',
    age: '11',
    course: '3D-моделирование',
    imageUrl: '/images/students/student3.jpg'
  },
  {
    name: 'Мария Иванова',
    age: '12',
    course: 'Веб-дизайн',
    imageUrl: '/images/students/student4.jpg'
  },
  {
    name: 'Алексей Сидоров',
    age: '13',
    course: 'Разработка игр',
    imageUrl: '/images/students/student5.jpg'
  },
  {
    name: 'Софья Козлова',
    age: '11',
    course: 'Мобильные приложения',
    imageUrl: '/images/students/student6.jpg'
  },
  {
    name: 'Дмитрий Новиков',
    age: '12',
    course: 'Искусственный интеллект',
    imageUrl: '/images/students/student7.jpg'
  },
  {
    name: 'Алиса Морозова',
    age: '13',
    course: 'Кибербезопасность',
    imageUrl: '/images/students/student8.jpg'
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

export default StudentsSection;
