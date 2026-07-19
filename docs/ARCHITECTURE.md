# Architecture

This document describes the system architecture of the Elysium Intelligence web application.

## Overview

The project is a **pnpm monorepo** structured around the principle of contract-first API development. The OpenAPI specification in `lib/api-spec/openapi.yaml` is the single source of truth for all API contracts — the frontend and server are generated from it, not the other way around.

```
Browser → Reverse Proxy → elysium-web (Vite/React) [port: dynamic]
                       → api-server (Express 5)      [port: dynamic]
                              ↓
                         PostgreSQL (Drizzle ORM)
```

## Monorepo Layout

```
elysium-intelligence/
├── artifacts/                     # Runnable services
│   ├── elysium-web/               # React + Vite frontend
│   │   ├── src/
│   │   │   ├── components/        # Reusable UI components
│   │   │   ├── pages/             # Route-level page components
│   │   │   ├── App.tsx            # Router root
│   │   │   └── index.css          # Tailwind theme + CSS vars
│   │   └── vite.config.ts
│   └── api-server/                # Express REST API
│       └── src/
│           ├── routes/            # Route handlers
│           ├── middlewares/       # Express middlewares
│           └── lib/               # Shared server utilities
│
├── lib/                           # Shared libraries (composite TS)
│   ├── api-spec/
│   │   └── openapi.yaml           # OpenAPI 3.1 spec — EDIT HERE FIRST
│   ├── api-client-react/
│   │   └── src/generated/         # Generated React Query hooks (don't edit)
│   ├── api-zod/
│   │   └── src/generated/         # Generated Zod schemas (don't edit)
│   └── db/
│       └── src/schema/            # Drizzle table definitions
│
└── scripts/                       # Internal tooling scripts
```

## Data Flow

### API Contract (OpenAPI → Code)

```
lib/api-spec/openapi.yaml
         │
         ▼  pnpm --filter @workspace/api-spec run codegen
         │
    ┌────┴──────────────────────────────────────────┐
    │                                               │
    ▼                                               ▼
lib/api-client-react/src/generated/     lib/api-zod/src/generated/
  api.ts (React Query hooks)              api.ts (Zod validators)
  api.schemas.ts (TS types)
         │                                           │
         ▼                                           ▼
  artifacts/elysium-web/              artifacts/api-server/
  (frontend imports hooks)            (server imports Zod schemas)
```

**Rule**: Never hand-write types or hooks that codegen already produces. Run codegen after every spec change.

### Request Lifecycle

```
1. Browser makes request to /<path>
2. Reverse proxy routes by path prefix:
   - /api/* → api-server (Express)
   - /* → elysium-web (Vite dev / static build)
3. Express validates request body with Zod schema
4. Route handler queries PostgreSQL via Drizzle ORM
5. Response is typed by the shared schema
```

## Key Design Decisions

### 1. Contract-First API

The OpenAPI spec gates all development. This ensures:
- Frontend and server always agree on types at compile time
- API is self-documenting
- Client hooks and server validators never drift

### 2. Shared Libs Are Composite TypeScript

Libraries in `lib/` use TypeScript composite mode (`composite: true`) and emit declarations. Artifacts reference libs via pnpm workspace links. This gives the root `tsconfig.json` a proper build graph.

**Do not** add artifacts to the root `tsconfig.json` references — they are leaf packages.

### 3. Logging: pino, Never console.log

The server uses `pino` for structured JSON logging. In routes: `req.log.info(...)`. Outside routes: import the singleton `logger` from `src/lib/logger.ts`. `console.log` in server code is a lint error.

### 4. Path-Based Routing (No Subdomain Split)

Both the frontend and API are served from the same domain through a reverse proxy. The proxy uses path-prefix matching:
- `/api` → Express server
- `/` → Vite app

This simplifies CORS (same origin) and avoids cookie/auth complexity.

### 5. Production Schema Migrations

Schema changes go through Replit's publish flow. The agent (and no custom scripts) applies DDL to production. The dev workflow is `drizzle-kit push`; the prod workflow is automatic diff-and-apply on publish.

## Frontend Architecture

### Canvas Animation

The hero canvas animation is a WebGL-lite implementation using the 2D Canvas API. It renders:
- ~25 vertical fiber-optic light streams with glow halos
- Subtle dot grid overlay for depth
- requestAnimationFrame loop, cleaned up on unmount

### State Management

No global state manager. Uses:
- React Query for server state (generated hooks from `@workspace/api-client-react`)
- React local state (`useState`, `useReducer`) for UI state
- No Redux, no Zustand (unnecessary complexity for this app)

### Routing

Client-side routing via `wouter`. All routes defined in `src/App.tsx`. The app is mounted at `BASE_PATH` (set by Vite from the artifact's `previewPath`).

## Environment Variables

| Variable | Where Used | Notes |
|---|---|---|
| `DATABASE_URL` | `lib/db`, `api-server` | Full Postgres connection string |
| `SESSION_SECRET` | `api-server` | Min 32 chars, used for session signing |
| `PORT` | All services | Injected by artifact runner |
| `BASE_PATH` | `elysium-web` | Injected by artifact runner; prefix for all routes |
| `NODE_ENV` | All | `development` or `production` |
