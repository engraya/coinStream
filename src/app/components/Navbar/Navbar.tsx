'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Bars3Icon } from '@heroicons/react/24/outline';
import { cn } from '@/lib/utils/cn';
import { logo } from '@public/images/images';
import { ThemeToggle } from '@/components/ui/ThemeToggle';
import Drawer from './Drawer';
import Drawerdata from './Drawerdata';

const navigation = [
  { name: 'Home',             href: '/' },
  { name: 'Cryptocurrencies', href: '/cryptocurrencies' },
  { name: 'Exchanges',        href: '/exchanges' },
  { name: 'News',             href: '/news' },
  { name: 'Watchlist',        href: '/watchlist' },
];

const Navbar = () => {
  const [isOpen, setIsOpen]       = useState(false);
  const [scrolled, setScrolled]   = useState(false);
  const pathname                  = usePathname();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 16);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled && 'navbar-scrolled'
      )}
    >
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="flex h-16 items-center justify-between">

          {/* Logo */}
          <Link href="/" aria-label="CoinStream Home" className="flex items-center gap-2">
            <Image src={logo} alt="CoinStream" width={32} height={32} className="h-8 w-auto" />
            <span className="hidden text-sm font-semibold text-ink-primary sm:inline">CoinStream</span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden items-center gap-1 lg:flex">
            {navigation.map((item) => {
              const isActive =
                item.href === '/'
                  ? pathname === '/'
                  : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  aria-current={isActive ? 'page' : undefined}
                  className={cn(
                    'rounded-md px-3 py-2 text-sm font-medium transition-colors duration-150',
                    isActive
                      ? 'bg-surface-overlay text-ink-primary'
                      : 'text-ink-secondary hover:bg-surface-overlay hover:text-ink-primary'
                  )}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>

          {/* Right side controls */}
          <div className="flex items-center gap-1">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(true)}
              aria-label="Open menu"
              className="rounded-lg p-2 text-ink-secondary transition-colors hover:bg-surface-overlay hover:text-ink-primary lg:hidden"
            >
              <Bars3Icon className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>

      <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
        <Drawerdata setIsOpen={setIsOpen} />
      </Drawer>
    </nav>
  );
};

export default Navbar;
