import Footer from "./components/footer";
import Navbar from "./components/navbar";
import "./globals.css";
import { Montserrat } from "next/font/google";
const montserrat = Montserrat({ subsets: ["latin"], weight: ["500", "700"] });
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} min-h-screen flex flex-col`}>
        <Navbar/>
        <main className="flex-1">
          {children}
        </main>
        <Footer/>
      </body>
    </html>
  );
}