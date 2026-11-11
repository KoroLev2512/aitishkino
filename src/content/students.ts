export interface StudentProject {
  id: string;
  name: string;
  age: string;
  course: string;
  imagePath: string;
}

export const STUDENT_PROJECTS: StudentProject[] = [
  {
    id: 'roma',
    name: 'Рома',
    age: '9',
    course: 'Робототехника',
    imagePath: '/images/students/roma.webp',
  },
  {
    id: 'marvin',
    name: 'Марвин',
    age: '12',
    course: 'Программирование',
    imagePath: '/images/students/marvin.webp',
  },
  {
    id: 'fedya',
    name: 'Федя',
    age: '7',
    course: 'Робототехника',
    imagePath: '/images/students/fedya.webp',
  },
];
