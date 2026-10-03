import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nithin Sai Valluri | AI Engineer & Computer Software Engineering Student",
  description:
    "Nithin Sai Valluri is a Junior Growth AI Engineer and Computer Software Engineering student interested in artificial intelligence, generative AI, data analytics, software engineering, and digital innovation.",
  keywords: [
    "Nithin Sai Valluri",
    "AI Engineer",
    "Growth AI Engineer",
    "Screen Andragogy Platforms",
    "Software Engineering",
    "Generative AI",
    "Data Analytics",
    "Power BI",
    "Amrita Sai Institute of Science & Technology",
  ],
  authors: [{ name: "Nithin Sai Valluri", url: "https://www.linkedin.com/in/nithin-sai-valluri-a947b0410" }],
  creator: "Nithin Sai Valluri",
  icons: {
    icon: "/favicon.svg",
  },
};

export const viewport: Viewport = {
  themeColor: "#07080b",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} dark scroll-smooth`}
    >
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      </head>
      <body className="bg-[#07080b] text-slate-100 antialiased selection:bg-[#ff5500] selection:text-[#07080b] min-h-screen tech-bg-mesh">
        {children}
      </body>
    </html>
  );
}
