# Portfolio

Minimal, config-driven portfolio site. Built with Next.js (static export), TypeScript and Tailwind CSS. Deployed automatically to GitHub Pages on every push to `main`.

Live: https://mayt-as.github.io/portfolio_v2/

## Updating your info

All content lives in **`content/`** — nothing else needs to change to add a job, a project, a skill, or a certification.

| File | Controls |
|---|---|
| `content/site.ts` | Name, role, tagline, email, resume/avatar paths, social links, SEO |
| `content/experience.ts` | Work history (companies → roles → highlights) |
| `content/projects.ts` | Project cards |
| `content/skills.ts` | Skill groups/chips |
| `content/education.ts` | Degrees |
| `content/certifications.ts` | Certifications |
| `content/index.ts` | **The page itself** — which sections exist, their order, titles, and nav labels |

To reorder the page, reorder the `sections` array in `content/index.ts`. To hide a section without deleting its content, add `enabled: false` to its entry. A section with an empty list (e.g. `projects: []`) hides itself automatically — no flag needed.

To add a section type that doesn't exist yet (a new kind of content, not just new data), there's a `custom` section type — see the commented example in `content/index.ts` and the shape in `lib/types.ts`. For anything beyond that, add a new `type` in `lib/types.ts`, a component in `components/sections/`, and one line in `components/Section.tsx`'s switch.

Static files (resume PDF, avatar, logos) go in `public/` and are referenced by path in `content/site.ts` etc. — e.g. `/satyam_avatar.png`.

## Local development

```bash
npm install
npm run dev       # http://localhost:3001
```

```bash
npm run build      # static export -> ./out
npm run typecheck   # tsc --noEmit
npm run lint
```

## Deployment

`.github/workflows/nextjs.yml` builds the static export and publishes it via GitHub Pages on every push to `main` — no manual steps. It sets `NEXT_PUBLIC_BASE_PATH=/portfolio_v2` at build time because this is a GitHub *project* page (`mayt-as.github.io/portfolio_v2`), not a root user page.

To move to a custom domain or a root `mayt-as.github.io` page later:
1. Remove the `NEXT_PUBLIC_BASE_PATH` line from the workflow (or set it to `""`).
2. Update `site.url` in `content/site.ts`.
3. Add a `CNAME` file under `public/` if using a custom domain.

No other code changes are required — `next.config.js` and `lib/utils.ts#asset()` read the base path from that single env var.

## Stack

- **Next.js 14** (static export, App Router)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion** for scroll-reveal only (no particle/canvas effects — kept deliberately light)
- **lucide-react** for icons, referenced by name from content files

## Structure

```
app/                 layout, page, global styles
components/
  sections/           one component per section type (Hero, About, Experience, ...)
  Section.tsx         dispatches a content entry to its component
  Nav.tsx, Footer.tsx
content/              <- you edit this
lib/
  types.ts            section/content shape definitions
  sections.ts         visibility + nav derivation
  utils.ts            cn(), asset()
public/               resume, avatar, logos
```
