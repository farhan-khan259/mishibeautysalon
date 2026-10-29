# Mishi Beauty Salon

An eight-page Next.js App Router website for Mishi Beauty Salon, Bilitang, Kohat. Royal pink, ivory and champagne gold styling; original poster branding; local editorial photography; and WhatsApp appointment requests without a database.

## Run locally

Use Node.js 22.13 or newer (Node 24 recommended) and npm.

```bash
cd mishi-beauty-salon
npm ci
npm run dev
```

Open http://localhost:3000. For local production:

```bash
npm run lint
npm run typecheck
npm test
npm run build
npm start
```

`npm test` uses Node's built-in TypeScript stripping. No database, accounts, API keys or paid services are needed.

## Pages

| Page               | Route       |
| ------------------ | ----------- |
| Home               | `/`         |
| About Us           | `/about`    |
| Services & Pricing | `/services` |
| Bridal Studio      | `/bridal`   |
| Gallery            | `/gallery`  |
| Book Appointment   | `/booking`  |
| Contact & Location | `/contact`  |
| Client Reviews     | `/reviews`  |

System routes also provide a 404 page, loading UI, social image, favicon, robots and sitemap.

## Technology

Next.js 16.4.3, React 19, TypeScript, Tailwind CSS 4, Motion for React and Lucide React. Fonts are locally hosted Cormorant Garamond and Manrope. `next/image` optimizes local photography. CSS includes responsive layouts and progressive scroll reveals; Motion handles route entrances and mobile navigation. Native dialogs provide modal focus containment and Escape support. Reduced motion is respected.

## Editable content

- `src/data/services.ts`: all 10 service names, PKR prices, descriptions and filter categories. These prices were transcribed visually from the supplied rate-list poster. The original rate list is included in `public/images/branding/rate-list.webp` and linked on the services page.
- `src/data/content.ts`: business contact details, hours, social links, navigation, FAQs, gallery, reviews and promotions.
- `src/lib/booking.ts`: validation, Pakistan-local date calculation, WhatsApp URL and booking message generation. The destination number is read from `business.whatsapp` in `content.ts`.
- `src/lib/seo.ts`: canonical URL and page metadata helper.
- `src/app/globals.css`: design tokens, layouts, responsive breakpoints and motion.
- Individual page files contain longer editorial copy. Page-specific layout copy can be edited there.

### Gallery

Put replacement images in `public/images/` and update `gallery` in `content.ts`. Every image needs a unique `id`, local `src`, descriptive `alt`, `category` and `title`. Filters derive from these categories. The current imagery is licensed editorial inspiration, **not Mishi work, clients, staff or premises**. When adding a genuine salon portfolio, update the editorial labels in `gallery.tsx` and `ui.tsx` accurately and obtain permission to publish client photographs.

### Reviews

`reviews` is intentionally empty. Add only genuine, publication-approved feedback:

```ts
{ id: 'unique-id', name: 'Approved display name', text: 'Actual client feedback', rating: 5, bridal: true, image: '/images/client.webp' }
```

Rating, bridal flag and image are optional. The manual carousel and stars render only with real entries. There is no automatic advancing or fabricated aggregate rating. Empty states appear until real reviews are supplied.

### Promotions

`offers` is intentionally empty; no discounts were supplied. Add verified offers:

```ts
{
  id: 'owner-approved-offer',
  title: 'Approved offer title',
  description: 'Accurate terms supplied by the salon',
  active: true,
  image: '/images/offer.webp', // optional
  startDate: '2026-12-01T00:00:00+05:00', // optional
  endDate: '2026-12-31T23:59:59+05:00', // optional
  banner: true, // optional highlighted label on homepage card
  whatsappMessage: 'Hello Mishi Beauty Salon! Please tell me about this offer.'
}
```

Use ISO dates with an explicit timezone. Active offers appear on the homepage after hydration and refresh visibility every minute while the page is open. Inactive or expired offers stay hidden. `banner` highlights the promotional card; a separate sitewide announcement strip is not implemented.

### Social accounts

Add verified URLs to `business.socials`, e.g. `{name:'Instagram',url:'https://www.instagram.com/your-real-account/'}`. Empty accounts remain hidden. WhatsApp stays prominent. Sharing uses native browser share where available, otherwise clipboard copy.

### Logo

The logo is displayed directly from the original supplied poster through a proportion-preserving SVG viewport (`public/images/branding/logo.svg`), retaining its lettering, crown and beauty illustration. `poster.webp` is an optimized copy. The favicon is an SVG viewport over the original crown artwork, **not a vector tracing**. Original pink background remains; a clean transparent standalone logo was not produced. Replace with a high-resolution original transparent logo when available and simplify `Logo` in `shell.tsx`. No replacement lettering or AI approximation is used.

## WhatsApp booking

Service cards preselect a service through `/booking?service=service-id`. The form requires a full name, phone, listed service, date, time and group size. Bridal event type appears for the three bridal-related services. The minimum date uses Asia/Karachi; hours are 08:00–20:00. A valid request opens `https://wa.me/923310251833?text=...` with the complete encoded message. A fallback link appears if a popup is blocked. The visitor must manually send the request; the salon must confirm availability. No message is automatically sent and no booking is stored on a server.

## Deploy to Vercel

1. Extract this ZIP and open the `mishi-beauty-salon` directory. Run `npm ci`, `npm run lint`, `npm run typecheck`, `npm test` and `npm run build` locally.
2. Upload the project to a Git repository, or use the Vercel CLI from this directory. Do not upload `node_modules`, `.next` or secrets.
3. In Vercel select **Add New → Project**, import that repository and set the root directory to the directory containing this `package.json`.
4. Select the **Next.js** preset, a compatible Node version, install command `npm ci` and build command `npm run build`. Keep the framework's default output directory.
5. Add `NEXT_PUBLIC_SITE_URL` with the complete final HTTPS origin, such as your real custom domain. Do not use localhost, the example domain or a path. If no custom value is set, Vercel's `VERCEL_PROJECT_PRODUCTION_URL` is used automatically when available.
6. Deploy. If the final domain changes, update `NEXT_PUBLIC_SITE_URL` and redeploy because metadata is generated at build time.
7. Open all eight pages; check mobile navigation, service search, category filters, service preselection, validation, image lightbox, telephone and WhatsApp links. Verify the WhatsApp message without sending a test message to the salon unnecessarily.
8. Open `/sitemap.xml`, `/robots.txt` and `/opengraph-image`. Confirm canonical and social-image URLs use the real production origin. Check keyboard navigation and responsive layouts at 375, 390, 768, 1024 and 1440 pixels.

Locally, without a configured site URL, canonical URLs are omitted and sitemap is empty. Development social-image resolution uses localhost. Set the real production URL before launch. No live deployment was performed as part of this ZIP delivery.

## Verification and remaining content

See `QA_REPORT.md` for actual executed checks and limits, and `ASSET_ATTRIBUTIONS.md` for sources and licensing.

Owner input still needed: authentic salon/bridal photographs and before-and-after pairs with permission, genuine reviews, verified offers and social URLs, a transparent high-resolution logo, exact entrance directions if desired, and the final production domain. Bridal packages have inquiry CTAs but no invented inclusions or prices. Hair services are not listed because they are absent from the supplied rate list.

The application is implemented and production-build compatible. Browser interaction, visual viewport, assistive-technology and Lighthouse checks remain required before a real launch; this package does not claim those checks passed.
# mishibeautysalon
