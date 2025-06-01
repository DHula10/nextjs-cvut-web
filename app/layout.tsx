import type { Metadata } from "next";
import "./styles/globals.css"
import "./styles/variables.css";

import DevNavigation from "./components/devHeader";
import  Header  from "./components/header";
import Footer from "./components/footer";

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
    <html lang="cs">
      <body>
        <DevNavigation isHidden />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
