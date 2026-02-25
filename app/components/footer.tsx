"use client";

import Link from "next/link";
import { FaFacebook, FaInstagram, FaLinkedin, FaTiktok } from "react-icons/fa";


export default function Footer() {

  return (
 <footer className="w-full border-b" style={{ background: "linear-gradient(to right, #9B000A, #730000)" }}>
    <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-start [&>section]:py-6">
            <section className="flex flex-col">
                {/* Logo */}
                <div className="flex gap-5"> 
                    <div className="w-8 h-8 rounded-md" style={{ backgroundColor: "#FFBD00" }}></div>
                    <h1 className="text-xl font-bold text-white">TeamCIT</h1>
                </div>
                <p className="text-white w-95 text-12">Commitment issues? Only on GitHub. We don’t have bugs, we have "undocumented features."</p>
            </section>
            <section className="flex flex-col items-center">
                <h1 className="text-xl font-bold text-white">Quick Links</h1>
                <Link href="/" className="text-white text-12" >Home</Link>
                <Link href="/projects" className="text-white text-12" >Projects</Link>
                <Link href="/about" className="text-white text-12">About</Link>
                <Link href="/contacts" className="text-white text-12">Contacts</Link>
            </section>
            <section className="flex flex-col items-center">
                <h1 className="text-xl font-bold text-white">Services</h1>
                <p className="text-white text-12">AI Integration</p>
                <p className="text-white text-12">Web Design</p>
                <p className="text-white text-12">Mobile Apps</p>
                <p className="text-white text-12">Development</p>
            </section>
            <section className="flex flex-col items-center">
                <h1 className="text-xl font-bold text-white">Follow Us</h1>
                <div>
                     <div className="flex gap-4 mt-2">
                        <a href="https://linkedin.com" target="_blank"><FaLinkedin className="text-white text-2xl" /></a>
                        <a href="https://facebook.com" target="_blank"><FaFacebook className="text-white text-2xl" /></a>
                        <a href="https://instagram.com" target="_blank"><FaInstagram className="text-white text-2xl" /></a>
                        <a href="https://tiktok.com" target="_blank"><FaTiktok className="text-white text-2xl" /></a>
                    </div>
                </div>
            </section>
            
        </div>    
    </div>
    
 </footer>   
  );
}