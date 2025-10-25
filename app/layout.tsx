import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MindFit - Your AI-Powered Fitness Companion",
  description: "Transform your health journey with personalized workout plans, nutrition guidance, and mental wellness support powered by cutting-edge AI technology.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
