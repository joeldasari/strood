import { Fugaz_One, Open_Sans } from "next/font/google";
import "./globals.css";

const openSans = Open_Sans({
  subsets: ["latin"],
});

const fugaz = Fugaz_One({
  subsets: ["latin"],
  weight: "400",
});

export const metadata = {
  title: "Strood",
  description: "Track your daily mood every day of the year!",
};

export default function RootLayout({ children }) {
  const header = (
    <header className="p-4 sm:p-8 flex items-center justify-between gap-4">
      <h1 className={`${fugaz.className} titleText`}>Strood</h1>
    </header>
  );
  const footer = (
    <footer className="p-4 sm:p-8">
      <p className="font-semibold text-center text-blue-500">
        Created by <span className="font-bold">Joel D</span>
      </p>
    </footer>
  );
  return (
    <html lang="en">
      <body
        className={`${openSans.className} w-full max-w-[1000px] mx-auto min-h-screen flex flex-col text-sm sm:text-base`}
      >
        {header}
        {children}
        {footer}
      </body>
    </html>
  );
}
