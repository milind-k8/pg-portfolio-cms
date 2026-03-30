import type { Metadata } from "next";
import { Playfair_Display, Inter, Marcellus, Montserrat, Homemade_Apple } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const marcellus = Marcellus({
  variable: "--font-marcellus",
  weight: "400",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const homemadeApple = Homemade_Apple({
  variable: "--font-homemade-apple",
  weight: "400",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Lovio - Luxury Photography Portfolio",
  description: "High-end wedding and event photography portfolio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} ${marcellus.variable} ${montserrat.variable} ${homemadeApple.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
