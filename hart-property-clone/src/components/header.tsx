"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white py-4 px-6 md:px-10 fixed w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="flex-shrink-0">
          <Image
            src="https://ext.same-assets.com/3964215446/436822463.png"
            alt="Hart Property Development"
            width={100}
            height={50}
            className="h-auto w-[100px]"
            crossOrigin="anonymous"
          />
        </Link>

        {/* Mobile menu button */}
        <button
          className="md:hidden flex items-center p-2"
          onClick={toggleMenu}
        >
          <Menu className="h-6 w-6 text-hart-dark" />
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <NavLink href="/" label="HOME" />
          <NavLink href="/our-values" label="OUR VALUES" />
          <NavLink href="/our-vision" label="OUR VISION" />
          <NavLink href="/our-way" label="OUR WAY" />
          <NavLink href="/contact" label="CONTACT" />
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white shadow-md md:hidden py-4">
            <nav className="flex flex-col items-center space-y-4">
              <NavLink href="/" label="HOME" onClick={toggleMenu} />
              <NavLink href="/our-values" label="OUR VALUES" onClick={toggleMenu} />
              <NavLink href="/our-vision" label="OUR VISION" onClick={toggleMenu} />
              <NavLink href="/our-way" label="OUR WAY" onClick={toggleMenu} />
              <NavLink href="/contact" label="CONTACT" onClick={toggleMenu} />
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

interface NavLinkProps {
  href: string;
  label: string;
  onClick?: () => void;
}

function NavLink({ href, label, onClick }: NavLinkProps) {
  return (
    <Link
      href={href}
      className="font-raleway uppercase tracking-wide text-hart-dark text-sm hover:text-hart-blue transition-colors"
      onClick={onClick}
    >
      {label}
    </Link>
  );
}
