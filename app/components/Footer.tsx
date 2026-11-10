
"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  CakeSlice,
  ArrowUp,
  Heart,
  Sparkles,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const footerLinks = [
  { label: "خانه", href: "#home" },
  { label: "محصولات", href: "#products" },
  { label: "درباره ما", href: "#about" },
  { label: "تماس با ما", href: "#contact" },
];

function InstagramIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" />
    </svg>
  );
}

export default function Footer() {
  const footerRef = useRef<HTMLElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const footer = footerRef.current;
    const content = contentRef.current;

    if (!footer || !content) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) return;

    const context = gsap.context(() => {
      gsap.fromTo(
        content.children,
        {
          opacity: 0,
          y: 22,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: footer,
            start: "top 90%",
            once: true,
          },
        }
      );
    }, footer);

    return () => context.revert();
  }, []);

  return (
    <footer
      ref={footerRef}
      dir="rtl"
      className="relative overflow-hidden border-t border-[#D4AF37]/20 bg-[#081A12] px-4 pb-6 pt-14 text-white sm:px-6 sm:pt-16 lg:px-10 lg:pt-20"
    >
      {/* Decorative background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#D4AF37]/[0.05] blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 bottom-0 h-64 w-64 rounded-full bg-[#D4AF37]/[0.035] blur-3xl"
      />

      <div
        ref={contentRef}
        className="relative mx-auto max-w-7xl"
      >
        {/* Brand and navigation */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.3fr_0.8fr_1fr] lg:gap-16">

          {/* Brand */}
          <div>
            <a
              href="#home"
              aria-label="بازگشت به صفحه اصلی شیرینی‌سرای ساحل"
              className="group mb-5 inline-flex items-center gap-3 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#D4AF37]/35 bg-[#D4AF37]/[0.08] text-[#D4AF37] transition-colors duration-300 group-hover:bg-[#D4AF37] group-hover:text-[#081A12]">
                <CakeSlice size={25} strokeWidth={1.5} />
              </span>

              <span>
                <span className="block text-lg font-bold text-[#E8CF83] sm:text-xl">
                  شیرینی‌سرای ساحل
                </span>

                <span className="mt-1 block text-[10px] tracking-[0.2em] text-white/40">
                  SAHEL PATISSERIE
                </span>
              </span>
            </a>

            <p className="max-w-sm text-sm leading-8 text-white/55">
              شیرینی، فراتر از یک طعم؛ بخشی از خاطرات شیرین زندگی.
              در ساحل، به کیفیت، تازگی و زیبایی هر محصول اهمیت می‌دهیم.
            </p>

            <div className="mt-5 inline-flex items-center gap-2 text-xs text-[#E8CF83]/80">
              <Sparkles size={15} />
              <span>طعم لحظه‌های شیرین زندگی</span>
            </div>
          </div>

          {/* Quick links */}
          <nav aria-label="دسترسی سریع">
            <h2 className="mb-5 text-base font-bold text-white">
              دسترسی سریع
            </h2>

            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="group inline-flex min-h-8 items-center gap-2 text-sm text-white/55 transition-colors duration-300 hover:text-[#E8CF83] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
                  >
                    <span className="h-1 w-1 rounded-full bg-[#D4AF37]/50 transition-all duration-300 group-hover:h-1.5 group-hover:w-1.5 group-hover:bg-[#D4AF37]" />

                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Brand message */}
          <div>
            <h2 className="mb-5 text-base font-bold text-white">
              یک انتخاب شیرین
            </h2>

            <p className="mb-6 text-sm leading-8 text-white/55">
              برای یک جشن خاص، دورهمی دوستانه یا لحظه‌ای ساده در کنار
              عزیزانتان، محصولات ما را ببینید و انتخاب خودتان را پیدا کنید.
            </p>

            <a
              href="#products"
              className="group inline-flex min-h-11 items-center gap-3 rounded-full border border-[#D4AF37]/40 px-5 py-2.5 text-sm font-medium text-[#E8CF83] transition-colors duration-300 hover:bg-[#D4AF37] hover:text-[#081A12] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] focus-visible:ring-offset-2 focus-visible:ring-offset-[#081A12]"
            >
              <span>مشاهده محصولات</span>

              <span className="transition-transform duration-300 group-hover:-translate-x-1">
                ←
              </span>
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="my-10 h-px bg-gradient-to-l from-transparent via-[#D4AF37]/25 to-transparent sm:my-12" />

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-5 text-center sm:flex-row sm:text-right">
          <p className="text-xs leading-6 text-white/40">
            © 2026 شیرینی‌سرای ساحل. تمامی حقوق محفوظ است.
          </p>

          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-2 text-xs text-white/45">
              ساخته‌شده با
              <Heart
                size={14}
                className="fill-[#D4AF37] text-[#D4AF37]"
              />
              برای لحظه‌های شیرین
            </span>

            <a
              href="#home"
              aria-label="بازگشت به بالای صفحه"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-[#E8CF83] transition-all duration-300 hover:-translate-y-1 hover:border-[#D4AF37]/50 hover:bg-[#D4AF37]/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
            >
              <ArrowUp size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
