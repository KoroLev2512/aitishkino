import React, { useState } from 'react';
import styles from './CoursesSection.module.css';
import { CourseCard } from '@/components/ui/CourseCard/CourseCard';
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
    title: 'Junior: “Компьютерная азбука”',
    age: '5-7 лет',
    modules: 8,
    icon: CourseIcons.digitalThinking,
    modulesList: [
      'Rodocodo',
      'Scratch Jr',
      'Kodu game Lab',
      'Aseprite',
      'Code Monkey',
      'Scratch',
      'Презентации PowerPoint',
      'Run Marco'
    ],
    outcomes: [
      'Развитие логики и алгоритмического мышления',
      'Знакомство с визуальным программированием и основами работы за ПК'
    ]
  },
  {
    title: 'Middle: “Учебник программиста”',
    age: '8-11 лет',
    modules: 7,
    icon: CourseIcons.gameDev,
    modulesList: [
      'Kodu game Lab',
      'Aseprite',
      'Scratch',
      'Презентации PowerPoint',
      'Construct 2',
      'Google Blockly',
      'Minecraft Education'
    ],
    outcomes: [
      'Создание простых игр и интерактивных проектов',
      'Укрепление базовых навыков программирования'
    ]
  },
  {
    title: 'Senior: ”Энциклопедия разработчика”',
    age: '12-15 лет',
    modules: 6,
    icon: CourseIcons.webDev,
    modulesList: [
      'Construct 2',
      'Roblox Studio',
      'Office',
      'Thunkable',
      'Tinkercad',
      'Godot'
    ],
    outcomes: [
      'Проектная работа и портфолио',
      'Погружение в разработку игр, приложений и 3D-моделирование'
    ]
  }
];

const ROBOTICS_COURSES: Course[] = [
  {
    title: 'Junior: “Букварь изобретателя”',
    age: '5-7 лет',
    modules: 12,
    icon: CourseIcons.roboticsBasic,
    modulesList: [
      'Введение в робототехнику',
      'Создание анимаций в Robbo Junior',
      '3D ручка',
      'Конструирование',
      'LEGO WeDo 2.0',
      'RobboScratch',
      'Робоплатформа',
      'Робот Отто',
      'Схемотехника',
      '3D моделирование Tinker',
      'Лаборатория',
      'Итоговые проекты'
    ],
    outcomes: [
      'Первые инженерные навыки: конструирование, простая схемотехника и визуальное программирование',
      'Знакомство с 3D‑инструментами и работа с детскими конструкторскими платформами'
    ]
  },
  {
    title: 'Middle: “Справочник инженера”',
    age: '8-11 лет',
    modules: 12,
    icon: CourseIcons.roboticsAdvanced,
    modulesList: [
      'Основы программирования',
      'РоббоЛаборатория',
      'РоббоПлатформа',
      'Основы физики',
      'Основы схемотехники',
      '3D‑моделирование',
      'Создание игр с Лабораторией',
      'Простая математика и геометрия',
      'Цифровая архитектура — SketchUp',
      '3D печать',
      'VR‑технологии',
      'Итоговые проекты'
    ],
    outcomes: [
      'Систематизация инженерных навыков и практическая работа с оборудованием',
      'Проектная деятельность: от идеи до защиты готового решения'
    ]
  },
  {
    title: 'Senior: ”Мануал архитектора”',
    age: '12-15 лет',
    modules: 12,
    icon: CourseIcons.iot,
    modulesList: [
      'Python',
      'РоббоЛаборатория',
      'РоббоПлатформа',
      '3D печать',
      'Основы физики в технологиях',
      'Arduino Uno',
      'Пайка',
      'Инженерное 3D моделирование',
      'Умный дом',
      'ИИ в области робототехники',
      'Создание игр в VR',
      'Итоговые проекты'
    ],
    outcomes: [
      'Глубокое погружение в инженерные и программные технологии: Python, Arduino, пайка, 3D печать',
      'Как работают законы физики в реальных устройствах: эксперименты и принципы механики, электричества и движения'
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


