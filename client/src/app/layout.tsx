import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

export const metadata: Metadata = {
  title: "Todo App",
  description: "Todo App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="bg-stone-900 text-white min-h-screen">
          {children}
        </div>
        <Toaster richColors />
      </body>
    </html>
  );
}
