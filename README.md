# Stellar Sentinel — Frontend

[![CI](https://github.com/Stellar-Sentinel/sentinel-frontend/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/Stellar-Sentinel/sentinel-frontend/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

The web experience for **Stellar Sentinel**, an early-stage project exploring clear, explainable risk monitoring for the Stellar network and Soroban smart contracts. This repository currently contains the public landing page and an illustrative dashboard preview. The preview is sample content; it is not connected to Stellar or the backend.

## What the page showcases

- A product introduction focused on activity monitoring for Stellar and Soroban.
- A dashboard concept with example activity metrics, a chart, and review signals. It is visibly labeled as sample data.
- The intended workflow: observe network activity, review contextual risk signals, and connect decisions to Soroban.

The page is built with the Next.js App Router, React, TypeScript, and custom responsive CSS. The main page is in `app/page.tsx`; shared styles are in `app/globals.css`; page metadata is in `app/layout.tsx`.

## How Stellar fits in

Stellar is the network this product is designed to monitor, and Soroban is the smart contract platform used for on-chain risk registry actions. The frontend does not yet connect a wallet, read Stellar data, or call the backend. The dashboard visuals are provided to communicate the product direction while the data and API integrations are being built.

The intended integration is:

```text
Stellar / Soroban activity → backend risk and event APIs → future live dashboard
                                               ↘ Soroban contract actions
```

Only the landing page and visual concept are implemented in this repository today. See the [backend](https://github.com/Stellar-Sentinel/sentinel-backend) and [Soroban contract](https://github.com/Stellar-Sentinel/sentinel-contracts) repositories for the other project components.

## Run locally

Use Node.js 24 or a compatible current Node.js release.

```bash
npm ci
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). For a production build, run:

```bash
npm run lint
npm run build
npm start
```

## Stellar integration roadmap

1. Add a backend client and render real event data with loading, empty, and error states.
2. Add address lookup and show the backend's score breakdown and review threshold.
3. Add wallet support only when users need to authenticate or submit an on-chain action.

Do not treat the current sample dashboard scores as real risk assessments.

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md). Changes should keep sample content clearly identified and avoid presenting unimplemented monitoring as live functionality.

## License

This project is licensed under the [MIT License](LICENSE).
