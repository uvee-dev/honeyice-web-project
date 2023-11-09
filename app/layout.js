import { Inter } from "next/font/google";
import localFont  from 'next/font/local'
import "./globals.css";

const hkGrotesk = localFont({src: './fonts/HankenGrotesk-VariableFont_wght.ttf'})

export const metadata = {
  title: "honeyïce",
  description: "We promote love and authenticity.",
  openGraph: {
    title: "honeyïce",
    description: "We promote love and authenticity.",
    images: "/banner.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={hkGrotesk.className + ' h-screen overflow-hidden'}>
        {children}
        </body>
    </html>
  );
}
