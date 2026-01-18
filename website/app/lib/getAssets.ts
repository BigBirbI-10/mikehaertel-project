import fs from 'fs';
import path from 'path';

export interface MediaFile {
  name: string;
  path: string;
  type: 'image' | 'video';
  extension: string;
}

const VIDEO_EXTENSIONS = ['.mp4', '.webm', '.mov'];
const IMAGE_EXTENSIONS = ['.jpg', '.jpeg', '.png', '.webp', '.gif'];

export function getAssetsFromFolder(folderName: 'headshots' | 'photos' | 'projects'): MediaFile[] {
  const assetsPath = path.join(process.cwd(), 'public', 'assets', folderName);

  try {
    const files = fs.readdirSync(assetsPath);

    return files
      .filter(file => {
        const ext = path.extname(file).toLowerCase();
        return [...VIDEO_EXTENSIONS, ...IMAGE_EXTENSIONS].includes(ext);
      })
      .map(file => {
        const ext = path.extname(file).toLowerCase();
        const type: 'image' | 'video' = VIDEO_EXTENSIONS.includes(ext) ? 'video' : 'image';

        return {
          name: file,
          path: `/assets/${folderName}/${file}`,
          type,
          extension: ext
        } as MediaFile;
      })
      .sort((a, b) => a.name.localeCompare(b.name));
  } catch (error) {
    console.error(`Error reading assets from ${folderName}:`, error);
    return [];
  }
}
