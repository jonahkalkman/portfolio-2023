import "./globals.css";
import type {Metadata} from "next";
import Header from "../components/Header";

import localFont from "@next/font/local";

const londonUnderground = localFont({
  src: [
    {
      path: "../../public/fonts/london_regular.ttf",
      weight: "400",
    },
    {
      path: "../../public/fonts/london_heavy.ttf",
      weight: "800",
    },
  ],
  variable: "--font-london",
});

export const metadata: Metadata = {
  title: "Jonah Kalkman",
  description: "Portfolio website",
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body
        className={
          londonUnderground.variable + " " + londonUnderground.className
        }
      >
        <main>
          <div className="container mx-auto px-4">
            <Header />
          </div>
          {children}
        </main>
      </body>
    </html>
  );
}
