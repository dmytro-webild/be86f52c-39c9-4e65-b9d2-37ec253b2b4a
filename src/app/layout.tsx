import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Montserrat } from "next/font/google";



export const metadata: Metadata = {
  title: 'Gabriel Santos Pendon | Webdesigner Dortmund für lokale Unternehmen',
  description: 'Moderne, mobil-freundliche Websites für Friseure, Cafés, Handwerker & Praxen in Dortmund. Persönliche Betreuung, faire Preise und Rundum-Service.',
  keywords: ["Webdesigner Dortmund, Website erstellen, lokale Unternehmen, Friseure, Cafés, Handwerker, Praxen, mobilfreundlich, persönliche Betreuung, Gabriel Santos Pendon"],
  openGraph: {
    "title": "Gabriel Santos Pendon | Webdesigner Dortmund für lokale Unternehmen",
    "description": "Moderne, mobil-freundliche Websites für Friseure, Cafés, Handwerker & Praxen in Dortmund. Persönliche Betreuung, faire Preise und Rundum-Service.",
    "url": "https://www.gabrielsantospendon.de",
    "siteName": "Gabriel Santos Pendon",
    "images": [
      {
        "url": "http://img.b2bpic.net/free-photo/representations-user-experience-interface-design_23-2150038912.jpg",
        "alt": "Moderne Website auf Laptop und Smartphone"
      }
    ],
    "type": "website"
  },
  twitter: {
    "card": "summary_large_image",
    "title": "Gabriel Santos Pendon | Webdesigner Dortmund für lokale Unternehmen",
    "description": "Moderne, mobil-freundliche Websites für Friseure, Cafés, Handwerker & Praxen in Dortmund. Persönliche Betreuung, faire Preise und Rundum-Service.",
    "images": [
      "http://img.b2bpic.net/free-photo/representations-user-experience-interface-design_23-2150038912.jpg"
    ]
  },
  robots: {
    "index": true,
    "follow": true
  },
};

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${montserrat.variable} ${inter.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
