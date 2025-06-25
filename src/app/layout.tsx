'use client';

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Seo from "./Components/Seo";
import Logo from "./Components/logo";
import Navbar from "./Components/Navbar";
import MobileM from "./Components/MobileM";

import HexCounter from './Components/HexCounter';
import Social from "./Components/Social";
import Chat from "./Components/chat";




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
  
  {
    label: "What We Do",
    dropdown: [
      { label: "Web Development", href: "/services/web-development" },
      { label: "SEO", href: "/services/seo" },
      { label: "Content Creation", href: "/services/content-creation" },
    ],
  },{ label:"About Us", href: "/about" },
  { label: "Our Customers", href: "/customers" },
  { label: "Contact Us", href: "/contact" },
];

const social = [
  "https://twitter.com/yourprofile",
  "https://facebook.com/yourprofile",
  "https://instagram.com/yourprofile",
  "https://linkedin.com/in/yourprofile",
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased  w-10/12 justify-items-center`}
      >
        <Seo title="" description="" keywords="" author="" image="" url="" />
        <div className="bg-(--background)  bg-cover bg-fixed bg-center bg-no-repeat min-h-screen ">
        {/* Remember to add /public/Doc_Back.png */}
        <header className="flex flex-row text-(--primary) p-2 gap-5">
          <Logo text="206-CE" imagePath="/Logo_ce.png" size={100} />
          <Navbar items={items} />
          <MobileM items={items} />
          {/* Notifications */}
          {/* CTA */}
        </header>
        {children}
        <footer>
          {/* CTA Horizontal */}
          {/*<HexCounter /> FIX COUNTER*/}
          <Social urls={social} />
          {/* Right Bottom */}
          {/* Copy Write */}
          <Chat />
        </footer>
        </div>
      </body>
    </html>
  );
}
