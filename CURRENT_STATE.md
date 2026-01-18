# Project Current State

**Last Updated:** 2025-01-18
**Commit:** 225dbc1 - "Add automatic media gallery system and streamline assets"

## What Was Just Done

### Asset Structure Simplification
- Consolidated from 15+ folders to **3 main folders**:
  - `assets/headshots/` - Professional photos
  - `assets/photos/` - Photography portfolio
  - `assets/projects/` - Project documentation (images + videos)
- Flattened all subdirectories - all files now at top level of each folder
- Synced assets to `website/public/assets/` for Next.js access

### Automatic Media Gallery System
Created a complete automatic gallery system that requires zero manual configuration:

**Files Created:**
1. `website/app/lib/getAssets.ts` - Scans asset folders at build time
2. `website/app/components/MediaGallery.tsx` - Responsive gallery with video support

**Features:**
- Automatically reads all images/videos from asset folders
- Videos (MP4, WebM, MOV) autoplay on hover, pause on leave
- Images (JPG, PNG, WebP, GIF) with zoom effect on hover
- Responsive grid layout (configurable columns)
- Play icon overlay for videos when paused

**Usage Example:**
```tsx
import { getAssetsFromFolder } from './lib/getAssets';
import MediaGallery from './components/MediaGallery';

export default function ProjectsPage() {
  const projectMedia = getAssetsFromFolder('projects');
  return <MediaGallery media={projectMedia} columns={3} />;
}
```

### Documentation Updated
All documentation updated for LLM handoff clarity:
- `README.md` - Project overview with current structure
- `website/README.md` - Website-specific setup and features
- `website/app/components/README.md` - Component documentation
- `assets/README.md` - Asset management guide with new structure
- `CURRENT_STATE.md` (this file) - Handoff document

## Project Status

### Tech Stack
- **Frontend:** Next.js 15 (React, TypeScript)
- **Styling:** Tailwind CSS
- **Contact Form:** Resend integration (configured)
- **Deployment:** AWS (planned, not yet deployed)

### Working Features
✅ Next.js development server running
✅ Automatic media gallery system
✅ Video autoplay on hover
✅ Asset folder scanning
✅ Contact form with Resend
✅ Responsive design

### Recently Completed
✅ AWS deployment to S3 static hosting
✅ Production build tested and working
✅ TypeScript errors fixed in MediaGallery

### Not Yet Done
❌ CloudFront CDN (for HTTPS and custom domain)
❌ Domain DNS configuration (mikehaertel.com → S3)
❌ Contact form (disabled for static export)
❌ Using gallery in actual pages (component ready, not integrated)

## File Structure
```
mikehaertel-project/
├── assets/                     # Source media files
│   ├── headshots/             # 2 files (HEIC + MOV)
│   ├── photos/                # 76 files (JPG)
│   ├── projects/              # 265 files (JPG, PNG)
│   └── README.md
├── website/                    # Next.js application
│   ├── app/
│   │   ├── components/
│   │   │   ├── MediaGallery.tsx    # NEW: Auto gallery
│   │   │   └── README.md           # NEW: Component docs
│   │   ├── lib/
│   │   │   └── getAssets.ts        # NEW: Asset scanner
│   │   └── page.tsx
│   ├── public/
│   │   └── assets/            # Synced from /assets
│   └── README.md
├── docs/                       # AWS infrastructure docs
├── README.md                   # Project overview
└── CURRENT_STATE.md           # This file
```

## How to Continue Development

### Adding Media
1. Drop files into appropriate asset folder:
   - `assets/headshots/` - professional photos
   - `assets/photos/` - photography work
   - `assets/projects/` - project images/videos
2. Gallery automatically picks them up on next build
3. For videos, use MP4 format for best compatibility

### Using the Gallery Component
```tsx
// In any page/component
import { getAssetsFromFolder } from '../lib/getAssets';
import MediaGallery from '../components/MediaGallery';

export default function MyPage() {
  const media = getAssetsFromFolder('projects'); // or 'photos', 'headshots'

  return (
    <div>
      <h1>My Projects</h1>
      <MediaGallery media={media} columns={3} />
    </div>
  );
}
```

### Running the Development Server
```bash
cd website
npm install  # if not done
npm run dev  # http://localhost:3000
```

### Next Steps (Recommended)
1. **Add CloudFront CDN** - Enable HTTPS and custom domain support
2. **Configure DNS** - Point mikehaertel.com to AWS infrastructure
3. **Integrate gallery into pages** - Use MediaGallery in actual page components
4. **Re-enable contact form** - Use Lambda or external service for API
5. **Add videos** - Convert Live Photos to MP4, add to projects/ for dynamic feel
6. **GitHub Actions CI/CD** - Auto-deploy on push to main

## Git/JJ Status
- **Latest Commit:** (pending) - AWS deployment and documentation updates
- **Branch:** main
- **Remote:** https://github.com/BigBirbI-10/mikehaertel-project
- **JJ:** Initialized and synced

### GitHub Repository
Repository is live and public at: https://github.com/BigBirbI-10/mikehaertel-project

Protected files (.env.local, contact-info.md, resend-dns-records.json) are in .gitignore and not pushed.

## AWS Deployment

**Live Site:** http://mikehaertel-website-2025.s3-website-us-east-1.amazonaws.com

- **Service:** S3 Static Website Hosting
- **Region:** us-east-1
- **Bucket:** mikehaertel-website-2025
- **Type:** Next.js static export

See `DEPLOYMENT.md` for full deployment documentation.

### To Initialize JJ
```bash
jj git init --colocate
jj status
```

## Important Notes for Next LLM

1. **Gallery is ready but not integrated** - The MediaGallery component exists and works, but hasn't been added to any actual pages yet (page.tsx still has placeholder content)

2. **Assets are synced** - `/assets` is copied to `/website/public/assets`, so both locations have the same files currently

3. **Videos need conversion** - Current headshot is HEIC + MOV (Live Photo). Convert to MP4 for web use.

4. **AWS not deployed** - All AWS infrastructure documentation is in `/docs` but nothing is deployed yet

5. **Documentation is comprehensive** - Everything is documented for easy pickup. Start with:
   - `README.md` (this project)
   - `website/README.md` (website specifics)
   - `website/app/components/README.md` (how to use gallery)

## Questions This Document Answers

**Q: How do I add new images/videos?**
A: Drop them in `assets/headshots/`, `assets/photos/`, or `assets/projects/`. Gallery reads them automatically.

**Q: How do I use the gallery in a page?**
A: Import `getAssetsFromFolder` and `MediaGallery`, call `getAssetsFromFolder('projects')`, pass result to `<MediaGallery media={...} />`.

**Q: What video formats work?**
A: MP4, WebM, MOV. MP4 recommended for best browser support.

**Q: Where's the code for the gallery?**
A: Component: `website/app/components/MediaGallery.tsx`, Scanner: `website/app/lib/getAssets.ts`

**Q: Has this been deployed?**
A: No. Next.js app runs locally. AWS deployment docs exist but not deployed yet.

**Q: What's the commit history?**
A: Single commit: 225dbc1 (initial commit with gallery system and assets)
