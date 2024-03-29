import type { Metadata } from 'next';
import './globals.css';
import Link from 'next/link';
import QueryProvider from './provider';
import whiteCat from '../assets/white-cat.gif';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'MY TODO LIST',
  description: 'Generated by create next app'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <nav className="w-100 flex justify-center items-center gap-x-20 h-20 font-semibold text-lg bg-rose-200">
          <Image src={whiteCat} alt="고양이가 움직이는 그림" width="50" />
          <Link href="/">HOME</Link>
          <Link href="/about">ABOUT</Link>
          <Link href="/report">REPORT</Link>
          <Link href="/todos-csr">TODOS-CSR</Link>
          <Link href="/todos-ssr">TODOS-SSR</Link>
          <Image src={whiteCat} alt="고양이가 움직이는 그림" width="50" />
        </nav>
        <QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  );
}
