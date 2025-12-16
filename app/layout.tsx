import type { Metadata } from "next";
import { Space_Grotesk, Outfit } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fernanda Felix - Portfolio",
  description: "Desenvolvedora front-end especializada em React, Next.js e interfaces digitais imersivas que unem alta performance, design apurado e foco total na experiência do usuário",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body
        className={`${spaceGrotesk.variable} ${outfit.variable} antialiased overflow-x-hidden selection:bg-accent-primary selection:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
