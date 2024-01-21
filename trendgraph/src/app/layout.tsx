import type { Metadata } from "next";
import "./globals.css";
import React from "react";


/**
 * SEO METADATA
 */
export const metadata: Metadata = {
    title: "RESAS API APP",
    description: "RESAS APIを利用した人口統計ページ",
    authors: {
        name: "TT",
        url: "https://github.com/Exerea"
    },
    keywords: ["RESAS", "人口統計", "Next.js", "API", "Tat"]
};

/**
 * ページ構築を行います
 * @param children 配下のエレメント
 * @returns ページ
 */
export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="ja">
            <body>{children}</body>
        </html>
    );
}
