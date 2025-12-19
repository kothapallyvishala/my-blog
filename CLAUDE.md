# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server (localhost:3000)
npm run build    # Build for production
npm start        # Start production server
npm run lint     # Run ESLint
```

Sanity Studio is available at `/studio` route during development.

## Architecture

This is a Next.js 16 (App Router) portfolio blog with Sanity CMS integration.

### Tech Stack
- Next.js 16 with React 19 and TypeScript
- Sanity v4 headless CMS with embedded Studio
- Tailwind CSS v4 for styling
- @portabletext/react for rendering Sanity rich text

### Data Flow
1. Content managed in Sanity Studio (at `/studio`)
2. Next.js fetches content via GROQ queries using Sanity client
3. ISR with 60-second revalidation (`revalidate: 60`)
4. Images served through Sanity CDN

### Key Directories
- `app/` - Next.js App Router pages and components
- `app/components/` - Shared React components (Navbar, Footer)
- `app/blog/[slug]/` - Dynamic blog post pages
- `sanity/schemaTypes/` - Sanity content schemas (post, author, category, blockContent)
- `sanity/lib/` - Sanity client and image URL builder utilities
- `types/` - TypeScript interfaces for blog data

### Sanity Configuration
- Client setup: `sanity/lib/client.ts`
- Image URL builder: `sanity/lib/image.ts`
- Schema types: `sanity/schemaTypes/`

### Environment Variables
Required in `.env.local`:
```
NEXT_PUBLIC_SANITY_PROJECT_ID=<project-id>
NEXT_PUBLIC_SANITY_DATASET=production
```

## Patterns

- Blog pages use async server components with direct Sanity queries
- Rich text content uses PortableText with custom components for headings, blockquotes, links, and images
- Images use `next/image` with Sanity CDN URL builder
- Dark mode support via CSS custom properties in `globals.css`
