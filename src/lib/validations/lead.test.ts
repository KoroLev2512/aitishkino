import { describe, it, expect } from 'vitest';
import { leadSchema } from './lead';

describe('leadSchema', () => {
  const validData = {
    name: 'Иван Иванов',
    phone: '+7 (999) 123-45-67',
    email: 'ivan@example.com',
    consent: true as const,
    honeypot: '',
  };

  it('passes on valid data', () => {
    const result = leadSchema.safeParse(validData);
    expect(result.success).toBe(true);
  });

  it('passes without optional email', () => {
    const result = leadSchema.safeParse({
      ...validData,
      email: '',
    });
    expect(result.success).toBe(true);
  });

  it('fails if name is too short', () => {
    const result = leadSchema.safeParse({
      ...validData,
      name: 'А',
    });
    expect(result.success).toBe(false);
    if (!result.success) {
      expect(result.error.issues[0]?.message).toMatch(/Имя должно содержать/);
    }
  });

  it('fails if phone format is invalid', () => {
    const result = leadSchema.safeParse({
      ...validData,
      phone: '+7 (999) 123',
    });
    expect(result.success).toBe(false);
    if (!result.success) {
      expect(result.error.issues[0]?.message).toMatch(/Пожалуйста, введите полный номер телефона/);
    }
  });

  it('fails if email is malformed', () => {
    const result = leadSchema.safeParse({
      ...validData,
      email: 'not-an-email',
    });
    expect(result.success).toBe(false);
    if (!result.success) {
      expect(result.error.issues[0]?.message).toMatch(
        /Пожалуйста, введите корректный адрес электронной почты/
      );
    }
  });

  it('fails if consent is not granted', () => {
    const result = leadSchema.safeParse({
      ...validData,
      consent: false,
    });
    expect(result.success).toBe(false);
    if (!result.success) {
      expect(result.error.issues[0]?.message).toMatch(/Необходимо подтвердить согласие/);
    }
  });

  it('fails honeypot check if honeypot is filled', () => {
    const result = leadSchema.safeParse({
      ...validData,
      honeypot: 'spam-bot-value',
    });
    expect(result.success).toBe(false);
  });
});
