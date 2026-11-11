'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { InputMask } from '@react-input/mask';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import styles from './ConsultationSection.module.css';
import { leadSchema, type LeadFormData } from '@/lib/validations/lead';
import { submitLead } from '@/lib/api/leads';
import { trackEvent } from '@/lib/analytics/track';

export const ConsultationSection = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
    register,
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LeadFormData>({
    resolver: zodResolver(leadSchema),
    defaultValues: {
      name: '',
      phone: '',
      email: '',
      consent: true,
      honeypot: '',
    },
    shouldFocusError: true,
  });

  const onSubmit = async (data: LeadFormData) => {
    setSubmitError(null);

    const result = await submitLead(data);

    if (result.success) {
      setIsSubmitted(true);
      trackEvent('lead_form_submitted', {
        form: 'consultation',
      });
    } else {
      setSubmitError(
        result.error || 'Произошла ошибка при отправке заявки. Пожалуйста, попробуйте еще раз.'
      );
    }
  };

  if (isSubmitted) {
    return (
      <section className={styles.section} id="application-form">
        <div className={styles.container}>
          <div className={styles.content}>
            <div className={styles.successContainer}>
              <div className={styles.successContent}>
                <div className={styles.successIcon}>
                  <CheckCircle2 size={48} color="white" />
                </div>
                <h2 className={styles.successTitle}>Заявка успешно отправлена!</h2>
                <p className={styles.successText}>
                  Спасибо за обращение. Наш методист свяжется с вами в течение 10 минут, ответит на
                  все вопросы и подберет удобное время для пробного урока.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={styles.section} id="application-form">
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.pattern} aria-hidden="true" />

          <div className={styles.header}>
            <h2 className={styles.title}>Запишитесь на бесплатный пробный урок</h2>
            <p className={styles.subtitle}>
              Оставьте заявку, и наш методист свяжется с вами в течение 10 минут, чтобы ответить на
              вопросы и записать вашего ребенка на первое занятие.
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className={styles.form} noValidate>
            {/* Ошибка отправки формы (вместо alert) */}
            {submitError && (
              <div className={styles.alertError} role="alert" aria-live="assertive">
                <div className="flex items-center gap-2">
                  <AlertCircle size={18} className="shrink-0" />
                  <span>{submitError}</span>
                </div>
              </div>
            )}

            {/* Honeypot поле для защиты от спам-ботов */}
            <div className={styles.honeypot} aria-hidden="true">
              <label htmlFor="consultation-honeypot">Не заполняйте это поле</label>
              <input
                id="consultation-honeypot"
                type="text"
                tabIndex={-1}
                autoComplete="off"
                {...register('honeypot')}
              />
            </div>

            <div className={styles.formVertical}>
              {/* Поле: Имя */}
              <div className={styles.formGroup}>
                <label htmlFor="consultation-name" className={styles.label}>
                  Ваше имя{' '}
                  <span aria-hidden="true" className="text-red-500">
                    *
                  </span>
                </label>
                <input
                  id="consultation-name"
                  type="text"
                  autoComplete="name"
                  placeholder="Как к вам обращаться?"
                  aria-required="true"
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? 'consultation-name-error' : undefined}
                  className={`${styles.input} ${errors.name ? styles.inputError : ''}`}
                  disabled={isSubmitting}
                  {...register('name')}
                />
                {errors.name && (
                  <span id="consultation-name-error" className={styles.error} role="alert">
                    {errors.name.message}
                  </span>
                )}
              </div>

              {/* Поле: Телефон */}
              <div className={styles.formGroup}>
                <label htmlFor="consultation-phone" className={styles.label}>
                  Номер телефона{' '}
                  <span aria-hidden="true" className="text-red-500">
                    *
                  </span>
                </label>
                <Controller
                  name="phone"
                  control={control}
                  render={({ field }) => (
                    <InputMask
                      id="consultation-phone"
                      mask="+_ (___) ___-__-__"
                      replacement={{ _: /\d/ }}
                      autoComplete="tel"
                      inputMode="tel"
                      placeholder="+7 (___) ___-__-__"
                      aria-required="true"
                      aria-invalid={!!errors.phone}
                      aria-describedby={errors.phone ? 'consultation-phone-error' : undefined}
                      className={`${styles.input} ${errors.phone ? styles.inputError : ''}`}
                      disabled={isSubmitting}
                      value={field.value}
                      onChange={field.onChange}
                      onBlur={field.onBlur}
                      ref={field.ref}
                    />
                  )}
                />
                {errors.phone && (
                  <span id="consultation-phone-error" className={styles.error} role="alert">
                    {errors.phone.message}
                  </span>
                )}
              </div>

              {/* Поле: Email */}
              <div className={styles.formGroup}>
                <label htmlFor="consultation-email" className={styles.label}>
                  Электронная почта{' '}
                  <span aria-hidden="true" className="text-red-500">
                    *
                  </span>
                </label>
                <input
                  id="consultation-email"
                  type="email"
                  autoComplete="email"
                  inputMode="email"
                  placeholder="name@example.com"
                  aria-required="true"
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? 'consultation-email-error' : undefined}
                  className={`${styles.input} ${errors.email ? styles.inputError : ''}`}
                  disabled={isSubmitting}
                  {...register('email')}
                />
                {errors.email && (
                  <span id="consultation-email-error" className={styles.error} role="alert">
                    {errors.email.message}
                  </span>
                )}
              </div>

              {/* Чекбокс: Согласие на ОПД (152-ФЗ) */}
              <div className="w-full">
                <div className={styles.consentGroup}>
                  <input
                    id="consultation-consent"
                    type="checkbox"
                    className={styles.checkbox}
                    aria-required="true"
                    aria-invalid={!!errors.consent}
                    aria-describedby={errors.consent ? 'consultation-consent-error' : undefined}
                    disabled={isSubmitting}
                    {...register('consent')}
                  />
                  <label htmlFor="consultation-consent" className={styles.consentLabel}>
                    Я даю согласие на обработку персональных данных в соответствии с{' '}
                    <Link href="/privacy" className={styles.privacyLink} target="_blank">
                      политикой конфиденциальности
                    </Link>
                  </label>
                </div>
                {errors.consent && (
                  <span id="consultation-consent-error" className={styles.error} role="alert">
                    {errors.consent.message}
                  </span>
                )}
              </div>
            </div>

            <div className={styles.formFooter}>
              <button
                type="submit"
                className={styles.submitButton}
                disabled={isSubmitting}
                aria-busy={isSubmitting}
              >
                {isSubmitting ? (
                  <span>Отправка заявки...</span>
                ) : (
                  <>
                    <span>Отправить заявку</span>
                    <Send size={18} className={styles.buttonIcon} />
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
