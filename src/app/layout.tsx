/* eslint-disable react-refresh/only-export-components */
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pilott OS | Sua operação em um único cockpit",
  description: "O Sistema Operacional B2B para gestão. Centralize CRM, workflows e operação com automação inteligente.",
  openGraph: {
    title: "Pilott OS | Sistema Operacional B2B",
    description: "Sua operação em um único cockpit. Centralize CRM e processos em uma interface limpa.",
    url: "https://pilottos.io",
    siteName: "Pilott OS",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
