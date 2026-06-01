import type { Metadata } from "next";
import { Inter, Merriweather } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const merriweather = Merriweather({
  weight: ["300", "400", "700", "900"],
  subsets: ["latin"],
  variable: "--font-merriweather",
});

export const metadata: Metadata = {
  title: "Accurate Health Care, Inc. | Kind, Professional Care Givers",
  description:
    "Accurate Health Care provides compassionate home health care services in South Florida. Serving Miami-Dade, Broward, and Palm Beach counties since 1994 with over 64,000 clients served.",
  keywords: [
    "home health care",
    "nursing care",
    "home health aides",
    "South Florida",
    "elderly care",
    "medical care",
  ],
  openGraph: {
    title: "Accurate Health Care, Inc.",
    description:
      "Kind, Professional Care Givers... Paying Attention To Every Detail",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${merriweather.variable}`}>
      <body className="font-sans antialiased bg-background">
        {children}
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}
