import * as s from './layout.css';

import type { Metadata } from 'next';

import Header from '@/components/Header';
import Provider from '@/components/Provider';
import ClarityProvider from '@/components/Provider/clarity';
import '@/styles/global.css';

export const metadata: Metadata = {
  title: 'Layer7',
  description: '선린인터넷고등학교 해킹 전공 동아리',
  keywords: [
    'Layer7',
    'layer7',
    '레쎄',
    '레이어세븐',
    '선린인터넷고등학교',
    'sunrin',
    '선린',
    '정보보호과',
    '동아리',
  ],
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    url: 'https://layer7.kr',
    siteName: 'Layer7',
    description: '선린인터넷고등학교 해킹 전공 동아리',
  },
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
        <ClarityProvider />
      </body>
    </html>
  );
}
