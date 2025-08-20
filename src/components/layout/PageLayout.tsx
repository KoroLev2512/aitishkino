import { ReactNode } from 'react';
import { Header } from '../common/Header/Header';
import styles from './PageLayout.module.css';

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
    </div>
  );
}
