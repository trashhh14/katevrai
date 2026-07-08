import type { Metadata } from "next";
import { Manrope, Playfair_Display } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["cyrillic", "latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["cyrillic", "latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://katevrai.ru"),
  title: "Kate Vrai | Растяжка, балет и пилатес",
  description:
    "Индивидуальные и групповые занятия по растяжке, балету и пилатесу для взрослых. Бережный подход, осанка, гибкость и эстетика движения.",
  keywords: [
    "растяжка",
    "балет для взрослых",
    "пилатес",
    "тренер по растяжке",
    "осанка",
    "гибкость",
  ],
  openGraph: {
    title: "Kate Vrai | Растяжка, балет и пилатес",
    description:
      "Бережные индивидуальные и групповые занятия для красивого движения, гибкости и осанки.",
    url: "https://katevrai.ru",
    siteName: "Kate Vrai",
    locale: "ru_RU",
    type: "website",
    images: [
      {
        url: "/ballet-stretch.jpg",
        width: 1200,
        height: 1500,
        alt: "Балерина на занятии по растяжке",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kate Vrai | Растяжка, балет и пилатес",
    description:
      "Индивидуальные и групповые занятия по растяжке, балету и пилатесу.",
    images: ["/ballet-stretch.jpg"],
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ru"
      className={`${manrope.variable} ${playfair.variable} scroll-smooth`}
    >
      <body>{children}</body>
    </html>
  );
}
