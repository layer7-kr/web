import * as s from './layout.css';

import type { Metadata } from 'next';

import Header from '@/components/Header';
import Provider from '@/components/Provider';
import LoadingProvider from '@/components/LoadingProvider';
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
      <head>
        <link rel="preload" href="/assets/fonts/Pretendard/Pretendard-Regular.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/assets/fonts/Pretendard/Pretendard-Medium.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/assets/fonts/Pretendard/Pretendard-Bold.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
      </head>
      <body className={s.body}>
        <LoadingProvider>
          <Provider>
            <Header className={s.header} />
            {children}
          </Provider>
        </LoadingProvider>
        <ClarityProvider />
      </body>
    </html>
  );
}
