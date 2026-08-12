# Operations

How to run, build, deploy, and maintain `dev-portfolio`. Pairs with
[`../technical/ARCHITECTURE.md`](../technical/ARCHITECTURE.md), which
covers *what* the codebase is; this covers *how to work with it*.

## 1. Local setup

**Prerequisites:**
- Node.js 22 (matches what CI uses — see [CI/CD](#3-cicd)).
  <!-- TODO: no .nvmrc/.node-version is committed; if you add one, update this line -->
- Yarn (the repo has a committed `yarn.lock`; use Yarn for installs so
  the lockfile stays authoritative).

**Steps:**

```bash
git clone git@github.com:chadrakdev/dev-portfolio.git
cd dev-portfolio
yarn install
yarn dev
```

`yarn dev` starts the Vite dev server (default `http://localhost:5173`)
with hot module reload.

**Environment variables:** none. There's no `.env` file, no
`import.meta.env.*` usage anywhere in `src/`, and nothing in `.gitignore`
suggests one is expected. The only environment-sensitive values
(Netlify auth token, site ID) are CI/deploy secrets, not something you
need locally — see [Build & deploy](#2-build--deploy).

**Other scripts you'll use locally:**

```bash
yarn lint            # ESLint (flat config, eslint.config.js)
yarn tsc --noEmit     # Type-check without emitting (what CI runs)
yarn format:check     # Prettier — check formatting without changing files
yarn format           # Prettier — reformat in place
yarn build            # Full production build (tsc -b && vite build)
yarn preview          # Serve the built dist/ locally, for a last check before deploying
```

## 2. Build & deploy

**Build:**

```bash
yarn build
```

This runs `tsc -b && vite build` (see `package.json` → `scripts.build`).
`tsc -b` type-checks the whole project (using project references across
`tsconfig.app.json` / `tsconfig.node.json`) and fails the build on type
errors before Vite ever bundles anything. Output goes to `dist/`
(gitignored).

**Deploy:** fully automated via GitHub Actions — there is no manual
deploy step.

- Every push to `main` triggers `.github/workflows/deploy.yml`, which
  builds the app, then deploys `dist/` to **Netlify** via
  `npx netlify-cli deploy --prod --dir=dist`.
- Netlify auth is via two GitHub repo-level values used as env vars in
  that step: `NETLIFY_AUTH_TOKEN` (secret) and `NETLIFY_PROJECT_ID`
  (variable). <!-- TODO: confirm these are still the correct secret/variable names if deploy ever starts failing on auth -->
- The site is live at both `chadrakdev.netlify.app` and the custom
  domain `chadrak.dev` (see the smoke-test step below — both URLs are
  checked).
- **SPA routing on Netlify** depends on `public/_redirects`
  (`/* /index.html 200`). If routes other than `/` start 404ing on
  Netlify after a deploy, check this file wasn't removed or that Netlify
  is actually picking it up from `dist/`.

There is no separate staging environment — `main` is production.

## 3. CI/CD

Two workflows, both in `.github/workflows/`:

### `pr-checks.yml` — runs on every PR, and on every push to `main`

Jobs run in sequence (`lint` → `build` → `test`):

1. **Lint** — `yarn lint` (ESLint) and `yarn tsc --noEmit` (type check).
2. **Build** — `npm run build` (full production build; catches anything
   lint/type-check didn't).
3. **Test** — currently a placeholder: `echo "Tests will run here"`.
   No actual tests run yet.

**What "green" actually verifies today:** the code lints clean, type
checks clean, and produces a working production bundle. It does **not**
verify runtime behavior — there's no automated check that the app
actually renders correctly, since the test job is a no-op.

Has `concurrency` configured to cancel superseded runs on the same
branch/ref, so pushing again quickly cancels the older run.

### `deploy.yml` — runs on push to `main` only

Jobs run in sequence (`build` → `test` → `deploy` → `smoke-test`):

1. **Build** — `npm run build`, uploads `dist/` as a workflow artifact.
2. **Test** — same placeholder as above.
3. **Deploy** — downloads the `dist/` artifact, deploys it to Netlify.
4. **Smoke test** — after deploy, `curl`s both
   `https://chadrakdev.netlify.app/` and `https://chadrak.dev/` and
   fails the workflow if either doesn't return HTTP 200.

So a successful `deploy.yml` run means: it built, it deployed, and both
production URLs are actually reachable afterward — a real (if shallow)
end-to-end check.

**Note:** both workflows install dependencies with
`yarn install --frozen-lockfile` but then invoke build/lint via a mix of
`npm run build` and `yarn lint`. This works (both just run the
`package.json` scripts) but is inconsistent.
<!-- TODO: pick one package manager invocation style and use it everywhere -->

## 4. Common tasks

### Add or update a job / project (the most common content change)

- Jobs: edit `src/data/work.data.ts`. Each entry is a `WorkHistory`
  object — note that `end` is required unless `isCurrent: true` (see
  [ARCHITECTURE.md § design decisions](../technical/ARCHITECTURE.md#5-design-decisions--trade-offs)
  for why). When starting a new current role, set the previous one's
  `isCurrent: false` and give it an `end` date.
- Projects: edit `src/data/projects.data.ts`. Each entry is a
  `ProjectHistory` object (`id`, `title`, `url`, `description`).
- Both arrays are rendered newest-last / newest-first depending on the
  component (`Work.tsx` reverses the array before rendering — check
  there if ordering looks wrong after an edit).
- Commit, push, open a PR (or push straight to `main` if working solo
  without review) — CI + deploy handle the rest.

### Add a new page/route

1. Create the component under `src/components/pages/`.
2. Add a `<Route>` for it in `src/App.tsx`, wrapped in
   `<AnimatedContainer>` to match the existing routes' fade-in behavior.
3. Add a nav link in `src/components/navigation/NavBar.tsx` if it should
   be reachable from the nav bar.
4. Add the route's title to the `parsePath` switch in `App.tsx` so the
   document title updates correctly.

### Add a new reusable styled component

Put it in the relevant file under `src/components/styled/`
(`StyledText.ts`, `StyledContainers.ts`, `StyledLinks.ts`,
`StyledIcons.ts`) following the existing pattern: `styled(X, {
shouldForwardProp: ... })<{ someBooleanProp?: boolean }>(({ someBooleanProp, theme }) => ({ ... }))`.
Reuse theme palette tokens (`theme.palette.strongText`,
`theme.palette.surfaceHover`, etc.) instead of hardcoding
mode-dependent hex colors — see `theme.ts`.

### Add a dependency

```bash
yarn add <package>          # runtime dependency
yarn add -D <package>       # dev dependency
```

Commit the updated `package.json` and `yarn.lock` together.

### Update a dependency

```bash
yarn upgrade <package>              # respects the semver range in package.json
yarn upgrade <package> --latest     # ignores the range, jumps to latest
```

After upgrading, run the full check locally before pushing:

```bash
yarn install && yarn lint && yarn tsc --noEmit && yarn build
```

Pay particular attention to major version bumps of `react`, `react-dom`,
`react-router-dom`, and `@mui/*` — these are the packages most likely to
have breaking changes that show up as type errors or runtime warnings.

### Bump the Node version

1. Update `node-version:` in both `.github/workflows/deploy.yml` and
   `.github/workflows/pr-checks.yml` (currently `22` in each — there are
   two separate `setup-node` steps per file, one per job, so check all
   of them).
2. If you add a `.nvmrc`/`.node-version` file locally, keep it in sync
   with the CI value.
3. Re-run `yarn install` locally under the new Node version and confirm
   `yarn build` still passes.

## 5. Troubleshooting

- **`yarn build` fails with type errors that `yarn dev` didn't show.**
  Vite's dev server doesn't type-check on every change the way `tsc -b`
  does during a full build. Run `yarn tsc --noEmit` directly to get the
  same check locally without doing a full build.

- **ESLint is reporting errors from `dist/`.** Shouldn't happen —
  `eslint.config.js` has `{ ignores: ["dist"] }` as its first entry. If
  this regresses, check that entry is still present and still first (or
  at least present) in the config array.

- **Routes other than `/` 404 after a Netlify deploy.** Check
  `public/_redirects` still contains `/* /index.html 200` and is present
  in the built `dist/` output (Vite copies everything in `public/` as-is
  into `dist/` — confirm it's not accidentally excluded).

- **Deploy step fails on Netlify auth.** Check the `NETLIFY_AUTH_TOKEN`
  secret and `NETLIFY_PROJECT_ID` repo variable are still set and valid
  in the GitHub repo settings — these aren't stored in the repo itself.
  <!-- TODO: confirm where/how to rotate the Netlify token if it expires -->

- **Prettier and ESLint disagree about formatting.** Shouldn't happen —
  `eslint-config-prettier` is the last entry in `eslint.config.js`
  specifically to disable ESLint's own stylistic rules in favor of
  Prettier. If a new ESLint plugin gets added later, make sure it's
  added *before* `eslintConfigPrettier` in the config array, not after.

- **Something else entirely.**
  <!-- TODO: fill in as new issues come up — that's the point of this section -->
