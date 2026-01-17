import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('http://localhost:3000'),
  title: "Agustín Rojas - Full Stack Developer | Backend & AI Specialist",
  description: "Portafolio de Agustín Rojas, Full Stack Developer especializado en Backend potenciado con Inteligencia Artificial. Estudiante de Técnico Superior en Desarrollo de Software y Técnico Superior en Base de Datos e IA en el Instituto Tecnológico Santiago del Estero.",
  keywords: ["Agustín Rojas", "Full Stack Developer", "Backend Developer", "AI Developer", "JavaScript", "Node.js", "Next.js", "TypeScript", "PostgreSQL", "MongoDB", "Machine Learning", "Instituto Tecnológico Santiago del Estero", "Desarrollo de Software"],
  authors: [{ name: "Agustín Rojas" }],
  icons: {
    icon: "/profile.png",
  },
  openGraph: {
    title: "Agustín Rojas - Full Stack Developer & AI Specialist",
    description: "Desarrollador Full Stack enfocado en Backend potenciado con Inteligencia Artificial. JavaScript, Node.js, Next.js y más.",
    url: "https://agustinrojas.dev",
    siteName: "Agustín Rojas Portfolio",
    type: "website",
    images: [
      {
        url: "/profile.png",
        width: 1024,
        height: 1024,
        alt: "Agustín Rojas - Full Stack Developer"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Agustín Rojas - Full Stack Developer",
    description: "Backend Developer & AI Specialist. JavaScript, Node.js, Next.js expert.",
    images: ["/profile.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
        style={{
          backgroundColor: 'var(--background)',
          color: 'var(--foreground)',
          minHeight: '100vh',
          margin: 0,
          fontFamily: 'var(--font-geist-sans), sans-serif',
        }}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
