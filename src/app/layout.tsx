import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";


import Seo from "./Components/Seo";
import Navbar from "./Components/Navbar";
import MobileM from "./Components/MobileM";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const items = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Services",
    dropdown: [
      { label: "Web Development", href: "/services/web-development" },
      { label: "SEO", href: "/services/seo" },
      { label: "Content Creation", href: "/services/content-creation" },
    ],
  },
  { label: "Contact", href: "/contact" },
];


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Seo title="" description="" keywords="" author="" image="" url="" />
        <header>
          {/*LOGO*/}
          <Navbar items={items} />
          <MobileM items={items} />

        </header>
        {children}
      </body>
    </html>
  );
}
