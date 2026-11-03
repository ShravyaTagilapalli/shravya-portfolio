# Project memory

## Product intent & audience

- Personal portfolio for Shravya Tagilapalli, presenting enterprise IT/application support experience and a transition toward Data Analytics.
- Primary audience: recruiters, hiring managers, and professional contacts.
- Existing verified professional, project, education, certification, contact, and downloadable-asset content should be preserved while presentation is upgraded.
- Deployment target remains GitHub Pages at `https://ShravyaTagilapalli.github.io/shravya-portfolio/`.

## Brand personality & voice

- Executive, polished, credible, and technically grounded.
- Position the portfolio as an experienced enterprise IT professional growing into Data Analytics.
- Keep claims factual; distinguish established expertise from technologies currently being learned.
- Avoid invented achievements, ratings, client engagements, or unsupported project details.

## Visual design & UX direction

- Current redesign direction is premium Executive Tech: navy and teal branding replacing the former purple-gradient emphasis.
- Use structured layouts, strong hierarchy, restrained contrast, clean cards, and professional whitespace rather than generic templates.
- Hero uses a professional split-screen composition; navigation is elegant and sticky.
- Experience is presented as a full-width career timeline.
- Skills use grouped technical cards with lightweight icons; avoid proficiency bars and percentage ratings.
- Projects use responsive case-study cards and separate professional/enterprise work from Data Analytics work.
- Education, certifications, contact, expertise, career-transition content, footer, back-to-top control, and case-study modals have been restyled consistently.
- Preserve light/dark theme support, subtle interactions, readable contrast, semantic structure, keyboard usability, responsive layouts, and reduced-motion considerations.
- Important deployment-sensitive assets include profile photo, resume, Excel workbook, dashboard screenshot, case-study screenshots, and internal section/navigation links.

## Decisions, constraints & rationale

- `vite.config.ts` retains the Vite base path `/shravya-portfolio/`; asset and download references must work beneath that subpath.
- `.github/workflows/deploy.yml` and the existing `npm run build` deployment flow are preserved.
- GitHub Pages remains static hosting; no server requirement or repository migration is intended.
- Existing components were restyled or reorganized in place instead of replacing the application or deleting project content.
- Skills were regrouped to distinguish established skills from currently learning technologies. Learning status must not imply expertise.
- The Reject Shop project remains an educational TDAI Data Analytics course assignment using its verified Excel dashboard, screenshot, and original workbook format.
- Existing case-study modals and project entries should remain accessible without duplication.
- Production build passes after the navy/teal redesign and path checks. A missing `FileSpreadsheet` import in the Reject Shop modal was identified and fixed.
- Verified built output includes the `/shravya-portfolio/` prefix for resume, workbook, and profile-photo paths; section anchors were also confirmed.
- Supabase is present in dependencies but unused by the current static application; do not introduce backend dependence without a future requirement.
- Git synchronization was not completed because the working directory was not available as a Git repository and no GitHub connection was available.

## Open questions & assumptions

- Confirm that the latest source changes are synchronized to `ShravyaTagilapalli/shravya-portfolio`.
- Confirm GitHub Pages is configured to deploy from GitHub Actions and that the workflow has required permissions.
- Browser-level validation remains outstanding for mobile layouts, dark mode, reduced-motion behavior, navigation, downloads, case-study modals, and responsive screenshots.
- The favicon still references `/vite.svg`, which may fail under the GitHub Pages subpath and should be replaced or made base-path aware.
- Confirm the dashboard screenshot contains no unintended manager, buyer, or other private names.
- Reassess static-hosting assumptions if future portfolio features add backend or Supabase functionality.