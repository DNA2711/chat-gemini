import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Sider from "@/components/Sider";
import MenuBar from "@/components/Nav/MenuBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AI Content Creator",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex justify-between overflow-hidden h-screen">
          <Sider />
          <div className="flex-grow flex flex-col">
            <Header />
            <div className="flex-grow overflow-y-auto max-h-screen scroobar-styles bg-[url('/bg-image-light.jpg')] dark:bg-[url('/bg-image-dark.jpg')] bg-cover bg-center">
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
