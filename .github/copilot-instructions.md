# Copilot Workspace Instructions — Byron C Linder LLC

## Business Context
- **Company**: Byron C Linder LLC — an IT consultancy based in Chester, PA.
- **Product**: `rapid-ai-landing` — a marketing / lead-capture landing page for AI-powered consulting services.
- **Audience**: Small-to-mid-sized businesses looking for AI and technology modernisation advice.

## Tech Stack
| Layer | Technology |
|-------|------------|
| Frontend | React 19, Vite 8, plain CSS (CSS custom properties) |
| Backend API | Python 3, FastAPI |
| Deployment | GitHub Pages (frontend), configurable host for FastAPI |
| CI/CD | GitHub Actions |

## Coding Conventions
- Use **functional React components** with hooks (`useState`, `useEffect`, etc.).
- Keep component files in `src/` and name them with PascalCase (e.g. `LandingPage.jsx`).
- Use **CSS custom properties** already defined in `src/index.css` (`--accent`, `--text-h`, `--bg`, etc.) for all colour values — do not hardcode colours.
- Backend API base URL must always be read from the `VITE_API_URL` environment variable (set in `.env`); never hardcode URLs.
- All `fetch` calls to the FastAPI backend must include `Content-Type: application/json` and proper error handling (network errors + non-2xx responses).
- Follow the existing ESLint configuration (`eslint.config.js`).

## Branding
- Primary accent colour: `#aa3bff` (light mode) / `#c084fc` (dark mode) — already set as `--accent` in CSS.
- Headings font: system-ui stack (already set as `--heading`).
- Tone: professional, concise, and confident. Avoid filler phrases.

## FastAPI Integration
- The FastAPI backend exposes a `POST /leads` endpoint that accepts `{ name, email, message }`.
- Use the `VITE_API_URL` env variable for the base URL (e.g. `http://localhost:8000`).
- Always handle both network-level failures and HTTP error status codes, and surface a user-friendly message in the UI.

## GitHub Pages Deployment
- The Vite `base` is set to `/rapid-ai-landing/` to match the GitHub Pages sub-path.
- Production builds go to the `dist/` folder and are deployed to the `gh-pages` branch via GitHub Actions.
- Never commit the `dist/` folder or `node_modules/` to source branches.
