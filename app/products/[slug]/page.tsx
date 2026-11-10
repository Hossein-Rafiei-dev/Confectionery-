
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import {
  ArrowLeft,
  ArrowDown,
  Sparkles,
  Clock3,
  Scale,
  CakeSlice,
  CheckCircle2,
  MessageCircle,
  Gift,
  Heart,
  ChefHat,
} from "lucide-react";

import { products } from "@/app/datas/products"

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;

  const product = products.find((item) => item.slug === slug);

  if (!product) {
    return {
      title: "محصول پیدا نشد | ساحل",
    };
  }

  return {
    title: `${product.name} | شیرینی‌سرای ساحل`,
    description: product.description,
  };
}

export default async function ProductDetailsPage({
  params,
}: PageProps) {
  const { slug } = await params;

  const product = products.find((item) => item.slug === slug);

  if (!product) {
    notFound();
  }

  const isCake = product.category === "کیک";

  const categoryProducts = products.filter(
    (item) =>
      item.category === product.category &&
      item.slug !== product.slug
  );

  const heroProducts = [
    product,
    ...categoryProducts.slice(0, 2),
  ];

  const relatedProducts = products
    .filter((item) => item.slug !== product.slug)
    .slice(0, 3);

  return (
    <main
      dir="rtl"
      className="min-h-screen overflow-hidden bg-[#102D20] text-white"
    >
      {/* Background Decorations */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 overflow-hidden"
      >
        <div className="absolute -right-40 top-40 h-[450px] w-[450px] rounded-full bg-[#D4AF37]/[0.04] blur-[140px]" />

        <div className="absolute -left-40 top-[55%] h-[450px] w-[450px] rounded-full bg-[#A3E635]/[0.03] blur-[140px]" />
      </div>

      <div className="relative">

        {/* Intro */}
        <section className="px-5 pb-14 pt-12 sm:px-8 sm:pb-20 sm:pt-20 lg:px-12 lg:pt-24">
          <div className="mx-auto max-w-7xl">

            {/* Breadcrumb */}
            <div className="mb-16 flex items-center gap-3 text-xs text-white/40 sm:text-sm">
              <Link
                href="/"
                className="transition-colors hover:text-[#D4AF37]"
              >
                خانه
              </Link>

              <ArrowLeft size={14} />

              <Link
                href="/#products"
                className="transition-colors hover:text-[#D4AF37]"
              >
                محصولات
              </Link>

              <ArrowLeft size={14} />

              <span className="text-[#D4AF37]">
                {product.name}
              </span>
            </div>

            <div className="grid items-end gap-10 lg:grid-cols-[1.3fr_0.7fr]">

              <div>
                <div className="mb-7 flex items-center gap-3">
                  <span className="h-px w-12 bg-[#D4AF37]" />

                  <span className="text-xs tracking-[0.25em] text-[#D4AF37] sm:text-sm">
                    SAHEL CONFECTIONERY
                  </span>
                </div>

                <h1 className="max-w-3xl text-4xl font-bold leading-[1.7] sm:text-5xl lg:text-7xl">
                  لحظه‌های شیرین،
                  <span className="block text-[#D4AF37]">
                    به سبک ساحل
                  </span>
                </h1>
              </div>

              <div className="max-w-md lg:pb-3">
                <p className="mb-5 text-sm leading-9 text-white/60 sm:text-base">
                  هر شیرینی داستانی دارد و هر کیک می‌تواند
                  بخشی از زیباترین خاطرات شما باشد.
                  در ساحل، زیبایی و ظرافت را در کنار طعمی
                  دلنشین تجربه کنید.
                </p>

                <div className="flex items-center gap-3 text-sm text-[#D4AF37]">
                  <Sparkles size={17} />
                  <span>تجربه‌ای شیرین از جنس ساحل</span>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Multi Product Hero */}
        <section className="px-5 pb-24 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-7xl">

            <div className="mb-7 flex items-center justify-between">
              <div>
                <span className="text-xs tracking-widest text-[#D4AF37]">
                  OUR COLLECTION
                </span>

                <h2 className="mt-3 text-xl font-bold sm:text-2xl">
                  دنیای شیرین {product.category}
                </h2>
              </div>

              <span className="hidden text-sm text-white/40 sm:block">
                انتخابی برای لحظه‌های خاص
              </span>
            </div>

            <div className="grid gap-4 lg:grid-cols-[1.5fr_0.8fr]">

              {/* Main Product */}
              <Link
                href={`/products/${heroProducts[0].slug}`}
                className="group relative min-h-[390px] overflow-hidden rounded-[2rem] border border-white/10 bg-[#173D2A] sm:min-h-[550px]"
              >
                <Image
                  src={heroProducts[0].image}
                  alt={heroProducts[0].alt}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 65vw"
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#071A11] via-[#071A11]/15 to-transparent" />

                <div className="absolute right-6 top-6 rounded-full border border-white/20 bg-[#102D20]/60 px-4 py-2 text-xs text-[#E8CF83] backdrop-blur-md">
                  {product.featured ? "پیشنهاد ساحل" : "منتخب ساحل"}
                </div>

                <div className="absolute bottom-0 right-0 w-full p-7 sm:p-10">
                  <span className="mb-4 block text-sm text-[#D4AF37]">
                    COLLECTION / 01
                  </span>

                  <h3 className="mb-4 text-3xl font-bold sm:text-5xl">
                    {heroProducts[0].name}
                  </h3>

                  <p className="mb-6 max-w-lg text-sm leading-8 text-white/65">
                    {heroProducts[0].description}
                  </p>

                  <span className="inline-flex items-center gap-3 text-sm font-medium text-[#E8CF83]">
                    مشاهده محصول
                    <ArrowLeft
                      size={18}
                      className="transition-transform group-hover:-translate-x-2"
                    />
                  </span>
                </div>
              </Link>

              {/* Secondary Products */}
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">

                {heroProducts.slice(1).map((item, index) => (
                  <Link
                    key={item.id}
                    href={`/products/${item.slug}`}
                    className="group relative min-h-[240px] overflow-hidden rounded-[1.7rem] border border-white/10 bg-[#173D2A] sm:min-h-[260px]"
                  >
                    <Image
                      src={item.image}
                      alt={item.alt}
                      fill
                      sizes="(max-width: 1024px) 50vw, 35vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#071A11]/95 via-[#071A11]/20 to-transparent" />

                    <div className="absolute bottom-0 right-0 w-full p-6">
                      <span className="mb-3 block text-xs text-[#D4AF37]">
                        COLLECTION / 0{index + 2}
                      </span>

                      <h3 className="text-xl font-bold">
                        {item.name}
                      </h3>

                      <div className="mt-4 flex items-center gap-2 text-sm text-white/65 transition-colors group-hover:text-[#E8CF83]">
                        مشاهده جزئیات
                        <ArrowLeft size={16} />
                      </div>
                    </div>
                  </Link>
                ))}

                {heroProducts.length === 1 && (
                  <div className="flex min-h-[240px] flex-col items-center justify-center rounded-[1.7rem] border border-dashed border-[#D4AF37]/30 bg-[#173D2A]/40 p-8 text-center">
                    <CakeSlice
                      size={34}
                      className="mb-5 text-[#D4AF37]"
                    />

                    <p className="text-sm leading-8 text-white/50">
                      محصولات جدید این مجموعه
                      به‌زودی به ساحل اضافه می‌شوند.
                    </p>
                  </div>
                )}

              </div>
            </div>

            <div className="mt-8 flex items-center justify-center gap-3 text-xs text-white/40">
              <ArrowDown size={15} />
              <span>برای آشنایی بیشتر به پایین صفحه بروید</span>
            </div>

          </div>
        </section>

        {/* Product Introduction */}
        <section className="border-y border-white/10 bg-[#173D2A]/45 px-5 py-20 sm:px-8 sm:py-24 lg:px-12">
          <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-24">

            <div>
              <span className="mb-5 block text-xs tracking-[0.2em] text-[#D4AF37]">
                DISCOVER THE TASTE
              </span>

              <h2 className="mb-7 text-3xl font-bold leading-relaxed sm:text-4xl">
                {product.name}
                <span className="block text-[#D4AF37]">
                  فراتر از یک انتخاب ساده
                </span>
              </h2>

              <p className="text-sm leading-9 text-white/60 sm:text-base">
                {product.description}
              </p>

              <div className="mt-9 flex items-center gap-3">
                <span className="h-px w-12 bg-[#D4AF37]" />
                <span className="text-sm text-white/50">
                  ساخته‌شده برای لحظه‌های به‌یادماندنی
                </span>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-lg">
              <div className="absolute -inset-4 rounded-[2rem] border border-[#D4AF37]/20" />

              <div className="relative aspect-[5/4] overflow-hidden rounded-[1.7rem]">
                <Image
                  src={product.image}
                  alt={product.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>

              <div className="absolute -bottom-5 -right-5 flex h-20 w-20 items-center justify-center rounded-2xl border border-[#D4AF37]/30 bg-[#102D20] text-[#D4AF37]">
                <Gift size={32} strokeWidth={1.3} />
              </div>
            </div>

          </div>
        </section>

        {/* Custom Cake Ordering Conditions */}
        {isCake && (
          <section className="px-5 py-24 sm:px-8 lg:px-12">
            <div className="mx-auto max-w-7xl">

              <div className="mx-auto mb-16 max-w-2xl text-center">
                <span className="mb-5 inline-flex items-center gap-2 text-xs tracking-widest text-[#D4AF37]">
                  <Sparkles size={16} />
                  CUSTOM CAKE
                </span>

                <h2 className="mb-6 text-3xl font-bold leading-relaxed sm:text-4xl lg:text-5xl">
                  کیک اختصاصی شما،
                  <span className="block text-[#D4AF37]">
                    برای یک روز خاص
                  </span>
                </h2>

                <p className="text-sm leading-9 text-white/55 sm:text-base">
                  بعضی لحظه‌ها تکرارنشدنی هستند.
                  برای همین می‌توانید کیک مناسب جشن و مناسبت
                  خود را با هماهنگی قبلی با شیرینی‌سرای ساحل سفارش دهید.
                </p>
              </div>

              <div className="grid gap-5 md:grid-cols-2">

                {/* One Day Notice */}
                <div className="group rounded-[1.7rem] border border-white/10 bg-[#173D2A]/65 p-8 transition-all duration-500 hover:-translate-y-1 hover:border-[#D4AF37]/40 sm:p-10">
                  <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#D4AF37]/10 text-[#D4AF37] transition-colors group-hover:bg-[#D4AF37] group-hover:text-[#102D20]">
                    <Clock3 size={27} />
                  </div>

                  <span className="mb-3 block text-xs text-[#D4AF37]">
                    ORDER TIME
                  </span>

                  <h3 className="mb-4 text-2xl font-bold">
                    حداقل یک روز قبل
                  </h3>

                  <p className="text-sm leading-8 text-white/55">
                    برای آماده‌سازی کیک سفارشی، لازم است
                    حداقل یک روز قبل از زمان موردنظر خود
                    با شیرینی‌سرای ساحل هماهنگ کنید.
                  </p>
                </div>

                {/* Minimum Weight */}
                <div className="group rounded-[1.7rem] border border-white/10 bg-[#173D2A]/65 p-8 transition-all duration-500 hover:-translate-y-1 hover:border-[#D4AF37]/40 sm:p-10">
                  <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#D4AF37]/10 text-[#D4AF37] transition-colors group-hover:bg-[#D4AF37] group-hover:text-[#102D20]">
                    <Scale size={27} />
                  </div>

                  <span className="mb-3 block text-xs text-[#D4AF37]">
                    MINIMUM WEIGHT
                  </span>

                  <h3 className="mb-4 text-2xl font-bold">
                    حداقل وزن دو کیلوگرم
                  </h3>

                  <p className="text-sm leading-8 text-white/55">
                    سفارش کیک‌های اختصاصی با وزن حداقل
                    دو کیلوگرم پذیرفته می‌شود.
                    هنگام هماهنگی، وزن موردنظر خود را اعلام کنید.
                  </p>
                </div>

              </div>

              {/* Custom Order Note */}
              <div className="mt-7 flex flex-col gap-5 rounded-[1.7rem] border border-[#D4AF37]/20 bg-[#D4AF37]/[0.06] p-7 sm:flex-row sm:items-center sm:justify-between sm:p-9">

                <div className="flex items-start gap-4">
                  <Heart
                    size={25}
                    className="mt-1 shrink-0 text-[#D4AF37]"
                  />

                  <div>
                    <h3 className="mb-2 font-bold">
                      برای جشن شما، با هماهنگی قبلی
                    </h3>

                    <p className="text-sm leading-8 text-white/55">
                      تاریخ مراسم و جزئیات طرح دلخواهتان را
                      هنگام ارتباط با ساحل مطرح کنید.
                    </p>
                  </div>
                </div>

                <Link
                  href="/#contact"
                  className="inline-flex shrink-0 items-center justify-center gap-3 rounded-xl bg-[#D4AF37] px-7 py-4 text-sm font-bold text-[#102D20] transition-all hover:bg-[#E8CF83]"
                >
                  هماهنگی سفارش
                  <ArrowLeft size={18} />
                </Link>

              </div>
            </div>
          </section>
        )}

        {/* Ordering Process */}
        <section className="border-y border-white/10 bg-[#173D2A]/35 px-5 py-24 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-7xl">

            <div className="mb-16 text-center">
              <span className="mb-5 block text-xs tracking-widest text-[#D4AF37]">
                HOW TO ORDER
              </span>

              <h2 className="text-3xl font-bold sm:text-4xl">
                مسیر یک انتخاب شیرین
              </h2>
            </div>

            <div className="grid gap-8 md:grid-cols-3">

              {[
                {
                  number: "01",
                  title: "انتخاب محصول",
                  description:
                    "محصول موردنظر خود را از میان محصولات ساحل انتخاب کنید.",
                  icon: CakeSlice,
                },
                {
                  number: "02",
                  title: "هماهنگی با ساحل",
                  description:
                    "برای دریافت اطلاعات و بررسی جزئیات سفارش با ما ارتباط بگیرید.",
                  icon: MessageCircle,
                },
                {
                  number: "03",
                  title: "ثبت درخواست",
                  description:
                    "پس از هماهنگی و تأیید جزئیات، درخواست خود را نهایی کنید.",
                  icon: CheckCircle2,
                },
              ].map((step) => {
                const Icon = step.icon;

                return (
                  <div
                    key={step.number}
                    className="relative rounded-2xl border border-white/10 bg-[#102D20]/60 p-8 transition-colors duration-300 hover:border-[#D4AF37]/40"
                  >
                    <div className="mb-8 flex items-center justify-between">
                      <span className="text-4xl font-bold text-[#D4AF37]/30">
                        {step.number}
                      </span>

                      <Icon
                        size={27}
                        className="text-[#D4AF37]"
                      />
                    </div>

                    <h3 className="mb-4 text-xl font-bold">
                      {step.title}
                    </h3>

                    <p className="text-sm leading-8 text-white/50">
                      {step.description}
                    </p>
                  </div>
                );
              })}

            </div>
          </div>
        </section>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="px-5 py-24 sm:px-8 lg:px-12">
            <div className="mx-auto max-w-7xl">

              <div className="mb-12 flex flex-wrap items-end justify-between gap-5">
                <div>
                  <span className="mb-4 block text-xs tracking-widest text-[#D4AF37]">
                    MORE TO DISCOVER
                  </span>

                  <h2 className="text-3xl font-bold">
                    انتخاب‌های دیگر ساحل
                  </h2>
                </div>

                <Link
                  href="/#products"
                  className="inline-flex items-center gap-2 text-sm text-white/55 transition-colors hover:text-[#D4AF37]"
                >
                  همه محصولات
                  <ArrowLeft size={17} />
                </Link>
              </div>

              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {relatedProducts.map((item) => (
                  <Link
                    key={item.id}
                    href={`/products/${item.slug}`}
                    className="group overflow-hidden rounded-2xl border border-white/10 bg-[#173D2A]/60 transition-all duration-500 hover:-translate-y-2 hover:border-[#D4AF37]/40"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.alt}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>

                    <div className="flex items-center justify-between p-6">
                      <div>
                        <span className="mb-2 block text-xs text-[#D4AF37]">
                          {item.category}
                        </span>

                        <h3 className="text-lg font-bold transition-colors group-hover:text-[#E8CF83]">
                          {item.name}
                        </h3>
                      </div>

                      <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 transition-all group-hover:border-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-[#102D20]">
                        <ArrowLeft size={19} />
                      </span>
                    </div>
                  </Link>
                ))}
              </div>

            </div>
          </section>
        )}

        {/* Final CTA */}
        <section className="px-5 pb-24 sm:px-8 lg:px-12">
          <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-[#D4AF37]/20 bg-[#173D2A] px-6 py-16 text-center sm:px-12 sm:py-24">

            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-20 -top-32 h-80 w-80 rounded-full bg-[#D4AF37]/10 blur-[100px]"
            />

            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-[#D4AF37]/10 blur-[100px]"
            />

            <div className="relative">
              <ChefHat
                size={38}
                strokeWidth={1.3}
                className="mx-auto mb-7 text-[#D4AF37]"
              />

              <span className="mb-5 block text-xs tracking-[0.25em] text-[#D4AF37]">
                A SWEET MOMENT WITH SAHEL
              </span>

              <h2 className="mb-6 text-3xl font-bold leading-relaxed sm:text-5xl">
                لحظه‌های خاصت را
                <span className="block text-[#D4AF37]">
                  با ساحل شیرین‌تر کن
                </span>
              </h2>

              <p className="mx-auto mb-9 max-w-xl text-sm leading-9 text-white/55 sm:text-base">
                برای آشنایی بیشتر با محصولات و هماهنگی سفارش،
                خوشحال می‌شویم با ما در ارتباط باشید.
              </p>

              <Link
                href="/#contact"
                className="inline-flex items-center justify-center gap-3 rounded-xl bg-[#D4AF37] px-9 py-4 font-bold text-[#102D20] transition-all duration-300 hover:-translate-y-1 hover:bg-[#E8CF83] hover:shadow-[0_12px_35px_rgba(212,175,55,0.15)]"
              >
                ارتباط با شیرینی‌سرای ساحل
                <ArrowLeft size={19} />
              </Link>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}
