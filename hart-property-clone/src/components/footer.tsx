"use client";

import Link from "next/link";
import Image from "next/image";
import { Linkedin, Facebook, Instagram } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-hart-dark text-white">
      <div className="container mx-auto py-6 flex flex-col items-center">
        <button
          onClick={scrollToTop}
          className="mb-8 uppercase text-sm tracking-wider hover:text-hart-blue transition-colors flex items-center gap-2"
        >
          <span>Back to top</span>
        </button>
        {/* Social links */}
        <div className="flex space-x-6 mb-4">
          <a href="https://www.linkedin.com/company/hartpropertydevelopment/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <Linkedin className="h-5 w-5 hover:text-hart-blue transition-colors" />
          </a>
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <Facebook className="h-5 w-5 hover:text-hart-blue transition-colors" />
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <Instagram className="h-5 w-5 hover:text-hart-blue transition-colors" />
          </a>
        </div>
        <Link href="/" className="mb-4">
          <Image
            src="https://static.wixstatic.com/media/dbbdc91820535cbbeb0664011cb93255.png/v1/fill/w_32,h_16,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/dbbdc91820535cbbeb0664011cb93255.png"
            alt="Hart Property Development"
            width={32}
            height={16}
            crossOrigin="anonymous"
          />
        </Link>
        <p className="text-sm opacity-80">
          © {new Date().getFullYear()} by HART PROPERTY DEVELOPMENT
        </p>
      </div>
    </footer>
  );
}
