'use client';

import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface WatchlistStore {
  watchlist: string[];
  addToWatchlist: (uuid: string) => void;
  removeFromWatchlist: (uuid: string) => void;
  isWatched: (uuid: string) => boolean;
  toggleWatchlist: (uuid: string) => void;
}

export const useWatchlistStore = create<WatchlistStore>()(
  persist(
    (set, get) => ({
      watchlist: [],
      addToWatchlist: (uuid) =>
        set((s) => ({ watchlist: [...s.watchlist, uuid] })),
      removeFromWatchlist: (uuid) =>
        set((s) => ({ watchlist: s.watchlist.filter((id) => id !== uuid) })),
      isWatched: (uuid) => get().watchlist.includes(uuid),
      toggleWatchlist: (uuid) => {
        if (get().isWatched(uuid)) {
          get().removeFromWatchlist(uuid);
        } else {
          get().addToWatchlist(uuid);
        }
      },
    }),
    { name: 'coinstream-watchlist' }
  )
);
