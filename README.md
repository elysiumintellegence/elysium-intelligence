<div align="center">

<img src="https://elysiumintellegence.com/favicon.svg" alt="Elysium Intelligence" width="64" height="64" />

# Elysium Intelligence

**Intelligence that ships to production. Not to a slide deck.**

[![CI](https://github.com/elysiumintellegence/elysium-intelligence/actions/workflows/ci.yml/badge.svg)](https://github.com/elysiumintellegence/elysium-intelligence/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](./LICENSE)
[![Node.js 24](https://img.shields.io/badge/Node.js-24-339933?logo=node.js&logoColor=white)](https://nodejs.org)
[![pnpm](https://img.shields.io/badge/pnpm-workspace-orange?logo=pnpm)](https://pnpm.io)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?logo=typescript&logoColor=white)](https://typescriptlang.org)
[![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white)](https://react.dev)

[Live Site](https://www.elysiumintellegence.com) · [Book a Demo](https://www.elysiumintellegence.com/#demo) · [Documentation](./docs) · [Contributing](./CONTRIBUTING.md)

</div>

---

## Overview

Elysium Intelligence is a production AI infrastructure platform that watches your data, feeds your models, and heals your pipelines — so engineering teams ship decisions, not dashboards.

This repository contains the full-stack web application powering [elysiumintellegence.com](https://www.elysiumintellegence.com), built as a modern TypeScript monorepo with a React frontend, Express API server, and PostgreSQL database.

```
inference_latency → 47ms  ·  model_accuracy → 94.7% F1  ·  uptime → 99.9%
```

---

## Architecture

```
elysium-intelligence/
├── artifacts/
│   ├── elysium-web/          # React + Vite frontend (landing page)
│   └── api-server/           # Express 5 REST API
├── lib/
│   ├── api-spec/             # OpenAPI 3.1 spec (source of truth)
│   ├── api-client-react/     # Generated React Query hooks (from spec)
│   ├── api-zod/              # Generated Zod validation schemas (from spec)
│   └── db/                   # Drizzle ORM schema + migrations
├── scripts/                  # Shared utility scripts
├── docs/                     # Architecture & deployment docs
└── pnpm-workspace.yaml       # Workspace configuration
```

### Technology Stack

| Layer | Technology |
|---|---|
| Frontend | React 18, Vite 6, TailwindCSS v4, Framer Motion |
| API Server | Express 5, Node.js 24, TypeScript 5.9 |
| Database | PostgreSQL + Drizzle ORM |
| Validation | Zod v4, drizzle-zod |
| API Contract | OpenAPI 3.1, Orval codegen |
| Package Manager | pnpm workspaces |
| Build | esbuild (server), Vite (frontend) |
| Testing | Vitest |

---

## Quick Start

### Prerequisites

- [Node.js 24+](https://nodejs.org)
- [pnpm 10+](https://pnpm.io/installation)
- [PostgreSQL 16+](https://postgresql.org) (or use the cloud database)

### Installation

```bash
# Clone the repository
git clone https://github.com/elysiumintellegence/elysium-intelligence.git
cd elysium-intelligence

# Install all workspace dependencies
pnpm install
```

### Environment Variables

Copy the example environment file and fill in your values:

```bash
cp .env.example .env
```

| Variable | Description | Required |
|---|---|---|
| `DATABASE_URL` | PostgreSQL connection string | Yes |
| `SESSION_SECRET` | Secret for session signing (min 32 chars) | Yes |
| `NODE_ENV` | `development` or `production` | No |
| `PORT` | API server port (default: 5000) | No |

### Development

```bash
# Start the API server (port 5000)
pnpm --filter @workspace/api-server run dev

# Start the frontend (auto-detects PORT from environment)
pnpm --filter @workspace/elysium-web run dev

# Run full typecheck
pnpm run typecheck

# Push DB schema changes (dev only)
pnpm --filter @workspace/db run push

# Regenerate API hooks from OpenAPI spec
pnpm --filter @workspace/api-spec run codegen
```

---

## Development Workflow

### Contract-First API Development

All API changes start with the OpenAPI spec:

```
1. Edit lib/api-spec/openapi.yaml
2. pnpm --filter @workspace/api-spec run codegen
3. Implement routes in artifacts/api-server/src/routes/
4. Import generated hooks in artifacts/elysium-web/src/
```

### Database Schema

Schema lives in `lib/db/src/schema/`. After editing:

```bash
# Push to dev database
pnpm --filter @workspace/db run push

# Production migrations happen automatically on deploy via Replit's publish flow
```

### Adding a New API Endpoint

1. Add the endpoint to `lib/api-spec/openapi.yaml` with a unique `operationId`
2. Run `pnpm --filter @workspace/api-spec run codegen`
3. Add the route handler in `artifacts/api-server/src/routes/`
4. Use the generated hook in the frontend: `import { useYourHook } from '@workspace/api-client-react'`

---

## Production Deployment

The application is deployed via [Replit](https://replit.com) with automatic CI checks on every push.

```
git push origin main → CI checks → Replit auto-deploy
```

See [docs/DEPLOYMENT.md](./docs/DEPLOYMENT.md) for the full deployment runbook.

---

## Contributing

We welcome contributions from the community. Please read [CONTRIBUTING.md](./CONTRIBUTING.md) before opening a pull request.

```bash
# Create a feature branch
git checkout -b feat/your-feature-name

# Make your changes, then run checks
pnpm run typecheck

# Push and open a PR
git push origin feat/your-feature-name
```

---

## Security

If you discover a security vulnerability, please follow our [Security Policy](./SECURITY.md). Do not open a public issue for security bugs.

---

## License

MIT © 2026 [Elysium Intelligence](https://www.elysiumintellegence.com)

---

<div align="center">

Built for engineers who ship.

`mean_time_to_insight → 11min · incidents_auto_resolved → 60%`

</div>
