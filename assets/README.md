# Assets Directory Structure

## Overview
Streamlined asset management for MikeHaertel.com with automatic gallery support.

**Last Updated:** 2025-01-18
**Structure:** 3 top-level folders (simplified for easy management)

## Directory Structure

The asset structure has been simplified to just 3 main folders:

### 📸 `photos/`
All photography work - portfolio, personal shots, and general photography.
- Drop any photos here (JPG, PNG, WebP, GIF)
- Supports mixed content automatically

### 🚀 `projects/`
Project documentation and visual media for technical work.
- FareScout.App screenshots
- Pedicab business photos
- Home lab infrastructure
- Woodworking projects
- 3D printing projects
- DEF CON/security community
- Other technical projects
- **Supports images AND videos** (MP4, WebM, MOV)
- Videos autoplay on hover for dynamic presentation

### 👤 `headshots/`
Professional headshots for website header and about section.
- Professional photos
- Casual professional shots
- Action shots (at computer, with equipment)

## Automatic Gallery System

The website automatically reads and displays media from these folders using:

1. **File Reader Utility** (`website/app/lib/getAssets.ts`):
   - Scans asset folders at build time
   - Detects image vs video files
   - Returns sorted media list

2. **MediaGallery Component** (`website/app/components/MediaGallery.tsx`):
   - Responsive grid layout (configurable columns)
   - Videos: autoplay on hover, pause on leave, play icon overlay
   - Images: smooth zoom effect on hover
   - All media displayed in rounded squares

### Usage Example:
```tsx
import { getAssetsFromFolder } from './lib/getAssets';
import MediaGallery from './components/MediaGallery';

export default function ProjectsPage() {
  const projectMedia = getAssetsFromFolder('projects');

  return (
    <div>
      <h1>Projects</h1>
      <MediaGallery media={projectMedia} columns={3} />
    </div>
  );
}
```

## Supported File Formats

### Images:
- `.jpg`, `.jpeg` - Standard photos
- `.png` - Graphics with transparency
- `.webp` - Modern compressed format
- `.gif` - Animated images

### Videos (Projects folder):
- `.mp4` - Best browser support (recommended)
- `.webm` - Efficient alternative
- `.mov` - Supported but convert to MP4 for best compatibility

### Live Photos:
Export as MP4 from Photos app for web compatibility. Live Photos (HEIC + MOV) need conversion for web display.

## File Naming Convention

Any naming works - the gallery reads all supported files automatically. For organization:

```
descriptive-name-date.jpg
homelab-server-rack-2025.jpg
farescout-dashboard.mp4
```

## Image Optimization Tips

Before uploading photos for web use:
1. **Resize for web**: 1920px wide for full-width images, 800px for thumbnails
2. **Compress**: Use tools like ImageOptim, TinyPNG, or Squoosh
3. **Format**: JPG for photos, PNG for graphics with transparency
4. **WebP**: Consider WebP format for better compression (with JPG fallback)

## What to Include

### Must Have:
- [ ] Professional headshot
- [ ] 3-5 best photography examples (showcase your eye)
- [ ] FareScout.App screenshots (UI, dashboard)
- [ ] Home lab photos (servers, equipment)

### Nice to Have:
- [ ] Pedicab action shots
- [ ] Woodworking projects
- [ ] 3D printing creations
- [ ] Astrophotography examples
- [ ] DEF CON/Hak5 photos (if you have any)
- [ ] GitHub contribution graph screenshot

### Optional:
- [ ] Personal interest photos (camping, hiking, racing)
- [ ] Project in-progress shots
- [ ] Behind-the-scenes development photos

## Privacy & Usage Rights

- Only include photos you own or have rights to use
- Be mindful of people in photos (get permission if recognizable)
- Don't include client/employer proprietary information
- Consider privacy for personal projects (e.g., Moonshine Lube Co.)

## Adding New Media

1. Drop files into the appropriate folder (`headshots/`, `photos/`, or `projects/`)
2. For videos in `projects/`, use MP4 format for best results
3. The gallery automatically picks up new files on next build
4. Assets are synced to `website/public/assets/` for web access

## File Locations

- **Source:** `/assets/` (project root)
- **Web Access:** `/website/public/assets/` (copied for Next.js)
- **Gallery Component:** `website/app/components/MediaGallery.tsx`
- **File Reader:** `website/app/lib/getAssets.ts`

---

**Automatic & Simple:** Just drop files in the folders and the gallery handles the rest.
