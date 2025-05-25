"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <div className="relative w-full h-[80vh] overflow-hidden">
      {/* Hero Background Image */}
      <Image
        src="https://ext.same-assets.com/3964215446/4150054403.jpeg"
        alt="Modern property development"
        fill
        priority
        className="object-cover"
        crossOrigin="anonymous"
      />

      {/* Logo Overlay */}
      <div className="absolute right-[10%] top-1/2 transform -translate-y-1/2 w-[300px] h-[300px] md:w-[400px] md:h-[400px]">
        <Image
          src="https://ext.same-assets.com/3964215446/1041532962.png"
          alt="Hart Logo"
          fill
          className="object-contain"
          crossOrigin="anonymous"
        />
      </div>

      {/* Bottom border effect */}
      <div className="absolute bottom-0 left-0 right-0 h-2 bg-hart-blue" />
    </div>
  );
}
