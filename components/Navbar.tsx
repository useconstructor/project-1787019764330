"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/classes", label: "Classes" },
  { href: "/membership", label: "Membership" },
  { href: "/trainers", label: "Trainers" },
  { href: "/facilities", label: "Facilities" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="fixed inset-x-0 top-0 z-50 bg-brand-black/95 backdrop-blur-sm border-b border-brand-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-0.5 shrink-0">
            <span className="font-heading text-2xl text-brand-red tracking-widest">IRON</span>
            <span className="font-heading text-2xl text-brand-gold tracking-widest">PEAK</span>
          </Link>

          <div className="hidden md:flex items-center gap-7">
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`text-xs font-semibold tracking-widest uppercase transition-colors ${
                  pathname === href
                    ? "text-brand-red"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {label}
              </Link>
            ))}
          </div>

          <Link
            href="/contact"
            className="hidden md:block px-5 py-2 bg-brand-red text-white text-xs font-bold tracking-widest uppercase hover:bg-[#e03030] transition-colors"
          >
            Free Trial
          </Link>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-white"
            aria-label="Toggle menu"
          >
            <div className="w-6 flex flex-col gap-1.5">
              <span
                className={`block h-0.5 w-full bg-white transition-all duration-300 origin-center ${
                  isOpen ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-full bg-white transition-all duration-300 ${
                  isOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-full bg-white transition-all duration-300 origin-center ${
                  isOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-brand-dark border-t border-brand-muted/20">
          <div className="px-4 py-6 flex flex-col gap-5">
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setIsOpen(false)}
                className={`font-heading text-xl tracking-widest uppercase ${
                  pathname === href ? "text-brand-red" : "text-gray-300"
                }`}
              >
                {label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="mt-2 py-3 text-center bg-brand-red text-white font-bold tracking-widest uppercase text-sm"
            >
              Free Trial
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
