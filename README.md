# Pardesiya

A deployable travel planner and gallery for India. Indian kraft / cardboard aesthetic.

```
frontend/   Vite + React + TypeScript
backend/    Express API + JSON CMS store
```

## Run

Terminal 1:

```bash
cd backend
npm run dev
```

Terminal 2:

```bash
cd frontend
npm run dev
```

Open http://localhost:5173

CMS for non-technical editors: http://localhost:5173/admin  
Default password: `pardesiya-edit` (set `CMS_PASSWORD` in `backend/.env`)

## What is in this pass

- Home: hero, console menu, scrollable side panel, interactive India map, 3×2 gallery, products, sponsors, brand story, vision/team/social, contacts
- Per-state pages with Culture, Festival, Language, Art, Food, Hidden Gems
- Separate Forum page (placeholder threads)
- File-based CMS so copy can be edited without a deploy

## Later

Rate limiting, real user logins, Postgres for the forum, caching/CDN, and keeping API secrets on the server only.
