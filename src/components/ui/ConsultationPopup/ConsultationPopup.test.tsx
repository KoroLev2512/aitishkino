import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { ConsultationPopup } from './ConsultationPopup';
import * as leadsApi from '@/lib/api/leads';

vi.mock('@/lib/api/leads', () => ({
  submitLead: vi.fn(),
}));

describe('ConsultationPopup', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    sessionStorage.clear();
  });

  it('does not render when closed', () => {
    render(<ConsultationPopup isOpenProp={false} />);
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  it('renders correctly when open with all fields and options', () => {
    render(<ConsultationPopup isOpenProp={true} />);

    expect(screen.getByRole('dialog')).toBeInTheDocument();
    expect(screen.getByText(/Успешное будущее вашего ребенка/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Введите ваше имя/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/\+7 \(___\) ___-__-__/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /^Офлайн$/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /^Онлайн$/i })).toBeInTheDocument();
    expect(screen.getByLabelText(/Направление/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Филиал/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Оставить заявку/i })).toBeInTheDocument();
  });

  it('allows toggling between offline and online format', async () => {
    const user = userEvent.setup();
    render(<ConsultationPopup isOpenProp={true} />);

    const offlineBtn = screen.getByRole('button', { name: /^Офлайн$/i });
    const onlineBtn = screen.getByRole('button', { name: /^Онлайн$/i });

    expect(offlineBtn).toHaveClass('border-[#00B18F]');

    await user.click(onlineBtn);
    expect(onlineBtn).toHaveClass('border-[#00B18F]');
  });

  it('validates incomplete name and phone', async () => {
    const user = userEvent.setup();
    render(<ConsultationPopup isOpenProp={true} />);

    const submitBtn = screen.getByRole('button', { name: /Оставить заявку/i });
    await user.click(submitBtn);

    expect(screen.getByText(/Пожалуйста, укажите ваше имя/i)).toBeInTheDocument();

    const nameInput = screen.getByPlaceholderText(/Введите ваше имя/i);
    await user.type(nameInput, 'Анна');
    await user.click(submitBtn);

    expect(screen.getByText(/Пожалуйста, введите полный номер телефона/i)).toBeInTheDocument();
  });

  it('submits successfully and displays confirmation', async () => {
    vi.mocked(leadsApi.submitLead).mockResolvedValueOnce({ success: true });
    const user = userEvent.setup();
    render(<ConsultationPopup isOpenProp={true} />);

    const nameInput = screen.getByPlaceholderText(/Введите ваше имя/i);
    const phoneInput = screen.getByPlaceholderText(/\+7 \(___\) ___-__-__/i);
    const submitBtn = screen.getByRole('button', { name: /Оставить заявку/i });

    await user.type(nameInput, 'Михаил');
    await user.type(phoneInput, '+7 999 123-45-67');
    await user.click(submitBtn);

    await waitFor(() => {
      expect(screen.getByText(/Заявка успешно отправлена!/i)).toBeInTheDocument();
    });

    expect(leadsApi.submitLead).toHaveBeenCalledWith(
      expect.objectContaining({
        name: 'Михаил',
        phone: '+7 (999) 123-45-67',
        consent: true,
      })
    );
  });

  it('closes when close button is clicked', async () => {
    const onClose = vi.fn();
    const user = userEvent.setup();
    render(<ConsultationPopup isOpenProp={true} onCloseProp={onClose} />);

    const closeBtn = screen.getByRole('button', { name: /Закрыть модальное окно/i });
    await user.click(closeBtn);

    expect(onClose).toHaveBeenCalled();
  });
});
