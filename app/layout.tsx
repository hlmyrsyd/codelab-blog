import type { Metadata } from "next";
import { Sidebar } from "./components";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "CodeLab by Hilmy Rasyad",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className="gap-10 w-full h-screen flex flex-row xl:px-[24rem] px-10">
          <div className="h-full w-56 overflow-auto">
            <Sidebar />
          </div>
          <main className="flex-1 h-full overflow-auto p-10">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
