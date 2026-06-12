'use client';

import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { TimePeriod } from '@/lib/constants';

interface SettingsStore {
  currency: 'USD' | 'EUR' | 'BTC';
  timePeriod: TimePeriod;
  setCurrency: (c: SettingsStore['currency']) => void;
  setTimePeriod: (t: TimePeriod) => void;
}

export const useSettingsStore = create<SettingsStore>()(
  persist(
    (set) => ({
      currency: 'USD',
      timePeriod: '24h',
      setCurrency: (currency) => set({ currency }),
      setTimePeriod: (timePeriod) => set({ timePeriod }),
    }),
    { name: 'coinstream-settings' }
  )
);
