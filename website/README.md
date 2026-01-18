# MikeHaertel.com Website

Next.js website showcasing Mike Haertel's portfolio, projects, and photography.

**Last Updated:** 2025-01-18

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Project Structure

```
website/
├── app/
│   ├── components/
│   │   ├── MediaGallery.tsx    # Automatic image/video gallery
│   │   └── README.md           # Component documentation
│   ├── lib/
│   │   └── getAssets.ts        # Asset folder scanner
│   ├── page.tsx                # Homepage
│   └── globals.css
├── public/
│   └── assets/                 # Synced from /assets at root
│       ├── headshots/
│       ├── photos/
│       └── projects/
└── README.md
```

## Key Features

### Automatic Media Gallery System

The website includes an automatic gallery that reads from asset folders and displays images/videos dynamically.

**Usage:**
```tsx
import { getAssetsFromFolder } from './lib/getAssets';
import MediaGallery from './components/MediaGallery';

export default function Page() {
  const media = getAssetsFromFolder('projects'); // or 'photos', 'headshots'
  return <MediaGallery media={media} columns={3} />;
}
```

**Supported Media:**
- Images: JPG, PNG, WebP, GIF
- Videos: MP4, WebM, MOV (autoplay on hover)

See `app/components/README.md` for full documentation.

### Asset Management

Assets are stored in `/assets/` at project root and synced to `public/assets/`:
- `/assets/headshots/` → Professional photos
- `/assets/photos/` → Photography portfolio
- `/assets/projects/` → Project images & videos

Just drop files in folders - gallery picks them up automatically on next build.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
