import type { Metadata } from "next";
import "./styles/globals.css"

import DevNavigation from "./components/devHeader";

export const metadata: Metadata = {
  title: "Transfer technologií ČVUT",
  keywords: ["transfer", "technologie", "ČVUT", "transfer technologií, inqbay, ingine"],
  description: "Centrum transferu technologií od ČVUT",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <DevNavigation />
        {children}
      </body>
    </html>
  );
}
