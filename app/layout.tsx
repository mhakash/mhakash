import { PropsWithChildren } from "react";
import { Inter } from "next/font/google";
import Image from "next/image";

import "../styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Mehdi Hassan Akash",
  description: "Mehdi Hassan Akash",
  icons: {
    icon: "./icon.svg",
  },
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen">
          <main className="flex-1 max-w-4xl mx-auto">{children}</main>

          <footer className="flex justify-center border-t py-4">
            <Image
              unoptimized
              src="/icon.svg"
              alt="mhakash logo"
              className=""
              width={20}
              height={20}
            />
            <span className="ml-2">2023</span>
          </footer>
        </div>
      </body>
    </html>
  );
}
