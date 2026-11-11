import { LeadFormData } from '@/lib/validations/lead';

export interface SubmitLeadResult {
  success: boolean;
  error?: string;
}

const DEFAULT_FORM_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLSeno1cq1rKAAuW3ZtZpr_9DFUBu_zo0LShKAWZkj4TL3rQ6eA/formResponse';
const DEFAULT_NAME_ENTRY = 'entry.907660670';
const DEFAULT_PHONE_ENTRY = 'entry.805562166';
const DEFAULT_EMAIL_ENTRY = 'entry.1544142625';

/**
 * Isolated lead submission function.
 * Swap implementation here when migrating from Google Forms to Serverless/Telegram/CRM.
 */
export async function submitLead(data: LeadFormData): Promise<SubmitLeadResult> {
  // Honeypot spam defense: bots fill hidden fields
  if (data.honeypot && data.honeypot.trim().length > 0) {
    // Silently drop spam without error feedback
    await new Promise((resolve) => setTimeout(resolve, 400));
    return { success: true };
  }

  const formUrl = process.env.NEXT_PUBLIC_GOOGLE_FORM_URL || DEFAULT_FORM_URL;
  const nameEntry = process.env.NEXT_PUBLIC_GOOGLE_FORM_NAME_ENTRY || DEFAULT_NAME_ENTRY;
  const phoneEntry = process.env.NEXT_PUBLIC_GOOGLE_FORM_PHONE_ENTRY || DEFAULT_PHONE_ENTRY;
  const emailEntry = process.env.NEXT_PUBLIC_GOOGLE_FORM_EMAIL_ENTRY || DEFAULT_EMAIL_ENTRY;

  const formData = new FormData();
  formData.append(nameEntry, data.name);
  formData.append(phoneEntry, data.phone);
  formData.append(emailEntry, data.email);

  try {
    await fetch(formUrl, {
      method: 'POST',
      body: formData,
      mode: 'no-cors',
    });

    return { success: true };
  } catch (err) {
    const message =
      err instanceof Error
        ? err.message
        : 'Произошла сетевая ошибка при отправке заявки. Пожалуйста, попробуйте снова.';
    return {
      success: false,
      error: message,
    };
  }
}
