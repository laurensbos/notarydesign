# Notariskantoor Website

Professionele website voor een notariskantoor, gebouwd met Next.js 14, TypeScript en Tailwind CSS.

## 3 Design Varianten

| Variant | URL | Stijl |
|---------|-----|-------|
| **Modern** | `/` | Clean, gradients, rounded, blauw/paars |
| **Classic** | `/classic` | Elegant, navy/goud, serif fonts |
| **Minimal** | `/minimal` | Ultra clean, stone kleuren, whitespace |

## Features

- ✅ Mobile-first responsive design
- ✅ Apple-style fonts
- ✅ Lucide icons
- ✅ Trustpilot & Google Reviews integratie
- ✅ Smooth scroll animaties
- ✅ Contact formulier
- ✅ Artikelen/blog sectie
- ✅ Over ons sectie
- ✅ Diensten overzicht

## Quick Start

```bash
# Installeer dependencies
npm install

# Start development server
npm run dev

# Open in browser
open http://localhost:3000        # Modern design
open http://localhost:3000/classic  # Classic design
open http://localhost:3000/minimal  # Minimal design
```

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Fonts**: System fonts (SF Pro, -apple-system)

## Project Structuur

```
src/
├── app/
│   ├── page.tsx          # Modern homepage
│   ├── classic/
│   │   └── page.tsx      # Classic homepage
│   ├── minimal/
│   │   └── page.tsx      # Minimal homepage
│   ├── layout.tsx
│   └── globals.css
├── components/
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── Services.tsx
│   ├── About.tsx
│   ├── Reviews.tsx
│   ├── Articles.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
```

## Aanpassen

Elke component accepteert een `variant` prop:

```tsx
<Header variant="modern" />  // of "classic" of "minimal"
```

## Placeholder Content

Alle teksten zijn momenteel Lorem Ipsum en moeten vervangen worden met echte content.
Afbeeldingen zijn placeholders en moeten vervangen worden met echte foto's.
