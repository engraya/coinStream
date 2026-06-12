'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils/cn';

const navigation = [
  { name: 'Home',             href: '/' },
  { name: 'Cryptocurrencies', href: '/cryptocurrencies' },
  { name: 'Exchanges',        href: '/exchanges' },
  { name: 'News',             href: '/news' },
  { name: 'Watchlist',        href: '/watchlist' },
];

interface DrawerdataProps {
  setIsOpen: (isOpen: boolean) => void;
}

const Drawerdata = ({ setIsOpen }: DrawerdataProps) => {
  const pathname = usePathname();

  return (
    <nav className="px-3">
      {navigation.map((item) => {
        const isActive =
          item.href === '/'
            ? pathname === '/'
            : pathname.startsWith(item.href);
        return (
          <Link
            key={item.name}
            href={item.href}
            onClick={() => setIsOpen(false)}
            aria-current={isActive ? 'page' : undefined}
            className={cn(
              'block rounded-lg px-4 py-3 text-sm font-medium transition-colors',
              isActive
                ? 'bg-surface-overlay text-ink-primary'
                : 'text-ink-secondary hover:bg-surface-overlay hover:text-ink-primary'
            )}
          >
            {item.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Drawerdata;
