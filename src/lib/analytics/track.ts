declare global {
  interface Window {
    gtag?: (command: string, action: string, params?: Record<string, unknown>) => void;
    ym?: (
      counterId: number,
      command: string,
      targetName: string,
      params?: Record<string, unknown>
    ) => void;
  }
}

/**
 * Universal safe event tracker for analytics (Google Analytics, Yandex Metrika)
 */
export function trackEvent(eventName: string, params?: Record<string, unknown>): void {
  const isEnabled = process.env.NEXT_PUBLIC_ANALYTICS_ENABLED === 'true';

  if (!isEnabled && process.env.NODE_ENV === 'development') {
    // In dev mode, helpful console log
    console.debug(`[Analytics:DEV] Event: "${eventName}"`, params);
    return;
  }

  if (!isEnabled || typeof window === 'undefined') {
    return;
  }

  try {
    // Google Analytics 4
    if (typeof window.gtag === 'function') {
      window.gtag('event', eventName, params);
    }

    // Yandex Metrika
    if (typeof window.ym === 'function') {
      // Typically counterId is configured; pass goal event if available
      window.ym(0, 'reachGoal', eventName, params);
    }
  } catch (error) {
    console.error('Failed to dispatch analytics event:', error);
  }
}
