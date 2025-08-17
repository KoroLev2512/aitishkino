# Адаптивные анимации для мобильных устройств

Этот проект включает в себя систему адаптивных Lottie-анимаций, оптимизированных для мобильных устройств.

## Компоненты

### AdaptiveLottie

Основной компонент для отображения адаптивных анимаций.

```tsx
import AdaptiveLottie from '@/components/ui/AdaptiveLottie/AdaptiveLottie';

<AdaptiveLottie
  animationData={heroAnimation}
  desktopConfig={{ width: 800, height: 600 }}
  tabletConfig={{ width: 600, height: 450 }}
  mobileConfig={{ width: 320, height: 240, speed: 0.8 }}
/>
```

#### Пропсы

- `animationData` - данные Lottie-анимации
- `desktopConfig` - конфигурация для десктопа (width, height)
- `tabletConfig` - конфигурация для планшетов (опционально)
- `mobileConfig` - конфигурация для мобильных (опционально)
- `speed` - скорость воспроизведения (по умолчанию 1)
- `loop` - зацикливание (по умолчанию true)
- `autoplay` - автовоспроизведение (по умолчанию true)

## Хуки

### useAdaptiveAnimation

Хук для автоматической адаптации размеров анимаций под размер экрана.

```tsx
import { useAdaptiveAnimation } from '@/hooks/useAdaptiveAnimation';

const { config, isMobile } = useAdaptiveAnimation({
  desktopConfig: { width: 800, height: 600, speed: 1, loop: true, autoplay: true },
  tabletConfig: { width: 600, height: 450, speed: 0.9 },
  mobileConfig: { width: 320, height: 240, speed: 0.8 }
});
```

### useMobileOptimization

Хук для оптимизации производительности на мобильных устройствах.

```tsx
import { useMobileOptimization } from '@/hooks/useMobileOptimization';

const { 
  isMobile, 
  isLowEndDevice, 
  getOptimizedSettings,
  shouldReduceAnimations,
  shouldLowerFrameRate 
} = useMobileOptimization();
```

## Особенности

### Автоматическая адаптация

- **Десктоп**: полный размер и качество
- **Планшет**: 90% размера, 90% скорости
- **Мобильный**: 80% размера, 80% скорости

### Оптимизация производительности

- Автоматическое снижение частоты кадров на мобильных устройствах
- Пауза анимаций при скрытии компонента
- Поддержка `prefers-reduced-motion`
- Оптимизация для устройств с низкой производительностью

### Fallback и обработка ошибок

- Loading placeholder во время загрузки
- Error placeholder при ошибках загрузки
- Graceful degradation для несовместимых устройств

## Использование в секциях

Все основные секции уже обновлены для использования `AdaptiveLottie`:

- HeroSection
- PlatformSection
- EarningSection
- ApproachSection
- YouAreCodeSection

## CSS классы

Компонент автоматически применяет CSS классы для разных состояний:

- `.container` - основной контейнер
- `.animation` - анимация
- `.animation.loaded` - загруженная анимация
- `.loadingPlaceholder` - placeholder загрузки
- `.errorPlaceholder` - placeholder ошибки

## Медиа-запросы

Компонент автоматически адаптируется под:

- `@media (max-width: 768px)` - мобильные устройства
- `@media (max-width: 480px)` - маленькие экраны
- `@media (prefers-reduced-motion: reduce)` - предпочтения пользователя
- `@media (prefers-color-scheme: dark)` - темная тема

## Производительность

- Debounced resize события (100ms)
- Intersection Observer для паузы невидимых анимаций
- Автоматическое управление ресурсами
- Оптимизация для устройств с низкой памятью
