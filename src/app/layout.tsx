import type { Metadata } from "next";
import "./globals.css";
import DesignSwitcher from "@/components/DesignSwitcher";

export const metadata: Metadata = {
  title: "Notary Services | Professional Legal Documentation",
  description: "Your trusted partner for notary services. Expertise in real estate, corporate law, family law and estate planning.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased overflow-x-hidden">
        <DesignSwitcher />
        {children}
      </body>
    </html>
  );
}
