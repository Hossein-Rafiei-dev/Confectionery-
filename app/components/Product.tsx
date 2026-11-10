
"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import {
  ArrowLeft,
  Sparkles,
  CakeSlice,
  Cookie,
} from "lucide-react";

import {
  products,
  categories,
  type Category,
} from "@/app/datas/products"

gsap.registerPlugin(ScrollTrigger);

export default function Product() {
  const [activeCategory, setActiveCategory] =
    useState<Category>("همه محصولات");

  const sectionRef = useRef<HTMLElement | null>(null);
  const headingRef = useRef<HTMLDivElement | null>(null);
  const cardsRef = useRef<HTMLDivElement | null>(null);

  const filteredProducts =
    activeCategory === "همه محصولات"
      ? products
      : products.filter(
          (product) => product.category === activeCategory
        );

  // Initial Heading Animation
  useEffect(() => {
    const section = sectionRef.current;
    const heading = headingRef.current;

    if (!section || !heading) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) return;

    const context = gsap.context(() => {
      gsap.fromTo(
        heading.children,
        {
          y: 28,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: heading,
            start: "top 85%",
            once: true,
          },
        }
      );
    }, section);

    return () => context.revert();
  }, []);

  // Product Cards Animation
  useEffect(() => {
    const cards = cardsRef.current;

    if (!cards) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) return;

    const context = gsap.context(() => {
      gsap.fromTo(
        cards.children,
        {
          opacity: 0,
          y: 25,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.55,
          stagger: 0.09,
          ease: "power3.out",
          clearProps: "all",
        }
      );
    }, cards);

    return () => context.revert();
  }, [activeCategory]);

  return (
    <section
      id="products"
      ref={sectionRef}
      dir="rtl"
      className="relative overflow-hidden bg-[#102D20] px-4 py-20 text-white sm:px-6 sm:py-24 lg:px-10 lg:py-28"
    >
      {/* Background decorations */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-32 h-72 w-72 rounded-full bg-[#D4AF37]/[0.06] blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 bottom-20 h-80 w-80 rounded-full bg-[#D4AF37]/[0.04] blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl">

        {/* Section heading */}
        <div
          ref={headingRef}
          className="mx-auto mb-12 max-w-2xl text-center sm:mb-14 lg:mb-16"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/25 bg-[#D4AF37]/[0.07] px-4 py-2 text-sm text-[#E8CF83]">
            <Sparkles size={16} />
            <span>طعم لحظه‌های شیرین</span>
          </div>

          <h2 className="mb-5 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
            محصولات{" "}
            <span className="text-[#D4AF37]">
              شیرینی‌سرای ساحل
            </span>
          </h2>

          <p className="mx-auto max-w-xl text-sm leading-8 text-white/65 sm:text-base">
            از کیک‌های خاص برای جشن‌های به‌یادماندنی تا شیرینی‌های
            تازه برای دورهمی‌های دوست‌داشتنی؛ انتخابی برای هر سلیقه.
          </p>

          <div className="mx-auto mt-7 h-px w-20 bg-gradient-to-l from-transparent via-[#D4AF37] to-transparent" />
        </div>

        {/* Category filters */}
        <div
          className="mb-10 flex flex-wrap items-center justify-center gap-2.5 sm:mb-12"
          aria-label="دسته‌بندی محصولات"
        >
          {categories.map((category) => {
            const isActive = activeCategory === category;

            return (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                aria-pressed={isActive}
                className={`rounded-full border px-5 py-2.5 text-sm transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] focus-visible:ring-offset-2 focus-visible:ring-offset-[#102D20] ${
                  isActive
                    ? "border-[#D4AF37] bg-[#D4AF37] font-semibold text-[#102D20]"
                    : "border-white/15 bg-white/[0.03] text-white/70 hover:border-[#D4AF37]/60 hover:text-[#E8CF83]"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Product cards */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-7"
        >
          {filteredProducts.map((product) => (
            <Link
              key={product.id}
              href={`/products/${product.slug}`}
              aria-label={`مشاهده جزئیات ${product.name}`}
              className="group block rounded-2xl outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] focus-visible:ring-offset-4 focus-visible:ring-offset-[#102D20]"
            >
              <article className="relative h-full overflow-hidden rounded-2xl border border-white/10 bg-[#173D2A]/75 transition-[border-color,background-color] duration-300 group-hover:border-[#D4AF37]/40 group-hover:bg-[#173D2A]">

                {/* Product image */}
                <div className="relative aspect-[4/3] overflow-hidden bg-[#0B2117]">
                  <img
                    src={product.image}
                    alt={product.alt}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 motion-reduce:transform-none"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#102D20]/85 via-transparent to-black/10 opacity-80 transition-opacity duration-300 group-hover:opacity-60" />

                  <span className="absolute right-4 top-4 rounded-full border border-white/15 bg-[#102D20]/80 px-3 py-1.5 text-xs text-[#E8CF83] backdrop-blur-md">
                    {product.category}
                  </span>

                  {product.featured && (
                    <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-[#D4AF37] px-3 py-1.5 text-xs font-semibold text-[#102D20]">
                      <Sparkles size={13} />
                      پیشنهاد ساحل
                    </span>
                  )}

                  <div className="absolute bottom-4 right-4 flex h-11 w-11 items-center justify-center rounded-xl border border-white/15 bg-[#102D20]/75 text-[#E8CF83] backdrop-blur-md transition-transform duration-300 group-hover:-translate-y-1">
                    {product.category === "کیک" ? (
                      <CakeSlice size={21} strokeWidth={1.6} />
                    ) : (
                      <Cookie size={21} strokeWidth={1.6} />
                    )}
                  </div>
                </div>

                {/* Product details */}
                <div className="p-5 sm:p-6">
                  <h3 className="mb-3 text-xl font-bold text-white transition-colors duration-300 group-hover:text-[#E8CF83]">
                    {product.name}
                  </h3>

                  <p className="min-h-[3.5rem] text-sm leading-7 text-white/60">
                    {product.description}
                  </p>

                  <div className="my-5 h-px bg-gradient-to-l from-[#D4AF37]/30 via-white/10 to-transparent" />

                  <div className="inline-flex min-h-11 items-center gap-2 text-sm font-medium text-[#E8CF83] transition-colors duration-300 group-hover:text-white">
                    <span>مشاهده جزئیات محصول</span>

                    <ArrowLeft
                      size={17}
                      className="transition-transform duration-300 group-hover:-translate-x-1"
                    />
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>

        {/* Section footer */}
        <div className="mt-14 text-center sm:mt-16">
          <p className="mb-5 text-sm leading-7 text-white/55 sm:text-base">
            هر مناسبت، بهانه‌ای برای یک طعم تازه است.
          </p>

          <a
            href="#about"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-[#D4AF37]/50 px-6 py-3 text-sm font-medium text-[#E8CF83] transition-colors duration-300 hover:bg-[#D4AF37] hover:text-[#102D20] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] focus-visible:ring-offset-2 focus-visible:ring-offset-[#102D20]"
          >
            <span>بیشتر با ساحل آشنا شوید</span>
            <ArrowLeft size={17} />
          </a>
        </div>
      </div>
    </section>
  );
}
