import React from 'react';
import Lottie from 'lottie-react';
import heroAnimation from '@/assets/animations/Hero.json';
import styles from './HeroSection.module.css';

export const HeroSection = () => {
  return (
    <section className={styles.section}>
      <div className={styles.background}>
        <div className={styles.backgroundLeft}></div>
        <div className={styles.backgroundRight}></div>
      </div>
      
      <div className={styles.container}>
        <div className={styles.content}>
          {/* Animation - Moved to top on mobile */}
          <div className={styles.animationContainer}>
            <Lottie
              animationData={heroAnimation}
              loop
              autoplay
              className={styles.animation}
              style={{ width: 800, height: 600 }}
            />
          </div>
          
          {/* Text content */}
          <div className={styles.textContent}>
            <h1 className={styles.title}>
              Научись говорить
              <span className={styles.highlight}>с гаджетами за час!</span>
            </h1>
            <p className={styles.description}>
              В "Айтишкино" мы не просто учим — мы создаём юных инноваторов! Наши два ключевых направления идеально дополняют друг друга:
            </p>
            <a 
              href="#" 
              className={styles.button}
              onClick={(e) => {
                e.preventDefault();
                const form = document.getElementById('application-form');
                if (form) {
                  // Плавный скролл с отступом сверху
                  const yOffset = -80; // Уменьшаем отступ для лучшего позиционирования
                  const y = form.getBoundingClientRect().top + window.pageYOffset + yOffset;
                  
                  // Прокручиваем один раз с плавной анимацией
                  window.scrollTo({
                    top: y,
                    behavior: 'smooth'
                  });
                  
                  // Устанавливаем фокус на первое поле формы с небольшой задержкой
                  const firstInput = form.querySelector('input, textarea, select') as HTMLInputElement | null;
                  if (firstInput) {
                    // Устанавливаем фокус после завершения скролла
                    const focusInput = () => {
                      firstInput.focus({
                        // Отключаем дополнительный скролл при фокусе
                        preventScroll: true
                      });
                    };
                    
                    // Устанавливаем таймер на случай, если событие scroll не сработает
                    const focusTimer = setTimeout(focusInput, 800);
                    
                    // Отслеживаем завершение скролла
                    const onScroll = () => {
                      if ((window.pageYOffset >= y - 10 && window.pageYOffset <= y + 10) || 
                          (window.innerHeight + window.pageYOffset) >= document.body.offsetHeight - 2) {
                        window.removeEventListener('scroll', onScroll);
                        clearTimeout(focusTimer);
                        focusInput();
                      }
                    };
                    
                    // Добавляем небольшой таймаут перед подпиской на событие скролла
                    setTimeout(() => {
                      window.addEventListener('scroll', onScroll, { once: true });
                    }, 100);
                  }
                }
              }}
            >
              Записаться на бесплатный урок
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
