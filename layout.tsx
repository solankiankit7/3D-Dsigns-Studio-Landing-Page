export const metadata = {
  title: "Dsigns Studio — Immersive Architecture",
  description: "A hyper‑real 3D landing for premium architecture & interior design.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
