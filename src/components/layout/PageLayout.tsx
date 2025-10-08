import { ReactNode } from 'react';
import { Header } from '../common/Header/Header';
import styles from './PageLayout.module.css';
import FloatingWidget from '../common/FloatingWidget/FloatingWidget';

type PageLayoutProps = {
  children: ReactNode;
};

export const PageLayout = ({ children }: PageLayoutProps) => {
  return (
    <div className={styles.pageContainer}>
      <Header />
      <main className={styles.mainContent}>
        {children}
      </main>
      <FloatingWidget
        phone={"+7 495 123 35 85"}
        whatsapp={"79934846761"}
        telegram={"itishkino_school"}
        vk={"itishkino_school"}
      />
    </div>
  );
}
