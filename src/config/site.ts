export const siteConfig = {
  name: 'Айтишкино',
  title: 'Айтишкино - Школа программирования и робототехники для детей 8-17 лет',
  description:
    'Онлайн-школа программирования и робототехники для детей 8-17 лет. Учим создавать игры, приложения и сайты. Первое занятие бесплатно!',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://aitishkino.ru',
  ogImage: '/images/og-image.jpg',
  contacts: {
    phone: '+7 (988) 231-32-00',
    phoneRaw: '+79882313200',
    email: 'info@aitishkino.ru',
    address: 'г. Москва, ул. Примерная, д. 123, офис 45',
    hoursWeekday: 'Пн-Пт: 10:00 - 20:00',
    hoursWeekend: 'Сб-Вс: 10:00 - 18:00',
  },
  social: {
    vk: 'https://vk.com/aitishkino',
    telegram: 'https://t.me/aitishkino',
    youtube: 'https://youtube.com/@aitishkino',
  },
};
