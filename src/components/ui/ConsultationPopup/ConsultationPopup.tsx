"use client";

import { useState, useEffect } from "react";
import styles from "./ConsultationPopup.module.css";

export default function ConsultationPopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 5000); //тест

    return () => clearTimeout(timer);
  }, []);

  if (!isOpen) return null;

  return (
    <div className={styles.backdrop} onClick={() => setIsOpen(false)}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.container}>
          {/* Left Panel - Form */}
          <div className={styles.leftPanel}>
            <div className={styles.formWrapper}>
              <h1 className={styles.title}>
                Получите персональную консультацию
              </h1>
              <p className={styles.subtitle}>
                Оставьте заявку и наш эксперт свяжется с вами в течение 15 минут
              </p>

              <form
                className={styles.form}
                onSubmit={(e) => e.preventDefault()}
              >
                <div className={styles.formGroup}>
                  <label htmlFor="name" className={styles.label}>
                    Как вас зовут?
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Введите ваше имя"
                    className={styles.input}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="email" className={styles.label}>
                    Email для связи
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="example@mail.com"
                    className={styles.input}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="phone" className={styles.label}>
                    Номер телефона
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    placeholder="+7 (999) 123-45-67"
                    className={styles.input}
                  />
                </div>

                <button type="submit" className={styles.submitButton}>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="22" y1="2" x2="11" y2="13" />
                    <polygon points="22 2 15 22 11 13 2 9 22 2" />
                  </svg>
                  Получить консультацию
                </button>
              </form>

              <p className={styles.privacy}>
                Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
              </p>
            </div>
          </div>

          {/* Right Panel - Hero */}
          <div className={styles.rightPanel}>
            <div className={styles.backgroundImage}></div>

            <div className={styles.heroContent}>
              <h2 className={styles.heroTitle}>
                Уверенность в завтрашнем дне начинается с кода сегодня
              </h2>

              <p className={styles.heroText}>
                Получите персональную консультацию по выбору образовательных
                программ и курсов. Наши эксперты помогут определить оптимальный
                путь развития именно для вас.
              </p>

              <div className={styles.features}>
                <div className={styles.featureCard}>
                  <svg
                    className={styles.featureIcon}
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                  <div>
                    <p className={styles.featureLabel}>Ответим за</p>
                    <p className={styles.featureValue}>15 минут</p>
                  </div>
                </div>

                <div className={styles.featureCard}>
                  <svg
                    className={styles.featureIcon}
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                  <div>
                    <p className={styles.featureLabel}>Бесплатная</p>
                    <p className={styles.featureValue}>консультация</p>
                  </div>
                </div>

                <div className={styles.featureCard}>
                  <svg
                    className={styles.featureIcon}
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                  <div>
                    <p className={styles.featureLabel}>Опытные</p>
                    <p className={styles.featureValue}>эксперты</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <button
          onClick={() => setIsOpen(false)}
          className={styles.closeButton}
          aria-label="Close"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      </div>
    </div>
  );
}
