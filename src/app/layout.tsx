import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../styles/global.scss';
import '../styles/components/layout/header.scss';
import '../styles/components/layout/footer.scss';
import '../styles/components/sections/hero.scss';
import '../styles/components/sections/about.scss';
import '../styles/components/sections/skills.scss';
import '../styles/components/sections/experience.scss';
import '../styles/components/sections/projects.scss';
import '../styles/components/sections/education.scss';
import '../styles/components/sections/contact.scss';

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