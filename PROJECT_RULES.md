# Study Factory Homepage Rules

## Product Direction

- Brand names: `자격증공장`, `Study Factory`, and `Study Factory Research Lab`.
- Homepage feeling: premium, modern, warm, focused, adult, and quietly exciting.
- Core hero copy: `The Proof of Potential` and `자격증공장`.
- Korean is the primary business language; English supports the premium brand mood.

## Technical Stack

- Use Next.js Pages Router, not App Router.
- Use Yarn for frontend package management.
- Use TypeScript.
- Use SCSS for page and layout styling.
- Use MUI lightly for structural components, inputs, drawers, and theme support.

## Project Structure

- Keep page files small.
- Split React into `libs/components`.
- Split homepage components by device:
  - `libs/components/homepage/pc`
  - `libs/components/homepage/mobile`
- Split SCSS by device and section:
  - `scss/pc`
  - `scss/mobile`
- Tablet behavior should usually be handled inside PC SCSS media queries.

## Styling Rules

- Global reset and tokens live in `scss/reset.scss` and `scss/variables.scss`.
- Page-level SCSS should be composed from smaller section files.
- Keep dominant UI colors restrained: ink, warm paper, amber, soft teal, and white.
- Avoid fake startup gradients, childish visuals, and generic education-template styling.

## Hero Video Rules

- Host production hero video on Cloudflare, then place its URL in `BRAND.heroVideoUrl`.
- Do not rely on AI-generated readable Korean text inside video.
- Exam categories should be shown by real website text, not generated book-spine text.
- AI video prompts should ask for abstract, blurred, or unreadable book spines.

## Backend Rules

- No full backend for phase 1.
- Start with static homepage and CTA links.
- Add API routes later only when consultation, assistant, or contact flows need persistence.
