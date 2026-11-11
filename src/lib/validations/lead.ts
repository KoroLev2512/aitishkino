import { z } from 'zod';

export const leadSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, 'Имя должно содержать не менее 2 символов')
    .max(50, 'Имя не должно превышать 50 символов'),
  phone: z
    .string()
    .trim()
    .regex(/^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/, 'Пожалуйста, введите полный номер телефона'),
  email: z.string().trim().email('Пожалуйста, введите корректный адрес электронной почты'),
  consent: z.literal(true, {
    message: 'Необходимо подтвердить согласие на обработку персональных данных',
  }),
  honeypot: z.string().optional(),
});

export type LeadFormData = z.infer<typeof leadSchema>;
