import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/main/Footer";
import Nav from "@/components/main/Nav";
import {StoreProvider} from "../lib/StoreProvider";
import Theme from "@/components/sub/Theme";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nevzat Atalay",
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
<body className={`${inter.className} overflow-y-scroll overflow-x-hidden min-h-screen flex flex-col bg-gradient-to-r from-gray-100 to-sky-500 dark:bg-gradient-to-r dark:from-[#030014] dark:to-[#000]`}>
  <Nav />
  <Theme />
  <div className="flex-grow">{children}</div>
  <Footer />
</body>
    </html>
  </StoreProvider>
  );
}
