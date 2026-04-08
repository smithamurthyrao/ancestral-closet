# Ancestral Closet

A curated marketplace for luxury and heirloom sarees — to buy, rent, or donate.

## Getting Started with Claude Code

Open this folder in the Claude Code desktop app, then say:

> "Install dependencies and run the dev server"

Claude Code will run `npm install` and `npm run dev` for you.
Then open http://localhost:3000 in your browser to see the site.

## Pages

- `/` — Home with hero, three pillars, and waitlist
- `/shop` — Collection with placeholder cards (ready for real photos)
- `/how-it-works` — Buy, Rent, Donate explained
- `/about` — Founder story and mission
- `/learn` — Weaver clusters and saree history

## Deploying to Vercel

Once you're happy with the site, tell Claude Code:

> "Deploy this to Vercel"

Claude Code will guide you through connecting your GitHub account and publishing to a live URL.

## Adding Your Saree Listings

When you're ready to add real photos and listings, add images to `/public/sarees/`
and update `/src/app/shop/page.tsx` with real data.

## Connecting the Waitlist Form

The waitlist form in `/src/components/WaitlistForm.tsx` is ready to connect to
Mailchimp, ConvertKit, or any email provider. Tell Claude Code:

> "Connect the waitlist form to Mailchimp" (or your preferred provider)

## Design System

Colors, fonts, and spacing are defined in `/src/styles/globals.css`.
The full palette uses:
- `--ink: #1a1410` (near-black)
- `--gold: #C9973A` (antique gold)
- `--cream: #FAF7F2` (warm cream)
- `--ruby: #8B1A1A` (deep ruby)
- Fonts: Cormorant Garamond (editorial), Cinzel (headings), Jost (body)
