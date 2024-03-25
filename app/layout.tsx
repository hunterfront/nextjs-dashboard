import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: {
    default: 'Acme Dashboard',
    template: '%s | Acme Dashboard',
  },
  description: 'The official Next.js Learn Dashboard built with App Router',
  metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
};

export default function RootLayout({
  children,
  auth,
}: {
  children: React.ReactNode;
  auth: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <nav>
          <Link href={'/login'}>Open Modal</Link>
        </nav>
        <div>{auth}</div>
        <div>{children}</div>
      </body>
    </html>
  );
}
