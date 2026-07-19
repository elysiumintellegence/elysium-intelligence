# Deployment

This document covers deploying Elysium Intelligence to production.

## Production Environment

The application is hosted on [Replit](https://replit.com) with automatic deployment from the `main` branch.

- **Production URL**: https://www.elysiumintellegence.com
- **Platform**: Replit (containerized Node.js 24)
- **Database**: Replit managed PostgreSQL (auto-provisioned)

## Deployment Workflow

```
Developer → git push origin main
                │
                ▼
          GitHub CI (typecheck + build)
                │
                ▼ (on CI pass)
          Replit auto-deploy
                │
                ├── Build frontend: vite build
                ├── Build API server: esbuild
                ├── Diff schema → apply to production DB
                └── Traffic switches to new deployment
```

## Environment Variables in Production

All secrets are managed through Replit's Secrets panel — never committed to the repo.

| Variable | Description |
|---|---|
| `DATABASE_URL` | Auto-provisioned by Replit (do not set manually) |
| `SESSION_SECRET` | Set in Replit Secrets panel |
| `NODE_ENV` | Set to `production` by Replit runtime |
| `PORT` | Set by Replit artifact runner |
| `BASE_PATH` | Set by Replit artifact runner |

## Production Database

Replit automatically manages the PostgreSQL database:

- **Development → Production schema migration** happens at publish time
- Replit diffs the dev schema against production and applies the diff
- No custom migration scripts are needed or allowed
- Do not run `drizzle-kit push` against production directly

To push dev schema to production, use the Replit Publish UI — it will show the diff and ask you to confirm renames.

## Zero-Downtime Deploys

Replit uses rolling deploys. The old instance continues serving traffic until the new instance passes its health check at `/api/healthz`.

## Rollback

To roll back to a previous version:

1. Open the Replit Checkpoints panel
2. Select the checkpoint from before the bad deploy
3. Restore it — this rolls back both code and database schema

## Health Check

The API server exposes a health endpoint:

```
GET /api/healthz
→ 200 { "status": "ok" }
```

Replit monitors this endpoint. If it returns non-200 for >30 seconds after deploy, the deploy is aborted and the previous version is restored.

## Monitoring

- **Uptime**: Replit provides uptime monitoring with alerting
- **Logs**: Available in the Replit workspace under the Logs pane
- **Error tracking**: Check browser console logs and server logs in the Replit workspace

## Manual Deploy (if needed)

```bash
# Build and verify everything passes locally before manual push
pnpm run typecheck
pnpm --filter @workspace/api-server run build
pnpm --filter @workspace/elysium-web run build

# Then push to main
git push origin main
```
