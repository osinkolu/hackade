import type { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Hackàde: Nigerian Data Science Hackathon Series',
    short_name: 'Hackàde',
    description: 'Hackàde hackathon series empowering data scientists in Nigeria',
    start_url: '/',
    display: 'standalone',
    background_color: '#fff',
    theme_color: '#fff',
    icons: [
      {
        src: '/icon.svg',
        sizes: 'any',
        type: 'image/svg',
      },
    ],
  }
}