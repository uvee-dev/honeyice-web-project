import { Inter } from "next/font/google";
import localFont  from 'next/font/local'
import "./globals.css";

const hkGrotesk = localFont({src: './fonts/HankenGrotesk-VariableFont_wght.ttf'})

export const metadata = {
  title: "honeyïce",
  description: "We promote love and authenticity."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={hkGrotesk.className}>
        {children}
        </body>
    </html>
  );
}
