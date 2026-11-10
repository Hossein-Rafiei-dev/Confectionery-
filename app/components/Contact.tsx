
"use client";

import { useEffect, useRef, useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowLeft,
  Clock3,
  Heart,
  MessageCircle,
  Send,
  Sparkles,
  Phone,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

type FormStatus = "idle" | "not-connected";

const phoneNumbers = [
  {
    number: "+98 913 318 0879",
    tel: "+989133180879",
  },
  {
    number: "+98 913 309 6321",
    tel: "+989133096321",
  },
];

export default function Contact() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const headingRef = useRef<HTMLDivElement | null>(null);
  const infoRef = useRef<HTMLDivElement | null>(null);
  const formRef = useRef<HTMLDivElement | null>(null);

  const [formStatus, setFormStatus] = useState<FormStatus>("idle");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  useEffect(() => {
    const section = sectionRef.current;
    const heading = headingRef.current;
    const info = infoRef.current;
    const form = formRef.current;

    if (!section || !heading || !info || !form) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) return;

    const context = gsap.context(() => {
      gsap.fromTo(
        heading.children,
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
            trigger: heading,
            start: "top 85%",
            once: true,
          },
        }
      );

      gsap.fromTo(
        info,
        {
          opacity: 0,
          x: 30,
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.85,
          ease: "power3.out",
          scrollTrigger: {
            trigger: info,
            start: "top 82%",
            once: true,
          },
        }
      );

      gsap.fromTo(
        form,
        {
          opacity: 0,
          x: -30,
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.85,
          delay: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: form,
            start: "top 82%",
            once: true,
          },
        }
      );
    }, section);

    return () => context.revert();
  }, []);

  const handleChange = (
    event: ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    if (formStatus !== "idle") {
      setFormStatus("idle");
    }
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // فرم هنوز به API یا سرویس ارسال پیام متصل نیست.
    setFormStatus("not-connected");
  };

  const inputClassName =
    "w-full rounded-xl border border-white/10 bg-[#0C2419]/80 px-4 py-3.5 text-sm text-white outline-none transition-colors duration-300 placeholder:text-white/30 hover:border-white/20 focus:border-[#D4AF37]/70 focus:ring-1 focus:ring-[#D4AF37]/30";

  const labelClassName =
    "mb-2 block text-sm font-medium text-white/80";

  return (
    <section
      id="contact"
      ref={sectionRef}
      dir="rtl"
      className="relative overflow-hidden bg-[#102D20] px-4 py-20 text-white sm:px-6 sm:py-24 lg:px-10 lg:py-28"
    >
      {/* Background decorations */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-24 h-80 w-80 rounded-full bg-[#D4AF37]/[0.06] blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 bottom-10 h-80 w-80 rounded-full bg-[#D4AF37]/[0.04] blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl">
        {/* Heading */}
        <div
          ref={headingRef}
          className="mx-auto mb-12 max-w-2xl text-center sm:mb-16"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/25 bg-[#D4AF37]/[0.07] px-4 py-2 text-sm text-[#E8CF83]">
            <MessageCircle size={16} />
            <span>ارتباط با شیرینی‌سرای ساحل</span>
          </div>

          <h2 className="mb-5 text-3xl font-bold leading-relaxed sm:text-4xl lg:text-5xl">
            بیایید لحظه‌ای{" "}
            <span className="text-[#D4AF37]">شیرین</span>
            <br className="hidden sm:block" /> بسازیم.
          </h2>

          <p className="mx-auto max-w-xl text-sm leading-8 text-white/60 sm:text-base">
            برای پرسش درباره محصولات، ثبت درخواست سفارش یا مطرح کردن
            پیشنهادهایتان، می‌توانید از طریق راه‌های ارتباطی با ما در تماس باشید.
          </p>

          <div className="mx-auto mt-7 h-px w-20 bg-gradient-to-l from-transparent via-[#D4AF37] to-transparent" />
        </div>

        {/* Main layout */}
        <div className="grid items-stretch gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-8">
          {/* Contact information panel */}
          <div
            ref={infoRef}
            className="relative flex flex-col overflow-hidden rounded-3xl border border-[#D4AF37]/20 bg-[#0C2419] p-6 sm:p-8 lg:p-10"
          >
            {/* Decorative circles */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -left-16 -top-16 h-48 w-48 rounded-full border border-[#D4AF37]/10"
            />

            <div
              aria-hidden="true"
              className="pointer-events-none absolute -left-8 -top-8 h-32 w-32 rounded-full border border-[#D4AF37]/10"
            />

            <div className="relative">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-[#D4AF37]/25 bg-[#D4AF37]/[0.08] text-[#D4AF37]">
                <Heart size={27} strokeWidth={1.5} />
              </div>

              <p className="mb-3 text-xs font-medium tracking-[0.18em] text-[#D4AF37]">
                WE WOULD LOVE TO HEAR FROM YOU
              </p>

              <h3 className="mb-4 text-2xl font-bold leading-relaxed sm:text-3xl">
                هر پیام، شروع یک ارتباط تازه است.
              </h3>

              <p className="text-sm leading-8 text-white/60 sm:text-base">
                اگر برای انتخاب شیرینی مناسب یک جشن برنامه‌ریزی می‌کنید
                یا درباره محصولات ساحل سؤالی دارید، می‌توانید با ما
                در ارتباط باشید.
              </p>
            </div>

            {/* Helpful information cards */}
            <div className="relative mt-8 space-y-4">
              <div className="flex items-start gap-4 rounded-2xl border border-white/[0.08] bg-white/[0.025] p-4 transition-colors duration-300 hover:border-[#D4AF37]/25 hover:bg-white/[0.04]">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#D4AF37]/[0.09] text-[#D4AF37]">
                  <Sparkles size={21} />
                </div>

                <div>
                  <h4 className="mb-1 font-semibold text-white">
                    درخواست خود را توضیح دهید
                  </h4>

                  <p className="text-sm leading-7 text-white/55">
                    نوع محصول، تعداد و مناسبت موردنظر را در پیام خود
                    بنویسید تا درخواستتان واضح‌تر باشد.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-2xl border border-white/[0.08] bg-white/[0.025] p-4 transition-colors duration-300 hover:border-[#D4AF37]/25 hover:bg-white/[0.04]">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#D4AF37]/[0.09] text-[#D4AF37]">
                  <Clock3 size={21} />
                </div>

                <div className="min-w-0 flex-1">
                  <h4 className="mb-2 font-semibold text-white">
                    برای سفارش با ما تماس بگیرید
                  </h4>

                  <p className="mb-3 text-sm leading-7 text-white/55">
                    برای ثبت سفارش یا دریافت مشاوره خرید، با یکی از
                    شماره‌های زیر تماس بگیرید:
                  </p>

                  {/* Phone numbers */}
                  <div className="flex flex-col items-start gap-3">
                    {phoneNumbers.map((phone) => (
                      <a
                        key={phone.tel}
                        href={`tel:${phone.tel}`}
                        dir="ltr"
                        className="flex min-h-10 w-full items-center justify-end gap-2 rounded-lg border border-[#D4AF37]/15 bg-[#D4AF37]/[0.04] px-3 py-2 text-right text-sm font-semibold tracking-wide text-[#E8CF83] transition-all duration-300 hover:border-[#D4AF37]/50 hover:bg-[#D4AF37]/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
                      >
                        <Phone size={15} className="shrink-0" />
                        <span>{phone.number}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom note */}
            <div className="relative mt-auto pt-8">
              <div className="border-t border-white/10 pt-6" />
            </div>
          </div>

          {/* Contact form */}
          <div
            ref={formRef}
            className="rounded-3xl border border-white/10 bg-[#173D2A]/70 p-6 sm:p-8 lg:p-10"
          >
            <div className="mb-8">
              <span className="mb-3 block text-xs font-medium tracking-widest text-[#D4AF37]">
                SEND A MESSAGE
              </span>

              <h3 className="text-2xl font-bold sm:text-3xl">
                پیام خود را بنویسید
              </h3>

              <p className="mt-3 text-sm leading-7 text-white/55">
                فیلدهای ستاره‌دار الزامی هستند.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name */}
              <div>
                <label htmlFor="contact-name" className={labelClassName}>
                  نام و نام خانوادگی
                  <span className="mr-1 text-[#D4AF37]">*</span>
                </label>

                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  minLength={2}
                  maxLength={80}
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="نام خود را وارد کنید"
                  className={inputClassName}
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="contact-email" className={labelClassName}>
                  ایمیل
                  <span className="mr-1 text-[#D4AF37]">*</span>
                </label>

                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  maxLength={254}
                  dir="ltr"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className={`${inputClassName} text-left`}
                />
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="contact-subject" className={labelClassName}>
                  موضوع پیام
                </label>

                <select
                  id="contact-subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={`${inputClassName} cursor-pointer`}
                >
                  <option value="" className="bg-[#102D20]">
                    موضوع را انتخاب کنید
                  </option>

                  <option value="order" className="bg-[#102D20]">
                    ثبت درخواست سفارش
                  </option>

                  <option value="products" className="bg-[#102D20]">
                    پرسش درباره محصولات
                  </option>

                  <option value="suggestion" className="bg-[#102D20]">
                    پیشنهاد و انتقاد
                  </option>

                  <option value="other" className="bg-[#102D20]">
                    سایر موارد
                  </option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="contact-message" className={labelClassName}>
                  متن پیام
                  <span className="mr-1 text-[#D4AF37]">*</span>
                </label>

                <textarea
                  id="contact-message"
                  name="message"
                  required
                  minLength={10}
                  maxLength={2000}
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="چطور می‌توانیم کمک کنیم؟ لطفاً برای ثبت سفارش یا مشاوره خرید، شماره تماس خود را نیز بنویسید."
                  className={`${inputClassName} min-h-36 resize-y leading-7`}
                />

                <p className="mt-2 text-left text-xs text-white/35" dir="ltr">
                  {formData.message.length}/2000
                </p>
              </div>

              {/* Form status */}
              {formStatus === "not-connected" && (
                <div
                  role="status"
                  aria-live="polite"
                  className="rounded-xl border border-[#D4AF37]/25 bg-[#D4AF37]/[0.07] p-4 text-sm leading-7 text-[#E8CF83]"
                >
                  اطلاعات فرم بررسی شد، اما هنوز به سرویس ارسال متصل نیست.
                  پیام شما ارسال نشده است. برای فعال شدن ارسال واقعی،
                  باید API یا سرویس فرم را متصل کنیم.
                </div>
              )}

              {/* Submit */}
              <button
                type="submit"
                className="group flex min-h-12 w-full items-center justify-center gap-3 rounded-xl bg-[#D4AF37] px-6 py-3 font-semibold text-[#102D20] transition-colors duration-300 hover:bg-[#E8CF83] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] focus-visible:ring-offset-2 focus-visible:ring-offset-[#173D2A]"
              >
                <span>بررسی فرم</span>

                <Send
                  size={18}
                  className="transition-transform duration-300 group-hover:-translate-x-1"
                />
              </button>

              <p className="text-center text-xs leading-6 text-white/35">
                در حال حاضر این فرم آزمایشی است و اطلاعات را جایی ذخیره
                یا ارسال نمی‌کند.
              </p>
            </form>
          </div>
        </div>

        {/* Bottom decoration */}
        <div className="mt-16 flex items-center justify-center gap-4 sm:mt-20">
          <span className="h-px flex-1 bg-gradient-to-l from-transparent to-[#D4AF37]/25" />

          <span className="h-2 w-2 rotate-45 border border-[#D4AF37]/60" />

          <span className="h-px flex-1 bg-gradient-to-r from-transparent to-[#D4AF37]/25" />
        </div>

        <div className="mt-6 text-center">
          <a
            href="#home"
            className="group inline-flex min-h-10 items-center gap-2 text-sm text-white/50 transition-colors hover:text-[#E8CF83] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
          >
            <span>بازگشت به ابتدای صفحه</span>

            <ArrowLeft
              size={15}
              className="rotate-90 transition-transform group-hover:-translate-y-1"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
