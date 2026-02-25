"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const pathname = usePathname();
    const linkClass = (href: string) =>
    pathname === href
      ? "font-bold" 
      : "hover:text-blue-600";
    const linkStyle = (href: string) =>
    pathname === href ? { color: "#FFBD00" } : {color:"#FFFFFF"};
  return (
    <nav className="w-full border-b" style={{ background: "linear-gradient(to right, #9B000A, #730000)" }}>      
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <div className="flex gap-5"> 
            <div className="w-8 h-8 rounded-md" style={{ backgroundColor: "#FFBD00" }}></div>
            <Link href="/" className="text-xl font-bold text-white">TeamCIT</Link>
          </div>
          

          {/* Links */}
          <div className="flex gap-10">
            <Link href="/" className={linkClass("/")} style={linkStyle("/")}>Home</Link>
            <Link href="/projects" className={linkClass("/orojects")} style={linkStyle("/projects")}>Projects</Link>
            <Link href="/about" className={linkClass("/about")} style={linkStyle("/about")}>About</Link>
          </div>

        </div>
      </div>
    </nav>
  );
}