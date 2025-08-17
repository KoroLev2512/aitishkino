'use client';

import { useState } from 'react';
import styles from './ConsultationSection.module.css';
import { Send } from 'lucide-react';

export const ConsultationSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.phone) {
      alert('Пожалуйста, заполните все поля');
      return;
    }

    setIsLoading(true);

    const googleFormUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSeno1cq1rKAAuW3ZtZpr_9DFUBu_zo0LShKAWZkj4TL3rQ6eA/formResponse';
    const formDataToSubmit = new FormData();
    formDataToSubmit.append('entry.907660670', formData.name);
    formDataToSubmit.append('entry.805562166', formData.phone);
    formDataToSubmit.append('entry.1544142625', formData.email);

    try {
      await fetch(googleFormUrl, {
        method: 'POST',
        body: formDataToSubmit,
        mode: 'no-cors',
      });

      setIsSubmitted(true);
    } catch {
      alert('Произошла ошибка при отправке формы. Пожалуйста, попробуйте еще раз.');
    } finally {
      setIsLoading(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className={styles.successContainer}>
        <div className={styles.successContent}>
          <div className={styles.successIcon}>
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <h2 className={styles.successTitle}>Заявка отправлена!</h2>
          <p className={styles.successText}>Мы свяжемся с вами в течение 10 минут</p>
        </div>
      </div>
    );
  }

  return (
    <section className={styles.section} id="application-form">
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.pattern} aria-hidden="true" />
          
          <div className={styles.header}>
            <h2 className={styles.title}>Запишитесь на консультацию</h2>
            <p className={styles.subtitle}>
              Оставьте заявку, и наш менеджер свяжется с вами в течение 10 минут, чтобы обсудить детали обучения и ответить на все ваши вопросы
            </p>
          </div>

          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.formVertical}>
              <div className={styles.formGroup}>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className={styles.input}
                  placeholder="Ваше имя"
                  required
                />
              </div>
              
              <div className={styles.formGroup}>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className={styles.input}
                  placeholder="Телефон"
                  required
                />
              </div>
              
              <div className={styles.formGroup}>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={styles.input}
                  placeholder="Email"
                  required
                />
              </div>
            </div>
            
            <div className={styles.formFooter}>
              <button 
                type="submit" 
                className={styles.submitButton}
                disabled={isLoading}
              >
                {isLoading ? 'Отправка...' : 'Отправить заявку'}
                {!isLoading && <Send size={18} />}
              </button>
              
              <p className={styles.privacyText}>
                Нажимая на кнопку, вы даете согласие на обработку персональных данных и соглашаетесь с{' '}
                <a href="/privacy" className={styles.privacyLink}>
                  политикой конфиденциальности
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ConsultationSection;
