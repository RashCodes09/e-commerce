import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./static/Header";
import Footer from "./static/Footer";
import StoreProvider from "./global/StoreProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StoreProvider>
      <html lang="en">
        <body className={inter.className}>
          <Header />
          <div>{children}</div>
          <Footer />
        </body>
      </html>
    </StoreProvider>
  );
}
