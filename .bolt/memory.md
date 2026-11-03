# Project memory

## Product intent & audience

- Personal portfolio for Shravya Tagilapalli, showcasing professional experience and Data Analytics projects.
- Intended for recruiters, hiring managers, and other professional visitors.
- Deployment target is GitHub Pages at `https://ShravyaTagilapalli.github.io/shravya-portfolio/`.
- Existing portfolio content and functionality should be preserved rather than redesigned.

## Brand personality & voice

- Professional, polished, and portfolio-oriented.
- Existing visual identity includes purple gradients, animations, and dark/light mode.
- Preserve the established presentation of experience, projects, profile information, and downloadable work.

## Visual design & UX direction

- Maintain the current design, navigation, animations, purple gradient treatment, and dark/light theme.
- Preserve existing professional experience and Data Analytics project sections.
- Asset URLs and internal navigation must work from the `/shravya-portfolio/` GitHub Pages subpath, not only from the domain root.
- Relevant deployment-sensitive assets include the profile photo, resume download, Excel dashboard download, and case-study screenshots.
- Production build output should be treated as the source of truth for checking rewritten asset references.

## Decisions, constraints & rationale

- Vite production base path is configured as `/shravya-portfolio/` in `vite.config.ts`.
- Added `.github/workflows/deploy.yml` for deployment on pushes to `main`; it uses `npm ci`, `npm run build`, and deploys the generated `dist` directory through GitHub Actions.
- Updated deployment-sensitive paths in:
  - `src/components/sections/Hero.tsx`
  - `src/data/content.ts`
  - `src/data/rejectShopCaseStudy.ts`
- The production build completed successfully after the path changes.
- Supabase appears in dependencies but is not called from `src`; current site functionality is static and does not require Supabase.
- No redesign, content deletion, or new repository creation was intended.
- Local Git synchronization was not completed because the working folder was not available as a Git repository and Git commands could not be run from the current environment.
- Repository target is the existing public `ShravyaTagilapalli/shravya-portfolio`.

## Open questions & assumptions

- GitHub synchronization still needs confirmation; the workflow and source changes must reach the existing repository.
- GitHub Pages may need its source set to **GitHub Actions** in repository settings.
- The live GitHub Pages URL was not checked; verify deployment completion, asset downloads, screenshots, internal links, theme switching, and client-side navigation after the workflow runs.
- Confirm that the workflow has sufficient repository permissions for Pages deployment and that the default branch is `main`.
- Supabase-related static-hosting concerns are currently considered inactive because no application code uses it; reassess if future features add backend-dependent behavior.