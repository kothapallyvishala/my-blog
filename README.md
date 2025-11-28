# My Blog

A modern blog built with Next.js 16 and Sanity CMS, featuring a clean UI with dark mode support.

## Features

- Modern, responsive design with Tailwind CSS v4
- Dark mode support
- Blog post listing and individual post pages
- Rich text content with Portable Text
- Image optimization from Sanity CDN
- Sanity Studio for content management
- TypeScript for type safety
- ISR (Incremental Static Regeneration) for optimal performance

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **CMS:** Sanity v4
- **Styling:** Tailwind CSS v4
- **Language:** TypeScript
- **Fonts:** Geist Sans & Geist Mono

## Getting Started

### Prerequisites

- Node.js 18+ installed
- A Sanity account and project

### Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

3. Set up environment variables:

Create a `.env.local` file in the root directory with:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
```

Replace `your_project_id` with your actual Sanity project ID.

### Running the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the blog.

### Accessing Sanity Studio

The Sanity Studio is available at [http://localhost:3000/studio](http://localhost:3000/studio) where you can manage your blog content.

## Project Structure

```
├── app/
│   ├── blog/              # Blog pages
│   │   ├── page.tsx       # Blog listing
│   │   └── [slug]/        # Individual blog post
│   ├── studio/            # Sanity Studio
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── sanity/
│   ├── lib/               # Sanity client & utilities
│   ├── schemaTypes/       # Content schemas
│   └── env.ts             # Environment config
├── types/
│   └── blog.ts            # TypeScript type definitions
└── sanity.config.ts       # Sanity configuration
```

## Content Management

### Creating Blog Posts

1. Navigate to `/studio` in your browser
2. Click on "Post" in the sidebar
3. Fill in the post details:
   - Title
   - Slug (auto-generated from title)
   - Author
   - Main image
   - Categories
   - Published date
   - Body content (rich text)
4. Click "Publish"

### Creating Authors

1. Go to `/studio`
2. Click on "Author"
3. Add author details (name, image, bio)
4. Click "Publish"

### Creating Categories

1. Go to `/studio`
2. Click on "Category"
3. Add category details
4. Click "Publish"

## Deployment

This project can be deployed to Vercel, Netlify, or any platform that supports Next.js.

### Deploy to Vercel

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Add your environment variables
4. Deploy!

## License

MIT
