import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { AuthProvider } from "@/lib/auth/AuthContext";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "AOI — AI Operator Institute | AI Systems for Small Business & AI Certification for Professionals",
  description:
    "AOI installs AI systems that respond to leads in 60 seconds, win back past customers, and automate follow-up for small businesses. Free AI readiness assessment in 3 minutes. Professional AI Operator Certification for individuals and teams.",
  keywords: "AI, artificial intelligence, business automation, AI certification, AI training, small business AI, AI assessment, AI operator, AI systems",
  authors: [{ name: "AOI — AI Operator Institute" }],
  creator: "AOI — AI Operator Institute",
  publisher: "AOI — AI Operator Institute",
  openGraph: {
    title: "AOI — AI Operator Institute | AI Systems for Small Business",
    description: "Install AI systems that respond to leads in 60 seconds and automate your business operations. Free AI readiness assessment.",
    url: "https://aoi-institute.com",
    siteName: "AOI — AI Operator Institute",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "AOI — AI Operator Institute",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AOI — AI Operator Institute | AI Systems for Small Business",
    description: "Install AI systems that respond to leads in 60 seconds and automate your business operations.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased scroll-smooth`}>
      <body className="min-h-full flex flex-col bg-white text-aoi-dark">
        <AuthProvider>
          <Navigation />
          <main className="flex-1 pt-16">{children}</main>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  )
}
