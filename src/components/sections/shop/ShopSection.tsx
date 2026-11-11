'use client';

import { useState, useMemo } from 'react';
import styles from './ShopSection.module.css';
import { SHOP_PRODUCTS } from '@/content/shop';

export const ShopSection = () => {
  const [isHovered, setIsHovered] = useState(false);
  const duplicatedProducts = useMemo(
    () => [...SHOP_PRODUCTS, ...SHOP_PRODUCTS, ...SHOP_PRODUCTS],
    []
  );

  return (
    <section className={styles.shopSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>АйтиШоп</h2>
        <p className={styles.description}>
          Мы ценим твои успехи! За каждый пройденный урок, выполненное задание и участие в
          мероприятиях ты получаешь Айтишки - внутреннюю валюту, которую можно обменять на что-то
          полезное в нашем магазине. Мотивация и вознаграждение ждут тебя!
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
