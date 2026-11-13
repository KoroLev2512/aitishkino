import { ReactNode } from 'react';
import { Header } from '../common/Header/Header';
import { ConsultationPopup } from '../ui/ConsultationPopup/ConsultationPopup';
import styles from './PageLayout.module.css';

type PageLayoutProps = {
  children: ReactNode;
};

export const PageLayout = ({ children }: PageLayoutProps) => {
  return (
    <div className={styles.pageContainer}>
      <a href="#main-content" className={styles.skipLink}>
        Перейти к основному содержимому
      </a>
      <Header />
      <main id="main-content" className={styles.mainContent}>
        {children}
      </main>
      <ConsultationPopup delayMs={60000} />
    </div>
  );
};
