import type { Metadata } from "next";
import { Noto_Sans_JP } from 'next/font/google';
import "./globals.css";
import Header from "./components/Header";
import { NextAuhtProvider } from "./lib/next-auth/provider";

const notoSansJP = Noto_Sans_JP({ subsets: ["latin"], weight: ["400"]});

// 全ページに共通するコンポーネントはlayout.tsxに定義する
export const metadata: Metadata = {
  title: "Book Commerce",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={notoSansJP.className} >
        <NextAuhtProvider>
          <Header />
          {children}
        </NextAuhtProvider>
      </body>
    </html>
  );
}
