"use client";

import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] }) ;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <meta name="theme-color" content="#FBBF24" />
        <title>Take & Give - Free Item Exchange Platform</title>
        <meta name="description" content="Give and receive free items with no limitations. A community of sharing without restrictions." />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
