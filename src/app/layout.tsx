import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Seo from "./Components/Seo";
import Navbar from "./Components/Navbar";
import MobileM from "./Components/MobileM";

import Social from "./Components/Social";
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
    label: "Services/Products",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Seo title="" description="" keywords="" author="" image="" url="" />
        <header>
          {/*LOGO*/}
          <Navbar items={items} />
          <MobileM items={items} />
          {/* Login */}
          {/* Search */}
          {/* Notifications */}
          {/* CTA */}
        </header>
        {children}
        <footer>
          {/* CTA Horizontal */}
          {/* Left Bottom */}
          <Social urls={social} />
          {/* Right Bottom */}
          {/* Copy Write */}
        </footer>
      </body>
    </html>
  );
}
