# Contributing to Elysium Intelligence

Thank you for your interest in contributing. This document outlines the process for contributing to this repository.

## Development Setup

### Prerequisites

- Node.js 24+
- pnpm 10+
- PostgreSQL 16+ (local or remote)
- Git

### Local Setup

```bash
git clone https://github.com/elysiumintellegence/elysium-intelligence.git
cd elysium-intelligence
pnpm install
cp .env.example .env
# Fill in your DATABASE_URL and SESSION_SECRET
```

## Branching Strategy

| Branch | Purpose |
|---|---|
| `main` | Production — protected, requires PR + CI |
| `develop` | Integration branch for features |
| `feat/*` | New features |
| `fix/*` | Bug fixes |
| `docs/*` | Documentation only |
| `chore/*` | Tooling, deps, config |

**All changes to `main` must go through a Pull Request.** Direct pushes are blocked.

## Workflow

### 1. Create a Branch

```bash
git checkout -b feat/model-router-ui
```

Use a descriptive branch name scoped to your change.

### 2. Make Your Changes

Follow the project conventions:

- **TypeScript**: strict mode, no `any`, no implicit returns
- **API changes**: always start with `lib/api-spec/openapi.yaml`, then run codegen
- **Database**: add new tables to `lib/db/src/schema/`, not inline in routes
- **Logging**: use `req.log` in routes and the singleton `logger` elsewhere — never `console.log`
- **Imports**: use `@workspace/*` for internal packages, `@/` for frontend aliases

### 3. Run Checks

```bash
# Full typecheck
pnpm run typecheck

# If you changed the OpenAPI spec
pnpm --filter @workspace/api-spec run codegen
pnpm run typecheck  # re-run after codegen
```

### 4. Commit

Follow [Conventional Commits](https://conventionalcommits.org):

```
feat(model-router): add latency percentile endpoint
fix(pricing): correct annual discount calculation
docs(readme): update deployment instructions
chore(deps): upgrade framer-motion to v12
```

Format: `type(scope): short description`

Types: `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`, `perf`

### 5. Open a Pull Request

- Use the PR template
- Link any related issues with `Closes #N`
- Request a review from a maintainer
- All CI checks must pass before merge

## Code Standards

### TypeScript

```typescript
// Good: explicit types, no any
function processInference(request: InferenceRequest): Promise<InferenceResult> {
  // ...
}

// Bad: implicit any, vague naming
function process(req: any) {
  // ...
}
```

### React Components

```typescript
// Good: named export, typed props
interface MetricCardProps {
  label: string;
  value: string;
  unit?: string;
}

export function MetricCard({ label, value, unit }: MetricCardProps) {
  // ...
}
```

### API Routes

```typescript
// Good: use req.log, use Zod schema from codegen
import { CreateThingInputSchema } from '@workspace/api-zod';

router.post('/things', async (req, res) => {
  const body = CreateThingInputSchema.parse(req.body);
  req.log.info({ body }, 'Creating thing');
  // ...
});
```

## OpenAPI Spec Rules

- Keep the existing `/healthz` endpoint and `HealthStatus` schema
- Every endpoint needs a unique `operationId`
- All request bodies go in `components/schemas` — never inline
- Name body schemas after the entity, not the operation (`NoteInput` not `CreateNoteBody`)
- For nullable fields: `type: ["string", "null"]` (OpenAPI 3.1 syntax)
- Run codegen after every spec change: `pnpm --filter @workspace/api-spec run codegen`

## Getting Help

- Open a [Discussion](https://github.com/elysiumintellegence/elysium-intelligence/discussions) for questions
- Open an [Issue](https://github.com/elysiumintellegence/elysium-intelligence/issues) for bugs
- Review [docs/ARCHITECTURE.md](./docs/ARCHITECTURE.md) for system design context

## Code of Conduct

Be respectful and constructive. We're building tools for engineers — treat contributors the way you'd want a great senior engineer on your team to treat you.
