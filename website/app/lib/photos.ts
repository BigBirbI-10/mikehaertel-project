// All portfolio photos for the parallax scroll
export const allPortfolioPhotos = [
  "/photos/portfolio/DSC_6600-HDR-Pano.jpg",
  "/photos/portfolio/DSC_6115-HDR.jpg",
  "/photos/portfolio/DSC01811.jpg",
  "/photos/portfolio/DSC_6257-HDR.jpg",
  "/photos/portfolio/DSC_6607-HDR-Pano.jpg",
  "/photos/portfolio/DSC_6211-HDR.jpg",
  "/photos/portfolio/DSC02110.jpg",
  "/photos/portfolio/DSC01966.jpg",
  "/photos/portfolio/DSC02489.jpg",
  "/photos/portfolio/DSC02488.jpg",
  "/photos/portfolio/DSC_6656.jpg",
  "/photos/portfolio/DSC01585.jpg",
  "/photos/portfolio/DSC01544.jpg",
  "/photos/portfolio/83644E08-F7D1-46DA-BD2D-F97B0CD0ECC1_1_105_c.jpeg",
  "/photos/portfolio/DSC01578.jpg",
  "/photos/portfolio/DSC01593.jpg",
  "/photos/portfolio/DSC02510.jpg",
  "/photos/portfolio/DSC01555.jpg",
  "/photos/portfolio/DSC_6196-Pano.jpg",
  "/photos/portfolio/DSC02698.jpg",
  "/photos/portfolio/MEH_8557.jpg",
  "/photos/portfolio/A8B7B77E-8FFF-4378-AD05-21F72DFF46E1.jpg",
  "/photos/portfolio/DSC01554.jpg",
  "/photos/portfolio/DSC02705.jpg",
  "/photos/portfolio/DSC01556.jpg",
  "/photos/portfolio/DSC_6496-HDR-Pano.jpg",
  "/photos/portfolio/DSC01595.jpg",
  "/photos/portfolio/DSC01608.jpg",
  "/photos/portfolio/DSC_6568-HDR.jpg",
  "/photos/portfolio/DSC01812.jpg",
  "/photos/portfolio/DSC01609.jpg",
  "/photos/portfolio/DSC01580.jpg",
  "/photos/portfolio/DSC02512.jpg",
  "/photos/portfolio/DSC02561.jpg",
  "/photos/portfolio/DSC01524.jpg",
  "/photos/portfolio/IMG_1988.jpg",
  "/photos/portfolio/DSC_6460-HDR.jpg",
  "/photos/portfolio/DSC02364.jpg",
  "/photos/portfolio/DSC00215.jpg",
  "/photos/portfolio/heucostanks_starstack.jpg",
  "/photos/portfolio/IMG_2306.jpg",
  "/photos/portfolio/IMG_1196.jpg",
  "/photos/portfolio/DSC02563.jpg",
  "/photos/portfolio/DSC01673-2.jpg",
  "/photos/portfolio/DSC02573.jpg",
  "/photos/portfolio/DSC_6372-Pano.jpg",
  "/photos/portfolio/DSC02105-Pano.jpg",
  "/photos/portfolio/IMG_2060.jpg",
  "/photos/portfolio/DSC_6152-HDR.jpg",
  "/photos/portfolio/DSC_6627.jpg",
  "/photos/portfolio/IMG_1193.jpg",
  "/photos/portfolio/DSC02564.jpg",
  "/photos/portfolio/DSC01535.jpg",
  "/photos/portfolio/DSC_6630.jpg",
  "/photos/portfolio/DSC_6457-HDR.jpg",
  "/photos/portfolio/DSC_6591.jpg",
  "/photos/portfolio/DSC_6121-Pano.jpg",
  "/photos/portfolio/08ED12EA-B5C2-4665-A5C1-307EBBCA770E.jpg",
  "/photos/portfolio/DSC02559.jpg",
  "/photos/portfolio/DSC01539.jpg",
  "/photos/portfolio/DSC01673.jpg",
  "/photos/portfolio/IMG_1200.jpg",
  "/photos/portfolio/IMG_1995.jpg",
  "/photos/portfolio/DSC_6741-Pano.jpg",
  "/photos/portfolio/DSC02543.jpg",
  "/photos/portfolio/DSC02557.jpg",
  "/photos/portfolio/DSC02387.jpg",
  "/photos/portfolio/_DSC5886.jpg",
  "/photos/portfolio/IMG_2092.jpg",
  "/photos/portfolio/IMG_1982.jpg",
  "/photos/portfolio/DSC02581.jpg",
  "/photos/portfolio/DSC02546.jpg",
  "/photos/portfolio/IMG_1986.jpg",
  "/photos/portfolio/DSC01528.jpg",
  "/photos/portfolio/IMG_1985.jpg",
  "/photos/portfolio/GOPR8406.jpg",
  "/photos/portfolio/DSC_6567.jpg",
  "/photos/portfolio/DSC01529.jpg",
  "/photos/portfolio/DSC02593.jpg",
  "/photos/portfolio/DSC01566.jpg",
  "/photos/portfolio/DSC02655.jpg",
  "/photos/portfolio/8612A5DA-9459-44AF-89E1-AEEB985B5F5A.jpg",
  "/photos/portfolio/IMG_2541.jpg",
  "/photos/portfolio/DSC01598.jpg",
  "/photos/portfolio/DSC01573.jpg",
  "/photos/portfolio/DSC01559.jpg",
  "/photos/portfolio/DSC01607.jpg",
  "/photos/portfolio/DSC01612.jpg",
  "/photos/portfolio/DSC02657.jpg",
  "/photos/portfolio/DSC_6652-Pano.jpg",
  "/photos/portfolio/DSC01558.jpg",
  "/photos/portfolio/DSC02045.jpg",
  "/photos/portfolio/DSC01564.jpg",
  "/photos/portfolio/DSC01574.jpg",
  "/photos/portfolio/DSC01560.jpg",
  "/photos/portfolio/IMG_7204.jpg",
  "/photos/portfolio/DSC02647.jpg",
  "/photos/portfolio/DSC02109.jpg",
  "/photos/portfolio/DSC_6736-HDR.jpg",
  "/photos/portfolio/DSC01602.jpg",
  "/photos/portfolio/DSC_6103.jpg",
  "/photos/portfolio/DSC02646.jpg",
  "/photos/portfolio/DSC01561.jpg",
  "/photos/portfolio/DSC01588.jpg",
  "/photos/portfolio/DSC02687.jpg",
  "/photos/portfolio/IMG_1272.jpg",
  "/photos/portfolio/DSC_6101.jpg",
  "/photos/portfolio/DSC_6118-HDR.jpg",
  "/photos/portfolio/DSC02645.jpg",
  "/photos/portfolio/DSC01576.jpg",
  "/photos/portfolio/DSC02300-Pano.jpg",
  "/photos/portfolio/DSC01553.jpg",
];

// Shuffle array using Fisher-Yates algorithm
export function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

// Determine if media is portrait or landscape based on filename patterns
export function getPhotoAspect(src: string): 'landscape' | 'portrait' {
  // Most DSC photos are landscape, IMG photos vary
  // Pano files are definitely landscape
  if (src.includes('Pano')) return 'landscape';
  if (src.includes('IMG_')) return Math.random() > 0.5 ? 'portrait' : 'landscape';
  return 'landscape';
}

// Determine if file is a video
export function isVideo(src: string): boolean {
  const videoExtensions = ['.mp4', '.mov', '.webm', '.MP4', '.MOV', '.WEBM'];
  return videoExtensions.some(ext => src.endsWith(ext));
}

export function preparePhotosForCarousel() {
  const shuffled = shuffleArray(allPortfolioPhotos);
  return shuffled.map((src, idx) => ({
    src,
    alt: `Southwest photography ${idx + 1}`,
    aspect: getPhotoAspect(src),
    isVideo: isVideo(src)
  }));
}
