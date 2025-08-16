import React, { useState } from 'react';
import styles from './CoursesSection.module.css';
import CourseCard from '@/components/ui/CourseCard/CourseCard';
import { ArrowRight } from 'lucide-react';

interface Course {
  title: string;
  age: string;
  modules: number;
  icon: React.ReactNode;
  modulesList: string[];
  outcomes: string[];
}

import { BrainCircuit, Gamepad2, Code, Cpu, Bot, Puzzle, CpuIcon, Brain, Globe, Smartphone, Cloud } from 'lucide-react';

// Иконки для курсов
const CourseIcons = {
  // Программирование
  digitalThinking: <BrainCircuit className="text-[#00B18F]" size={48} />,
  gameDev: <Gamepad2 className="text-[#00B18F]" size={48} />,
  webDev: <Globe className="text-[#00B18F]" size={48} />,
  
  // Робототехника
  roboticsBasic: <Puzzle className="text-[#00B18F]" size={48} />,
  roboticsAdvanced: <Bot className="text-[#00B18F]" size={48} />,
  iot: <Cpu className="text-[#00B18F]" size={48} />
};

// Данные о курсах
const COURSES = [
  {
    title: 'Фундамент цифрового',
    age: '6-8 лет',
    modules: 9,
    icon: CourseIcons.digitalThinking,
    modulesList: [
      'Введение в алгоритмы',
      'Основы логики',
      'Простые программы',
      'Игровые механики',
      'Создание анимаций',
      'Работа с графикой',
      'Основы веб-разработки',
      'Создание игр',
      'Финальный проект'
    ],
    outcomes: [
      'Понимание основ программирования',
      'Развитие логического мышления',
      'Навыки работы в команде',
      'Создание собственного проекта'
    ]
  },
  {
    title: 'Создание игр на Scratch',
    age: '8-10 лет',
    modules: 12,
    icon: CourseIcons.gameDev,
    modulesList: [
      'Основы программирования',
      'Работа с переменными',
      'Условные операторы',
      'Циклы',
      'Функции',
      'Списки и словари'
    ],
    outcomes: [
      'Научится писать чистый и структурированный код',
      'Поймет основы алгоритмического мышления',
      'Создаст свои первые программы'
    ]
  },
  {
    title: 'Веб-разработка',
    age: '10-14 лет',
    modules: 10,
    icon: CourseIcons.webDev,
    modulesList: [
      'Основы HTML/CSS',
      'Верстка макетов',
      'Основы JavaScript',
      'Адаптивный дизайн',
      'Работа с DOM'
    ],
    outcomes: [
      'Создаст свой первый сайт',
      'Научится верстать адаптивные макеты',
      'Познакомится с основами фронтенд-разработки'
    ]
  }
];

const ROBOTICS_COURSES: Course[] = [
  {
    title: 'Основы робототехники',
    age: '7-10 лет',
    modules: 12,
    icon: CourseIcons.roboticsBasic,
    modulesList: [
      'Знакомство с робототехникой',
      'Основы механики',
      'Сборка первых механизмов',
      'Программирование роботов',
      'Решение практических задач'
    ],
    outcomes: [
      'Поймет основы механики и кинематики',
      'Научится собирать простые механизмы',
      'Освоит базовые принципы программирования роботов'
    ]
  },
  {
    title: 'Продвинутая робототехника',
    age: '10-14 лет',
    modules: 16,
    icon: CourseIcons.roboticsAdvanced,
    modulesList: [
      'Сложные механизмы',
      'Датчики и сенсоры',
      'Программирование микроконтроллеров',
      'Автономные роботы',
      'Участие в соревнованиях'
    ],
    outcomes: [
      'Научится создавать сложные механизмы',
      'Освоит работу с различными датчиками',
      'Примет участие в робототехнических соревнованиях'
    ]
  },
  {
    title: 'Умные устройства и IoT',
    age: '12-16 лет',
    modules: 14,
    icon: CourseIcons.iot,
    modulesList: [
      'Основы электроники',
      'Работа с Arduino/Raspberry Pi',
      'Подключение к интернету',
      'Управление через смартфон',
      'Проектирование умного дома'
    ],
    outcomes: [
      'Создаст свои первые IoT-устройства',
      'Научится программировать микроконтроллеры',
      'Поймет принципы работы умного дома'
    ]
  }
];

export const CoursesSection = () => {
  const [expandedCourseId, setExpandedCourseId] = useState<string | null>(null);
  const [expandedRoboticsCourseId, setExpandedRoboticsCourseId] = useState<string | null>(null);

  const handleToggleExpand = React.useCallback((id: string) => {
    setExpandedCourseId(prevId => prevId === id ? null : id);
  }, []);

  const handleToggleRoboticsExpand = React.useCallback((id: string) => {
    setExpandedRoboticsCourseId(prevId => prevId === id ? null : id);
  }, []);

  return (
    <>
      <section className={styles.section} id="programming-courses">
        <div className={styles.container}>
          <h2 className={styles.title}>Курсы по Программированию в «Айтишкино»</h2>
          <div className={styles.coursesGrid}>
            {COURSES.map((course) => {
              const courseId = `programming-${course.title.toLowerCase().replace(/\s+/g, '-')}`;
              return (
                <CourseCard
                  key={courseId}
                  id={courseId}
                  title={course.title}
                  age={course.age}
                  modules={course.modules}
                  icon={course.icon}
                  modulesList={course.modulesList}
                  outcomes={course.outcomes}
                  isExpanded={expandedCourseId === courseId}
                  onToggleExpand={handleToggleExpand}
                />
              );
            })}
          </div>
        </div>
      </section>

      <section className={styles.section} id="robotics-courses">
        <div className={styles.container}>
          <h2 className={styles.title}>
            Робототехника в «Айтишкино»: <br />
            <span className={styles.subtitle}>от первых механизмов до умных гаджетов</span>
          </h2>
          <div className={styles.coursesGrid}>
            {ROBOTICS_COURSES.map((course) => {
              const courseId = `robotics-${course.title.toLowerCase().replace(/\s+/g, '-')}`;
              return (
                <CourseCard
                  key={courseId}
                  id={courseId}
                  title={course.title}
                  age={course.age}
                  modules={course.modules}
                  icon={course.icon}
                  modulesList={course.modulesList}
                  outcomes={course.outcomes}
                  isExpanded={expandedRoboticsCourseId === courseId}
                  onToggleExpand={handleToggleRoboticsExpand}
                />
              );
            })}
          </div>
        </div>
      </section>
      
      {/* Consultation Button */}
      <div className="w-full max-w-[1440px] mx-auto px-5 mt-12 mb-16">
        <div className="max-w-[1440px] mx-auto px-5">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-3">
              <button 
                className="w-full flex items-center justify-center gap-3 bg-[#00B18F] hover:bg-[#00997A] text-white font-medium text-lg md:text-xl py-4 px-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-[#00B18F] focus:ring-opacity-50"
                onClick={() => {
                  const form = document.getElementById('application-form');
                  if (form) {
                    form.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                <span>Записаться на консультацию</span>
                <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CoursesSection;
