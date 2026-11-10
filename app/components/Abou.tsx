
"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowLeft,
  Heart,
  ShieldCheck,
  Sparkles,
  Leaf,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    icon: Sparkles,
    title: "توجه به جزئیات",
    description: "از ظاهر زیبا تا طعمی که در خاطر می‌ماند.",
  },
  {
    icon: Leaf,
    title: "تازگی و کیفیت",
    description: "توجه به مواد اولیه و کیفیت هر محصول.",
  },
  {
    icon: Heart,
    title: "ساخته‌شده با عشق",
    description: "شیرینی‌هایی برای لحظه‌های دوست‌داشتنی زندگی.",
  },
];

export default function About() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const imageRef = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const featuresRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const image = imageRef.current;
    const content = contentRef.current;
    const featuresContainer = featuresRef.current;

    if (!section || !image || !content || !featuresContainer) {
      return;
    }

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) return;

    const context = gsap.context(() => {
      // تصویر از سمت چپ و با حرکت ملایم ظاهر می‌شود.
      gsap.fromTo(
        image,
        {
          opacity: 0,
          x: -35,
          scale: 0.97,
        },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 75%",
            once: true,
          },
        }
      );

      // متن‌های معرفی با فاصله زمانی کوتاه ظاهر می‌شوند.
      gsap.fromTo(
        content.children,
        {
          opacity: 0,
          y: 24,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.75,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: content,
            start: "top 82%",
            once: true,
          },
        }
      );

      // ویژگی‌های برند به‌ترتیب وارد صفحه می‌شوند.
      gsap.fromTo(
        featuresContainer.children,
        {
          opacity: 0,
          y: 20,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.65,
          stagger: 0.12,
          ease: "power2.out",
          scrollTrigger: {
            trigger: featuresContainer,
            start: "top 88%",
            once: true,
          },
        }
      );
    }, section);

    return () => context.revert();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      dir="rtl"
      className="relative overflow-hidden bg-[#0C2419] px-4 py-20 text-white sm:px-6 sm:py-24 lg:px-10 lg:py-28"
    >
      {/* Decorative background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-20 h-80 w-80 rounded-full bg-[#D4AF37]/[0.06] blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 bottom-0 h-72 w-72 rounded-full bg-[#D4AF37]/[0.04] blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl">
        {/* Section label */}
        <div className="mb-12 flex items-center justify-center gap-4 sm:mb-16 lg:justify-start">
          <span className="h-px w-10 bg-[#D4AF37]" />

          <span className="text-xs font-medium tracking-[0.2em] text-[#D4AF37] sm:text-sm">
            ABOUT SAHEL
          </span>

          <span className="h-px w-10 bg-[#D4AF37] lg:hidden" />
        </div>

        {/* Main content */}
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20">
          {/* Image */}
          <div
            ref={imageRef}
            className="relative mx-auto w-full max-w-xl lg:mx-0"
          >
            {/* Gold frame */}
            <div
              aria-hidden="true"
              className="absolute -bottom-3 -left-3 right-3 top-3 rounded-[1.75rem] border border-[#D4AF37]/35 sm:-bottom-4 sm:-left-4 sm:right-4 sm:top-4"
            />

            <div className="group relative aspect-[4/4.3] overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#173D2A] sm:aspect-[5/4.5] lg:aspect-[4/4.5]">
             <img
  src="/images.jpg"
  alt="فضای داخلی شیرینی‌سرای ساحل"
  loading="lazy"
  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 motion-reduce:transform-none"
/>

              <div className="absolute inset-0 bg-gradient-to-t from-[#0C2419]/75 via-transparent to-[#0C2419]/10" />

              {/* Image caption */}
              <div className="absolute bottom-5 right-5 left-5 rounded-2xl border border-white/15 bg-[#102D20]/75 p-4 backdrop-blur-md sm:bottom-7 sm:right-7 sm:left-7 sm:p-5">
                <div className="mb-2 flex items-center gap-2 text-[#E8CF83]">
                  <Sparkles size={17} />
                  <span className="text-xs font-medium sm:text-sm">
                    شیرینی‌سرای ساحل
                  </span>
                </div>

                <p className="text-base font-semibold leading-7 text-white sm:text-lg">
                  طعمی دلنشین، برای لحظه‌هایی ماندگار
                </p>
              </div>

              {/* Small decorative circle */}
              <div
                aria-hidden="true"
                className="absolute right-5 top-5 flex h-12 w-12 items-center justify-center rounded-full border border-[#D4AF37]/60 bg-[#102D20]/70 text-[#E8CF83] backdrop-blur-md sm:right-7 sm:top-7 sm:h-14 sm:w-14"
              >
                <Heart size={23} strokeWidth={1.4} />
              </div>
            </div>
          </div>

          {/* Text content */}
          <div ref={contentRef} className="flex flex-col items-start">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/25 bg-[#D4AF37]/[0.07] px-4 py-2 text-xs text-[#E8CF83] sm:text-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-[#D4AF37]" />
              داستان شیرینی‌سرای ساحل
            </div>

            <h2 className="mb-6 text-3xl font-bold leading-[1.6] sm:text-4xl lg:text-[2.7rem] xl:text-5xl">
              شیرینی خوب،
              <br />
              <span className="text-[#D4AF37]">
                از کیفیت شروع می‌شود.
              </span>
            </h2>

            <p className="mb-5 text-sm leading-8 text-white/70 sm:text-base sm:leading-9">
              در شیرینی‌سرای ساحل، باور داریم که شیرینی فقط یک خوراکی
              نیست؛ بخشی از لحظه‌های خوش زندگی است. از یک دورهمی ساده
              تا جشن‌های به‌یادماندنی، انتخاب یک شیرینی خوش‌طعم می‌تواند
              خاطره‌ای شیرین‌تر بسازد.
            </p>

            <p className="mb-8 text-sm leading-8 text-white/60 sm:text-base sm:leading-9">
              به همین دلیل، توجه به تازگی، کیفیت مواد اولیه، ظاهر
              دلنشین و جزئیات آماده‌سازی محصولات برای ما اهمیت دارد.
              هدفمان این است که انتخاب شیرینی برای هر مناسبت، تجربه‌ای
              لذت‌بخش و مطمئن باشد.
            </p>

            {/* Brand values */}
            <div
              ref={featuresRef}
              className="mb-9 grid w-full grid-cols-1 gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3"
            >
              {features.map((feature) => {
                const Icon = feature.icon;

                return (
                  <div
                    key={feature.title}
                    className="group flex items-start gap-3 rounded-xl border border-white/[0.08] bg-white/[0.025] p-4 transition-colors duration-300 hover:border-[#D4AF37]/30 hover:bg-[#D4AF37]/[0.04] sm:flex-col sm:gap-3 lg:flex-row lg:gap-3 xl:flex-col"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#D4AF37]/20 bg-[#D4AF37]/[0.08] text-[#D4AF37] transition-colors duration-300 group-hover:bg-[#D4AF37] group-hover:text-[#102D20]">
                      <Icon size={20} strokeWidth={1.7} />
                    </div>

                    <div>
                      <h3 className="mb-1 text-sm font-semibold text-white sm:text-base">
                        {feature.title}
                      </h3>

                      <p className="text-xs leading-6 text-white/55 sm:text-sm">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTA */}
            <a
              href="#products"
              className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-[#D4AF37] px-6 py-3 text-sm font-semibold text-[#102D20] transition-colors duration-300 hover:bg-[#E8CF83] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] focus-visible:ring-offset-4 focus-visible:ring-offset-[#0C2419]"
            >
              <span>آشنایی با محصولات</span>

              <ArrowLeft
                size={18}
                className="transition-transform duration-300 group-hover:-translate-x-1"
              />
            </a>
          </div>
        </div>

        {/* Bottom decorative line */}
        <div className="mt-20 flex items-center justify-center gap-4 sm:mt-24">
          <span className="h-px flex-1 bg-gradient-to-l from-transparent to-[#D4AF37]/30" />

          <span className="h-2 w-2 rotate-45 border border-[#D4AF37]/70" />

          <span className="h-px flex-1 bg-gradient-to-r from-transparent to-[#D4AF37]/30" />
        </div>
      </div>
    </section>
  );
}
