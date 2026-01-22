<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

# Notaris Website Project

Dit is een professionele notariswebsite gebouwd met Next.js 14, TypeScript en Tailwind CSS.

## Design Varianten

Er zijn 3 verschillende homepage designs beschikbaar:

1. **Modern** (`/`) - Clean design met gradient accents, rounded corners, blue/purple kleurenschema
2. **Classic** (`/classic`) - Traditioneel elegant met donkere navy achtergrond, gouden accents, serif fonts
3. **Minimal** (`/minimal`) - Ultra clean met stone kleuren, veel whitespace, lichte fonts

## Componenten

Alle componenten ondersteunen een `variant` prop: `'modern' | 'classic' | 'minimal'`

- `Header` - Navigatie met mobile menu
- `Hero` - Hero sectie met reviews badge
- `Services` - 6 diensten grid
- `About` - Over ons sectie
- `Reviews` - Klantbeoordelingen
- `Articles` - Blog/artikelen sectie
- `Contact` - Contact formulier
- `Footer` - Footer met Trustpilot/Google reviews

## Tech Stack

- Next.js 14 met App Router
- TypeScript
- Tailwind CSS
- Lucide Icons

## Stijl Guidelines

- Mobile-first responsive design
- Apple-style system fonts (-apple-system, SF Pro)
- Smooth animations en hover effects
- Professionele, elite uitstraling
