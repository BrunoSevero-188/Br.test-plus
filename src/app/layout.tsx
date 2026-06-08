import type { Metadata } from "next"; 
import "./globals.css";

export const metadata: Metadata = {
  title: "br-test",
  description: "Qualidade, confiança e atendimento especializado para seu smartphone. Confira nossos acessórios.",
  icons: {
    icon: [
      { url: "/favicon-32x32.png", rel: "icon", type: "image/png" },
      { url: "/favicon-16x16.png", rel: "icon", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", rel: "apple-touch-icon" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body>{children}</body>
    </html>
  );
}