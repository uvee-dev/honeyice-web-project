import localFont from "next/font/local";
import "./globals.css";
import NavBar from "./components/navBar";
import Footer from "./components/footer";
import ScrollWrapper from "./components/RelaxedScroll";

const hkGrotesk = localFont({
  src: "./fonts/HankenGrotesk-VariableFont_wght.ttf",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`flex flex-col overflow-x-hidden items-center justify-between ${hkGrotesk.className} text-black dark:bg-black dark:text-white p-6 md:px-20 xl:px-72 bg-[#F6ECE0]`}>
        <NavBar />
        <ScrollWrapper>{children}</ScrollWrapper>
        <Footer />
      </body>
    </html>
  );
}
