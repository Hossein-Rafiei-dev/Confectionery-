"use client";

import { useEffect, useState } from "react";
import { ArrowLeft, Menu, X } from "lucide-react";

const navLinks = [
  { label: "خانه", href: "#home" },
  { label: "محصولات", href: "#products" },
  { label: "درباره ما", href: "#about" },
  { label: "تماس با ما", href: "#contact" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.08] bg-[#102D20]/85 text-white shadow-[0_8px_30px_rgba(0,0,0,0.08)] backdrop-blur-xl">
      <nav
        dir="rtl"
        className="container mx-auto flex min-h-[76px] items-center justify-between gap-5 px-4 sm:px-6 lg:px-8"
        aria-label="منوی اصلی"
      >
        {/* Logo */}
        <a
          href="#home"
          className="group flex shrink-0 items-center gap-3"
          aria-label="شیرینی‌سرای ساحل، صفحه اصلی"
          onClick={() => setIsMenuOpen(false)}
        >
          <span className="relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-xl border border-[#D4AF37]/45 bg-[#D4AF37]/[0.08] text-2xl font-black text-[#E8CA69] transition-all duration-300 group-hover:border-[#E8CA69] group-hover:bg-[#D4AF37] group-hover:text-[#102D20] group-hover:shadow-[0_0_24px_rgba(212,175,55,0.18)]">
            س
          </span>

          <span className="flex flex-col">
            <span className="text-base font-black tracking-tight sm:text-lg">
              شیرینی‌سرای ساحل
            </span>

            <span
              dir="ltr"
              className="mt-1 text-[9px] tracking-[0.22em] text-white/45 transition-colors duration-300 group-hover:text-[#E8CA69]/80 sm:text-[10px]"
            >
              A SWEET MOMENT
            </span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-7 lg:flex xl:gap-9">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group relative py-3 text-sm font-medium text-white/70 transition-colors duration-300 hover:text-[#E8CA69]"
            >
              {link.label}

              <span className="absolute bottom-1 right-0 h-px w-0 bg-gradient-to-l from-[#E8CA69] to-[#B58B2D] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <a
          href="#products"
          className="hidden shrink-0 items-center gap-2 rounded-full border border-[#D4AF37]/80 bg-gradient-to-l from-[#E8CA69] to-[#C6A13B] px-5 py-3 text-sm font-extrabold text-[#102D20] shadow-[0_5px_20px_rgba(212,175,55,0.08)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_26px_rgba(212,175,55,0.2)] active:translate-y-0 lg:inline-flex"
        >
          مشاهده محصولات
          <ArrowLeft size={17} />
        </a>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-white transition-all duration-300 hover:border-[#D4AF37]/60 hover:text-[#E8CA69] lg:hidden"
          onClick={() => setIsMenuOpen((previous) => !previous)}
          aria-label={isMenuOpen ? "بستن منو" : "باز کردن منو"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
        >
          {isMenuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      <div
        id="mobile-navigation"
        aria-hidden={!isMenuOpen}
        className={`grid overflow-hidden border-t border-white/[0.08] bg-[#102D20]/95 transition-[grid-template-rows,opacity] duration-300 ease-out lg:hidden ${
          isMenuOpen
            ? "grid-rows-[1fr] opacity-100"
            : "pointer-events-none grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="min-h-0 overflow-hidden">
          <div className="container mx-auto flex flex-col gap-1 px-5 pb-5 pt-3 sm:px-6">
            {navLinks.map((link, index) => (
              <a
                key={link.href}
                href={link.href}
                tabIndex={isMenuOpen ? 0 : -1}
                onClick={() => setIsMenuOpen(false)}
                style={{
                  transitionDelay: isMenuOpen ? `${index * 45}ms` : "0ms",
                }}
                className={`flex items-center justify-between rounded-xl border border-transparent px-4 py-3.5 text-sm transition-all duration-300 hover:border-[#D4AF37]/15 hover:bg-white/[0.04] hover:text-[#E8CA69] ${
                  isMenuOpen
                    ? "translate-x-0 opacity-100"
                    : "translate-x-3 opacity-0"
                }`}
              >
                {link.label}

                <span className="text-[#D4AF37]/60">✳</span>
              </a>
            ))}

            <a
              href="#products"
              tabIndex={isMenuOpen ? 0 : -1}
              onClick={() => setIsMenuOpen(false)}
              className="mt-3 inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-[#D4AF37]/80 bg-gradient-to-l from-[#E8CA69] to-[#C6A13B] px-5 py-3 text-sm font-extrabold text-[#102D20] transition-all duration-300 hover:brightness-110"
            >
              مشاهده محصولات
              <ArrowLeft size={17} />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}