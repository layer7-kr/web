import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Layer7',
  description: 'Layer7',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ko'>
      <body>{children}</body>
    </html>
  );
}
