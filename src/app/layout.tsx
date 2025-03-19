import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../styles/global.scss';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap', 
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Mladen Milentijevic - Software Developer | Web Engineer | Tech Enthusiast',
  description: 'Personal portfolio website of Mladen Milentijevic, a software developer and web engineer with expertise in Python, TypeScript, and modern web technologies.',
  authors: [{ name: 'Mladen Milentijevic' }],
  keywords: ['software developer', 'web engineer', 'Python', 'TypeScript', 'React', 'Django'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}