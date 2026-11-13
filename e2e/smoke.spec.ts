import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test.describe('Smoke tests', () => {
  test('home page loads correctly with single h1 and main sections', async ({ page }) => {
    await page.goto('/');

    await expect(page).toHaveTitle(/Айтишкино/i);

    const headings = page.locator('h1');
    await expect(headings).toHaveCount(1);
    await expect(headings).toContainText('Научись говорить');

    await expect(page.locator('#home')).toBeVisible();
    await expect(page.locator('#courses')).toBeVisible();
    await expect(page.locator('#application-form')).toBeVisible();
  });

  test('navigation to python course page works', async ({ page }) => {
    await page.goto('/courses/python');

    await expect(page).toHaveTitle(/Python/i);
    const h1 = page.locator('h1');
    await expect(h1).toHaveCount(1);
    await expect(h1).toContainText('Python');

    const breadcrumbs = page.locator('nav[aria-label="Хлебные крошки"]');
    await expect(breadcrumbs).toBeVisible();
  });

  test('privacy policy page loads correctly', async ({ page }) => {
    await page.goto('/privacy');

    await expect(page).toHaveTitle(/Политика конфиденциальности/i);
    const h1 = page.locator('h1');
    await expect(h1).toHaveCount(1);
    await expect(h1).toContainText('Политика конфиденциальности');
  });

  test('navigation to login page works and renders login form', async ({ page }) => {
    await page.goto('/');

    const loginLink = page.locator('header').getByRole('link', { name: 'Войти' });
    await loginLink.click();

    await expect(page).toHaveURL(/.*\/login/);
    await expect(page).toHaveTitle(/Вход.*Айтишкино/i);

    const h1 = page.locator('h1');
    await expect(h1).toHaveCount(1);
    await expect(h1).toContainText('Вход на платформу');

    await expect(page.getByRole('button', { name: /Я ученик/i })).toBeVisible();
    await expect(page.getByRole('button', { name: /Я родитель/i })).toBeVisible();
  });

  test('consultation form validates required fields', async ({ page }) => {
    await page.goto('/');

    const submitBtn = page.getByRole('button', { name: /Отправить заявку/i });
    await submitBtn.scrollIntoViewIfNeeded();
    await submitBtn.click();

    await expect(page.getByText('Имя должно содержать не менее 2 символов')).toBeVisible();
    await expect(page.getByText('Пожалуйста, введите полный номер телефона')).toBeVisible();
  });
});

test.describe('Accessibility audits (Axe)', () => {
  test('home page passes automated accessibility checks', async ({ page }) => {
    await page.goto('/');

    const results = await new AxeBuilder({ page })
      .exclude('iframe')
      .withTags(['wcag2a', 'wcag2aa'])
      .disableRules(['color-contrast'])
      .analyze();

    const criticalOrSerious = results.violations.filter(
      (v) => v.impact === 'critical' || v.impact === 'serious'
    );

    expect(criticalOrSerious).toEqual([]);
  });

  test('python course page passes accessibility checks', async ({ page }) => {
    await page.goto('/courses/python');

    const results = await new AxeBuilder({ page })
      .exclude('iframe')
      .withTags(['wcag2a', 'wcag2aa'])
      .disableRules(['color-contrast'])
      .analyze();

    const criticalOrSerious = results.violations.filter(
      (v) => v.impact === 'critical' || v.impact === 'serious'
    );

    expect(criticalOrSerious).toEqual([]);
  });

  test('login page passes accessibility checks', async ({ page }) => {
    await page.goto('/login');

    const results = await new AxeBuilder({ page })
      .exclude('iframe')
      .withTags(['wcag2a', 'wcag2aa'])
      .disableRules(['color-contrast'])
      .analyze();

    const criticalOrSerious = results.violations.filter(
      (v) => v.impact === 'critical' || v.impact === 'serious'
    );

    expect(criticalOrSerious).toEqual([]);
  });

  test('consultation popup opens and passes accessibility checks', async ({ page }) => {
    await page.goto('/');
    await page.evaluate(() => {
      window.dispatchEvent(new CustomEvent('open-consultation-popup'));
    });

    const modal = page.getByRole('dialog');
    await expect(modal).toBeVisible();
    await expect(page.getByText(/Успешное будущее вашего ребенка/i)).toBeVisible();

    const results = await new AxeBuilder({ page })
      .exclude('iframe')
      .withTags(['wcag2a', 'wcag2aa'])
      .disableRules(['color-contrast'])
      .analyze();

    const criticalOrSerious = results.violations.filter(
      (v) => v.impact === 'critical' || v.impact === 'serious'
    );

    expect(criticalOrSerious).toEqual([]);

    await page.getByRole('button', { name: /Закрыть модальное окно/i }).click();
    await expect(modal).not.toBeVisible();
  });
});
