# Michelle D. Greenberg, LCSW‑C — Website

This is a ready-to-run React + Tailwind site for your practice.

## Quick start
```bash
npm install
npm run dev
```

Open the URL printed in your terminal (usually http://localhost:5173).

## Build for production
```bash
npm run build
npm run preview
```

## Files to edit
- `src/App.jsx`: Main website content (hero, about, services, etc.).
- `src/assets/headshot.png`: Your photo (already included).
- In `App.jsx`, update email/phone/address as needed.

## Deploy to Netlify
1. Push this folder to a GitHub repo.
2. On Netlify, **Add new site → Import an existing project**.
3. Build command: `npm run build`  •  Publish directory: `dist`
4. After deploy, add your custom domain `michellegreenberglcsw.com` in **Domain settings** and follow DNS instructions.
5. Enable HTTPS (Netlify provides free SSL).

## Notes
- Tailwind is preconfigured via `tailwind.config.js` and `postcss.config.js`.
- If you change the image name/location, update the import in `src/App.jsx`.
