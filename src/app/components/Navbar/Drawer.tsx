'use client';

import React, { ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { cn } from '@/lib/utils/cn';
import { logo } from '@public/images/images';

interface DrawerProps {
  children: ReactNode;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const Drawer = ({ children, isOpen, setIsOpen }: DrawerProps) => {
  return (
    <div
      className={cn(
        'fixed inset-0 z-50 transition-opacity duration-300',
        isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      )}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60"
        onClick={() => setIsOpen(false)}
      />

      {/* Drawer panel */}
      <aside
        className={cn(
          'relative flex h-full w-72 flex-col bg-surface-raised border-r border-surface-border shadow-2xl transition-transform duration-300 ease-in-out',
          isOpen ? 'translate-x-0' : '-translate-x-full'
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-surface-border px-4 py-4">
          <Link href="/" onClick={() => setIsOpen(false)} className="flex items-center gap-2">
            <Image src={logo} alt="CoinStream" width={28} height={28} className="h-7 w-auto" />
            <span className="text-sm font-semibold text-ink-primary">CoinStream</span>
          </Link>
          <button
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
            className="rounded-lg p-1.5 text-ink-tertiary transition-colors hover:bg-surface-overlay hover:text-ink-primary"
          >
            <XMarkIcon className="h-5 w-5" />
          </button>
        </div>

        {/* Nav content */}
        <div className="flex-1 overflow-y-auto py-4">
          {children}
        </div>
      </aside>
    </div>
  );
};

export default Drawer;
