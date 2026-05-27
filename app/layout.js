import './globals.css';

export const metadata = {
  title: 'Elvora | Luxury Event Planning & Production',
  description:
    'Elvora is a premier event planning and production company curating timeless, elegant experiences for weddings, corporate events, and social celebrations worldwide.',
  keywords: [
    'Elvora',
    'Wedding Event planner birthday event planner corporate jobs event planner event planners near me',
    'event planner assistant jobs near me event planner in lagos event planner in NIgeria',
    'baby shower event planner near me event coordinator',
    'Luxury Event Planner',
    'Event Production Top 10',
    'Top Wedding Planners Nigeria Lagos',
    'Corporate Event Planning Lagos Nigeria',
    'Social Event Design',
    'Event Designers Lagos',
    'Elegant Event Styling Lagos Nigeria',
    'High-End Event Coordinator',
    'Creative Event Direction',
    'Hire an Event Planner Today',
  ],
  authors: [{ name: 'Elvora', url: 'https://elvora-staging.vercel.app/' }],
  creator: 'Elvora',
  openGraph: {
    title: 'Elvora | Luxury Event Planning & Production',
    description:
      'We craft unforgettable weddings, corporate experiences, and social events with intentional design, seamless coordination, and elegant execution.',
    url: 'https://elvora-staging.vercel.app/',
    siteName: 'Elvora',
    images: [
      {
        url: 'https://elvora-staging.vercel.app/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Elvora Event Planning',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Elvora | Luxury Event Planning & Production',
    description:
      'Timeless, elegant events crafted with precision and heart.',
    site: '@ByElvora',
    images: ['https://elvora-staging.vercel.app/og-image.jpg'],
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-screen bg-black font-poppins text-white antialiased">
        {children}
      </body>
    </html>
  );
}
