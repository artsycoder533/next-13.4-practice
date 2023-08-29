import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "./Navbar";
//import library components from the file we made so that they can use client components
// import {Container} from '@/components/bootstrap'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next.js 13.4 Image Gallery",
  description: "Tutorial project by Coding in Flow.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} h-screen`}>
        <main className="">
          <Navbar />
          {/* <Container> */}
          {children}
          {/* </Container> */}
        </main>
      </body>
    </html>
  );
}
