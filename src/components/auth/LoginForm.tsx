'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { InputMask } from '@react-input/mask';
import {
  Phone,
  Eye,
  EyeOff,
  User,
  GraduationCap,
  Users,
  Sparkles,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
} from 'lucide-react';
import { siteConfig } from '@/config/site';

type UserRole = 'student' | 'parent';
type AuthMethod = 'phone' | 'password';

export const LoginForm: React.FC = () => {
  const [role, setRole] = useState<UserRole>('student');
  const [method, setMethod] = useState<AuthMethod>('phone');

  // Phone auth state
  const [phone, setPhone] = useState('');
  const [smsCode, setSmsCode] = useState('');
  const [isCodeSent, setIsCodeSent] = useState(false);
  const [countdown, setCountdown] = useState(0);

  // Password auth state
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);

  // Submission state
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  // Send SMS code handler
  const handleSendCode = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    const rawPhone = phone.replace(/\D/g, '');
    if (rawPhone.length < 11) {
      setError('Пожалуйста, введите полный номер телефона');
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsCodeSent(true);
      setCountdown(60);

      // Countdown timer
      const interval = setInterval(() => {
        setCountdown((prev) => {
          if (prev <= 1) {
            clearInterval(interval);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }, 600);
  };

  // Login handler
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (method === 'phone') {
      if (smsCode.trim().length !== 4) {
        setError('Пожалуйста, введите 4-значный код из SMS');
        return;
      }
    } else {
      if (!identifier.trim()) {
        setError('Пожалуйста, введите логин, email или номер телефона');
        return;
      }
      if (password.length < 4) {
        setError('Пароль должен содержать не менее 4 символов');
        return;
      }
    }

    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      setSuccess(true);
    }, 800);
  };

  return (
    <div className="w-full max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      {/* Левая колонка: форма входа */}
      <div className="lg:col-span-7 bg-white rounded-2xl shadow-xl shadow-gray-100 border border-gray-100 p-6 sm:p-8">
        {/* Заголовок */}
        <div className="mb-6 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00B18F]/10 text-[#00B18F] text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles size={14} />
            <span>Личный кабинет</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
            Вход на платформу
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            Доступ к урокам, проектам и магазину наград «Айтишкино»
          </p>
        </div>

        {/* Выбор роли: Ученик / Родитель */}
        <div className="mb-6">
          <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
            Кто входит:
          </label>
          <div className="grid grid-cols-2 gap-2 p-1 bg-gray-100 rounded-xl">
            <button
              type="button"
              onClick={() => {
                setRole('student');
                setError(null);
              }}
              className={`flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg text-sm font-semibold transition-all cursor-pointer ${
                role === 'student'
                  ? 'bg-white text-gray-900 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <GraduationCap size={18} className={role === 'student' ? 'text-[#00B18F]' : ''} />
              <span>Я ученик</span>
            </button>
            <button
              type="button"
              onClick={() => {
                setRole('parent');
                setError(null);
              }}
              className={`flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg text-sm font-semibold transition-all cursor-pointer ${
                role === 'parent'
                  ? 'bg-white text-gray-900 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <Users size={18} className={role === 'parent' ? 'text-[#00B18F]' : ''} />
              <span>Я родитель</span>
            </button>
          </div>
        </div>

        {/* Переключатель способа входа */}
        <div className="flex border-b border-gray-100 mb-6">
          <button
            type="button"
            onClick={() => {
              setMethod('phone');
              setError(null);
            }}
            className={`flex-1 pb-3 text-sm font-semibold border-b-2 transition-colors cursor-pointer ${
              method === 'phone'
                ? 'border-[#00B18F] text-[#00B18F]'
                : 'border-transparent text-gray-500 hover:text-gray-800'
            }`}
          >
            По номеру телефона
          </button>
          <button
            type="button"
            onClick={() => {
              setMethod('password');
              setError(null);
            }}
            className={`flex-1 pb-3 text-sm font-semibold border-b-2 transition-colors cursor-pointer ${
              method === 'password'
                ? 'border-[#00B18F] text-[#00B18F]'
                : 'border-transparent text-gray-500 hover:text-gray-800'
            }`}
          >
            По паролю
          </button>
        </div>

        {/* Сообщение об ошибке */}
        {error && (
          <div
            className="mb-5 p-3.5 bg-red-50 border border-red-200 rounded-xl text-red-700 text-sm flex items-start gap-2.5"
            role="alert"
          >
            <AlertCircle size={18} className="shrink-0 mt-0.5" />
            <span>{error}</span>
          </div>
        )}

        {/* Экран успеха (демо-вход) */}
        {success ? (
          <div className="py-8 text-center">
            <div className="w-16 h-16 bg-[#00B18F]/10 text-[#00B18F] rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 size={36} />
            </div>
            <h2 className="text-xl font-bold text-gray-900 mb-2">Успешная авторизация!</h2>
            <p className="text-sm text-gray-600 max-w-sm mx-auto mb-6">
              Добро пожаловать в образовательную платформу «Айтишкино»,{' '}
              {role === 'student' ? 'ученик' : 'родитель'}!
            </p>
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 bg-[#00B18F] hover:bg-[#00997A] text-white font-medium px-6 py-3 rounded-xl transition-colors cursor-pointer"
            >
              <span>Вернуться на главную</span>
            </Link>
          </div>
        ) : (
          /* Форма авторизации */
          <form
            onSubmit={method === 'phone' && !isCodeSent ? handleSendCode : handleSubmit}
            noValidate
          >
            {method === 'phone' ? (
              /* Вход по SMS */
              <div className="space-y-4">
                <div>
                  <label
                    htmlFor="login-phone"
                    className="block text-sm font-semibold text-gray-800 mb-1.5"
                  >
                    Номер телефона
                  </label>
                  <div className="relative">
                    <InputMask
                      id="login-phone"
                      mask="+_ (___) ___-__-__"
                      replacement={{ _: /\d/ }}
                      autoComplete="tel"
                      inputMode="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+7 (___) ___-__-__"
                      disabled={isCodeSent && countdown > 0}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#00B18F] focus:border-transparent transition-all"
                    />
                    <Phone
                      className="absolute right-4 top-3.5 text-gray-400 pointer-events-none"
                      size={18}
                    />
                  </div>
                  <p className="text-xs text-gray-500 mt-1.5">
                    На этот номер будет отправлено SMS с кодом подтверждения
                  </p>
                </div>

                {isCodeSent && (
                  <div>
                    <label
                      htmlFor="login-code"
                      className="block text-sm font-semibold text-gray-800 mb-1.5"
                    >
                      Код из SMS
                    </label>
                    <input
                      id="login-code"
                      type="text"
                      inputMode="numeric"
                      maxLength={4}
                      value={smsCode}
                      onChange={(e) => setSmsCode(e.target.value.replace(/\D/g, ''))}
                      placeholder="••••"
                      autoFocus
                      className="w-full text-center tracking-widest text-2xl font-bold px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-300 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#00B18F] focus:border-transparent transition-all"
                    />
                    <div className="flex items-center justify-between text-xs mt-2 text-gray-500">
                      <span>Код отправлен на номер {phone}</span>
                      {countdown > 0 ? (
                        <span>Повторно через {countdown} сек</span>
                      ) : (
                        <button
                          type="button"
                          onClick={handleSendCode}
                          className="text-[#00B18F] font-semibold hover:underline cursor-pointer"
                        >
                          Отправить ещё раз
                        </button>
                      )}
                    </div>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full mt-4 bg-[#00B18F] hover:bg-[#00997A] text-white font-semibold py-3.5 px-6 rounded-xl transition-all shadow-md shadow-[#00B18F]/20 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <span className="inline-block animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent" />
                  ) : isCodeSent ? (
                    <span>Войти в личный кабинет</span>
                  ) : (
                    <span>Получить код по SMS</span>
                  )}
                </button>
              </div>
            ) : (
              /* Вход по паролю */
              <div className="space-y-4">
                <div>
                  <label
                    htmlFor="login-identifier"
                    className="block text-sm font-semibold text-gray-800 mb-1.5"
                  >
                    Логин, телефон или email
                  </label>
                  <div className="relative">
                    <input
                      id="login-identifier"
                      type="text"
                      autoComplete="username"
                      value={identifier}
                      onChange={(e) => setIdentifier(e.target.value)}
                      placeholder="ivan@example.com или +7 999 123-45-67"
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#00B18F] focus:border-transparent transition-all"
                    />
                    <User
                      className="absolute right-4 top-3.5 text-gray-400 pointer-events-none"
                      size={18}
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label htmlFor="login-password" className="text-sm font-semibold text-gray-800">
                      Пароль
                    </label>
                    <a
                      href={`tel:${siteConfig.contacts.phoneRaw}`}
                      className="text-xs text-[#00B18F] hover:underline font-medium cursor-pointer"
                    >
                      Забыли пароль?
                    </a>
                  </div>
                  <div className="relative">
                    <input
                      id="login-password"
                      type={showPassword ? 'text' : 'password'}
                      autoComplete="current-password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Введите пароль"
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#00B18F] focus:border-transparent transition-all pr-12"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-3.5 text-gray-400 hover:text-gray-600 focus:outline-none cursor-pointer"
                      aria-label={showPassword ? 'Скрыть пароль' : 'Показать пароль'}
                    >
                      {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-1">
                  <label className="flex items-center gap-2 cursor-pointer text-sm text-gray-600">
                    <input
                      type="checkbox"
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                      className="w-4 h-4 rounded border-gray-300 text-[#00B18F] focus:ring-[#00B18F] cursor-pointer"
                    />
                    <span>Запомнить меня</span>
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full mt-4 bg-[#00B18F] hover:bg-[#00997A] text-white font-semibold py-3.5 px-6 rounded-xl transition-all shadow-md shadow-[#00B18F]/20 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <span className="inline-block animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent" />
                  ) : (
                    <span>Войти</span>
                  )}
                </button>
              </div>
            )}
          </form>
        )}

        {/* Ссылка на регистрацию / запись на пробный урок */}
        <div className="mt-8 pt-6 border-t border-gray-100 text-center">
          <p className="text-sm text-gray-600 mb-2">Ещё не учитесь в «Айтишкино»?</p>
          <Link
            href="/#application-form"
            className="inline-flex items-center gap-1.5 text-sm font-bold text-[#00B18F] hover:underline cursor-pointer"
          >
            <span>Записаться на бесплатный пробный урок</span>
          </Link>
        </div>
      </div>

      {/* Правая колонка: Информация о платформе и поддержка */}
      <div className="lg:col-span-5 space-y-6">
        {/* Карточка возможностей платформы */}
        <div className="bg-gradient-to-br from-[#00B18F]/10 via-[#00B18F]/5 to-transparent rounded-2xl border border-[#00B18F]/20 p-6 sm:p-7">
          <h2 className="text-lg font-bold text-gray-900 mb-4">Возможности личного кабинета</h2>
          <ul className="space-y-3.5 text-sm text-gray-700">
            <li className="flex items-start gap-3">
              <div className="w-5 h-5 rounded-full bg-[#00B18F]/20 text-[#00B18F] flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">
                ✓
              </div>
              <span>
                <strong>Интерактивный класс:</strong> видеосвязь с преподавателем, трансляция кода и
                материалов.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-5 h-5 rounded-full bg-[#00B18F]/20 text-[#00B18F] flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">
                ✓
              </div>
              <span>
                <strong>Проекты и ДЗ:</strong> домашние задания по Scratch, Python и робототехнике в
                одном месте.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-5 h-5 rounded-full bg-[#00B18F]/20 text-[#00B18F] flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">
                ✓
              </div>
              <span>
                <strong>Айтишоп:</strong> накопление айтикоинов за успехи и обмен на крутой мерч и
                гаджеты.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-5 h-5 rounded-full bg-[#00B18F]/20 text-[#00B18F] flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">
                ✓
              </div>
              <span>
                <strong>Контроль для родителей:</strong> расписание, отчёты методиста и прогресс
                ребёнка.
              </span>
            </li>
          </ul>
        </div>

        {/* Блок поддержки */}
        <div className="bg-white rounded-2xl border border-gray-200 p-6">
          <h3 className="text-base font-bold text-gray-900 mb-2 flex items-center gap-2">
            <HelpCircle className="text-gray-400" size={18} />
            <span>Нужна помощь со входом?</span>
          </h3>
          <p className="text-xs text-gray-500 mb-4 leading-relaxed">
            Если вы забыли логин или не приходит SMS-код, наш методист поможет восстановить доступ
            за пару минут.
          </p>
          <div className="space-y-2 text-sm">
            <div className="flex items-center gap-2 text-gray-700">
              <Phone size={16} className="text-[#00B18F]" />
              <a
                href={`tel:${siteConfig.contacts.phoneRaw}`}
                className="font-semibold hover:text-[#00B18F] transition-colors cursor-pointer"
              >
                {siteConfig.contacts.phone}
              </a>
            </div>
            <div className="text-xs text-gray-500">Ежедневно с 10:00 до 20:00 (МСК)</div>
          </div>
        </div>
      </div>
    </div>
  );
};
