import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';

export const metadata: Metadata = {
  title: 'Renaldi — Full-Stack Engineer & UI/UX Designer',
  description:
    'Renaldi — full-stack engineer with a UI/UX eye. Scalable web architecture, mobile applications and minimalist interface design.',
  keywords: [
    'Renaldi',
    'Full-Stack Engineer',
    'Frontend Developer',
    'UI/UX Designer',
    'Next.js',
    'React',
    'Tailwind CSS',
    'Portfolio',
  ],
  authors: [{ name: 'Renaldi' }],
  openGraph: {
    title: 'Renaldi — Full-Stack Engineer & UI/UX Designer',
    description:
      'I design the interface & write the code. Scalable web architecture, mobile applications, and minimalist interface design.',
    type: 'website',
    locale: 'en_US',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600&family=Geist+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased selection:bg-accent selection:text-white min-h-screen bg-background text-foreground transition-colors duration-200">
        <ThemeProvider
          attribute="data-theme"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

