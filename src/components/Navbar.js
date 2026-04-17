"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "glass-nav py-3" : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="relative z-10 flex items-center">
            <Image 
              src="/logodesign2.svg" 
              alt="Shreem Logo" 
              width={300} 
              height={90} 
              className="h-16 md:h-20 w-auto"
              priority
            />
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center space-x-8">
            <NavLink href="/case-studies">Case studies</NavLink>
            <NavLink href="/services">Services</NavLink>
            <NavLink href="/expertise">Expertise</NavLink>
            <NavLink href="/delivery">How we deliver</NavLink>
            <NavLink href="/about">About</NavLink>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link 
              href="/contact" 
              className="bg-primary text-white px-8 py-3 rounded-md font-semibold hover:bg-black transition-all shadow-sm"
            >
              Get in touch
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="lg:hidden relative z-10 p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span className={`h-0.5 w-full bg-black transition-all ${isMenuOpen ? "rotate-45 translate-y-2" : ""}`}></span>
              <span className={`h-0.5 w-full bg-black transition-all ${isMenuOpen ? "opacity-0" : ""}`}></span>
              <span className={`h-0.5 w-full bg-black transition-all ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div 
        className={`fixed inset-0 bg-white z-40 transition-transform duration-500 ease-in-out ${
          isMenuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-6 text-xl font-bold text-gray-800">
          <Link href="/case-studies" onClick={() => setIsMenuOpen(false)}>Case studies</Link>
          <Link href="/services" onClick={() => setIsMenuOpen(false)}>Services</Link>
          <Link href="/expertise" onClick={() => setIsMenuOpen(false)}>Expertise</Link>
          <Link href="/delivery" onClick={() => setIsMenuOpen(false)}>How we deliver</Link>
          <Link href="/about" onClick={() => setIsMenuOpen(false)}>About</Link>
          <Link 
            href="/contact" 
            onClick={() => setIsMenuOpen(false)}
            className="bg-primary text-white px-10 py-4 rounded-md"
          >
            Get in touch
          </Link>
        </div>
      </div>
    </>
  );
}

function NavLink({ href, children }) {
  return (
    <Link 
      href={href} 
      className="text-sm font-semibold text-gray-800 hover:text-black transition-colors relative group"
    >
      {children}
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black transition-all group-hover:w-full"></span>
    </Link>
  );
}

