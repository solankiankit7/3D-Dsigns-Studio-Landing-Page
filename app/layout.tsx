import './globals.css';
import React from 'react';

export const metadata = {
  title: 'Dsigns Studio',
  description: 'Premium Architecture & Interior Design',
} as const;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang=\"en\">
      <head />
      <body>{children}</body>
    </html>
  );
}
