import { GeistSans, GeistMono } from "geist/font";
import {
  GeistPixelCircle,
  GeistPixelGrid,
  GeistPixelSquare,
} from "geist/font/pixel";

import "remixicon/fonts/remixicon.css";
import "./globals.css";

import ScrollToTop from "@/components/ScrollToTop";


export const metadata = {
  title: "Handscape — Learn Sign Language",
  description:
    "A learning space built around hand-based communication",

  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`
          ${GeistSans.variable}
          ${GeistMono.variable}
          ${GeistPixelCircle.variable}
          ${GeistPixelGrid.variable}
          ${GeistPixelSquare.variable}
        `}
      >
        <ScrollToTop />
        {children}
      </body>
    </html>
  );
}