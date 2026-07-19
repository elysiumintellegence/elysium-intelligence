# Security Policy

## Supported Versions

| Version | Supported |
|---|---|
| Latest `main` | Yes |
| Older tags | No |

## Reporting a Vulnerability

**Do not open a public GitHub issue for security vulnerabilities.**

If you discover a security vulnerability in this project, please report it responsibly:

1. Email **security@elysiumintellegence.com** with subject: `[SECURITY] Brief description`
2. Include:
   - Description of the vulnerability
   - Steps to reproduce
   - Potential impact
   - Any suggested fix (optional)

We will acknowledge your report within **48 hours** and provide a timeline for a fix within **7 days**.

## Disclosure Policy

We follow responsible disclosure. Once a fix is released, we will:
- Credit the reporter (unless they prefer anonymity)
- Publish a brief advisory in the repository's Security Advisories

## Scope

In scope:
- `artifacts/api-server/` — Express API
- `artifacts/elysium-web/` — React frontend
- `lib/` — Shared libraries
- Authentication and session handling
- Database access patterns

Out of scope:
- Third-party dependencies (report directly to the dependency maintainer)
- Issues on deployed infrastructure not related to application code
- Social engineering

## Security Best Practices in This Repo

- All secrets are managed via Replit Secrets (never committed)
- Database queries use parameterized statements via Drizzle ORM
- Session secrets are validated at startup (minimum 32 characters)
- API inputs are validated with Zod schemas generated from the OpenAPI spec
- CORS is configured to restrict allowed origins in production
