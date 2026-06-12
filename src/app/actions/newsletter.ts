'use server';

import { z } from 'zod';

const NewsletterSchema = z.object({
  email: z.string().email('Please enter a valid email'),
});

export type NewsletterFormState = {
  success: boolean;
  message: string;
};

export async function subscribeNewsletter(
  _prevState: NewsletterFormState,
  formData: FormData
): Promise<NewsletterFormState> {
  const result = NewsletterSchema.safeParse({ email: formData.get('email') });

  if (!result.success) {
    return {
      success: false,
      message: result.error.flatten().fieldErrors.email?.[0] ?? 'Invalid email.',
    };
  }

  // TODO: Integrate with email service (Mailchimp, ConvertKit, Resend, etc.)

  return {
    success: true,
    message: 'You\'re subscribed! Welcome to CoinStream updates.',
  };
}
