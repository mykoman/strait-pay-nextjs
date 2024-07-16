import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "./components/Nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Todo App by Michael Ogbuma",
  description: "Built by Michael Ogbuma",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen bg-gray-100`}>
        <Nav />
        <main className="container mx-auto">{children}</main>
      </body>
    </html>
  );
}
