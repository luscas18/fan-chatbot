import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FuriaChat - A paixão da FURIA na palma da sua mão",
  description:
    "Aqui, cada mensagem é um grito de torcida e cada interação aproxima você ainda mais da sua paixão. Acesse o FuriaChat e viva a emoção da FURIA onde quer que você esteja.",
  openGraph: {
    title: "FuriaChat - A paixão da FURIA na palma da sua mão",
    description:
      "Aqui, cada mensagem é um grito de torcida e cada interação aproxima você ainda mais da sua paixão. Acesse o FuriaChat e viva a emoção da FURIA onde quer que você esteja.",
    url: "https://furia-fan-webchatbot.vercel.app",
    siteName: "FuriaChat",
    images: [
      {
        url: "https://furia-fan-webchatbot.vercel.app/images/landing-page/time_furia.webp",
        width: 1200,
        height: 630,
        alt: "FuriaChat - A paixão em cada mensagem",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FuriaChat - A paixão da FURIA na palma da sua mão",
    description:
      "Aqui, cada mensagem é um grito de torcida e cada interação aproxima você ainda mais da sua paixão. Acesse o FuriaChat e viva a emoção da FURIA onde quer que você esteja.",
    images: [
      {
        url: "https://furia-fan-webchatbot.vercel.app/images/landing-page/time_furia.webp",
        width: 1200,
        height: 630,
        alt: "FuriaChat - A paixão em cada mensagem",
      },
    ],
  },
  icons: {
    icon: "/images/landing-page/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
