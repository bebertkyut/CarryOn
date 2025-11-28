import type { Metadata } from "next";
import "./globals.css";
import { Raleway } from "next/font/google";
import type { ReactNode } from "react";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["300","400","500","600","700"],
  variable: "--font-raleway",
  display: "swap"
});

export const metadata: Metadata = {
  title: "CarryOn",
  description: "CarryOn productivity platform",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={raleway.variable}>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}