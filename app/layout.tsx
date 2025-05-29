import type { Metadata } from "next";
import "./styles/globals.css"

export const metadata: Metadata = {
  title: "TRANSFER",
  description: "Projekt TRANSFER od ČVUT",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
