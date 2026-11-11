import React, { useState } from 'react';
import styles from './CoursesSection.module.css';
import { CourseCard } from '@/components/ui/CourseCard/CourseCard';
import { ArrowRight, BrainCircuit, Gamepad2, Cpu, Bot, Puzzle, Globe } from 'lucide-react';
import { PROGRAMMING_COURSES, ROBOTICS_COURSES } from '@/content/courses';

const CourseIcons = {
  digitalThinking: <BrainCircuit className="text-[#00B18F]" size={48} />,
  gameDev: <Gamepad2 className="text-[#00B18F]" size={48} />,
  webDev: <Globe className="text-[#00B18F]" size={48} />,
  roboticsBasic: <Puzzle className="text-[#00B18F]" size={48} />,
  roboticsAdvanced: <Bot className="text-[#00B18F]" size={48} />,
  iot: <Cpu className="text-[#00B18F]" size={48} />,
};

export const CoursesSection = () => {
  const [expandedCourseId, setExpandedCourseId] = useState<string | null>(null);
  const [expandedRoboticsCourseId, setExpandedRoboticsCourseId] = useState<string | null>(null);

  const handleToggleExpand = React.useCallback((id: string) => {
    setExpandedCourseId((prevId) => (prevId === id ? null : id));
  }, []);

  const handleToggleRoboticsExpand = React.useCallback((id: string) => {
    setExpandedRoboticsCourseId((prevId) => (prevId === id ? null : id));
  }, []);

  return (
    <>
      <section className={styles.section} id="programming-courses">
        <div className={styles.container}>
          <h2 className={styles.title}>Курсы по Программированию в «Айтишкино»</h2>
          <div className={styles.coursesGrid}>
            {PROGRAMMING_COURSES.map((course) => {
              const courseId = `programming-${course.id}`;
              return (
                <CourseCard
                  key={courseId}
                  id={courseId}
                  title={course.title}
                  age={course.age}
                  modules={course.modules}
                  icon={CourseIcons[course.iconName]}
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
              const courseId = `robotics-${course.id}`;
              return (
                <CourseCard
                  key={courseId}
                  id={courseId}
                  title={course.title}
                  age={course.age}
                  modules={course.modules}
                  icon={CourseIcons[course.iconName]}
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
                <ArrowRight
                  className="transition-transform duration-300 group-hover:translate-x-1"
                  size={20}
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
