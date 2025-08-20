import React from 'react';
import styles from './PlatformSection.module.css';
import { AdvItem } from '@/components/ui/AdvItem/AdvItem';
import { AdvantageIcon } from '@/components/ui/AdvantageIcons';
import Lottie from 'lottie-react';
import platformAnimation from '@/assets/animations/PlatformSection.json';

export const PlatformSection = () => {
  const platformFeatures = [
    {
      id: 'repeat',
      title: 'Повторяйте',
      description: 'Методические материалы и домашние задания по пройденным темам для закрепления знаний',
      icon: 'repeat',
      iconColor: 'text-blue-500'
    },
    {
      id: 'feedback',
      title: 'Обратная связь',
      description: 'Персональные комментарии преподавателей к каждой работе',
      icon: 'message-circle',
      iconColor: 'text-green-500'
    },
    {
      id: 'schedule',
      title: 'Расписание',
      description: 'Ближайшие занятия и школьные мероприятия',
      icon: 'calendar',
      iconColor: 'text-purple-500'
    },
    {
      id: 'progress',
      title: 'Прогресс',
      description: 'Наглядная статистика по пройденным модулям',
      icon: 'bar-chart-2',
      iconColor: 'text-orange-500'
    }
  ];

  return (
    <section className={styles.section} id="platform">
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.leftColumn}>
            <div className={styles.textContent}>
              <h2 className={styles.title}>
                Образовательная платформа
              </h2>
              <p className={styles.subtitle}>
                Платформа Айтишкино — это интерактивная образовательная
                среда, где всё под рукой:
              </p>
              <div className={styles.animationContainer}>
                <Lottie
                  animationData={platformAnimation}
                  loop={true}
                  autoplay={true}
                  className={styles.animation}
                  style={{ width: '100%', height: '100%' }}
                />
              </div>
            </div>
          </div>

          <div className={styles.rightColumn}>
            <div className={styles.grid}>
              {platformFeatures.map((feature) => (
                <div key={feature.id} className={styles.gridRow}>
                  <AdvItem
                    text={feature.title}
                    text1={feature.description}
                    icon={<AdvantageIcon type={feature.icon} className={`w-6 h-6 ${feature.iconColor}`} />}
                    iconColor={feature.iconColor}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


