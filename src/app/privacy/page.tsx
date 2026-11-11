import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { PageLayout } from '@/components/layout/PageLayout';
import { Footer } from '@/components/sections/footer/Footer';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';
import { siteConfig } from '@/config/site';

export const dynamic = 'force-static';
export const revalidate = false;

export const metadata: Metadata = {
  title: 'Политика конфиденциальности и обработки персональных данных',
  description:
    'Политика обработки персональных данных школы программирования и робототехники «Айтишкино». Соответствие требованиям Федерального закона № 152-ФЗ.',
  alternates: {
    canonical: '/privacy',
  },
};

export default function PrivacyPolicyPage() {
  const breadcrumbs = [
    { name: 'Главная', item: siteConfig.url },
    { name: 'Политика конфиденциальности', item: `${siteConfig.url}/privacy` },
  ];

  return (
    <PageLayout>
      <BreadcrumbSchema items={breadcrumbs} />

      <article className="min-h-screen bg-white">
        {/* Хлебные крошки */}
        <div className="max-w-4xl mx-auto px-4 pt-6 pb-2">
          <nav aria-label="Хлебные крошки" className="text-sm text-gray-500">
            <ol className="flex items-center gap-2 flex-wrap">
              <li>
                <Link href="/" className="hover:text-[#00B18F] transition-colors">
                  Главная
                </Link>
              </li>
              <li>/</li>
              <li className="text-gray-900 font-medium" aria-current="page">
                Политика конфиденциальности
              </li>
            </ol>
          </nav>
        </div>

        <div className="max-w-4xl mx-auto px-4 py-8 md:py-12">
          <header className="mb-10">
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight mb-4">
              Политика конфиденциальности и обработки персональных данных
            </h1>
            <p className="text-gray-500 text-sm">
              Редакция от {new Date().toLocaleDateString('ru-RU')} г.
            </p>
          </header>

          <div className="prose prose-gray max-w-none space-y-8 text-gray-700 leading-relaxed">
            <div className="p-4 bg-amber-50 border border-amber-200 rounded-xl text-amber-900 text-sm">
              <strong>Внимание владельцу сайта:</strong> Ниже приведён типовой шаблон соглашения в
              соответствии с ФЗ-152 «О персональных данных». Пожалуйста, заполните поля в квадратных
              скобках <code>[ ... ]</code> фактическими реквизитами вашей организации или ИП.
            </div>

            <section>
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                1. Общие положения
              </h2>
              <p>
                Настоящая Политика обработки персональных данных (далее — «Политика») определяет
                порядок обработки и меры по обеспечению безопасности персональных данных,
                предпринимаемые{' '}
                <strong>[Наименование организации / ФИО индивидуального предпринимателя]</strong>{' '}
                (далее — «Оператор»), ОГРН/ОГРНИП <strong>[Укажите ОГРН/ОГРНИП]</strong>, ИНН{' '}
                <strong>[Укажите ИНН]</strong>, адрес:{' '}
                <strong>[Юридический / фактический адрес]</strong>.
              </p>
              <p className="mt-2">
                1.1. Оператор ставит важнейшей целью и условием осуществления своей деятельности
                соблюдение прав и свобод человека и гражданина при обработке его персональных
                данных, в том числе защиты прав на неприкосновенность частной жизни, личную и
                семейную тайну.
              </p>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                2. Категории обрабатываемых данных
              </h2>
              <p>Оператор обрабатывает следующие персональные данные Пользователя:</p>
              <ul className="list-disc pl-6 space-y-1 mt-2">
                <li>Имя и фамилия заявителя / родителя;</li>
                <li>Номер контактного телефона;</li>
                <li>Адрес электронной почты (email);</li>
                <li>
                  Обезличенные данные о посетителях (в т.ч. файлы «cookie») с помощью сервисов
                  интернет-статистики.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                3. Цели обработки персональных данных
              </h2>
              <p>Персональные данные собираются исключительно для следующих целей:</p>
              <ul className="list-disc pl-6 space-y-1 mt-2">
                <li>
                  Консультирование Пользователя и запись на бесплатный пробный урок школы
                  «Айтишкино»;
                </li>
                <li>Информирование о расписании, образовательных программах и акциях;</li>
                <li>Обратная связь и клиентская поддержка.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                4. Порядок сбора, хранения и передачи персональных данных
              </h2>
              <p>
                4.1. Безопасность персональных данных, которые обрабатываются Оператором,
                обеспечивается путем реализации правовых, организационных и технических мер,
                необходимых для выполнения в полном объеме требований действующего законодательства.
              </p>
              <p className="mt-2">
                4.2. Оператор обеспечивает сохранность персональных данных и принимает все возможные
                меры, исключающие доступ к персональным данным неуполномоченных лиц. Персональные
                данные никогда ни при каких условиях не будут переданы третьим лицам, за исключением
                случаев, связанных с исполнением действующего законодательства.
              </p>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                5. Права Пользователя (субъекта персональных данных)
              </h2>
              <p>
                Пользователь может в любой момент отозвать свое согласие на обработку персональных
                данных, направив Оператору уведомление посредством электронной почты на адрес:{' '}
                <a
                  href={`mailto:${siteConfig.contacts.email}`}
                  className="text-[#00B18F] underline"
                >
                  {siteConfig.contacts.email}
                </a>{' '}
                с пометкой «Отзыв согласия на обработку персональных данных».
              </p>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                6. Контакты и реквизиты Оператора
              </h2>
              <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 space-y-2 text-sm">
                <p>
                  <strong>Оператор:</strong> [Наименование организации / ИП]
                </p>
                <p>
                  <strong>ИНН:</strong> [Укажите ИНН] | <strong>ОГРН/ОГРНИП:</strong> [Укажите ОГРН]
                </p>
                <p>
                  <strong>Адрес:</strong> {siteConfig.contacts.address}
                </p>
                <p>
                  <strong>Электронная почта:</strong>{' '}
                  <a href={`mailto:${siteConfig.contacts.email}`} className="text-[#00B18F]">
                    {siteConfig.contacts.email}
                  </a>
                </p>
                <p>
                  <strong>Телефон:</strong>{' '}
                  <a href={`tel:${siteConfig.contacts.phoneRaw}`} className="text-[#00B18F]">
                    {siteConfig.contacts.phone}
                  </a>
                </p>
              </div>
            </section>
          </div>
        </div>
      </article>

      <Footer />
    </PageLayout>
  );
}
