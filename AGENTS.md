# AGENTS.md

## Project Rules

- Use Vite+ (`vp`) for this repository's commands.
- Use the pinned Node.js 26 and pnpm 12 versions.
- Define repository commands as Vite Task entries in `vite.config.ts`, not npm scripts.
- Evidence links must be permalinks containing a commit SHA, not branch URLs.
- Check manifests, all Vite/Vitest/tsdown config extensions, catalogs, CI workflows, and migration PRs when finding candidates. Paginate or partition searches that exceed GitHub's result limits.
- Optional peer declarations, compatibility fixtures, and documentation mentions alone are not adoption evidence.
- Check the `vuejs/core` `minor` branch in addition to the default branch.
- The default inclusion threshold is public, non-fork, and at least 50 stars.
- Render star counts as approximate lower-bound Shields badges, for example `142k+`.

## Update Prompt

```text
Update awesome-vp.

Requirements:
- Find GitHub repositories using Vite+ (`vite-plus` / `vp`).
- Search manifests, all config extensions, catalogs, CI workflows, and migration PRs. Paginate or partition large result sets.
- Include only public, non-fork repositories with at least 50 stars in README.md.
- Verify stars from GitHub metadata at update time.
- Evidence links must be permalinks containing a commit SHA. Do not use branch URLs or default-branch URLs.
- Render Stars as approximate lower-bound static Shields badges, not exact numbers.
- Always check the `vuejs/core` `minor` branch and include it if it still uses Vite+.
- Update README.md Stars, Evidence, and Notes.
- Use `vp` for this repository's commands.

Verification:
- Run `vp check`.
```
