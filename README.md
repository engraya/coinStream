<div align="center">

# CoinStream

### Real-time cryptocurrency intelligence — prices, charts, exchanges, and news in one place.

[![Next.js](https://img.shields.io/badge/Next.js-14-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![React Query](https://img.shields.io/badge/TanStack_Query-5-FF4154?style=flat-square&logo=reactquery&logoColor=white)](https://tanstack.com/query)
[![License: MIT](https://img.shields.io/badge/License-MIT-green?style=flat-square)](LICENSE)
[![Vercel](https://img.shields.io/badge/Deployed_on-Vercel-black?style=flat-square&logo=vercel)](https://vercel.com)

<br/>

**[Live Demo](#)** · **[Report a Bug](https://github.com/Engraya/coinStream/issues)** · **[Request a Feature](https://github.com/Engraya/coinStream/issues)**

</div>

---

## Overview

CoinStream is a production-grade cryptocurrency tracking platform built with Next.js 14 and the App Router. It surfaces live market data for 1,000+ coins, detailed token metrics, global exchange rankings, and aggregated crypto news — all from a fast, dark-themed interface that renders correctly whether JavaScript is available or not.

The project was built with two hard constraints in mind: **API keys never reach the browser** (all external calls proxy through Next.js Route Handlers), and **every route that benefits from SEO is server-rendered at request time** while interactive client sections stay reactive through TanStack Query.

### Who is it for?

- **Crypto traders and researchers** who want clean, up-to-date market data without the noise of bloated exchanges
- **Developers** looking for a production-grade reference architecture for Next.js 14 with a real external API integration
- **Portfolio projects** that need to demonstrate full-stack thinking: SSR, API security, state management, and a polished UI

---

## Screenshots

| Landing Page | Cryptocurrencies Grid |
|---|---|
| ![Landing page](public/images/screenshots/landing.png) | ![Crypto grid](public/images/screenshots/grid.png) |

| Coin Detail | Watchlist |
|---|---|
| ![Coin detail](public/images/screenshots/detail.png) | ![Watchlist](public/images/screenshots/watchlist.png) |

> **Note:** Add screenshots to `public/images/screenshots/` and update the paths above.

---

## Features

### Market Data
- **Live prices** for 1,000+ cryptocurrencies sourced from the Coinranking API
- **Global market statistics** — total market cap, 24h volume, active coins, exchanges, and BTC dominance
- **Time-period filtering** — 3h · 24h · 7d · 30d · 3m · 1y · 3y · 5y with one-click switching
- **Animated market ticker** — horizontal scrolling live price bar on the home page

### Coin Detail Pages
- Comprehensive token metrics: price, market cap, 24h volume, all-time high, supply, rank
- **Interactive price chart** powered by Chart.js with gradient fills and responsive scaling
- Sparkline chart data that re-fetches automatically when the time period changes
- Direct links to official website and whitepaper

### Exchange Rankings
- Ranked exchange table by 24h trading volume
- Per-exchange metrics: reported volume, active coins/markets, top pairs

### Crypto News
- Aggregated news feed via the CryptoPanic API
- Relative timestamps ("2h ago", "yesterday") with Moment.js
- Graceful degradation — the news page renders a helpful message when the API token is not configured rather than throwing an error

### Personal Watchlist
- Bookmark any coin from the grid or detail page
- Persisted in `localStorage` via Zustand's persist middleware — survives page refreshes and navigation
- Dedicated `/watchlist` page to review saved coins

### Developer Experience
- **API proxy pattern** — `RAPID_API_KEY` is never exposed to the browser; all external HTTP calls go through `/api/*` Route Handlers
- **Hybrid data fetching** — SSR for SEO-critical pages, React Query for interactive client views
- **Zod-validated server actions** for contact form and newsletter sign-up
- **Full TypeScript** coverage: domain types, API response schemas, and component props
- Clean path aliases: `@/*`, `@data/*`, `@public/*`, `@src/*`

---

## Tech Stack

| Category | Technology |
|---|---|
| **Framework** | [Next.js 14](https://nextjs.org/) (App Router) |
| **Language** | [TypeScript 5](https://www.typescriptlang.org/) |
| **Styling** | [Tailwind CSS 3.4](https://tailwindcss.com/) with custom design tokens |
| **Server State** | [TanStack React Query 5](https://tanstack.com/query) |
| **Client State** | [Zustand 5](https://zustand-demo.pmnd.rs/) with persist middleware |
| **HTTP Client** | [Axios 1.7](https://axios-http.com/) |
| **Charts** | [Chart.js 4](https://www.chartjs.org/) + [react-chartjs-2](https://react-chartjs-2.js.org/) |
| **Validation** | [Zod](https://zod.dev/) (server actions) |
| **Number Formatting** | [Millify](https://github.com/trincot/millify) |
| **Date Formatting** | [Moment.js](https://momentjs.com/) |
| **UI Primitives** | [Headless UI 2](https://headlessui.com/) · [Heroicons 2](https://heroicons.com/) |
| **Carousel** | [react-slick](https://react-slick.neostack.com/) |
| **Market Data API** | [Coinranking via RapidAPI](https://rapidapi.com/Coinranking/api/coinranking1) |
| **News API** | [CryptoPanic](https://cryptopanic.com/developers/api/) |
| **Linting** | ESLint 8 with Next.js config |
| **Deployment** | [Vercel](https://vercel.com/) |

---

## Architecture

CoinStream uses a **two-tier data flow**: server components and Route Handlers form the backend boundary; React Query and Zustand handle all client-side reactivity.

```
┌────────────────────────────────────────────────────────────────┐
│                          Browser                               │
│                                                                │
│   React Query (hooks)  ──►  /api/*  Route Handlers            │
│   Zustand (stores)                       │                     │
│                                          ▼                     │
│   Server Components  ──────────►  External APIs               │
│   (SSR on request)              (Coinranking / CryptoPanic)    │
└────────────────────────────────────────────────────────────────┘
```

### Key Architectural Decisions

**API Proxy pattern** — Every external API call is routed through a Next.js Route Handler. This keeps `RAPID_API_KEY` strictly server-side and centralises rate-limit handling and error normalisation in one place.

**Hybrid rendering** — Home, exchange, and news pages use React Server Components with `revalidate` intervals (30–120 seconds) for fast initial loads and SEO. The cryptocurrencies grid, coin detail charts, and watchlist are Client Components that hydrate with React Query for live interactivity.

**Persistence without a database** — The watchlist and user settings are stored in `localStorage` via Zustand's persist middleware. This keeps the project dependency-free (no auth, no database) while still providing a good user experience.

---

## Project Structure

```
coinStream/
├── src/
│   ├── app/
│   │   ├── layout.tsx                  # Root layout — Navbar, Footer, QueryProvider
│   │   ├── page.tsx                    # Home page (SSR — hero, ticker, stats, top 10)
│   │   ├── globals.css                 # Tailwind base + font imports
│   │   ├── providers.tsx               # React Query client provider
│   │   │
│   │   ├── api/                        # Next.js Route Handlers (API proxy layer)
│   │   │   ├── coins/route.ts          # GET /api/coins   — list with search/filter
│   │   │   ├── coins/[id]/route.ts     # GET /api/coins/:id — coin detail + sparkline
│   │   │   ├── stats/route.ts          # GET /api/stats   — global market data
│   │   │   ├── exchanges/route.ts      # GET /api/exchanges
│   │   │   └── news/route.ts           # GET /api/news    — CryptoPanic feed
│   │   │
│   │   ├── actions/                    # Next.js Server Actions
│   │   │   ├── contact.ts              # Contact form (Zod validation)
│   │   │   └── newsletter.ts           # Newsletter sign-up (Zod validation)
│   │   │
│   │   ├── cryptocurrencies/
│   │   │   ├── page.tsx                # Container (SSR shell)
│   │   │   ├── CryptoGrid.tsx          # Client grid — search, pagination, cards
│   │   │   ├── [id]/page.tsx           # Coin detail page (SSR)
│   │   │   └── [id]/CoinDetailClient.tsx  # Chart + watchlist toggle (client)
│   │   │
│   │   ├── exchanges/page.tsx          # Exchange rankings (SSR)
│   │   ├── news/page.tsx               # News feed (SSR)
│   │   ├── watchlist/page.tsx          # Saved coins (client-only, Zustand)
│   │   │
│   │   └── components/                 # Page-section components
│   │       ├── Navbar/                 # Desktop nav + mobile drawer
│   │       ├── Footer/
│   │       ├── Banner/                 # Hero with animated preview
│   │       ├── Stats.tsx               # Global market stat bar
│   │       ├── Table/                  # Top 10 coins table
│   │       ├── Features/               # Feature highlight cards
│   │       ├── Work/                   # How-it-works section
│   │       ├── Trade/                  # Platform showcase
│   │       ├── Faq/                    # Accordion FAQ
│   │       ├── Companies/              # Crypto logo carousel
│   │       └── Contact/                # Contact + newsletter forms
│   │
│   ├── components/                     # Reusable cross-page components
│   │   ├── coins/
│   │   │   ├── CoinCard.tsx            # Coin card (link, price, change, watchlist)
│   │   │   └── CoinChart.tsx           # Chart.js line chart with gradient
│   │   ├── exchanges/
│   │   │   └── ExchangeTable.tsx       # Exchange data table
│   │   └── ui/
│   │       ├── Button.tsx              # primary · secondary · ghost · danger
│   │       ├── Badge.tsx               # Green/red price-change indicator
│   │       ├── MarketTicker.tsx        # Animated scroll ticker
│   │       ├── Skeleton.tsx            # Loading placeholders
│   │       └── ErrorBoundary.tsx       # React error boundary
│   │
│   ├── hooks/                          # React Query data hooks
│   │   ├── useCoins.ts                 # Coin list with optional search/filter
│   │   ├── useCoinDetail.ts            # Single coin by ID + time period
│   │   ├── useStats.ts                 # Global market statistics
│   │   └── useNews.ts                  # News feed
│   │
│   ├── lib/
│   │   ├── constants.ts                # TIME_PERIODS, DEFAULT_COIN_LIMIT, etc.
│   │   ├── api/
│   │   │   ├── client.ts               # Axios instance (baseURL: /api)
│   │   │   ├── coinranking.ts          # Client-side fetch wrappers → /api/*
│   │   │   └── server.ts               # SSR-only fetch helpers (direct to RapidAPI)
│   │   └── utils/
│   │       ├── cn.ts                   # clsx + tailwind-merge
│   │       └── format.ts               # formatPrice, formatMarketCap, formatPercent
│   │
│   ├── store/
│   │   ├── watchlistStore.ts           # Zustand — bookmarked coin UUIDs (persisted)
│   │   └── settingsStore.ts            # Zustand — currency, time period (persisted)
│   │
│   └── types/
│       ├── coin.types.ts               # Coin, CoinDetail, Exchange, GlobalStats
│       ├── api.types.ts                # CoinsListResponse, CoinDetailResponse, etc.
│       └── declarations.d.ts           # Module augmentations (SVG, PNG, fetch cache)
│
├── public/
│   ├── logo.svg
│   └── images/                         # Static assets (icons, banners, logos)
│
├── .env.example                        # Environment variable template
├── next.config.mjs                     # Image domains, etc.
├── tailwind.config.ts                  # Custom design tokens
└── tsconfig.json                       # Path aliases: @/*, @src/*, @data/*, @public/*
```

---

## Getting Started

### Prerequisites

- **Node.js** 18.17 or later
- **npm** 9+ (or yarn / pnpm)
- A free [RapidAPI](https://rapidapi.com/) account with the [Coinranking API](https://rapidapi.com/Coinranking/api/coinranking1) subscribed (free tier available)
- *(Optional)* A [CryptoPanic](https://cryptopanic.com/developers/api/) API token for the news feed

### 1. Clone the repository

```bash
git clone https://github.com/Engraya/coinStream.git
cd coinStream
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

```bash
cp .env.example .env.local
```

Open `.env.local` and fill in your keys:

```bash
# Required — Coinranking data API
RAPID_API_KEY=your_rapidapi_key_here

# Optional — news feed (the /news page gracefully degrades without this)
CRYPTOPANIC_API_TOKEN=your_cryptopanic_token_here
```

> **Security note:** Neither variable carries a `NEXT_PUBLIC_` prefix. They are never bundled into client JavaScript.

### 4. Start the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 5. Build for production

```bash
npm run build
npm run start
```

---

## Environment Variables

| Variable | Required | Description |
|---|---|---|
| `RAPID_API_KEY` | **Yes** | RapidAPI key with Coinranking access. Get one at [rapidapi.com](https://rapidapi.com/Coinranking/api/coinranking1). |
| `CRYPTOPANIC_API_TOKEN` | No | CryptoPanic token for the news feed. Free tier at [cryptopanic.com](https://cryptopanic.com/developers/api/). Without this, the news page renders a configuration notice instead of an error. |

---

## API Reference

All endpoints live under `/api` and act as a secure proxy to upstream services. Client-side code calls only these routes.

### `GET /api/coins`

Returns a paginated list of cryptocurrencies.

| Query param | Type | Default | Description |
|---|---|---|---|
| `limit` | number | 20 | Number of coins to return |
| `offset` | number | 0 | Pagination offset |
| `search` | string | — | Filter coins by name or symbol |
| `timePeriod` | string | `24h` | Price-change window |

**Example response**
```json
{
  "data": {
    "coins": [
      {
        "uuid": "Qwsogvtv82FCd",
        "symbol": "BTC",
        "name": "Bitcoin",
        "iconUrl": "https://cdn.coinranking.com/...",
        "price": "68432.12",
        "change": "2.41",
        "marketCap": "1348000000000",
        "rank": 1,
        "sparkline": ["67800", "68100", "68432"]
      }
    ],
    "stats": { "total": 25374 }
  }
}
```

### `GET /api/coins/:id`

Returns detailed metrics for a single coin.

| Query param | Type | Description |
|---|---|---|
| `timePeriod` | string | Historical period for sparkline: `3h` · `24h` · `7d` · `30d` · `3m` · `1y` · `3y` · `5y` |

### `GET /api/stats`

Returns global market statistics (total coins, exchanges, market cap, 24h volume, BTC dominance).

### `GET /api/exchanges`

Returns ranked exchange list by 24h reported trading volume.

### `GET /api/news`

Returns the latest crypto news articles from CryptoPanic.

---

## Design System

CoinStream uses a custom Tailwind token system optimised for a dark-first crypto interface.

### Color Tokens

```
Surface scale        Accent (electric indigo)    Text (ink)
─────────────────    ────────────────────────    ─────────────────────
surface-base         accent        #4F6EF7        ink-primary   #F0F4FF
surface-raised       accent-hover  #6B85F9        ink-secondary #8B9CC8
surface-overlay      accent-glow   #4F6EF740      ink-tertiary  #5A6B96
surface-border
surface-muted

Semantic
──────────────────────────────────
positive  #22C55E   (price gains)
negative  #EF4444   (price losses)
```

### Animations

| Name | Duration | Use |
|---|---|---|
| `ticker` | 40s | Horizontal market ticker scroll |
| `fade-in` | 0.2s | Page section entrance |

---

## Performance

| Technique | Where applied |
|---|---|
| **Incremental Static Regeneration** | Home (60s), exchanges (120s), news (60s) |
| **React Query caching** | 1-minute stale time; 2 retries; no refetch on focus |
| **Route-based code splitting** | Automatic via Next.js App Router |
| **Server Components** | Zero JS sent for static page sections |
| **Tailwind CSS purge** | Removes all unused utility classes in production build |
| **Next.js Image optimisation** | Lazy loading, correct `width`/`height`, external CDN domains allowlisted |
| **Axios baseURL proxy** | Single Axios instance reuses connection pool for `/api` calls |

---

## Deployment

### Vercel (recommended)

CoinStream is optimised for Vercel and deploys with zero configuration beyond environment variables.

1. Push the repository to GitHub.
2. Import the project in the [Vercel dashboard](https://vercel.com/new).
3. Add `RAPID_API_KEY` (and optionally `CRYPTOPANIC_API_TOKEN`) in **Settings → Environment Variables**.
4. Deploy. Vercel handles the build and edge network automatically.

### Self-hosted (Node.js)

```bash
npm run build
NODE_ENV=production RAPID_API_KEY=xxx npm run start
```

The app runs on port 3000 by default. Proxy with nginx or Caddy for TLS termination.

### Self-hosted (Docker)

> Docker support is not yet included in this repository. A sample `Dockerfile` for a standalone Next.js build would follow the [official Next.js Docker example](https://github.com/vercel/next.js/tree/canary/examples/with-docker).

---

## Developer Notes

**`cn()` utility** — Every component uses `cn()` (re-export of `clsx` + `tailwind-merge`) for conditional class composition. This prevents Tailwind class conflicts when merging dynamic class strings.

**Server vs. client fetch helpers** — `src/lib/api/server.ts` contains functions that call the upstream RapidAPI directly (only safe in server context). `src/lib/api/coinranking.ts` contains functions that call `/api/*` (safe in both contexts). Never import `server.ts` in a Client Component.

**Time period constants** — `src/lib/constants.ts` is the single source of truth for `TIME_PERIODS` and `DEFAULT_COIN_LIMIT`. Update here to propagate to all hooks, dropdowns, and API calls.

**Zustand stores** — Both stores use the `persist` middleware with namespaced keys (`coinstream-watchlist`, `coinstream-settings`) to avoid collisions with other apps on the same origin during local development.

**Zod on server actions** — Contact and newsletter forms validate with Zod schemas server-side. The validation result is returned to the client as a typed action response — no client-side validation library required.

---

## Roadmap

Features that are natural next steps based on the current architecture:

- **Email delivery** — Wire the contact form and newsletter sign-up to [Resend](https://resend.com) or SendGrid
- **Portfolio tracker** — Let users record holdings and track P&L alongside their watchlist
- **Currency switching** — The settings store already supports USD, EUR, and BTC; plumb the selected currency into every API call
- **WebSocket price feed** — Replace 1-minute polling with a WebSocket connection for truly real-time prices
- **Price alerts** — Browser push notifications when a watched coin crosses a user-defined threshold
- **Cloud watchlist sync** — Add NextAuth.js + a lightweight database to sync the watchlist across devices
- **Automated tests** — Add Vitest unit tests for utility functions and Playwright E2E tests for critical user flows

---

## Contributing

Contributions are welcome. Please follow these steps:

1. **Fork** the repository and create a feature branch from `master`

   ```bash
   git checkout -b feat/your-feature-name
   ```

2. **Make your changes**, keeping commits focused and descriptive

3. **Lint before pushing**

   ```bash
   npm run lint
   ```

4. **Open a pull request** with a clear description of the problem solved and the approach taken

5. PRs that touch the API proxy layer should note whether the change affects server-only or client-safe imports

Please do not commit `.env.local` or any file containing real API keys.

---

## License

Distributed under the MIT License. See [LICENSE](LICENSE) for details.

---

<div align="center">

Built with Next.js · Designed for speed · Deployed on Vercel

</div>
