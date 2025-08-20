'use client';

import { useState } from 'react';
import styles from './ConsultationSection.module.css';
import { Send } from 'lucide-react';
import { InputMask } from '@react-input/mask';
import { useForm, Controller } from 'react-hook-form';

interface IFormData {
  name: string;
  phone: string;
  email: string;
}

export const ConsultationSection = () => {
  const { control, handleSubmit: handleFormSubmit, formState: { errors } } = useForm<IFormData>();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (data: IFormData) => {
    setIsLoading(true);

    const googleFormUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSeno1cq1rKAAuW3ZtZpr_9DFUBu_zo0LShKAWZkj4TL3rQ6eA/formResponse';
    const formDataToSubmit = new FormData();
    formDataToSubmit.append('entry.907660670', data.name);
    formDataToSubmit.append('entry.805562166', data.phone);
    formDataToSubmit.append('entry.1544142625', data.email);

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

          <form onSubmit={handleFormSubmit(onSubmit)} className={styles.form}>
            <div className={styles.formVertical}>
              <div className={styles.formGroup}>
                <Controller
                  name="name"
                  control={control}
                  defaultValue=""
                  rules={{ required: 'Пожалуйста, введите ваше имя' }}
                  render={({ field }) => (
                    <input
                      {...field}
                      type="text"
                      className={styles.input}
                      placeholder="Ваше имя"
                    />
                  )}
                />
                {errors.name && <span className={styles.error}>{errors.name.message as string}</span>}
              </div>
              
              <div className={styles.formGroup}>
                <Controller
                  name="phone"
                  control={control}
                  defaultValue=""
                  rules={{ required: 'Пожалуйста, введите ваш телефон' }}
                  render={({ field }) => (
                    <InputMask
                      mask="+_ (___) ___-__-__"
                      replacement={{ _: /\d/ }}
                      {...field}
                      className={styles.input}
                      placeholder="+7 (___) ___-__-__"
                    />
                  )}
                />
                {errors.phone && <span className={styles.error}>{errors.phone.message as string}</span>}
              </div>
              
              <div className={styles.formGroup}>
                <Controller
                  name="email"
                  control={control}
                  defaultValue=""
                  rules={{
                    required: 'Пожалуйста, введите ваш email',
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: 'Пожалуйста, введите корректный email'
                    }
                  }}
                  render={({ field }) => (
                    <input
                      {...field}
                      type="email"
                      className={styles.input}
                      placeholder="Email"
                    />
                  )}
                />
                {errors.email && <span className={styles.error}>{errors.email.message as string}</span>}
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


