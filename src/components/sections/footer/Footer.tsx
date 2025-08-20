import Image from 'next/image';
import { Phone, Mail, MapPin, Clock, MessageSquare, Send, Youtube } from 'lucide-react';
import styles from './Footer.module.css';

export const Footer = () => {
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




