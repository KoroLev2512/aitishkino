"use client";

import type React from "react";
import { useState } from "react";
import styles from "./StudentsSection.module.css";
import { StudentCard } from "@/components/ui/StudentCard/StudentCard";
import { VideoPopup } from "@/components/ui/VideoPopup/VideoPopup";

const students = [
  {
    name: "Рома",
    age: "9",
    course: "Робототехника",
    imageUrl: "/images/students/roma.jpg",
    videoUrl: "/video/students/roma.mp4",
  },
  {
    name: "Марвин",
    age: "12",
    course: "Программирование",
    imageUrl: "/images/students/marvin.jpg",
    videoUrl: "/video/students/marvin.mp4",
  },
  {
    name: "Федя",
    age: "7",
    course: "Робототехника",
    imageUrl: "/images/students/fedya.jpg",
    videoUrl: "/video/students/fedya.mp4",
  },
];

export const StudentsSection: React.FC = () => {
  const [selectedStudent, setSelectedStudent] = useState<
    (typeof students)[0] | null
  >(null);

  const handleCardClick = (student: (typeof students)[0]) => {
    setSelectedStudent(student);
  };

  const handleClosePopup = () => {
    setSelectedStudent(null);
  };

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
                onClick={() => handleCardClick(student)}
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

      {selectedStudent && (
        <VideoPopup
          videoUrl={selectedStudent.videoUrl}
          studentName={selectedStudent.name}
          isOpen={!!selectedStudent}
          onClose={handleClosePopup}
        />
      )}
    </section>
  );
};
