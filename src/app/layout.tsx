'use client';

import { RecoilRoot } from 'recoil';

import '@/app/globals.css';
import { AppHeader } from '@/components/common/site/molecules/AppHeader';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <RecoilRoot>
          <div className="h-[10dvh] bg-base-200">
            <AppHeader />
          </div>
          <div className="h-[90dvh] bg-base-100">{children}</div>
        </RecoilRoot>
      </body>
    </html>
  );
}
