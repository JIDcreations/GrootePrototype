# De Groote NV Figma Build Spec

This file translates the current coded site into a Figma-ready build system.

## Goal

Rebuild the site in Figma as a clean component-based desktop/tablet/mobile file that matches the live prototype closely enough for design review, client presentation, and later handoff.

Keep the current visual direction:

- Premium industrial
- Clean, editorial, sharp
- Strong dark/light contrast
- Warm off-white surfaces
- Red accent used sparingly but deliberately
- Large typography, strict spacing, minimal ornament

## Figma File Setup

Use these top-level pages:

- `00 Cover`
- `01 Foundations`
- `02 Components`
- `03 Home`
- `04 Industriële Verhuizing`
- `05 Sectoren`
- `06 Cases`
- `07 Machinepark`
- `08 Jobs`
- `09 Contact`
- `10 Archive / Explorations`

Use these main frame sizes:

- Desktop: `1440 x auto`
- Tablet: `1024 x auto`
- Mobile: `390 x auto`

Use these responsive breakpoints from code:

- Desktop default: above `1024`
- Tablet: `1024` and below
- Mobile: `640` and below

Use a centered content container:

- Max width: `1340`
- Horizontal page padding: `20` to `40` depending on viewport
- On desktop, keep outer gutters visually close to `50px`

## Foundations

### Color Tokens

- `White / Base`: `#FFFFFF`
- `Off White / Section`: `#F5F4F0`
- `Surface / Card`: `#ECEAE5`
- `Ink / Primary`: `#0F0F0F`
- `Ink 80`: `rgba(15,15,15,0.8)`
- `Ink 60`: `rgba(15,15,15,0.6)`
- `Ink 40`: `rgba(15,15,15,0.4)`
- `Ink 20`: `rgba(15,15,15,0.2)`
- `Ink 08`: `rgba(15,15,15,0.08)`
- `Red / Accent`: `#C8001A`
- `Red / Dark`: `#9E0015`
- `Border`: `#DEDAD3`
- `Border Light`: `#ECEAE4`
- `Page Hero Dark`: `#2A2A2A`

### Typography

Current site uses `Inter` for both display and body. In Figma, keep one family for accuracy.

- `Display / Hero XL`: 56 to 88, `800`, tracking `-3%` to `-3.5%`, line height `93%` to `100%`
- `Display / Section LG`: 32 to 60, `800`, tracking `-3%`
- `Display / Heading MD`: 24 to 40, `700-800`, tracking `-2%`
- `Body LG`: `18`, `300`, line height `165%` to `170%`
- `Body`: `16`, `400`, line height `150%` to `165%`
- `Small`: `14`, `500`
- `Meta XS`: `12`, `600-700`, uppercase, tracking `8%` to `16%`
- `Micro`: `11`, `600-700`, uppercase

### Spacing Scale

Base spacing system from code:

- `4`
- `8`
- `12`
- `16`
- `24`
- `32`
- `40`
- `48`
- `64`
- `80`
- `96`
- `128`

Use section spacing generously:

- Desktop section top/bottom: `80` to `144`
- Major internal gaps: `40` to `80`
- Card padding: `24` to `40`

### Effects

- Card shadow default: `0 1 3 rgba(0,0,0,0.06)` + `0 4 16 rgba(0,0,0,0.06)`
- Hover shadow: `0 4 24 rgba(0,0,0,0.13)` + `0 1 6 rgba(0,0,0,0.07)`
- Motion style: smooth, eased, editorial, never bouncy

## Grid Rules

Desktop layout patterns used repeatedly:

- `2-column 50/50`
- `3-column equal`
- `3fr / 2fr`
- `1.5fr / 1fr`
- `2fr / 1fr`

When rebuilding in Figma:

- Use Auto Layout wherever possible
- Use a 12-column desktop grid if you want a system layer
- Keep card gaps around `18` to `24`
- Keep border separators visible and structural, not decorative

## Core Components

### Navigation

Component name: `Nav / Desktop`

Structure:

- Transparent on homepage before scroll
- White filled on subpages and on scrolled homepage
- Height `76`
- Logo left
- Primary links center/right
- Language switch right
- Hamburger only on tablet/mobile

Variants:

- `Homepage / Top`
- `Homepage / Scrolled`
- `Inner Page`
- `Mobile Closed`
- `Mobile Open`

Notes:

- Homepage top nav stays transparent
- Logo should stay in full color
- Link underline is a red 2px line
- Mobile panel is a full-screen white slide-in

### Buttons

Component name: `Button`

Base:

- Height roughly `50`
- Padding `14 / 30`
- Border `2`
- Text `14 / 500`
- Gap between text and arrow around `10`

Variants:

- `Primary / Black`
- `Primary / Red`
- `Outline / Dark`
- `Outline / White`
- `Ghost`

### Eyebrow

Component name: `Eyebrow`

Structure:

- Small uppercase meta label
- 28px to 36px red line on left
- Used above section titles

Variants:

- `Default / Red`
- `On Dark / White text`

### Section Header

Component name: `Section Header`

Structure:

- Eyebrow
- Big display heading
- Optional supporting paragraph
- Optional right-aligned action area

Variants:

- `Split / Left heading right text`
- `Single column`
- `On dark`

### Homepage Hero

Component name: `Hero / Homepage`

Structure:

- Full viewport media background
- Dark angled overlay
- Bottom-aligned content
- Small top label line
- Large headline
- Supporting paragraph max width around `520`
- Two CTA buttons
- Vertical scroll indicator on desktop

Important:

- Keep the nav transparent over the hero
- Keep the logo in full color
- The hero copy block should feel anchored bottom-left, not vertically centered

### Page Hero

Component name: `Hero / Inner Page`

Structure:

- Dark textured background
- Full-bleed image underlay at low opacity
- Breadcrumb
- Big title
- Lead paragraph

Notes:

- Background image opacity about `0.35`
- Noise overlay opacity about `0.035`

### Stats Strip

Component name: `Stats Strip`

Structure:

- 4 equal columns desktop
- Top and bottom border
- Number in bold display
- Accent plus sign in red
- Uppercase label underneath

Tablet/mobile:

- 2 columns

### Service Link Row

Component name: `Service List Item`

Structure:

- 3-part row: number, title, circular arrow
- Thin borders
- Red left bar appears on hover

Variants:

- `Default`
- `Hover`

### Sector Card

Component name: `Sector Card`

Structure:

- White tile
- Number at top
- Sector name at bottom
- Count text
- Hidden arrow appears on hover
- Red background wipe from bottom on hover

Desktop grid:

- 3 columns

Tablet:

- 2 columns

Mobile:

- 1 column

### Project Card

Component name: `Project Card`

Structure:

- Image-only tile at rest
- Dark gradient overlay on hover
- Bottom text reveal on hover

Variants:

- `A / Large`
- `B / Large`
- `C / Small`
- `Rest`
- `Hover`

Image heights:

- Large: `480`
- Small: `300`
- Tablet large: `360`
- Mobile compact: `260` to `300`

### Jobs Promo Block

Component name: `Jobs Section`

Structure:

- Off-white background
- Very low-opacity background image
- Split layout with text and image
- White data tag box on image

### Featured News Card

Component name: `Kijker Item`

Structure:

- Two-column featured grid on desktop
- Main featured card larger than supporting stack
- White cards with red badge and meta line

Variants:

- `Featured`
- `Standard`

### Contact Form

Component name: `Form`

Structure:

- Off-white container
- Inputs on white
- 1px border
- Strong dark focus state
- Labels in uppercase micro text

Fields:

- Text input
- Select
- Textarea
- Full-width submit button

### Footer

Component name: `Footer`

Structure:

- Dark background
- 4-column top area on desktop
- Brand column wider
- Thin divider line
- Bottom legal row

Notes:

- Footer logo is white/inverted
- Link color is muted white until hover

## Page Build Order

### Home

Frame order:

1. `Nav / Homepage Top`
2. `Hero / Homepage`
3. `Stats Strip`
4. `Section / Diensten`
5. `Section / Sectoren`
6. `Section / Projecten`
7. `Section / Jobs Promo`
8. `Section / In De Kijker`
9. `Section / Contact CTA + Form`
10. `Footer`

### Industriële Verhuizing

Frame order:

1. `Nav / Inner Page`
2. `Hero / Inner Page`
3. `Sticky Services Nav`
4. `Service Section / Transport`
5. `Service Section / Montage & Demontage`
6. `Service Section / Opslag`
7. `Service Section / Hijswerk`
8. `Service Section / Engineering`
9. `Service Section / Interne Verplaatsing`
10. `Service Section / Kraanverhuur`
11. `CTA Band / Dark`
12. `Footer`

### Sectoren

Frame order:

1. `Nav / Inner Page`
2. `Hero / Inner Page`
3. `Sector Features Grid`
4. `USP Band / Dark`
5. `CTA`
6. `Footer`

### Cases

Frame order:

1. `Nav / Inner Page`
2. `Hero / Inner Page`
3. `Filter Bar`
4. `Cases Grid`
5. `CTA Band`
6. `Footer`

### Machinepark

Frame order:

1. `Nav / Inner Page`
2. `Hero / Inner Page`
3. `Inline Stats Strip`
4. `Machine Tabs`
5. `Machines Grid`
6. `Download Bar`
7. `CTA Band / Dark`
8. `Footer`

### Jobs

Frame order:

1. `Nav / Inner Page`
2. `Hero / Inner Page`
3. `Values Strip`
4. `Vacatures List`
5. `Why Join Section`
6. `Application CTA / Dark`
7. `Footer`

### Contact

Frame order:

1. `Nav / Inner Page`
2. `Hero / Inner Page`
3. `Contact Grid`
4. `Departments Strip`
5. `Footer`

## Page-Specific Components

### Sticky Services Nav

- White bar
- Sticky under nav
- Horizontal chip list
- Active chip has red underline

### Service Section

Structure:

- 2-column image/text layout
- Alternating left-right rhythm
- Oversized translucent section number behind image
- Red tag label above title
- Bullet list with small red line markers

### Sector Feature Card

Structure:

- 2-column grid desktop
- Large photo
- Bottom black gradient
- White headline
- Red tag

### Filter Chip

- Compact pill-like rectangular control
- Active state is dark filled with white text

### Case Card

- White bordered card
- 260px image
- Red tag
- Title
- Uppercase arrow link

### Machine Tabs

- Uppercase tabs
- Red active underline
- Horizontal scroll on smaller viewports

### Machine Card

- White card with border
- 4:3 media area
- Category meta
- Name
- Spec line

### Jobs Value Card

- Dark card
- Emoji/icon at top
- White title
- Muted supporting text

### Vacancy Row

- 4-column row desktop
- Number
- Title + meta
- Badge
- Circular arrow button

### Contact Info Cards

- Mostly custom inline layouts in code
- Rebuild as reusable `Info Card / Contact`
- Keep icon square, label, value stack

## Responsive Notes

Desktop:

- Use large whitespace
- Preserve split layouts where possible
- Keep hover-state thinking visible in composition

Tablet:

- Collapse most 2-column sections to 1-column
- Keep machine/cases grids at 2 columns
- Remove desktop nav links in favor of hamburger

Mobile:

- Single-column flow almost everywhere
- Preserve strong typography hierarchy
- Keep spacing generous, not cramped
- Project/case/machine cards become single column

## Recommended Component Naming in Figma

- `Nav/Desktop`
- `Nav/Mobile`
- `Hero/Home`
- `Hero/Page`
- `Button`
- `Eyebrow`
- `SectionHeader`
- `StatsStrip`
- `ServiceLinkRow`
- `SectorCard`
- `ProjectCard`
- `JobsPromo`
- `KijkerCard`
- `FormField`
- `Footer`
- `ServiceChip`
- `ServiceSection`
- `SectorFeatureCard`
- `FilterChip`
- `CaseCard`
- `MachineTab`
- `MachineCard`
- `JobsValueCard`
- `VacancyRow`
- `DetailSidebarCard`

## Build Priorities

If time is limited, build in this order:

1. Foundations
2. Nav
3. Buttons
4. Home page sections
5. Inner page hero
6. Reusable cards
7. Remaining page assemblies

## Accuracy Notes

These values are derived from the current implementation:

- Container max: `1340`
- Nav height: `76`
- Logo height in nav: `38`
- Footer logo height: `44`
- Homepage hero min-height: `620`
- Page hero starts below nav using `nav height + section spacing`
- Responsive breakpoints: `1024` and `640`

If you want a 1:1 Figma recreation, use the current site as visual source and this file as the system map.
