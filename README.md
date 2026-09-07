# CRM Integration Specialists — Landing Page

Next.js (App Router, JavaScript) + Tailwind CSS + Framer Motion landing page
for Ammar Hussain / CRMIntegrationSpecialist.com.

## Setup

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Structure

- `app/layout.js` — root layout, fonts, metadata, JSON-LD schema injection
- `app/page.js` — assembles all sections
- `app/globals.css` — theme tokens, base styles, reduced-motion handling
- `components/` — Navbar, Hero, ApiSimulator, IntegrationMatrix, Services,
  BookingSection, FAQ, Footer
- `lib/data.js` — all copy/content in one place (edit here to change text)
- `lib/schema.js` — JSON-LD `Person` / `ProfessionalService` / `FAQPage` schema

## Editing content

Almost all copy (services, integrations, FAQ, nav links, Calendly URL) lives
in `lib/data.js` — change it there rather than inside components.

## Calendly

The Calendly URL is set once in `lib/data.js` as `CALENDLY_URL` and used for
both the embedded widget in `BookingSection.js` and all CTA buttons/links.

## Design tokens

Colors, fonts, and the ambient "bowtie" glow gradient are defined in
`tailwind.config.js` and `app/globals.css`. Display font is Space Grotesk,
body is Inter, and JetBrains Mono is used for code/data/eyebrow labels.

## Deploying

This is a standard Next.js app — deploy to Vercel, Netlify, or any Node
host. Run `npm run build && npm run start` for a production build.
