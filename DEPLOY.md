# Deploy — Nova Nexus Texas

Static Astro site. `npm run build` → `dist/` → any static host. Vercel is the recommended path.

---

## 1. Push to GitHub (one time)

From this project folder:

```bash
# If you haven't created a repo yet, create one at github.com/new
# (suggested name: nova-nexus-texas, private or public — your call)

git init
git add .
git commit -m "Initial Nova Nexus Texas site"
git branch -M main
git remote add origin git@github.com:<your-handle>/nova-nexus-texas.git
git push -u origin main
```

> Already in a parent repo? Skip `git init` and commit from wherever the repo root is.

---

## 2. Import into Vercel

1. Go to [vercel.com/new](https://vercel.com/new).
2. "Import Git Repository" → pick `nova-nexus-texas`.
3. Vercel auto-detects **Astro**. Leave the defaults:
   - **Framework preset:** Astro
   - **Build command:** `npm run build`
   - **Output directory:** `dist`
   - **Install command:** `npm install`
4. Click **Deploy**.

First deploy takes ~45 seconds. You'll get a preview URL like `nova-nexus-texas.vercel.app`.

---

## 3. Point `novanexustexas.com` at Vercel

In Vercel → Project → **Settings → Domains**, add `novanexustexas.com` and `www.novanexustexas.com`.

Then in **GoDaddy DNS** (or wherever your nameservers live), set:

| Type    | Name | Value                  | TTL   |
| ------- | ---- | ---------------------- | ----- |
| `A`     | `@`  | `76.76.21.21`          | 600   |
| `CNAME` | `www`| `cname.vercel-dns.com` | 600   |

> Vercel will show you the exact records when you add the domain — use those if they differ. They sometimes rotate.

Remove any conflicting A/AAAA/CNAME records that currently point to GoDaddy's Website Builder hosts (the legacy site). Without that cleanup the DNS change can look half-broken.

DNS propagates in 5–30 minutes on most setups. Vercel issues the HTTPS cert automatically once the records resolve.

---

## 4. Wire up the contact form

The form at `/contact` uses `data-netlify="true"`. That only works on **Netlify** deploys.

For Vercel, pick one of:

- **Formspree** (quickest): create a form at formspree.io, grab the endpoint, and in `src/pages/contact.astro` change the `<form>` to:
  ```html
  <form action="https://formspree.io/f/YOUR_ID" method="POST" ...>
  ```
- **Getform** / **Basin** / **Formspark**: same pattern.
- **Resend + Vercel API Route**: more work, fully customizable.

Until one is wired, the **"Book Free Discovery"** mailto button still works perfectly — that's the primary CTA anyway.

---

## 5. Swap "Book Free Discovery" to Calendly (later)

When Calendly is live:

1. Open `src/pages/contact.astro` and `src/pages/index.astro`.
2. Replace `href="mailto:lupe@novanexustexas.com?subject=Discovery%20Session"` with your Calendly booking URL.
3. Commit + push. Vercel auto-deploys.

---

## 6. Re-deploys

Every `git push` to `main` triggers a fresh production deploy. Previews go up automatically for any branch / PR.

To deploy locally without a commit:
```bash
npx vercel --prod
```

---

## Troubleshooting

- **"Build failed" on Vercel** — confirm Node 22+ in Project Settings → General → Node.js Version.
- **Domain shows old GoDaddy page** — leftover A record. Delete all GoDaddy parking/Website Builder records before adding Vercel's.
- **HTTPS cert pending** — wait 10 minutes after DNS resolves, then click "Refresh" in Vercel's Domains panel.

---

That's it. Push, import, point the domain. Welcome to modern hosting, sir.
