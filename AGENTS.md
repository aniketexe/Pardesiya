# Pardesiya

Travel planner and cultural gallery for India. Indian kraft / cardboard aesthetic.

## Layout

- `frontend/` — Vite + React + TypeScript (public site + `/admin` CMS)
- `backend/` — Express API and JSON content store

Do not put API keys, CMS passwords, or database credentials in frontend code or `VITE_*` variables.

## Run locally

```bash
cd backend && npm run dev
cd frontend && npm run dev
```

Frontend: http://localhost:5173  
API: http://localhost:4000  
CMS: http://localhost:5173/admin (password from `backend/.env` `CMS_PASSWORD`)

## Content

Seeded JSON lives in `backend/data/content.json` (created on first boot). Non-technical editors change copy, gallery, products, states, and forum threads via `/admin`. The site reads everything through `/api`.

## Later (not in this pass)

Rate limiting, real logins, Postgres for the forum, caching/CDN, secret management. Keep those in the backend; the browser should only receive public content.
