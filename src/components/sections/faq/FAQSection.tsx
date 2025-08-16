'use client';

import { useState } from 'react';
import FAQItem from '@/components/ui/FAQItem/FAQItem';
import styles from './FAQSection.module.css';

interface FAQItemType {
  id: number;
  question: string;
  answer: string;
}

const faqData: FAQItemType[] = [
  {
    id: 1,
    question: 'Как проходит обучение на индивидуальных занятиях?',
    answer: 'Обучение проходит в формате видео-лекций на нашей интерактивной платформе. После приобретения курса, вы сразу же получаете письмо на почту с доступом в личный кабинет, в котором уже открыты все уроки приобретенного курса.\n\nКаждый урок состоит из видео-лекции по теме и нескольких десятков интерактивных заданий на отработку материала.'
  },
  {
    id: 2,
    question: 'Как проходят индивидуальные консультации?',
    answer: 'Обучение проходит в индивидуальном формате с персональным преподавателем. Занятия проводятся онлайн в удобное для вас время.'
  },
  {
    id: 3,
    question: 'Как строится программа обучения?',
    answer: 'Программа адаптируется под ваш уровень знаний и цели. Преподаватель работает только с вами, уделяя максимальное внимание вашим вопросам.'
  },
  {
    id: 4,
    question: 'Какой формат обратной связи?',
    answer: 'Вы получаете персональную обратную связь по каждому заданию и можете задавать вопросы в режиме реального времени.'
  },
  {
    id: 5,
    question: 'Какова продолжительность обучения?',
    answer: 'Длительность и интенсивность занятий определяется индивидуально в зависимости от ваших потребностей и графика.'
  },
  {
    id: 6,
    question: 'Будут ли доступны материалы после окончания курса?',
    answer: 'Все материалы и записи занятий остаются у вас для повторного изучения. Доступ к материалам предоставляется навсегда.'
  }
];

export const FAQSection = () => {
  const [openItemId, setOpenItemId] = useState<number | null>(null);

  const toggleItem = (id: number) => {
    setOpenItemId(prevId => prevId === id ? null : id);
  };

  return (
    <section className={styles.faqSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Часто задаваемые вопросы</h2>
          <p className={styles.subtitle}>Здесь вы найдёте ответы на самые популярные вопросы о нашем обучении</p>
        </div>

        <div className={styles.faqList}>
          {faqData.map((item) => (
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

export default FAQSection;
