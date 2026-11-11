'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Header.module.css';
import { siteConfig } from '@/config/site';

const navigation = [
  { name: 'Курсы', href: '/#courses' },
  { name: 'Почему выбирают нас?', href: '/#why-us' },
  { name: 'Проекты учеников', href: '/#projects' },
  { name: 'Контакты', href: '/#contacts' },
];

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  const handleRecordClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const form = document.getElementById('application-form');
    if (form) {
      const yOffset = -80;
      const y = form.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({
        top: y,
        behavior: 'smooth',
      });

      const firstInput = form.querySelector('input, textarea, select') as HTMLInputElement | null;
      if (firstInput) {
        const focusInput = () => {
          firstInput.focus({
            preventScroll: true,
          });
        };

        const focusTimer = setTimeout(focusInput, 800);

        const onScroll = () => {
          if (
            (window.pageYOffset >= y - 10 && window.pageYOffset <= y + 10) ||
            window.innerHeight + window.pageYOffset >= document.body.offsetHeight - 2
          ) {
            window.removeEventListener('scroll', onScroll);
            clearTimeout(focusTimer);
            focusInput();
          }
        };

        setTimeout(() => {
          window.addEventListener('scroll', onScroll, { once: true });
        }, 100);
      }
    } else {
      window.location.href = '/#application-form';
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  useEffect(() => {
    if (!isMenuOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isMenuOpen]);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <nav className={styles.nav}>
          {/* Логотип */}
          <Link href="/" className={styles.logo} onClick={closeMenu}>
            <Image
              src="/images/logo/logo.png"
              alt={siteConfig.name}
              width={160}
              height={36}
              priority
              className={styles.logoImage}
            />
          </Link>

          {/* Навигация для десктопа */}
          <div className={styles.desktopNav}>
            {navigation.map((item) => (
              <Link key={item.name} href={item.href} className={styles.navLink} onClick={closeMenu}>
                {item.name}
              </Link>
            ))}

            <a href={`tel:${siteConfig.contacts.phoneRaw}`} className={styles.phoneLink}>
              {siteConfig.contacts.phone}
            </a>
          </div>

          {/* Кнопки */}
          <div className={styles.buttonsContainer}>
            <button
              className={styles.recordButton}
              onClick={(e) => {
                closeMenu();
                handleRecordClick(e);
              }}
            >
              Запись
            </button>
            <button className={styles.loginButton} type="button">
              Войти
            </button>
          </div>

          {/* Кнопка мобильного меню */}
          <button
            type="button"
            className={styles.menuButton}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Закрыть меню' : 'Открыть меню'}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            <span className={`${styles.menuIcon} ${isMenuOpen ? styles.menuIconOpen : ''}`}>
              <span></span>
              <span></span>
              <span></span>
            </span>
          </button>
        </nav>
      </div>

      {/* Мобильное меню */}
      {isMenuOpen && (
        <div id="mobile-menu" className={styles.mobileMenu}>
          <div className={styles.mobileMenuContent}>
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={styles.mobileNavLink}
                onClick={closeMenu}
              >
                {item.name}
              </Link>
            ))}
            <a href={`tel:${siteConfig.contacts.phoneRaw}`} className={styles.mobilePhoneLink}>
              {siteConfig.contacts.phone}
            </a>
            <div className={styles.mobileButtons}>
              <button
                className={styles.mobileRecordButton}
                onClick={(e) => {
                  closeMenu();
                  handleRecordClick(e);
                }}
              >
                Запись
              </button>
              <button className={styles.mobileLoginButton} type="button">
                Войти
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
