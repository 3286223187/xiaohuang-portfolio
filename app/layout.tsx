import type { Metadata } from "next";
import "./globals.css";
import { siteData } from "@/data/site-data";
import { siteFonts } from "@/lib/site-fonts";
import type { CSSProperties } from "react";

export const metadata: Metadata = {
  title: siteData.meta.title,
  description: siteData.meta.description,
};

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className="h-full antialiased">
      <body
        className="min-h-full flex flex-col"
        style={
          {
            "--font-site-sans-stack": siteFonts.sansStack,
            "--font-site-mono-stack": siteFonts.monoStack,
          } as CSSProperties
        }
      >
        {children}
        {modal}
      </body>
    </html>
  );
}
