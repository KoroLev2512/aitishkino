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
  { id: 1, name: 'Беспроводные наушники', type: 'gadget', points: 5000 },
  { id: 2, name: 'Курс по Python', type: 'course', points: 3000 },
  { id: 3, name: 'Футболка Айтишкино', type: 'merch', points: 1500 },
  { id: 4, name: 'Power Bank', type: 'accessory', points: 2500 },
  { id: 5, name: 'Курс по веб-разработке', type: 'course', points: 4000 },
  { id: 6, name: 'Будильник-проектор', type: 'gadget', points: 3500 },
  { id: 7, name: 'Рюкзак для ноутбука', type: 'accessory', points: 2000 },
  { id: 8, name: 'Курс по мобильной разработке', type: 'course', points: 4500 }
];

export const ShopSection = () => {
  const [duplicatedProducts, setDuplicatedProducts] = useState<Product[]>([]);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    // Дублируем массив для бесконечной анимации
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
          {duplicatedProducts.map((product, index) => (
            <div
              key={`${product.id}-${index}`}
              className={`${styles.productCard} ${styles[product.type]}`}
            >
              <div className={styles.productImage}></div>
              <div className={styles.productInfo}>
                <h3 className={styles.productName}>{product.name}</h3>
                <div className={styles.points}>{product.points} баллов</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopSection;
