# Project Rules

## Routing

- Use the Next.js Pages Router.
- Keep route files thin. Pages choose device-specific page components and handle SEO.

## Components

- `libs/components/pc`: desktop and tablet-wide components.
- `libs/components/mobile`: mobile-first components.
- `libs/components/common`: shared layout wrappers, SEO, buttons, cards, and forms.

## Styling

- SCSS owns visual design and page layout.
- MUI is used for stable primitives, controls, icons, forms, and theme tokens.
- Keep route SCSS split by device and page.

## Product Direction

- The homepage should feel premium, reliable, adult, and focused.
- Avoid childish school visuals, generic SaaS sections, and noisy marketing copy.
