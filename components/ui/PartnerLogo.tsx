'use client';

import Image from 'next/image';

interface PartnerLogoProps {
  name: string;
  logo: string;
  url: string;
}

export default function PartnerLogo({ name, logo, url }: PartnerLogoProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block relative h-32 w-full"
    >
      <div className="relative h-full w-full flex items-center justify-center transition-all duration-300 md:group-hover:scale-105 md:group-hover:drop-shadow-xl">
        <Image
          src={logo}
          alt={`${name} logo`}
          fill
          unoptimized
          className="object-contain transition-all duration-300"
        />
      </div>
    </a>
  );
}
