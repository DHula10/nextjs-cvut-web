import "@/app/styles/globals.css";
import "@/app/styles/variables.css";

import Header from "@/app/components/header";
import Footer from "@/app/components/footer";

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
        <p className="text-lg text-gray-700">Stránka, kterou hledáte, neexistuje.</p>
      </main>
      <Footer />
    </>
  );
}