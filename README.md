# Stellar Sentinel Frontend

The Stellar Sentinel dashboard screens Stellar account activity and presents the explanation behind a risk assessment. It also displays Soroban contract flag events returned by the backend. Account activity is read from Stellar Horizon; contract events come from the configured Soroban RPC. A risk score is an off-chain assessment and does not itself mean an on-chain flag was submitted.

## Run locally

Requires Node.js compatible with Next.js 16.

```bash
cp .env.example .env.local
npm ci
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Start the FastAPI backend separately (see `sentinel-backend/README.md`). Set `NEXT_PUBLIC_API_BASE_URL` to the backend origin if it is not `http://localhost:8000`. The backend must allow the frontend origin through CORS.

## Dashboard features

- **Account screening:** submit a Stellar account address to `POST /risk/score`; view the score, threshold, observed metrics, and individual signals returned by the API.
- **Contract event feed:** load and paginate `GET /events?limit=20&cursor=...`. If contract/RPC configuration is missing, the dashboard explains that the feed is unavailable.
- **Network health:** `GET /network/status` reports the configured Stellar network, Soroban RPC health, and latest ledger independently of frontend-to-API connectivity.
- **Operational states:** API errors, loading, no signals, and no contract events are shown explicitly. The dashboard does not invent example activity or scores.

## API response shape

The account screen expects `address`, `score`, `risk_level`, `threshold`, `threshold_exceeded`, `signals`, `metrics`, `source`, and `as_of` from `POST /risk/score`. Event pages contain `events`, `next_cursor`, and optionally `source`. Keep API changes coordinated with `sentinel-backend`.

## Checks

```bash
npm run lint
npm run build
```

## Implementation

Built with Next.js App Router, React, and TypeScript. The interface uses the repository's CSS design system and native accessible form/table primitives; no Tailwind or component-framework runtime is required.
