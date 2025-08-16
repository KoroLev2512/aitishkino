'use client';

import { HeroSection } from '../sections/hero/HeroSection';
import { YouAreCodeSection } from '../sections/you-are-code/YouAreCodeSection';
import { KeyDirectionsSection } from '../sections/key-directions/KeyDirectionsSection';
import { CoursesSection } from '../sections/courses/CoursesSection';
import { FullscreenTextSection } from '../sections/fullscreen-text/FullscreenTextSection';
import { ApproachSection } from '../sections/approach/ApproachSection';
import { AdvantagesSection } from '../sections/advantages/AdvantagesSection';
import PlatformSection from '../sections/platform/PlatformSection';
import EarningSection from '../sections/earning/EarningSection';
import StudentsSection from '../sections/students/StudentsSection';
import ShopSection from '../sections/shop/ShopSection';
import FAQSection from '../sections/faq/FAQSection';
import ConsultationSection from '../sections/consultation/ConsultationSection';
import Footer from '../sections/footer/Footer';
import PageLayout from '../layout/PageLayout';

export default function ClientHomePage() {
  return (
    <PageLayout>
      {/* Секция 1: Научись говорить с гаджетами за час! */}
      <section id="home">
        <HeroSection />
      </section>

        {/* Секция 2: Ты — код, который изменит мир */}
        <section id="about">
          <YouAreCodeSection />
        </section>

        {/* Секция 3: Ключевые направления */}
        <section id="courses">
          <KeyDirectionsSection />
          <CoursesSection />
        </section>

        {/* Секция: Почему выбирают Айтишкино? */}
        <section id="why-us">
          <FullscreenTextSection 
            line1="Почему выбирают"
            line2="Айтишкино?"
            backgroundColor="#f8f9fa"
          />
          <ApproachSection />
        </section>

        {/* Секция: Преимущества */}
        <section id="advantages">
          <AdvantagesSection />
        </section>

        {/* Секция: Платформа */}
        <section id="platform">
          <PlatformSection />
        </section>

        {/* Секция: Заработок */}
        <section id="earnings" style={{ scrollMarginTop: '80px' }}>
          <EarningSection />
        </section>

        {/* Секция: Проекты учеников */}
        <section id="projects" style={{ scrollMarginTop: '80px' }}>
          <StudentsSection />
        </section>

        {/* Секция: Магазин */}
        <section id="shop">
          <ShopSection />
        </section>

        {/* Секция: FAQ */}
        <section id="faq">
          <FAQSection />
        </section>

        {/* Секция: Консультация */}
        <section id="contacts">
          <ConsultationSection />
        </section>
        
        {/* Подвал сайта */}
        <Footer />
    </PageLayout>
  );
}
