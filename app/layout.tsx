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
      <body className={montserrat.className}>
        <Navbar/>
        <div>NAVBAR TEST</div>
        {children}
      </body>
    </html>
  );
}