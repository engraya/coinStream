import Link from 'next/link';
import Image from 'next/image';
import { logo } from '@public/images/images';

const footerLinks = [
  { name: 'Cryptocurrencies', href: '/cryptocurrencies' },
  { name: 'Exchanges',        href: '/exchanges' },
  { name: 'News',             href: '/news' },
  { name: 'Watchlist',        href: '/watchlist' },
];

const Footer = () => {
  return (
    <footer className="border-t border-surface-border bg-surface-raised">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-4 py-8 sm:flex-row">
          <Link href="/" className="flex items-center gap-2">
            <Image src={logo} alt="CoinStream" width={24} height={24} className="h-6 w-auto" />
            <span className="text-sm font-semibold text-ink-primary">CoinStream</span>
          </Link>

          <nav className="flex flex-wrap justify-center gap-6">
            {footerLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm text-ink-tertiary transition-colors hover:text-ink-secondary"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <p className="text-xs text-ink-tertiary">
            © {new Date().getFullYear()} CoinStream. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
