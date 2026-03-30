import type { Metadata } from "next";
import { Playfair_Display, Inter, Marcellus, Montserrat, Homemade_Apple } from "next/font/google";
import Script from "next/script";
import client from "../../tina/__generated__/client";
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

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  let metaPixelId = "";
  try {
    const globalRes = await client.queries.global({ relativePath: "global.json" });
    metaPixelId = globalRes.data.global.metaPixelId || "";
  } catch (error) {
    // Gracefully handle if global settings don't exist yet
    console.error("Could not fetch global settings", error);
  }

  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} ${marcellus.variable} ${montserrat.variable} ${homemadeApple.variable}`}
    >
      <head>{metaPixelId ? (
          <Script
            id="meta-pixel"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                !function(f,b,e,v,n,t,s)
                {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                n.queue=[];t=b.createElement(e);t.async=!0;
                t.src=v;s=b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t,s)}(window, document,'script',
                'https://connect.facebook.net/en_US/fbevents.js');
                fbq('init', '${metaPixelId}');
                fbq('track', 'PageView');
              `,
            }}
          />
        ) : null}</head>
      <body>
        {metaPixelId ? (
          <noscript>
            <img
              height="1"
              width="1"
              style={{ display: "none" }}
              src={`https://www.facebook.com/tr?id=${metaPixelId}&ev=PageView&noscript=1`}
              alt=""
            />
          </noscript>
        ) : null}
        {children}
      </body>
    </html>
  );
}
