import './globals.css';
import Navbar from './components/Navbar/index';
import Footer from './components/Footer/index';
import { Providers } from './providers';

export const metadata = {
  title: 'CoinStream — Real-Time Crypto Tracker',
  description: 'Track real-time cryptocurrency prices, market caps, exchanges, and trends with CoinStream.',
  icons: {
    icon: '/logo.svg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen flex flex-col bg-surface-base text-ink-primary antialiased">
        <Providers>
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
