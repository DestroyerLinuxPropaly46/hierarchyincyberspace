import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import './fontawesome';
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Home - Hierarchy In Cyberspace",
  description: "Most powerful clan in Modern Warship",
  icons: {
    icon: "/hic.png",
  },
  authors: [{ name: "fkzsecXploit.dev" }],
  keywords: [
    "HIC", "Blogger", "Project", "Modern Warship", "Modern Warship Clan", "hierarchy my id",
    "hierarchy in cyberspace", "hierarchy in", "hierarchy cyberspace", "hic hierarchy ic",
    "fkzsec", "fkzsecxploit", "fkzsecxploit.dev", "fkzsecxploit.com", "hierarchyincyberspace.my.id",
    "hierarchyincyberspace clan", "hierarchyincyberspace clan modern warship", "fkzsec clan modern warship clan",
  ],
  robots: "index, follow, max-image-preview:large",
  
  openGraph: {
    type: "website",
    url: "https://hierarchyincyberspace.fkzproject.my.id", 
    title: "Home - Hierarchy In Cyberspace",
    description: "Most powerful clan in Modern Warship",
    images: [
      {
        url: "https://hierarchyincyberspace.fkzproject.my.id/hic.png", 
        width: 1200,
        height: 630,
        alt: "Hierarchy In Cyberspace Logo"
      }
    ]
  }
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
