"use client";

import type React from "react";
import styles from "./StudentCard.module.css";
import Image from "next/image";

interface StudentCardProps {
  name: string;
  age: string;
  course: string;
  imageUrl: string;
  onClick?: () => void;
}

export const StudentCard: React.FC<StudentCardProps> = ({
  name,
  age,
  course,
  imageUrl,
  onClick,
}) => {
  return (
    <div
      className={styles.card}
      onClick={onClick}
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={(e) => {
        if (onClick && (e.key === "Enter" || e.key === " ")) {
          e.preventDefault();
          onClick();
        }
      }}
    >
      <div className={styles.imageContainer}>
        <Image
          src={imageUrl || "/placeholder.svg"}
          alt={name}
          className={styles.studentImage}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          style={{ objectFit: "cover" }}
        />

        {/* Оверлей, появляется при наведении */}
        <div className={styles.overlay}></div>

        {/* Текст и иконка поверх изображения */}
        <div className={styles.hoverContent}>
          {onClick && (
            <div className={styles.playButton}>
              <svg
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="24"
                  cy="24"
                  r="24"
                  fill="rgba(255, 255, 255, 0.9)"
                />
                <path d="M19 15L33 24L19 33V15Z" fill="#1a1a1a" />
              </svg>
            </div>
          )}
          <span className={styles.hoverText}>Посмотреть видео</span>
        </div>
      </div>

      <div className={styles.infoContainer}>
        <div className={styles.age}>{age} лет</div>
        <div className={styles.name}>{name}</div>
        <div className={styles.courseRow}>
          <span className={styles.courseLabel}>Курс:</span>
          <span className={styles.courseName}>{course}</span>
        </div>
      </div>
    </div>
  );
};
