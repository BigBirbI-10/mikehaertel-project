# Website Components

## MediaGallery Component

**File:** `app/components/MediaGallery.tsx`

Automatic media gallery that reads from asset folders and displays images/videos in a responsive grid.

### Features

- **Automatic File Detection**: Reads all images and videos from specified asset folders
- **Video Support**: Videos autoplay on hover, pause on mouse leave
- **Responsive Grid**: Configurable column layout
- **Interactive**:
  - Videos show play icon when paused
  - Images zoom slightly on hover
  - All media in rounded squares (aspect-square)

### Usage

```tsx
import { getAssetsFromFolder } from '../lib/getAssets';
import MediaGallery from '../components/MediaGallery';

export default function ProjectsPage() {
  // Read from assets/projects/
  const projectMedia = getAssetsFromFolder('projects');

  return (
    <section>
      <h1>My Projects</h1>
      <MediaGallery media={projectMedia} columns={3} />
    </section>
  );
}
```

### Props

- `media`: Array of MediaFile objects (from `getAssetsFromFolder`)
- `columns`: Number of grid columns (default: 3)

### Supported Folders

- `headshots` - Professional headshots
- `photos` - Photography portfolio
- `projects` - Project documentation (images + videos)

### Media Types

**Images:**
- JPG, JPEG, PNG, WebP, GIF
- Displays with hover zoom effect

**Videos:**
- MP4, WebM, MOV
- Muted autoplay on hover
- Shows play icon overlay when paused
- Loops continuously while hovering

## Helper: getAssetsFromFolder

**File:** `app/lib/getAssets.ts`

Scans asset folders at build time and returns typed media file list.

```tsx
import { getAssetsFromFolder } from './lib/getAssets';

const media = getAssetsFromFolder('projects');
// Returns: MediaFile[]
```

### MediaFile Interface

```tsx
interface MediaFile {
  name: string;        // Filename
  path: string;        // Web path (/assets/folder/file.jpg)
  type: 'image' | 'video';
  extension: string;   // .jpg, .mp4, etc.
}
```

## Adding New Media

1. Drop files into `/assets/headshots/`, `/assets/photos/`, or `/assets/projects/`
2. Run build or dev server
3. Gallery automatically displays new files

No manual imports or configuration needed!
