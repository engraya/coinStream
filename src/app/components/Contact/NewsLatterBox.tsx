'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { useTheme } from 'next-themes';
import { subscribeNewsletter, type NewsletterFormState } from '@/app/actions/newsletter';

const initialState: NewsletterFormState = { success: false, message: '' };

function SubscribeButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="mb-5 flex w-full cursor-pointer items-center justify-center rounded-sm bg-primary px-9 py-4 text-base font-medium text-white shadow-submit duration-300 hover:bg-primary/90 dark:shadow-submit-dark disabled:opacity-60"
    >
      {pending ? 'Subscribing…' : 'Subscribe'}
    </button>
  );
}

const NewsLatterBox = () => {
  const { theme } = useTheme();
  const [state, formAction] = useFormState(subscribeNewsletter, initialState);

  const gradientColor = theme === 'light' ? '#4A6CF7' : '#fff';

  return (
    <div className="relative z-10 rounded-sm bg-white p-8 shadow-three dark:bg-gray-dark sm:p-11 lg:p-8 xl:p-11">
      <h3 className="mb-4 text-2xl font-bold leading-tight text-black dark:text-white">
        Subscribe to receive future updates
      </h3>
      <p className="mb-11 border-b border-body-color border-opacity-25 pb-11 text-base leading-relaxed text-body-color dark:border-white dark:border-opacity-25">
        Get real-time crypto alerts, market insights, and weekly reports direct to your inbox.
      </p>

      {state.message && (
        <div
          className={`mb-4 rounded-md px-4 py-3 text-sm ${
            state.success
              ? 'bg-green-500/10 text-green-600 dark:text-green-400'
              : 'bg-red-500/10 text-red-600 dark:text-red-400'
          }`}
        >
          {state.message}
        </div>
      )}

      <form action={formAction}>
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          required
          aria-label="Email for newsletter"
          className="border-stroke mb-4 w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
        />
        <SubscribeButton />
        <p className="text-center text-base leading-relaxed text-body-color dark:text-body-color-dark">
          No spam, unsubscribe at any time.
        </p>
      </form>

      {/* Decorative SVGs */}
      <span className="absolute left-2 top-7">
        <svg width="57" height="65" viewBox="0 0 57 65" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path opacity="0.5" d="M0.407629 15.9573L39.1541 64.0714L56.4489 0.160793L0.407629 15.9573Z" fill={`url(#nl-grad-a)`} />
          <defs>
            <linearGradient id="nl-grad-a" x1="-18.3187" y1="55.1044" x2="37.161" y2="15.3509" gradientUnits="userSpaceOnUse">
              <stop stopColor={gradientColor} stopOpacity="0.62" />
              <stop offset="1" stopColor={gradientColor} stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </span>

      <span className="absolute bottom-24 left-1.5">
        <svg width="39" height="32" viewBox="0 0 39 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path opacity="0.5" d="M14.7137 31.4215L38.6431 4.24115L6.96581e-07 0.624124L14.7137 31.4215Z" fill={`url(#nl-grad-b)`} />
          <defs>
            <linearGradient id="nl-grad-b" x1="39.1948" y1="38.335" x2="10.6982" y2="10.2511" gradientUnits="userSpaceOnUse">
              <stop stopColor={gradientColor} stopOpacity="0.62" />
              <stop offset="1" stopColor={gradientColor} stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </span>
    </div>
  );
};

export default NewsLatterBox;
