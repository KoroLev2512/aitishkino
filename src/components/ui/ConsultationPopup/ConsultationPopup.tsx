'use client';

import React, { useState, useEffect, useCallback, useId } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { InputMask } from '@react-input/mask';
import { Send, X, ChevronDown, CheckCircle2, AlertCircle } from 'lucide-react';
import { submitLead } from '@/lib/api/leads';

export type ConsultationPopupProps = {
  /**
   * Задержка показа в миллисекундах (по умолчанию 60 000 мс = 1 минута)
   */
  delayMs?: number;
  /**
   * Принудительное управление показом (для тестирования)
   */
  isOpenProp?: boolean;
  /**
   * Callback при закрытии
   */
  onCloseProp?: () => void;
};

export const ConsultationPopup: React.FC<ConsultationPopupProps> = ({
  delayMs = 60000,
  isOpenProp,
  onCloseProp,
}) => {
  const [internalIsOpen, setInternalIsOpen] = useState(false);
  const isControlled = typeof isOpenProp === 'boolean';
  const isOpen = isControlled ? isOpenProp : internalIsOpen;

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [format, setFormat] = useState<'offline' | 'online'>('offline');
  const [direction, setDirection] = useState('programming');
  const [branch, setBranch] = useState('marino');
  const [honeypot, setHoneypot] = useState('');

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);

  const titleId = useId();

  const handleClose = useCallback(() => {
    if (!isControlled) {
      setInternalIsOpen(false);
    }
    if (typeof window !== 'undefined') {
      try {
        sessionStorage.setItem('consultation_popup_dismissed', 'true');
      } catch {
        // ignore quota/security errors
      }
    }
    onCloseProp?.();
  }, [isControlled, onCloseProp]);

  // Запуск таймера на 1 минуту
  useEffect(() => {
    if (isControlled) return;

    if (typeof window !== 'undefined') {
      try {
        const dismissed = sessionStorage.getItem('consultation_popup_dismissed');
        if (dismissed === 'true') {
          return;
        }
      } catch {
        // ignore
      }
    }

    const timer = setTimeout(() => {
      setInternalIsOpen(true);
    }, delayMs);

    const handleCustomOpen = () => setInternalIsOpen(true);
    window.addEventListener('open-consultation-popup', handleCustomOpen);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('open-consultation-popup', handleCustomOpen);
    };
  }, [delayMs, isControlled]);

  // Закрытие по Escape
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, handleClose]);

  // Блокировка прокрутки страницы при открытом модальном окне
  useEffect(() => {
    if (!isOpen) return;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = prevOverflow;
    };
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (name.trim().length < 2) {
      setError('Пожалуйста, укажите ваше имя');
      return;
    }

    const digitsOnly = phone.replace(/\D/g, '');
    if (digitsOnly.length < 11) {
      setError('Пожалуйста, введите полный номер телефона');
      return;
    }

    setIsSubmitting(true);

    try {
      const directionLabels: Record<string, string> = {
        programming: 'Программирование',
        robotics: 'Робототехника',
        gamedev: 'Создание игр',
        web: 'Веб-разработка / Python',
      };

      const branchLabels: Record<string, string> = {
        marino: 'Марьино (Марьинский бульвар, 4)',
        kuzminki: 'Кузьминки (Волгоградский проспект, 86к1)',
        zhulebino: 'Жулебино (3-е почтовое отделение, 82)',
        preobrazhenskaya: 'Преображенская площадь (Зельев переулок, 3)',
        online: 'Онлайн-класс',
      };

      const selectedDirection = directionLabels[direction] || direction;
      const selectedBranch = branchLabels[branch] || branch;
      const fullMessage = `Формат: ${format === 'offline' ? 'Офлайн' : 'Онлайн'}; Направление: ${selectedDirection}; Филиал: ${selectedBranch}`;

      const res = await submitLead({
        name: name.trim(),
        phone: phone.trim(),
        message: fullMessage,
        consent: true,
        honeypot,
      });

      if (res.success) {
        setIsSuccess(true);
      } else {
        setError(res.error || 'Произошла ошибка при отправке заявки');
      }
    } catch {
      setError('Сетевая ошибка. Пожалуйста, попробуйте позже.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-fade-in"
      onClick={handleClose}
    >
      <div
        className="relative w-full max-w-4xl bg-white rounded-[28px] shadow-2xl overflow-hidden border border-gray-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Декоративные зеленые формы */}
        <div
          aria-hidden="true"
          className="absolute -top-16 -right-16 w-56 h-56 rounded-full bg-[#00B18F] pointer-events-none"
        />
        <div
          aria-hidden="true"
          className="absolute -bottom-14 -right-14 w-32 h-32 rounded-full bg-[#00B18F] pointer-events-none"
        />

        {/* Кнопка закрытия */}
        <button
          type="button"
          onClick={handleClose}
          className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-white/20 hover:bg-white/40 text-white flex items-center justify-center transition-colors cursor-pointer focus:outline-none"
          aria-label="Закрыть модальное окно"
        >
          <X size={18} />
        </button>

        <div className="relative z-10 p-6 sm:p-8 md:p-10">
          {isSuccess ? (
            <div className="py-8 sm:py-12 text-center max-w-lg mx-auto">
              <div className="w-16 h-16 bg-[#00B18F]/10 text-[#00B18F] rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 size={36} />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                Заявка успешно отправлена!
              </h3>
              <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                Наш методист свяжется с вами в течение 15 минут для подтверждения записи на
                бесплатное пробное занятие.
              </p>
              <button
                type="button"
                onClick={handleClose}
                className="bg-[#00B18F] hover:bg-[#00997A] text-white font-medium px-8 py-3 rounded-xl transition-colors cursor-pointer"
              >
                Отлично
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              {/* Левая колонка: форма */}
              <div className="md:col-span-7">
                <h2
                  id={titleId}
                  className="text-xl sm:text-2xl font-extrabold text-gray-900 leading-snug"
                >
                  Успешное будущее вашего ребенка
                  <span className="block text-[#111827]">можно запрограммировать сегодня!</span>
                </h2>
                <p className="text-xs sm:text-sm text-gray-500 mt-2 mb-5 leading-relaxed">
                  Оставьте заявку на Бесплатное пробное занятие. Наш менеджер свяжется с Вами в
                  ближайшее время!
                </p>

                {error && (
                  <div
                    role="alert"
                    className="mb-4 p-3 bg-red-50 border border-red-200 rounded-xl text-red-700 text-xs sm:text-sm flex items-start gap-2"
                  >
                    <AlertCircle size={16} className="shrink-0 mt-0.5" />
                    <span>{error}</span>
                  </div>
                )}

                <form onSubmit={handleSubmit} noValidate className="space-y-3.5">
                  {/* Honeypot поле для защиты от спама */}
                  <input
                    type="text"
                    name="honeypot"
                    value={honeypot}
                    onChange={(e) => setHoneypot(e.target.value)}
                    tabIndex={-1}
                    autoComplete="off"
                    aria-hidden="true"
                    style={{ position: 'absolute', opacity: 0, pointerEvents: 'none' }}
                  />

                  {/* Имя */}
                  <div>
                    <label
                      htmlFor="popup-name"
                      className="block text-xs sm:text-sm font-medium text-gray-700 mb-1"
                    >
                      Как вас зовут?
                    </label>
                    <input
                      id="popup-name"
                      type="text"
                      autoComplete="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Введите ваше имя"
                      className="w-full px-3.5 py-2.5 sm:py-3 bg-white border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#00B18F] focus:border-transparent transition-all"
                    />
                  </div>

                  {/* Телефон */}
                  <div>
                    <label
                      htmlFor="popup-phone"
                      className="block text-xs sm:text-sm font-medium text-gray-700 mb-1"
                    >
                      Номер телефона
                    </label>
                    <InputMask
                      id="popup-phone"
                      mask="+_ (___) ___-__-__"
                      replacement={{ _: /\d/ }}
                      autoComplete="tel"
                      inputMode="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+7 (___) ___-__-__"
                      className="w-full px-3.5 py-2.5 sm:py-3 bg-white border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#00B18F] focus:border-transparent transition-all"
                    />
                  </div>

                  {/* Формат обучения */}
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                      Формат обучения
                    </label>
                    <div className="grid grid-cols-2 gap-2.5">
                      <button
                        type="button"
                        onClick={() => setFormat('offline')}
                        className={`py-2.5 px-3 rounded-xl text-sm font-semibold transition-all border cursor-pointer ${
                          format === 'offline'
                            ? 'border-[#00B18F] text-[#00B18F] bg-[#00B18F]/5 shadow-sm'
                            : 'border-gray-200 text-gray-600 hover:border-gray-300'
                        }`}
                      >
                        Офлайн
                      </button>
                      <button
                        type="button"
                        onClick={() => setFormat('online')}
                        className={`py-2.5 px-3 rounded-xl text-sm font-semibold transition-all border cursor-pointer ${
                          format === 'online'
                            ? 'border-[#00B18F] text-[#00B18F] bg-[#00B18F]/5 shadow-sm'
                            : 'border-gray-200 text-gray-600 hover:border-gray-300'
                        }`}
                      >
                        Онлайн
                      </button>
                    </div>
                  </div>

                  {/* Направление */}
                  <div>
                    <label
                      htmlFor="popup-direction"
                      className="block text-xs sm:text-sm font-medium text-gray-700 mb-1"
                    >
                      Направление
                    </label>
                    <div className="relative">
                      <select
                        id="popup-direction"
                        value={direction}
                        onChange={(e) => setDirection(e.target.value)}
                        className="w-full px-3.5 py-2.5 sm:py-3 bg-white border border-gray-200 rounded-xl text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#00B18F] focus:border-transparent transition-all appearance-none pr-10 cursor-pointer"
                      >
                        <option value="programming">Программирование</option>
                        <option value="robotics">Робототехника</option>
                        <option value="gamedev">Создание игр</option>
                        <option value="web">Веб-разработка / Python</option>
                      </select>
                      <ChevronDown
                        size={16}
                        className="absolute right-3.5 top-3.5 text-gray-400 pointer-events-none"
                      />
                    </div>
                  </div>

                  {/* Филиал */}
                  <div>
                    <label
                      htmlFor="popup-branch"
                      className="block text-xs sm:text-sm font-medium text-gray-700 mb-1"
                    >
                      Филиал
                    </label>
                    <div className="relative">
                      <select
                        id="popup-branch"
                        value={branch}
                        onChange={(e) => setBranch(e.target.value)}
                        className="w-full px-3.5 py-2.5 sm:py-3 bg-white border border-gray-200 rounded-xl text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#00B18F] focus:border-transparent transition-all appearance-none pr-10 cursor-pointer"
                      >
                        <option value="marino">Марьино (Марьинский бульвар, 4)</option>
                        <option value="kuzminki">Кузьминки (Волгоградский проспект, 86к1)</option>
                        <option value="zhulebino">Жулебино (3-е почтовое отделение, 82)</option>
                        <option value="preobrazhenskaya">
                          Преображенская площадь (Зельев переулок, 3)
                        </option>
                        <option value="online">Онлайн-класс</option>
                      </select>
                      <ChevronDown
                        size={16}
                        className="absolute right-3.5 top-3.5 text-gray-400 pointer-events-none"
                      />
                    </div>
                  </div>

                  {/* Кнопка отправки */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full mt-2 bg-[#00B18F] hover:bg-[#00997A] text-white font-semibold py-3 sm:py-3.5 px-6 rounded-xl transition-all shadow-md shadow-[#00B18F]/20 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <span className="inline-block animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent" />
                    ) : (
                      <>
                        <Send size={18} className="rotate-[-10deg]" />
                        <span>Оставить заявку</span>
                      </>
                    )}
                  </button>

                  <p className="text-[11px] sm:text-xs text-gray-400 mt-2 text-center sm:text-left leading-relaxed">
                    Нажимая кнопку, вы соглашаетесь с{' '}
                    <Link
                      href="/privacy"
                      onClick={handleClose}
                      className="underline hover:text-gray-600 cursor-pointer"
                    >
                      политикой обработки персональных данных
                    </Link>
                  </p>
                </form>
              </div>

              {/* Правая колонка: Маскот */}
              <div className="hidden md:flex flex-col items-center justify-center relative pl-2 select-none pointer-events-none">
                <Image
                  src="/images/popup/koala.webp"
                  alt="Маскот школы программирования «Айтишкино»"
                  width={395}
                  height={356}
                  priority
                  className="max-w-full h-auto drop-shadow-sm select-none"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
