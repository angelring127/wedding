import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";

const mainFont = localFont({
  src: "../assets/fonts/main.ttf",
  variable: "--font-main",
  display: "swap",
});

export const metadata: Metadata = {
  title: "우리의 결혼식에 초대합니다",
  description: "온라인 청첩장",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className={mainFont.variable}>
      <body className="antialiased font-main">{children}</body>
    </html>
  );
}
