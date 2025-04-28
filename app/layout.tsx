import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/layout/Footer";
import Nav from "@/components/layout/Nav";
import StoreProvider from "../components/StoreProvider";
import Theme from "@/components/sub/Theme";
import FillReduxStore from "@/components/FillReduxStore";

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
        <body
          className={`${inter.className} overflow-y-scroll overflow-x-hidden font-sans text-primary min-h-screen flex flex-col`}
        >
          <Nav />
          <Theme />
          <div className="flex-grow mt-32">{children}</div>
          <Footer />
        </body>
      </html>
    </StoreProvider>
  );
}
