import type { Metadata } from 'next';
import Script from 'next/script';
import '@/styles/globals.css';
import '@/styles/theme-azuki.css';
import '@/styles/hero-styles.css';
import '@/styles/mobile.css';

export const metadata: Metadata = {
  title: 'Vaibhav Ingle - Portfolio',
  description: 'Full Stack Developer & Designer',
  icons: {
    icon: '/favicon_io/favicon-32x32.png',
    apple: '/favicon_io/apple-touch-icon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;700&family=Poppins:wght@400;500;700;800&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon_io/favicon-16x16.png" />
        <link rel="manifest" href="/favicon_io/site.webmanifest" />
      </head>
      <body suppressHydrationWarning>
        <div className="cursor-reveal-layer"></div>
        {children}
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
