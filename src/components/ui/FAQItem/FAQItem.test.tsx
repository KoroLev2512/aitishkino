import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import { FAQItem } from './FAQItem';

describe('FAQItem', () => {
  const defaultProps = {
    question: 'Сколько длятся занятия?',
    answer: 'Каждое занятие длится 60 минут.',
    isOpen: false,
    onClick: vi.fn(),
  };

  it('renders question text', () => {
    render(<FAQItem {...defaultProps} />);
    expect(screen.getByText('Сколько длятся занятия?')).toBeInTheDocument();
  });

  it('has aria-expanded false when closed', () => {
    render(<FAQItem {...defaultProps} isOpen={false} />);
    const button = screen.getByRole('button');
    expect(button).toHaveAttribute('aria-expanded', 'false');
  });

  it('has aria-expanded true when opened', () => {
    render(<FAQItem {...defaultProps} isOpen={true} />);
    const button = screen.getByRole('button');
    expect(button).toHaveAttribute('aria-expanded', 'true');
  });

  it('connects button with panel via aria-controls and id', () => {
    render(<FAQItem {...defaultProps} isOpen={true} />);
    const button = screen.getByRole('button');
    const panelId = button.getAttribute('aria-controls');
    expect(panelId).toBeTruthy();

    const panel = screen.getByRole('region');
    expect(panel).toHaveAttribute('id', panelId);
  });

  it('calls onClick handler when clicked', async () => {
    const user = userEvent.setup();
    const handleClick = vi.fn();
    render(<FAQItem {...defaultProps} onClick={handleClick} />);

    const button = screen.getByRole('button');
    await user.click(button);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
