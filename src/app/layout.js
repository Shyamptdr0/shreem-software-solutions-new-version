import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  title: "Shreem Software Solutions",
  description: "Modern Software Solutions for your business",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} font-sans antialiased bg-white text-gray-900`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
