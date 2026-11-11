'use client';

import React, { useEffect, useRef, useState } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';

const LottieComponent = dynamic(() => import('lottie-react'), {
  ssr: false,
});

interface LazyLottieProps {
  animationPath: string;
  poster?: string;
  alt?: string;
  className?: string;
  style?: React.CSSProperties;
  loop?: boolean;
  autoplay?: boolean;
  priority?: boolean;
}

export const LazyLottie: React.FC<LazyLottieProps> = ({
  animationPath,
  poster,
  alt = 'Анимация',
  className,
  style,
  loop = true,
  autoplay = true,
  priority = false,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [animationData, setAnimationData] = useState<unknown | null>(null);
  const [isInView, setIsInView] = useState(priority);
  const [isLoaded, setIsLoaded] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  useEffect(() => {
    if (priority) {
      setIsInView(true);
      return;
    }

    const el = containerRef.current;
    if (!el || typeof IntersectionObserver === 'undefined') {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry?.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: '300px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [priority]);

  useEffect(() => {
    if (!isInView || animationData) return;

    let isMounted = true;
    fetch(animationPath)
      .then((res) => {
        if (!res.ok) throw new Error(`Failed to load ${animationPath}`);
        return res.json();
      })
      .then((data) => {
        if (isMounted) {
          setAnimationData(data);
          setIsLoaded(true);
        }
      })
      .catch((err) => {
        console.error('Error loading lottie animation:', err);
      });

    return () => {
      isMounted = false;
    };
  }, [isInView, animationPath, animationData]);

  const shouldAutoplay = autoplay && !prefersReducedMotion;

  return (
    <div
      ref={containerRef}
      className={className}
      style={{ position: 'relative', overflow: 'hidden', ...style }}
      aria-hidden="true"
    >
      {poster && (!isLoaded || prefersReducedMotion) && (
        <Image
          src={poster}
          alt={alt}
          fill
          priority={priority}
          sizes="(max-width: 768px) 100vw, 500px"
          style={{ objectFit: 'contain' }}
        />
      )}

      {isInView && Boolean(animationData) && !prefersReducedMotion && (
        <LottieComponent
          animationData={animationData}
          loop={loop}
          autoplay={shouldAutoplay}
          style={{ width: '100%', height: '100%' }}
        />
      )}
    </div>
  );
};
