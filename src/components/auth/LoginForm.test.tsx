import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect } from 'vitest';
import { LoginForm } from './LoginForm';

describe('LoginForm', () => {
  it('renders role selectors, method tabs, and submit button', () => {
    render(<LoginForm />);

    expect(screen.getByRole('button', { name: /Я ученик/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Я родитель/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /По номеру телефона/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /По паролю/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Получить код по SMS/i })).toBeInTheDocument();
  });

  it('validates incomplete phone when requesting SMS code', async () => {
    const user = userEvent.setup();
    render(<LoginForm />);

    const phoneInput = screen.getByLabelText(/Номер телефона/i);
    const submitBtn = screen.getByRole('button', { name: /Получить код по SMS/i });

    await user.type(phoneInput, '+7 999 12');
    await user.click(submitBtn);

    expect(screen.getByText(/Пожалуйста, введите полный номер телефона/i)).toBeInTheDocument();
  });

  it('switches to password method and toggles password visibility', async () => {
    const user = userEvent.setup();
    render(<LoginForm />);

    const passwordTab = screen.getByRole('button', { name: /По паролю/i });
    await user.click(passwordTab);

    expect(screen.getByLabelText(/Логин, телефон или email/i)).toBeInTheDocument();
    const passwordInput = screen.getByLabelText(/^Пароль$/i);
    expect(passwordInput).toHaveAttribute('type', 'password');

    const toggleBtn = screen.getByRole('button', { name: /Показать пароль/i });
    await user.click(toggleBtn);
    expect(passwordInput).toHaveAttribute('type', 'text');

    await user.click(toggleBtn);
    expect(passwordInput).toHaveAttribute('type', 'password');
  });

  it('switches roles between student and parent', async () => {
    const user = userEvent.setup();
    render(<LoginForm />);

    const parentBtn = screen.getByRole('button', { name: /Я родитель/i });
    await user.click(parentBtn);

    expect(parentBtn).toHaveClass('bg-white');
  });
});
