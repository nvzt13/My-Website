import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/main/Footer";
import Nav from "@/components/main/Nav";
import {StoreProvider} from "../lib/StoreProvider";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Space Portfolio",
  description: "This is my portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
  <StoreProvider>
    <html lang="en">
      <body
        className={`${inter.className} overflow-y-scroll overflow-x-hidden  dark:text-white`}
      >
       <Nav />
        {children}
        <Footer />
      </body>
    </html>
  </StoreProvider>
  );
}
