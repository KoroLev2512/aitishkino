'use client';

import { useEffect, useState } from 'react';
import styles from './ShopSection.module.css';

interface Product {
  id: number;
  name: string;
  type: 'gadget' | 'course' | 'merch' | 'accessory';
  points: number;
}

const products: Product[] = [
  { id: 1,  name: 'Плейстейшн 5',              type: 'gadget',    points: 3800 },
  { id: 2,  name: 'iPad Air 11',               type: 'gadget',    points: 3800 },
  { id: 3,  name: 'Nintendo Switch',           type: 'gadget',    points: 2450 },
  { id: 4,  name: 'Apple Watch SE',            type: 'gadget',    points: 2200 },
  { id: 5,  name: 'Ноутбук как в классе',      type: 'gadget',    points: 3000 },
  { id: 6,  name: 'AirPods Pro',               type: 'gadget',    points: 2200 },
  { id: 7,  name: 'Mi Band 10',                type: 'accessory', points: 1000 },
  { id: 8,  name: 'Яндекс Алиса',              type: 'gadget',    points: 1200 },
  { id: 9,  name: 'Мягкая игрушка',            type: 'merch',     points: 300 },
  { id: 10, name: 'Футболка мерч',             type: 'merch',     points: 400 },
  { id: 11, name: 'Солнцезащитные очки',       type: 'accessory', points: 250 },
  { id: 12, name: 'Мышь',                      type: 'accessory', points: 450 },
  { id: 13, name: 'Брелки',                    type: 'merch',     points: 30 },
  { id: 14, name: 'Ручки',                     type: 'merch',     points: 30 },
  { id: 15, name: 'Магфия',                    type: 'merch',     points: 200 },
  { id: 16, name: 'Майнфия',                   type: 'merch',     points: 200 },
  { id: 17, name: 'Кружка',                    type: 'merch',     points: 350 },
  { id: 18, name: 'Детский фотоаппарат',       type: 'gadget',    points: 600 },
  { id: 19, name: 'Роббо лаборатория',         type: 'gadget',    points: 1500 },
  { id: 20, name: 'Оплатить месяц курса',      type: 'course',    points: 1000 },
  { id: 21, name: 'Сквиж',                     type: 'merch',     points: 250 },
  { id: 22, name: 'Попрыгунчик',               type: 'merch',     points: 10 },
  { id: 23, name: 'Набор стикеров',            type: 'merch',     points: 50 },
  { id: 24, name: 'Кубик Рубика Майнкрафт',    type: 'merch',     points: 250 },
  { id: 25, name: 'Браслет',                   type: 'accessory', points: 40 },
  { id: 26, name: 'Ночник Майнкрафт',          type: 'gadget',    points: 500 },
  { id: 27, name: 'PowerBank',                 type: 'accessory', points: 700 },
];

// Map product names to gift image filenames in public/images/gifts/
const giftImageByName: Record<string, string> = {
  'Плейстейшн 5': 'ps5.jpg',
  'Nintendo Switch': 'nintendo.jpg',
  'Apple Watch SE': 'apple watch.jpg',
  'Ноутбук как в классе': 'laptop.jpg',
  'AirPods Pro': 'airpods.png',
  'Mi Band 10': 'xiaomi.jpg',
  'Яндекс Алиса': 'yandex.jpg',
  'Мягкая игрушка': 'toy.jpg',
  'Футболка мерч': 'футболка1.jpg',
  'Солнцезащитные очки': 'glasses.jpg',
  'Мышь': 'mouse.jpg',
  'Брелки': 'brelok.jpg',
  'Набор стикеров': 'stickers.jpg',
  'Кубик Рубика Майнкрафт': 'mine.jpg',
  'Ночник Майнкрафт': 'mine.jpg',
  // The following products currently have no exact image file in gifts folder:
  // 'iPad Air 11': undefined,
  // 'Ручки': undefined,
  // 'Магфия': undefined,
  // 'Майнфия': undefined,
  // 'Кружка': undefined,
  // 'Детский фотоаппарат': undefined,
  // 'Роббо лаборатория': undefined,
  // 'Оплатить месяц курса': undefined,
  // 'Сквиж': undefined,
  // 'Попрыгунчик': undefined,
  // 'Браслет': undefined,
  // 'PowerBank': undefined,
};

function getGiftImageSrc(name: string): string | undefined {
  const filename = giftImageByName[name];
  if (!filename) return undefined;
  // Encode only filename part to support spaces and non-latin characters
  const encoded = encodeURIComponent(filename).replace(/%2F/g, '/');
  return `/images/gifts/${encoded}`;
}

export const ShopSection = () => {
  const [duplicatedProducts, setDuplicatedProducts] = useState<Product[]>([]);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    // Duplicate array for infinite scroll
    setDuplicatedProducts([...products, ...products, ...products]);
  }, []);

  return (
    <section className={styles.shopSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>АйтиШоп</h2>
        <p className={styles.description}>
          Мы ценим твои успехи! За каждый пройденный урок, выполненное задание и участие в мероприятиях ты получаешь Айтишки - внутреннюю валюту, которую можно обменять на что-то полезное в нашем магазине. Мотивация и вознаграждение ждут тебя!
        </p>
      </div>

      <div 
        className={styles.carouselContainer}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className={`${styles.productsContainer} ${isHovered ? styles.pauseAnimation : ''}`}>
          {duplicatedProducts.map((product, index) => {
            const src = getGiftImageSrc(product.name);
            return (
              <div
                key={`${product.id}-${index}`}
                className={`${styles.productCard} ${styles[product.type]}`}
              >
                <div className={styles.productImage}>
                  {src ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={src} alt={product.name} loading="lazy" />
                  ) : null}
                </div>
                <div className={styles.productInfo}>
                  <h3 className={styles.productName}>{product.name}</h3>
                  <div className={styles.points}>{product.points} баллов</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
