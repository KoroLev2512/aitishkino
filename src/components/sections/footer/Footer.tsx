import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin, Clock, MessageSquare, Send, Youtube } from 'lucide-react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Logo and Description */}
          <div className={styles.logoColumn}>
            <div className={styles.logo}>
              <Image 
                src="/images/logo/logo.png" 
                alt="Айтишкино" 
                width={180} 
                height={40} 
                className={styles.logoImage}
                style={{ filter: 'brightness(0) invert(1)' }}
              />
            </div>
            <p className={styles.description}>
              Современная IT-школа для детей и подростков, где каждый может раскрыть свой потенциал в мире технологий.
            </p>
          </div>

          {/* Contact Info */}
          <div className={styles.contactColumn}>
            <h3>Контакты</h3>
            <ul className={styles.contactList}>
              <li className={styles.contactItem}>
                <Phone className={styles.contactIcon} size={20} />
                <a href="tel:+79991234567">+7 (999) 123-45-67</a>
              </li>
              <li className={styles.contactItem}>
                <Mail className={styles.contactIcon} size={20} />
                <a href="mailto:info@itishkino.ru">info@itishkino.ru</a>
              </li>
              <li className={styles.contactItem}>
                <MapPin className={styles.contactIcon} size={20} />
                г. Москва, ул. Примерная, д. 123, офис 45
              </li>
              <li className={styles.contactItem}>
                <Clock className={styles.contactIcon} size={20} />
                Пн-Пт: 10:00 - 20:00<br />Сб-Вс: 10:00 - 18:00
              </li>
            </ul>
          </div>

          {/* Map */}
          <div className={styles.mapColumn}>
            <div className={styles.mapContainer}>
              <iframe 
                src="https://yandex.ru/map-widget/v1/?um=constructor%3A1234567890abcdef" 
                width="100%" 
                height="100%" 
                frameBorder="0" 
                style={{border: 0}}
                allowFullScreen
                aria-hidden="false"
                tabIndex={0}
                title="Наш офис на карте"
              />
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={styles.bottomBar}>
          <div className={styles.copyright}>
            © {new Date().getFullYear()} Айтишкино. Все права защищены.
          </div>
          <div className={styles.socialLinks}>
            <a href="https://vk.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
              <MessageSquare size={20} />
            </a>
            <a href="https://t.me" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
              <Send size={20} />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
              <Youtube size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Icons
const PhoneIcon = ({ className = '' }) => (
  <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M22 16.92V19.92C22.0001 20.198 21.9094 20.469 21.7423 20.6908C21.5752 20.9126 21.3409 21.0734 21.077 21.148C20.44 21.325 10.06 21.325 9 21.1C4.908 20.523 1.477 17.093 0.9 13C0.674 11.94 0.674 1.56 0.852 0.923C0.92664 0.659129 1.08742 0.42483 1.3092 0.257722C1.53099 0.090614 1.80201 0 2.08 0H5.08C5.482 0 5.834 0.273 5.958 0.66C6.25 1.7 6.7 3.38 6.7 3.38C6.755 3.596 6.721 3.826 6.607 4.018C6.492 4.21 6.306 4.35 6.091 4.405L3.6 5.06C5.32 9.1 8.9 12.68 12.94 14.4L13.595 11.909C13.65 11.694 13.79 11.508 13.982 11.393C14.174 11.279 14.404 11.245 14.62 11.3C14.62 11.3 16.3 11.75 17.34 12.042C17.727 12.166 18 12.518 18 12.92V15.92C18 16.47 17.55 16.92 17 16.92H14.92C12.43 16.92 7.57 16.92 5.08 16.92H2.08C1.80201 16.92 1.53099 16.8294 1.3092 16.6623C1.08742 16.4952 0.92664 16.2609 0.852 15.997C0.674 15.36 0.674 4.98 0.9 3.92C1.477 -0.172 4.908 -3.6 9 -4.18C10.06 -4.406 20.44 -4.406 21.077 -4.228C21.3409 -4.15336 21.5752 -3.99258 21.7423 -3.7708C21.9094 -3.54901 22.0001 -3.27799 22 -3V0C22 -0.552 21.552 -1 21 -1H18C17.448 -1 17 -0.552 17 0V3C17 3.552 17.448 4 18 4H21C21.552 4 22 4.448 22 5V8C22 8.552 21.552 9 21 9H18C17.448 9 17 8.552 17 8V5C17 4.448 17.448 4 18 4Z" fill="currentColor"/>
  </svg>
);

const MailIcon = ({ className = '' }) => (
  <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z" fill="currentColor"/>
  </svg>
);

const MapPinIcon = ({ className = '' }) => (
  <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C8.13 2 5 5.13 5 9C5 13.17 9.42 18.92 11.24 21.11C11.64 21.59 12.37 21.59 12.77 21.11C14.58 18.92 19 13.17 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z" fill="currentColor"/>
  </svg>
);

const ClockIcon = ({ className = '' }) => (
  <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20Z" fill="currentColor"/>
    <path d="M12.5 7H11V13L16.25 16.15L17 14.92L12.5 12.25V7Z" fill="currentColor"/>
  </svg>
);

const VKIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M13.162 18.994c.609 0 .858-.406.851-.915-.031-1.917.714-2.949 2.059-1.604 1.488 1.633 1.874 2.509 3.041 2.509h3.461c1.587 0 2.225-.441 2.654-1.5.3-.75.6-2.25.6-3.75 0-1.5-.3-3-1.5-3 .3-1.5.3-3 0-4.5-.15-.75-.45-1.5-.9-2.1-.45-.6-1.2-.9-2.1-.9h-3.6c-.6 0-1.2.3-1.8.9-.6.6-1.2 1.2-1.8 1.8-.6.6-1.2 1.2-1.8 1.8-.6.6-1.2.6-1.8 0-.6-.6-1.2-1.2-1.8-1.8-.6-.6-1.2-1.2-1.8-1.8-.6-.6-1.2-.9-1.8-.9H3c-.75 0-1.35.3-1.8.9-.45.6-.6 1.35-.45 2.1.3 1.5.3 3 0 4.5-.3 1.5-.3 3 0 4.5.15.75.45 1.5.9 2.1.45.6 1.05.9 1.8.9h3.6c.6 0 1.2-.3 1.8-.9.6-.6 1.2-1.2 1.8-1.8.6-.6 1.2-1.2 1.8-1.8.6-.6 1.2-.6 1.8 0 .6.6 1.2 1.2 1.8 1.8.6.6 1.2 1.2 1.8 1.8.3.3.6.444.962.444z"/>
  </svg>
);

const TelegramIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM15.64 8.8C15.49 10.38 14.84 14.22 14.51 15.99C14.31 16.9 13.99 17.12 13.69 17.14C13.08 17.18 12.6 16.72 12.01 16.32C11.09 15.71 10.57 15.32 9.69 14.74C8.64 14.05 9.29 13.65 9.86 13.05C10.01 12.9 12.06 11.13 12.11 10.98C12.12 10.94 12.12 10.8 12.02 10.73C11.93 10.66 11.81 10.69 11.72 10.71C11.6 10.75 10.17 11.67 8.29 13.43C7.93 13.75 7.6 13.91 7.3 13.9C6.96 13.88 6.3 13.67 5.8 13.49C5.19 13.27 4.71 13.15 4.73 12.82C4.74 12.68 4.94 12.54 5.34 12.38C9.19 10.8 11.53 9.71 12.4 9.12C14.05 8.06 14.55 7.74 14.83 7.67C15.28 7.55 15.68 7.7 15.68 8.12C15.68 8.23 15.69 8.39 15.64 8.8Z"/>
  </svg>
);

const YouTubeIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M21.582 6.186C21.443 5.683 21.12 5.25 20.672 4.977C20.224 4.704 19.686 4.614 19.17 4.724C17.59 5.059 12 6.5 12 6.5C12 6.5 6.41 5.059 4.83 4.724C4.314 4.614 3.776 4.704 3.328 4.977C2.88 5.25 2.557 5.683 2.418 6.186C2 7.8 2 12 2 12C2 12 2 16.2 2.418 17.814C2.557 18.317 2.88 18.75 3.328 19.023C3.776 19.296 4.314 19.386 4.83 19.276C6.41 18.941 12 17.5 12 17.5C12 17.5 17.59 18.941 19.17 19.276C19.686 19.386 20.224 19.296 20.672 19.023C21.12 18.75 21.443 18.317 21.582 17.814C22 16.2 22 12 22 12C22 12 22 7.8 21.582 6.186ZM10 15.5V8.5L16 12L10 15.5Z"/>
  </svg>
);

export default Footer;
