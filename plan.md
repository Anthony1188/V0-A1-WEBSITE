# NOVAGENTEC Commercial

## Implementation

Build the approved NOVAGENTEC Commercial page as a single semantic Next.js route with an anchored in-page navigation system. The page is organized into the approved sequence: header, workshop hero, capability row, three build tiers, service catalogue, FleetFlow proof surface, Creator Core proof surface, pending customer-work cards, Synergy Standard process, closing CTA, and dark footer. All copy is live HTML text, all links are explicit anchors or honest placeholder destinations, and the mobile menu remains keyboard accessible through the existing client-side header.

Use the existing Next.js/Tailwind stack and local public assets. Supplied artwork is copied into `public/images/novagentec/`; the bright workshop image is the hero, and the Creator Core composite is used as the product proof surface. FleetFlow is represented with an honest CSS dashboard illustration and visible “DEMO WORKSPACE · SAMPLE DATA” disclosure because no authoritative screenshot was supplied. Customer-work cards are explicitly marked as awaiting approved captures and do not invent logos, quotes, client names, or metrics.

### Project structure

- `app/page.tsx`: the complete Commercial landing page and all section copy/data.
- `app/globals.css`: mineral-white, silver, graphite, cyan, orange, responsive layout, type scale, focus states, and product surfaces.
- `components/site-header.tsx`: compact responsive navigation and mobile menu.
- `components/site-footer.tsx`: dark footer with honest contact workflow placeholder.
- `public/images/novagentec/`: supplied artwork used by the page.
- `public/manus-routes.json`: route manifest for the root page and existing detail pages.
- `app.config.ts`: durable project logo metadata.

## Design

### Design movement
Industrial editorial / Swiss workwear catalogue: confident condensed display type, precise rules, pale mineral surfaces, and dense but calm proof panels.

### Core principles
1. Make the work legible: real-looking systems, clear hierarchy, restrained decoration.
2. Keep proof honest: disclosures stay close to demo imagery and pending work stays pending.
3. Use contrast as navigation: mineral-white commercial surfaces, graphite product panels, dark footer.
4. Let typography do the branding: heavy uppercase display headlines with mono metadata.

### Color philosophy
Mineral white and cool silver make the page feel operational and tangible, like a workshop bench. Graphite anchors the product surfaces and lets data feel substantial. Cyan belongs only to Creator Core; FleetFlow orange is reserved for its product panel. The footer is deliberately dark to close the page with weight.

### Layout paradigm
A long-form editorial strip: full-width bands, compact horizontal rules, asymmetric proof surfaces, and stacked cards that become one-column on small screens. Desktop uses wide media and split panels; mobile preserves the same sequence without horizontal overflow.

### Signature elements
- Hairline grid rules with IBM Plex Mono micro-labels.
- Black condensed all-caps headlines with occasional accent words.
- Framed “demo / pending capture” disclosure bars that turn proof into part of the visual language.

### Interaction philosophy
Links are obvious and low-friction, with full-card hit targets and visible focus rings. Navigation is compact and anchored to page sections. Hover states shift borders and translate arrow cues without relying on motion to communicate meaning.

### Animation
No blanket scroll reveals or decorative motion. Use only fast border/arrow hover transitions and respect reduced-motion preferences. A future ambient hero video can occupy the existing media slot without changing the static composition.

### Typography system
Archivo Black for heavy display headlines, Source Sans 3 for readable body copy, and IBM Plex Mono for labels, disclosures, and navigation metadata. Headlines are uppercase and tight; body copy is sentence case with generous line-height.

### Brand essence
NOVAGENTEC connects brand, web, and operational systems for local businesses, growing teams, and creators. Personality: precise, practical, forward.

### Brand voice
Direct, capable, and grounded in real work. Example lines: “Your business. Connected.” and “Built around the way your team operates.”

### Wordmark & logo
A text-first NOVAGENTEC wordmark with a compact `· COMMERCIAL` descriptor and a three-line menu mark; no unrelated legacy logo is reused.

### Signature brand color
Platinum silver (`#cbd1d4`) is the commercial signature; cyan and orange are reserved for product families.
