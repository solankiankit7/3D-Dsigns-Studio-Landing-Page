# Dsigns Studio — Immersive 3D Landing

Premium landing page for architecture & interiors with a **full‑screen 3D villa** background and guided camera tour.

## Stack
- Next.js (App Router), React 18
- React Three Fiber + Drei
- GSAP camera tour
- Tailwind CSS
- Motion‑aware fallback

## Quickstart
```bash
npm install
npm run dev
# open http://localhost:3000
```

## Add Your Villa GLB + HDRI
1. Put your model at: `public/models/villa.glb` (glTF/GLB 2.0; consider Draco compression).
2. Optional: place an HDR environment at `public/hdr/studio_small_08_1k.hdr` (or any .hdr).
3. Reload; the scene will auto‑load the model. If missing, a tasteful massing fallback shows.

### Performance Tips
- Compress geometry with **Draco**.
- Compress textures with **KTX2** (BasisU).
- Provide LODs for heavy interiors and lazy‑load rooms.
- Use smaller HDRIs on mobile.

## Customize Branding
- Edit `config/brand.ts` and Tailwind brand palette in `tailwind.config.js`.


---

## Default Model (CC0) Preconfigured
This starter loads a CC0 GLB by default:
- **Source:** SpectraStudios / SourceCityToolkit_glb — `SKY_apartment_4_sky_day_ar2.glb`
- **Raw URL:** https://raw.githubusercontent.com/SpectraStudios/SourceCityToolkit_glb/main/SKY_apartment_4_sky_day_ar2.glb
- **License:** CC0-1.0 (public domain). *Exception note in repo mentions textures.com assets cannot be redistributed.*
  - Repo: https://github.com/SpectraStudios/SourceCityToolkit_glb

To swap your own villa:
1. Remove `NEXT_PUBLIC_MODEL_URL` from env (or leave empty).
2. Place your file at `public/models/villa.glb` and the app will prefer the local file path.
3. (Optional) Add `/public/hdr/*.hdr` to upgrade lighting.

