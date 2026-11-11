export interface CourseItem {
  id: string;
  title: string;
  age: string;
  modules: number;
  iconName: 'digitalThinking' | 'gameDev' | 'webDev' | 'roboticsBasic' | 'roboticsAdvanced' | 'iot';
  modulesList: string[];
  outcomes: string[];
}

export const PROGRAMMING_COURSES: CourseItem[] = [
  {
    id: 'junior-computer-basics',
    title: 'Junior: “Компьютерная азбука”',
    age: '5-7 лет',
    modules: 8,
    iconName: 'digitalThinking',
    modulesList: [
      'Rodocodo',
      'Scratch Jr',
      'Kodu game Lab',
      'Aseprite',
      'Code Monkey',
      'Scratch',
      'Презентации PowerPoint',
      'Run Marco',
    ],
    outcomes: [
      'Развитие логики и алгоритмического мышления',
      'Знакомство с визуальным программированием и основами работы за ПК',
    ],
  },
  {
    id: 'middle-programmer-textbook',
    title: 'Middle: “Учебник программиста”',
    age: '8-11 лет',
    modules: 7,
    iconName: 'gameDev',
    modulesList: [
      'Kodu game Lab',
      'Aseprite',
      'Scratch',
      'Презентации PowerPoint',
      'Construct 2',
      'Google Blockly',
      'Minecraft Education',
    ],
    outcomes: [
      'Создание простых игр и интерактивных проектов',
      'Укрепление базовых навыков программирования',
    ],
  },
  {
    id: 'senior-developer-encyclopedia',
    title: 'Senior: ”Энциклопедия разработчика”',
    age: '12-15 лет',
    modules: 6,
    iconName: 'webDev',
    modulesList: ['Construct 2', 'Roblox Studio', 'Office', 'Thunkable', 'Tinkercad', 'Godot'],
    outcomes: [
      'Проектная работа и портфолио',
      'Погружение в разработку игр, приложений и 3D-моделирование',
    ],
  },
];

export const ROBOTICS_COURSES: CourseItem[] = [
  {
    id: 'junior-inventor-alphabet',
    title: 'Junior: “Букварь изобретателя”',
    age: '5-7 лет',
    modules: 12,
    iconName: 'roboticsBasic',
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
      'Итоговые проекты',
    ],
    outcomes: [
      'Первые инженерные навыки: конструирование, простая схемотехника и визуальное программирование',
      'Знакомство с 3D‑инструментами и работа с детскими конструкторскими платформами',
    ],
  },
  {
    id: 'middle-engineer-handbook',
    title: 'Middle: “Справочник инженера”',
    age: '8-11 лет',
    modules: 12,
    iconName: 'roboticsAdvanced',
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
      'Итоговые проекты',
    ],
    outcomes: [
      'Систематизация инженерных навыков и практическая работа с оборудованием',
      'Проектная деятельность: от идеи до защиты готового решения',
    ],
  },
  {
    id: 'senior-architect-manual',
    title: 'Senior: ”Мануал архитектора”',
    age: '12-15 лет',
    modules: 12,
    iconName: 'iot',
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
      'Итоговые проекты',
    ],
    outcomes: [
      'Глубокое погружение в инженерные и программные технологии: Python, Arduino, пайка, 3D печать',
      'Как работают законы физики в реальных устройствах: эксперименты и принципы механики, электричества и движения',
    ],
  },
];

export interface DetailedCourse {
  slug: string;
  title: string;
  subtitle: string;
  age: string;
  duration: string;
  format: string;
  description: string;
  modules: {
    title: string;
    description: string;
    topics: string[];
  }[];
  outcomes: string[];
  requirements: string[];
}

export const PYTHON_COURSE: DetailedCourse = {
  slug: 'python',
  title: 'Курс программирования на Python для детей',
  subtitle:
    'От базового синтаксиса до создания собственных игр, Telegram-ботов и алгоритмических проектов',
  age: '10–15 лет',
  duration: '4 месяца (32 академических часа)',
  format: 'Онлайн в мини-группах до 8 человек или индивидуально',
  description:
    'Python — один из самых востребованных языков программирования в мире. На курсе дети изучают синтаксис языка через практические задачи, развивают алгоритмическое мышление и создают портфолио реальных проектов.',
  modules: [
    {
      title: 'Модуль 1. Основы Python и алгоритмика',
      description: 'Знакомство со средой разработки, переменными, типами данных и ветвлениями.',
      topics: [
        'Среда разработки и синтаксис',
        'Переменные и типы данных',
        'Условные операторы if/else',
        'Циклы while и for',
      ],
    },
    {
      title: 'Модуль 2. Структуры данных и функции',
      description:
        'Работа со списками, словарями и написание собственных переиспользуемых функций.',
      topics: [
        'Списки и кортежи',
        'Словари и множества',
        'Пользовательские функции',
        'Работа со строками и файлами',
      ],
    },
    {
      title: 'Модуль 3. Разработка 2D-игр на Pygame',
      description:
        'Применение графических библиотек, обработка событий клавиатуры и мыши, анимация и физика.',
      topics: [
        'Знакомство с Pygame',
        'Игровой цикл и анимация спрайтов',
        'Коллизии и физика движения',
        'Создание собственной аркады',
      ],
    },
    {
      title: 'Модуль 4. Чат-боты и защита итогового проекта',
      description: 'Создание полезного Telegram-бота и публичная защита выпускного проекта.',
      topics: [
        'Архитектура ботов и API',
        'Создание интерактивного Telegram-бота',
        'Оформление репозитория на GitHub',
        'Защита проекта перед родителями',
      ],
    },
  ],
  outcomes: [
    'Уверенное владение базовым синтаксисом Python и алгоритмами',
    'Готовое портфолио: 2D-игра на Pygame и рабочий Telegram-бот',
    'Навык самостоятельного поиска и исправления ошибок в коде',
    'Сертификат об успешном окончании курса «Айтишкино»',
  ],
  requirements: [
    'Компьютер или ноутбук с доступом в интернет',
    'Базовые навыки работы с клавиатурой и мышью',
    'Желание учиться и создавать свои проекты',
  ],
};
