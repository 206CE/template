"use client";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Seo from "./Components/Seo";
import Logo from "./Components/Logo";
import Navigation from "./Components/Navigation";

import HexCounter from "./Components/HexCounter";
import Social from "./Components/Social";
import Chat from "./Components/Chat";

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
    label: "Services",
    dropdown: [
      { label: "Web Development", href: "/services/web-development" },

    ],
  },
  { label: "About", href: "/about" },
  { label: "Customers", href: "/customers" },
  { label: "Contact", href: "/contact" },
];

const social = [
    "https://linkedin.com/in/yourprofile",
  "https://facebook.com/yourprofile",
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-(--background)`}
      >
        <Seo
          title="CE206 It Services"
          description="Computing services"
          keywords="Website Development, IT Support, IT Training"
          author="Jaco Botha"
          image=""
          url=""
        />
        <div className="bg-(--background)  bg-cover bg-fixed bg-center bg-no-repeat min-h-screen ">
          {/* Remember to add /public/Doc_Back.png */}
          <header className="flex flex-row text-(--text-primary) p-2 gap-5">
            <Logo
              text="CE 206"
              imagePath="/Logo9.png"
              size={80}
              href="/Contact"
            />
            <Navigation
              items={items}
              itemClassName=" flex p-2 hover:text-(--primary-hover) bg-(--surface) rounded-lg text-(--text-primary) border border-(--border) transition duration-300 transform hover:scale-110"           />

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
