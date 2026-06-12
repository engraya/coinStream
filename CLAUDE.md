# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start dev server (localhost:3000)
npm run build     # Production build
npm run lint      # ESLint via next lint
npm run start     # Start production server
```

No test suite is configured. Verify changes by running the dev server.

## Environment Variables

Copy `.env.example` to `.env.local`. Two keys are needed:

- `RAPID_API_KEY` — Coinranking API via RapidAPI (required). **Must NOT have `NEXT_PUBLIC_` prefix** — it's server-side only.
- `CRYPTOPANIC_API_TOKEN` — CryptoPanic news feed (optional). News page degrades gracefully when absent.

## Architecture

### API Proxy Pattern

All external API calls are funneled through Next.js Route Handlers in `src/app/api/`. Client-side code never calls RapidAPI or CryptoPanic directly — it calls the internal `/api/*` routes. This keeps API keys server-side.

```
Client → /api/coins, /api/coins/[id], /api/stats, /api/exchanges, /api/news
       → Route Handler → RapidAPI (Coinranking) or CryptoPanic
```

### Data Fetching Strategy

Two patterns coexist:

1. **Server Components** (home page, exchanges page) — use `src/lib/api/server.ts` helpers that call the Route Handlers directly during SSR. Results are cached by Next.js (`next: { revalidate: 60 }`).

2. **Client Components** (cryptocurrencies grid, coin detail, watchlist) — use React Query hooks from `src/hooks/`. The `Providers` wrapper in `src/app/providers.tsx` configures the QueryClient with `staleTime: 60s`, `retry: 2`, `refetchOnWindowFocus: false`.

The `src/lib/api/client.ts` axios instance always points to `/api` (relative), so the same fetch functions work in both SSR and client contexts via the Route Handlers.

### State Management

Zustand with `persist` middleware stores two slices in localStorage:

- `useWatchlistStore` (`coinstream-watchlist`) — array of coin UUIDs the user has bookmarked
- `useSettingsStore` (`coinstream-settings`) — selected currency and time period

### Component Layout

```
src/
  app/
    components/       # Page-section components (Banner, Table, Stats, Faq…)
    cryptocurrencies/ # /cryptocurrencies and /cryptocurrencies/[id]
    exchanges/        # /exchanges
    news/             # /news
    watchlist/        # /watchlist (client-only, reads from Zustand)
  components/
    coins/            # CoinCard, CoinChart (reusable)
    exchanges/        # ExchangeTable
    ui/               # Shared primitives: Button, Badge, Skeleton, ErrorBoundary
  hooks/              # useCoins, useCoinDetail, useStats — thin React Query wrappers
  lib/
    api/              # client.ts (axios), coinranking.ts (fetch fns), server.ts (SSR helpers)
    constants.ts      # TIME_PERIODS, DEFAULT_COIN_LIMIT, QUERY_STALE_TIME, QUERY_CACHE_TIME
    utils/            # format.ts (formatPrice, formatMarketCap…), cn.ts (clsx + tailwind-merge)
  store/              # watchlistStore.ts, settingsStore.ts
  types/              # coin.types.ts, api.types.ts
```

### Styling

Tailwind with a custom dark-theme color system defined in `tailwind.config.ts`:

- `surface.*` — background layers (base, raised, overlay, border, muted)
- `accent.*` — electric indigo brand color
- `ink.*` — text scale (primary, secondary, tertiary)
- `positive` / `negative` — green/red semantic states

Legacy color aliases (`navyblue`, `darkblue`, `offwhite`, etc.) are still present for backward compatibility with older components in `src/app/components/`. Prefer the semantic tokens (`surface.*`, `ink.*`, `accent.*`) in new code.

### Coin Detail Page Pattern

`src/app/cryptocurrencies/[id]/page.tsx` is a Server Component that pre-fetches coin data and renders metadata. It passes initial sparkline data as a prop to `CoinDetailClient.tsx`, which is a Client Component that handles time period switching and watchlist toggling via React Query + Zustand.
