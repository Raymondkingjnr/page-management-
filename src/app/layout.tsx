import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";

const inter = Manrope({
  weight: ["400", "500", "700", "800"],
  style: ["normal"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Page Assets",
  description: "Asset managment and investment platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className=" relative">
          <Header />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
