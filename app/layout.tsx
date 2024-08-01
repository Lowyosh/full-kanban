import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Navbar from "@/components/Navbar";

const poppins = Poppins({ subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
 });

export const metadata: Metadata = {
  title: "Project Kanban",
  description: "Personal Kanban Project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={`${poppins.className} dark:bg-slate-900  text-white`}>
        <Navbar/>
        {children}
        </body>
    </html>
    </ClerkProvider>
  );
}
