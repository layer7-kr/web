import * as s from './layout.css';

import type { Metadata } from 'next';

import '@/styles/global.css';
import { ThemeProvider } from 'next-themes';

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
    <html suppressHydrationWarning>
      <body className={s.body}>
        <ThemeProvider enableSystem>{children}</ThemeProvider>
      </body>
    </html>
  );
}
