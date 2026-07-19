## Summary

<!-- One or two sentences explaining what this PR does and why. -->

## Changes

<!-- Bullet list of specific changes made. -->

- 

## Type of Change

- [ ] Bug fix (non-breaking, fixes an issue)
- [ ] New feature (non-breaking, adds functionality)
- [ ] Breaking change (fix or feature that changes existing behavior)
- [ ] Documentation update
- [ ] Refactor (no functional change)
- [ ] Performance improvement
- [ ] Dependency update

## Related Issues

<!-- Use "Closes #N" to auto-close the linked issue on merge. -->

Closes #

## Testing

<!-- Describe how you tested this change. What scenarios did you verify? -->

- [ ] Ran `pnpm run typecheck` — no errors
- [ ] Ran codegen if OpenAPI spec changed: `pnpm --filter @workspace/api-spec run codegen`
- [ ] Tested the affected UI flows manually
- [ ] Tested the affected API endpoints

## Screenshots / Recordings

<!-- For UI changes, include a screenshot or screen recording. -->

## Checklist

- [ ] My branch is up to date with the target branch
- [ ] I have followed the commit message convention (`feat:`, `fix:`, etc.)
- [ ] I have not committed secrets, credentials, or sensitive values
- [ ] New or changed API endpoints are documented in `lib/api-spec/openapi.yaml`
- [ ] Generated files (`lib/api-client-react/src/generated/`, `lib/api-zod/src/generated/`) are up to date
- [ ] I have updated documentation if needed
