# Project Rules

This document is the working memory for the Study Factory homepage project. Keep it current when the product direction, page plan, or design rules change.

## Project Identity

- Brand: Study Factory / 자격증공장.
- Slogan: The Proof of Potential / 가능성의 증명.
- Location: Busan, South Korea.
- Core idea: Study Factory is not just a 독서실 or study cafe. It is a premium study operating system for adult exam students.
- The physical place gives students a controlled environment where the student's only job is to study.
- Study Factory Research Lab builds the web, PWA, and internal systems that support the physical study space and extend the operating model online.

## Business Structure

- Study Factory Space: the physical Busan study space.
- Study Factory App: the member PWA that supports the physical space with reservation, attendance, notices, membership, and consultation.
- Jagong Online: the remote study-management product for students outside the physical space.
- Study Factory Research Lab: the studio/team that builds the homepage, app, online product, and internal systems.

Do not blur these roles. The homepage can introduce all of them, but each dedicated page must have one clear job.

## Current Page Map

- `/`: umbrella homepage. It introduces the brand, physical study operating system, Study Factory App, Jagong Online, and Research Lab.
- `/study-factory`: planned physical-space page. This should become the main destination for "공간 둘러보기".
- `/products/study-factory-app`: planned dedicated app page. This page should explain the member PWA and its features.
- `/products/jagong-online`: planned dedicated online product page.
- `/about`: planned company story page. This should explain why Study Factory exists and how the physical space, app, online product, and Research Lab connect.
- `/research-lab`: Research Lab studio page.
- `/contact`: consultation and inquiry page.
- `/faq`: support page.

## Current Navigation Rule

- Keep the logo/brand in the header.
- Avoid duplicating "Study Factory" in the nav when it becomes confusing.
- When `/study-factory` exists, consider changing the nav item from `Study Factory` to `Space` or another clear physical-space label.
- Research Lab should be treated as a studio/team, not merely as another product card forever.

## Homepage Status

The homepage is mostly approved and should not be broadly redesigned unless the user explicitly reopens it.

Completed homepage decisions:

- Hero video and navbar are approved as the baseline.
- Desktop and mobile videos are responsive.
- Video sound controls exist where needed.
- Mobile hero height has been tuned.
- Study Factory and Jagong film sections have CTA links.
- Operating flow has desktop and mobile animation.
- Mobile operating flow uses a compact 3-up / 3-down path.
- Product ecosystem section uses a warm editorial layout with branded visuals.
- Study Factory App and Jagong Online are shown as product extensions.
- Audience/exam section uses a compact moving trusted-by style treatment.
- Horizontal page scrolling is disabled globally.
- Footer email overflow has been fixed.

Homepage follow-ups:

- When `/study-factory` is created, update the homepage physical film CTA from `/about` to `/study-factory`.
- Later, polish the footer as a full sitewide pass if needed.
- Do not keep tweaking the hero or navbar without a specific reason.

## Visual Direction

Use the Warm White Editorial System.

Preferred:

- Warm white or soft paper backgrounds.
- Clean near-black text.
- Thin borders.
- Muted gold accents.
- Soft forest green system/trust accents.
- Editorial spacing.
- Real product/place visuals whenever possible.
- Quiet animation that supports the idea of routine, flow, and continuity.

Avoid:

- Generic dark SaaS blocks.
- Wine/purple-heavy styling.
- Childish school or study-cafe visuals.
- Fake AI text inside generated images.
- Placeholder-heavy skeleton visuals.
- Random decorative gradients, blobs, or orbs.
- Overly cute or cartoonish direction unless the actual brand asset requires it.
- Broad visual changes before discussing the direction.

## Typography Rules

- Use the project font stack from `scss/variables.scss`.
- Keep typography strong but readable.
- Hero-scale type belongs only in hero/major editorial sections.
- Compact cards and footer areas need smaller, tighter text.
- Do not use cursive fonts for core business information such as email.
- Avoid negative letter spacing unless already established and visually checked.

## Media Rules

- Use real Study Factory interior/location photos for the physical-space page.
- Do not use video on the `/study-factory` page hero; use a real image.
- Use generated or symbolic visuals only when real assets are unavailable, and do not allow fake Korean/Chinese-like text in the image.
- When video contains embedded subtitles, use sizing that keeps subtitles visible.
- Do not crop important video captions unless the user chooses that compromise.
- Desktop and mobile may need different media assets and ratios.

## Code Architecture

- Use the Next.js Pages Router.
- Keep route files thin. Pages choose device-specific page components and handle SEO.
- Keep PC and mobile components separate when layouts materially differ.
- Use shared common components only when the abstraction is genuinely useful.
- Store reusable content/config in `libs/config`.
- Keep visual layout in SCSS.

Component locations:

- `libs/components/pc`: desktop and tablet-wide components.
- `libs/components/mobile`: mobile-first components.
- `libs/components/common`: shared layout wrappers, SEO, buttons, cards, forms, and reusable visual helpers.

Styling locations:

- `scss/pc`: desktop styles.
- `scss/mobile`: mobile styles.
- `scss/variables.scss`: shared tokens.
- `scss/reset.scss`: global reset and cross-page guards.

## Development Workflow

- Talk before coding for design-heavy decisions.
- Preserve approved sections unless the user explicitly reopens them.
- Build large pages desktop first, then mobile.
- Use the repo's existing MUI + SCSS style.
- Use `apply_patch` for manual edits.
- Prefer small, targeted changes over broad rewrites.
- Use Yarn for project commands.
- Run `yarn lint` and `yarn build` after meaningful changes.
- Do not stage or commit. The user handles git.
- When the user asks to commit, only provide a commit message.

## Immediate Next Build

Build `/study-factory` as the physical-space page.

Desktop page structure:

- Hero with real interior photo, no video.
- Clear positioning: not just a study cafe, a controlled study operating system.
- Who the space is for: adult exam students, long-term routines, professional exams, public/career exams, qualification and restart students.
- Daily flow: arrival, seat, attendance, routine, notices, consultation, continuity.
- Facility/gallery section using real space images.
- Study Factory App teaser showing how the PWA supports the physical place.
- Location, phone, consultation CTA.

Mobile page structure:

- Same story, shorter sections.
- Image first or near-first.
- Strong CTA access.
- Avoid dense text walls.
- Keep enough breathing room.

Needed from user:

- Real hero image for Study Factory space.
- Optional gallery images.
- Confirm public location/address details.
- Confirm operating hours if they should be shown.
- Confirm whether pricing/membership should be public or hidden behind consultation.

## Study Factory App Page Plan

Purpose: Explain the member PWA that supports the physical Study Factory space.

Message:

- The app keeps the space operation in the member's hand.
- It is for physical Study Factory members, not the same thing as Jagong Online.

Sections:

- Hero with app screenshot or branded product visual.
- Why the app exists.
- Feature modules: reservation, seat, attendance/check-in, membership/status, notices, consultation.
- Daily use flow.
- PWA install/login note.
- CTA to app or consultation.

Needed from user:

- Real app screenshots: dashboard, reservation, attendance, membership, notices, consultation.

## Jagong Online Page Plan

Purpose: Explain the online study-management product.

Message:

- Jagong Online helps students keep routine and accountability outside the physical place.
- It should not be presented as the Study Factory member app.

Sections:

- Online routine positioning.
- Who it is for.
- Key features: check-in, rhythm, accountability, remote focus.
- Product screenshots or clean product visuals.
- CTA to Jagong Online.

## About Page Plan

Purpose: Company story, not a feature page.

It should explain:

- Why Study Factory began.
- Why adult exam students need structure more than motivation.
- How the physical space works.
- How Study Factory App supports the space.
- How Jagong Online extends the idea outside the space.
- How Research Lab builds the systems behind everything.

Use a real study-place image or brand image. Avoid another video hero.

## Research Lab Page Plan

Purpose: Explain the studio/team behind the systems.

Message:

- We operate a study space, find real repeated problems, then build web products and internal systems to solve them.

Future polish:

- More concrete service/product examples.
- Case-study style sections.
- Stronger CTA for web/PWA/internal system inquiries.

## Content Voice

- Premium, calm, adult, direct.
- Focus on structure, routine, continuity, and reduced friction.
- Avoid hype.
- Avoid generic startup/SaaS language.
- Korean copy can be strong and compressed; English labels should support structure and navigation.

## Validation Checklist

Before handing off meaningful page work:

- `yarn lint`
- `yarn build`
- Check desktop layout.
- Check mobile layout.
- Check no horizontal scrolling.
- Check text does not wrap awkwardly inside buttons, cards, footer, or nav.
- Check videos/images do not crop important content.
- Check links go to the intended page.
