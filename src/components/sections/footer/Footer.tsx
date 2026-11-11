import Image from 'next/image';
import { Phone, Mail, MapPin, Clock, MessageSquare, Send, Youtube } from 'lucide-react';
import styles from './Footer.module.css';
import { siteConfig } from '@/config/site';

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
                alt={siteConfig.name}
                width={180}
                height={40}
                className={styles.logoImage}
                style={{ filter: 'brightness(0) invert(1)' }}
              />
            </div>
            <p className={styles.description}>{siteConfig.description}</p>
          </div>

          {/* Contact Info */}
          <div className={styles.contactColumn}>
            <h3 className="text-lg font-bold mb-4 text-white">Контакты</h3>
            <ul className={styles.contactList}>
              <li className={styles.contactItem}>
                <Phone className={styles.contactIcon} size={20} />
                <a href={`tel:${siteConfig.contacts.phoneRaw}`}>{siteConfig.contacts.phone}</a>
              </li>
              <li className={styles.contactItem}>
                <Mail className={styles.contactIcon} size={20} />
                <a href={`mailto:${siteConfig.contacts.email}`}>{siteConfig.contacts.email}</a>
              </li>
              <li className={styles.contactItem}>
                <MapPin className={styles.contactIcon} size={20} />
                <span>{siteConfig.contacts.address}</span>
              </li>
              <li className={styles.contactItem}>
                <Clock className={styles.contactIcon} size={20} />
                <span>
                  {siteConfig.contacts.hoursWeekday}
                  <br />
                  {siteConfig.contacts.hoursWeekend}
                </span>
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
                style={{ border: 0 }}
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
            © {new Date().getFullYear()} {siteConfig.name}. Все права защищены.
          </div>
          <div className={styles.socialLinks}>
            <a
              href={siteConfig.social.vk}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label="Мы ВКонтакте"
            >
              <MessageSquare size={20} />
            </a>
            <a
              href={siteConfig.social.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label="Наш Telegram канал"
            >
              <Send size={20} />
            </a>
            <a
              href={siteConfig.social.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label="Наш YouTube канал"
            >
              <Youtube size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
