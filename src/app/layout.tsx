import * as s from './layout.css';

import type { Metadata } from 'next';

import Header from '@/components/Header';
import Provider from '@/components/Provider';
import '@/styles/global.css';

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
    <html>
      <body className={s.body}>
        <Provider>
          <Header className={s.header} />
          {children}
        </Provider>
      </body>
    </html>
  );
}
