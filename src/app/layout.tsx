import * as s from './layout.css';

import type { Metadata } from 'next';

import Header from '@/components/Header';
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
        <Header className={s.header} />
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
