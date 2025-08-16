'use client';

import { useRouter } from 'next/navigation';
import styles from './ConsultationButton.module.css';
import { ArrowRight } from 'lucide-react';

export const ConsultationButton = () => {
  const router = useRouter();

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const form = document.getElementById('application-form');
    if (form) {
      // Smooth scroll with offset
      const yOffset = -80; // Adjust offset for better positioning
      const y = form.getBoundingClientRect().top + window.pageYOffset + yOffset;
      
      // Smooth scroll
      window.scrollTo({
        top: y,
        behavior: 'smooth'
      });
      
      // Set focus on the first form field after scroll
      const firstInput = form.querySelector('input, textarea, select') as HTMLInputElement | null;
      if (firstInput) {
        const focusInput = () => {
          firstInput.focus({
            preventScroll: true
          });
        };
        
        // Set a timer in case the scroll event doesn't trigger
        const focusTimer = setTimeout(focusInput, 800);
        
        // Track scroll completion
        const onScroll = () => {
          if ((window.pageYOffset >= y - 10 && window.pageYOffset <= y + 10) || 
              (window.innerHeight + window.pageYOffset) >= document.body.offsetHeight - 2) {
            window.removeEventListener('scroll', onScroll);
            clearTimeout(focusTimer);
            focusInput();
          }
        };
        
        // Add a small timeout before subscribing to the scroll event
        setTimeout(() => {
          window.addEventListener('scroll', onScroll, { once: true });
        }, 100);
      }
    }
  };

  return (
    <div className={styles.buttonContainer}>
      <button 
        className={styles.consultationButton}
        onClick={handleClick}
      >
        <span>Записаться на консультацию</span>
        <ArrowRight className={styles.arrowIcon} size={20} />
      </button>
    </div>
  );
};

export default ConsultationButton;
