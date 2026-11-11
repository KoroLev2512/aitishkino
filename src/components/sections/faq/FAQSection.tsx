'use client';

import { useState } from 'react';
import { FAQItem } from '@/components/ui/FAQItem/FAQItem';
import styles from './FAQSection.module.css';
import { FAQ_ITEMS } from '@/content/faq';

export const FAQSection = () => {
  const [openItemId, setOpenItemId] = useState<number | null>(null);

  const toggleItem = (id: number) => {
    setOpenItemId((prevId) => (prevId === id ? null : id));
  };

  return (
    <section className={styles.faqSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Часто задаваемые вопросы</h2>
          <p className={styles.subtitle}>
            Здесь вы найдёте ответы на самые популярные вопросы о нашем обучении
          </p>
        </div>

        <div className={styles.faqList}>
          {FAQ_ITEMS.map((item) => (
            <FAQItem
              key={item.id}
              question={item.question}
              answer={item.answer}
              isOpen={openItemId === item.id}
              onClick={() => toggleItem(item.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
