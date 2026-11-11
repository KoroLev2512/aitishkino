import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { ConsultationSection } from './ConsultationSection';
import * as leadsApi from '@/lib/api/leads';

vi.mock('@/lib/api/leads', () => ({
  submitLead: vi.fn(),
}));

describe('ConsultationSection', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders all form fields and submit button', () => {
    render(<ConsultationSection />);

    expect(screen.getByLabelText(/Ваше имя/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Номер телефона/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Электронная почта/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/согласие на обработку персональных данных/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Отправить заявку/i })).toBeInTheDocument();
  });

  it('displays validation errors when submitting empty required fields', async () => {
    const user = userEvent.setup();
    render(<ConsultationSection />);

    const submitBtn = screen.getByRole('button', { name: /Отправить заявку/i });
    await user.click(submitBtn);

    await waitFor(() => {
      expect(screen.getByText(/Имя должно содержать не менее 2 символов/i)).toBeInTheDocument();
      expect(screen.getByText(/Пожалуйста, введите полный номер телефона/i)).toBeInTheDocument();
    });

    expect(leadsApi.submitLead).not.toHaveBeenCalled();
  });

  it('submits form successfully with valid inputs and renders success state', async () => {
    const user = userEvent.setup();
    vi.mocked(leadsApi.submitLead).mockResolvedValueOnce({ success: true });

    render(<ConsultationSection />);

    const nameInput = screen.getByLabelText(/Ваше имя/i);
    const phoneInput = screen.getByLabelText(/Номер телефона/i);
    const submitBtn = screen.getByRole('button', { name: /Отправить заявку/i });

    await user.type(nameInput, 'Алексей');
    await user.type(phoneInput, '+7 999 123-45-67');
    await user.click(submitBtn);

    await waitFor(() => {
      expect(leadsApi.submitLead).toHaveBeenCalledTimes(1);
      expect(screen.getByText(/Заявка успешно отправлена!/i)).toBeInTheDocument();
    });
  });

  it('displays error banner if lead submission fails', async () => {
    const user = userEvent.setup();
    vi.mocked(leadsApi.submitLead).mockResolvedValueOnce({
      success: false,
      error: 'Ошибка подключения к серверу',
    });

    render(<ConsultationSection />);

    const nameInput = screen.getByLabelText(/Ваше имя/i);
    const phoneInput = screen.getByLabelText(/Номер телефона/i);
    const submitBtn = screen.getByRole('button', { name: /Отправить заявку/i });

    await user.type(nameInput, 'Алексей');
    await user.type(phoneInput, '+7 999 123-45-67');
    await user.click(submitBtn);

    await waitFor(() => {
      expect(screen.getByText(/Ошибка подключения к серверу/i)).toBeInTheDocument();
    });
  });
});
