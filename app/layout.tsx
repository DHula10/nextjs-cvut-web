import type { Metadata } from "next";
import "./styles/globals.css"

import DevNavigation from "./components/devHeader";
import  Header  from "./components/header";
import Footer from "./components/footer";
import Button from "./components/button";

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
        <DevNavigation />
        <Header />
        {children}

        <Button circleColor='#E9540E' textColor='black' text='CHCI KONZULTACI'/>
        <Button circleColor='limegreen' textColor='lightgray' text='Více Info'/>

        <Footer />
      </body>
    </html>
  );
}
