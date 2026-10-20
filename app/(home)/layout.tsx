import type { Metadata } from "next";
import "@/app/styles/globals.css";
import "@/app/styles/variables.css";

import Header from "@/app/components/header";
import Footer from "@/app/components/footer";

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
    <>
      <Header isBgTransparent={true} />
      {children}
      <Footer />
    </>
  );
}

