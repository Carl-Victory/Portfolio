import type { Metadata } from "next";
import { Urbanist, Caveat } from "next/font/google";
import { Theme } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import "./globals.css";
import Guidlines from "@/components/MinorComponents/Guidlines";

const urbanist = Urbanist({
  subsets: ["latin"],
  variable: "--font-urbanist",
});

const caveat = Caveat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-caveat",
});

export const metadata: Metadata = {
  title: "Victory Nnamdi Portfolio",
  description:
    "Portfolio website of Victory Nnamdi, a Full Stack Developer specializing in creating user-focused web applications with modern technologies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${urbanist.variable} ${caveat.variable} overflow-x-hidden`}
    >
      <body>
        <Theme>
          <div className="relative mx-auto max-w-[960px] px-4 pt-5">
            {children}
            <Guidlines />
          </div>
        </Theme>
      </body>
    </html>
  );
}
