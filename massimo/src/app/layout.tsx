import type { Metadata } from "next";
import "./globals.css";
import Notification from "@/components/Notification";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Home Page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Notification/>
        <NavBar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
