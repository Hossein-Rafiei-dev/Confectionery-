"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ArrowLeft, Sparkles } from "lucide-react";

export default function HomeExperience() {
  const heroRef = useRef<HTMLElement>(null);
  const boxRef = useRef<SVGGElement>(null);
  const lidRef = useRef<SVGGElement>(null);
  const cakeRef = useRef<SVGGElement>(null);
  const ribbonRef = useRef<SVGGElement>(null);
const sparklesRef = useRef<SVGSVGElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
      });

      gsap.set(boxRef.current, {
        transformOrigin: "50% 50%",
        y: 45,
        scale: 0.88,
        opacity: 0,
      });

      gsap.set(lidRef.current, {
        transformBox: "fill-box",
        transformOrigin: "50% 85%",
        y: 0,
        rotation: 0,
      });

      gsap.set(cakeRef.current, {
        y: 35,
        scale: 0.82,
        opacity: 0,
        transformOrigin: "50% 50%",
      });

      gsap.set(ribbonRef.current, {
        opacity: 0,
        scale: 0.7,
        transformOrigin: "50% 50%",
      });

      gsap.set(sparklesRef.current, {
        opacity: 0,
      });

      tl.fromTo(
        textRef.current?.querySelectorAll("[data-intro]") ?? [],
        { y: 24, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.12,
        },
        0,
      );

      tl.to(
        boxRef.current,
        {
          y: 0,
          scale: 1,
          opacity: 1,
          duration: 1.1,
        },
        0.15,
      );

      tl.to(
        lidRef.current,
        {
          y: -48,
          rotation: -12,
          duration: 0.9,
          ease: "power2.inOut",
        },
        0.9,
      );

      tl.to(
        cakeRef.current,
        {
          y: 0,
          scale: 1,
          opacity: 1,
          duration: 0.85,
          ease: "back.out(1.5)",
        },
        1.15,
      );

      tl.to(
        ribbonRef.current,
        {
          opacity: 1,
          scale: 1,
          duration: 0.5,
          ease: "back.out(2)",
        },
        1.35,
      );

      tl.to(
        sparklesRef.current,
        {
          opacity: 1,
          duration: 0.6,
        },
        1.2,
      );

      // حرکت شناور جعبه
      gsap.to(boxRef.current, {
        y: -9,
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 2,
      });

      // در جعبه بعد از باز شدن کمی حرکت نرم دارد
      gsap.to(lidRef.current, {
        y: -53,
        rotation: -14,
        duration: 2.2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 2,
      });

      // درخشش‌های طلایی اطراف جعبه
      const particles =
        sparklesRef.current?.querySelectorAll("[data-particle]");

      particles?.forEach((particle, index) => {
        gsap.to(particle, {
          y: index % 2 === 0 ? -17 : 15,
          x: index % 2 === 0 ? 8 : -8,
          rotation: index % 2 === 0 ? 24 : -24,
          opacity: 0.3,
          duration: 1.8 + index * 0.25,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: index * 0.16,
        });
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <main>
      <section
        ref={heroRef}
        id="home"
        dir="rtl"
        className="relative isolate overflow-hidden bg-[#102D20] text-white"
      >
        {/* نورهای پس‌زمینه */}
        <div className="pointer-events-none absolute -left-32 -top-24 -z-10 h-[450px] w-[450px] rounded-full bg-[#D4AF37]/10 blur-[120px]" />

        <div className="pointer-events-none absolute -bottom-40 right-[30%] -z-10 h-[400px] w-[400px] rounded-full bg-emerald-400/[0.07] blur-[110px]" />

        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_70%_45%,rgba(212,175,55,0.07),transparent_45%)]" />

        <div className="mx-auto grid min-h-[720px] w-[min(1280px,calc(100%-64px))] grid-cols-1 items-center gap-8 py-16 min-[901px]:grid-cols-2 max-[900px]:gap-2 max-[900px]:py-10 max-sm:w-[calc(100%-32px)]">
          {/* متن اصلی */}
          <div
            ref={textRef}
            className="relative z-10 max-[900px]:text-center"
          >
            <p
              data-intro
              className="mb-5 flex items-center gap-3 text-sm font-medium text-[#E3C66D] max-[900px]:justify-center"
            >
              <Sparkles size={17} />
              شیرینی‌سرای ساحل
            </p>

            <h1
              data-intro
              className="text-[clamp(36px,4.5vw,66px)] font-black leading-[1.7] tracking-tight max-sm:text-[36px]"
            >
              بعضی لحظه‌ها
              <br />
              <span className="bg-gradient-to-l from-[#F4D989] via-[#D4AF37] to-[#B98B2D] bg-clip-text text-transparent">
                طعم ماندگار دارند.
              </span>
            </h1>

            <p
              data-intro
              className="mt-5 max-w-[460px] text-[15px] leading-9 text-white/70 max-[900px]:mx-auto max-sm:text-[13px]"
            >
              از جشن‌های دوست‌داشتنی تا دورهمی‌های ساده،
              با طعمی که خاطره می‌سازد، کنار لحظه‌های شیرین شما هستیم.
            </p>

            <div
              data-intro
              className="mt-8 flex flex-wrap items-center gap-4 max-[900px]:justify-center"
            >
              <a
                href="#products"
                className="inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-gradient-to-l from-[#E6C45D] to-[#C6A13B] px-6 py-3 text-sm font-extrabold text-[#173D2A] shadow-[0_8px_30px_rgba(212,175,55,0.15)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_12px_35px_rgba(212,175,55,0.25)]"
              >
                کشف شیرینی‌ها
                <ArrowLeft size={18} />
              </a>

              <a
                href="#about"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-bold transition duration-300 hover:border-[#D4AF37]/70 hover:bg-white/[0.04] hover:text-[#E3C66D]"
              >
                داستان ساحل
              </a>
            </div>

            <p
              data-intro
              className="mt-8 text-xs text-white/50"
            >
              تازگی در هر انتخاب، ظرافت در هر جزئیات
            </p>
          </div>

          {/* جعبه هدیه */}
          <div className="relative flex min-h-[520px] min-w-0 flex-col items-center justify-center max-[900px]:min-h-[440px] max-sm:min-h-[350px]">
            <div
              dir="ltr"
              className="absolute left-0 right-0 top-4 flex justify-between text-[9px] tracking-[0.2em] text-white/40"
            >
              <span>SAHEL PATISSERIE</span>
              <span>MADE WITH LOVE</span>
            </div>

            {/* ذرات طلایی */}
            <svg
              ref={sparklesRef}
              viewBox="0 0 440 390"
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 z-20 h-full w-full overflow-visible"
            >
              <g fill="#E8CE7A">
                <g data-particle>
                  <path d="M90 105 L94 117 L106 121 L94 125 L90 137 L86 125 L74 121 L86 117 Z" />
                </g>

                <g data-particle>
                  <path d="M344 105 L347 113 L355 116 L347 119 L344 127 L341 119 L333 116 L341 113 Z" />
                </g>

                <g data-particle>
                  <circle cx="322" cy="185" r="3" />
                </g>

                <g data-particle>
                  <path d="M115 225 L119 235 L129 239 L119 243 L115 253 L111 243 L101 239 L111 235 Z" />
                </g>

                <g data-particle>
                  <circle cx="325" cy="275" r="2.5" />
                </g>

                <g data-particle>
                  <circle cx="102" cy="165" r="2" />
                </g>
              </g>
            </svg>

            <svg
              viewBox="0 0 440 390"
              role="img"
              aria-label="جعبه هدیه لوکس سبز و طلایی شیرینی‌سرای ساحل با کیک و روبان"
              className="relative z-10 w-full max-w-[460px] overflow-visible drop-shadow-[0_35px_30px_rgba(0,0,0,0.28)]"
            >
              <defs>
                <linearGradient id="boxFront" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#286344" />
                  <stop offset="50%" stopColor="#17452D" />
                  <stop offset="100%" stopColor="#0B291A" />
                </linearGradient>

                <linearGradient id="boxSide" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#205438" />
                  <stop offset="100%" stopColor="#081E13" />
                </linearGradient>

                <linearGradient id="gold" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#FFF0B8" />
                  <stop offset="30%" stopColor="#EAD078" />
                  <stop offset="65%" stopColor="#D4AF37" />
                  <stop offset="100%" stopColor="#9C7528" />
                </linearGradient>

                <linearGradient id="ribbon" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#F3D887" />
                  <stop offset="50%" stopColor="#D4AF37" />
                  <stop offset="100%" stopColor="#AE842B" />
                </linearGradient>

                <linearGradient id="cake" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#80462E" />
                  <stop offset="50%" stopColor="#D29A6B" />
                  <stop offset="100%" stopColor="#78422C" />
                </linearGradient>

                <linearGradient id="cream" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#E5C29D" />
                  <stop offset="50%" stopColor="#FFF1DB" />
                  <stop offset="100%" stopColor="#DAB18B" />
                </linearGradient>

                <radialGradient id="glow">
                  <stop offset="0%" stopColor="#E6C65C" stopOpacity="0.28" />
                  <stop offset="100%" stopColor="#E6C65C" stopOpacity="0" />
                </radialGradient>
              </defs>

              {/* نور پشت کیک */}
              <ellipse
                cx="220"
                cy="190"
                rx="145"
                ry="135"
                fill="url(#glow)"
              />

              {/* سایه زیر جعبه */}
              <ellipse
                cx="220"
                cy="344"
                rx="148"
                ry="20"
                fill="#020E08"
                opacity="0.5"
              />

              <g ref={boxRef}>
                {/* سطح داخلی جعبه */}
                <path
                  d="M75 190 L220 116 L365 190 L220 268 Z"
                  fill="url(#gold)"
                  stroke="#E7CD79"
                  strokeWidth="2"
                />

                <path
                  d="M90 190 L220 126 L350 190 L220 255 Z"
                  fill="#143D28"
                  stroke="#A9842D"
                  strokeWidth="1"
                />

                {/* کیک */}
                <g ref={cakeRef}>
                  <ellipse
                    cx="220"
                    cy="228"
                    rx="94"
                    ry="18"
                    fill="url(#gold)"
                  />

                  <path
                    d="M160 166 L280 166 L280 215 Q220 240 160 215 Z"
                    fill="url(#cake)"
                    stroke="#EAC9A5"
                    strokeWidth="1.5"
                  />

                  {/* لایه شکلات */}
                  <path
                    d="M160 190 Q175 198 190 190 Q205 200 220 190 Q235 200 250 190 Q265 198 280 190 L280 202 Q265 210 250 202 Q235 212 220 202 Q205 212 190 202 Q175 210 160 202 Z"
                    fill="#5D2E21"
                  />

                  {/* خامه روی کیک */}
                  <path
                    d="M160 166
                       Q175 154 190 166
                       Q205 153 220 166
                       Q235 153 250 166
                       Q265 154 280 166
                       L280 181
                       Q265 193 250 181
                       Q235 194 220 181
                       Q205 194 190 181
                       Q175 193 160 181 Z"
                    fill="url(#cream)"
                  />

                  <ellipse
                    cx="220"
                    cy="166"
                    rx="60"
                    ry="18"
                    fill="#FFF0D8"
                    stroke="#F7DFC2"
                    strokeWidth="1.5"
                  />

                  {/* توت‌ها */}
                  <circle cx="194" cy="162" r="8" fill="#9B2940" />
                  <circle cx="220" cy="155" r="9" fill="#B5364A" />
                  <circle cx="246" cy="162" r="8" fill="#8D2036" />

                  <circle cx="191" cy="159" r="2" fill="#F4A7A7" />
                  <circle cx="217" cy="152" r="2.5" fill="#F4A7A7" />
                  <circle cx="243" cy="159" r="2" fill="#F4A7A7" />

                  {/* برگ‌های تزئینی */}
                  <path
                    d="M218 146 Q198 123 187 139 Q201 152 218 146"
                    fill="#658A45"
                  />

                  <path
                    d="M222 146 Q242 123 253 139 Q239 152 222 146"
                    fill="#86A65B"
                  />

                  <path
                    d="M220 146 L220 135"
                    stroke="#5E7F3E"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </g>

                {/* بدنه جلویی */}
                <path
                  d="M75 190 L220 270 L220 355 L75 275 Z"
                  fill="url(#boxFront)"
                  stroke="#D4AF37"
                  strokeWidth="1.8"
                />

                {/* بدنه کناری */}
                <path
                  d="M220 270 L365 190 L365 275 L220 355 Z"
                  fill="url(#boxSide)"
                  stroke="#B99538"
                  strokeWidth="1.8"
                />

                {/* خط تزئینی بدنه */}
                <path
                  d="M86 211 L86 269 L210 338"
                  fill="none"
                  stroke="#D4AF37"
                  strokeOpacity="0.45"
                  strokeWidth="1.2"
                />

                <path
                  d="M232 338 L354 270 L354 211"
                  fill="none"
                  stroke="#D4AF37"
                  strokeOpacity="0.35"
                  strokeWidth="1.2"
                />

                {/* روبان عمودی */}
                <path
                  d="M204 261 L220 270 L236 261 L236 346 L220 355 L204 346 Z"
                  fill="url(#ribbon)"
                  stroke="#F0D986"
                  strokeWidth="0.8"
                />

                {/* نشان روی بدنه */}
                <g transform="translate(145 270) rotate(29)">
                  <circle
                    cx="0"
                    cy="-7"
                    r="36"
                    fill="#102D20"
                    fillOpacity="0.7"
                    stroke="#D4AF37"
                    strokeOpacity="0.75"
                    strokeWidth="1"
                  />

                  <text
                    x="0"
                    y="0"
                    textAnchor="middle"
                    fill="url(#gold)"
                    fontSize="28"
                    fontWeight="900"
                  >
                    ساحل
                  </text>

                  <text
                    x="0"
                    y="17"
                    textAnchor="middle"
                    fill="#FFFFFF"
                    opacity="0.8"
                    fontSize="6"
                    letterSpacing="1.6"
                  >
                    A SWEET MOMENT
                  </text>

                  <path
                    d="M-16 26 L16 26"
                    stroke="#D4AF37"
                    strokeWidth="1"
                  />
                </g>

                {/* در جعبه */}
                <g ref={lidRef}>
                  <path
                    d="M75 190 L220 110 L365 190 L220 270 Z"
                    fill="#17452D"
                    stroke="#E1C45D"
                    strokeWidth="2.5"
                  />

                  <path
                    d="M91 190 L220 120 L349 190 L220 259 Z"
                    fill="none"
                    stroke="#D4AF37"
                    strokeOpacity="0.8"
                    strokeWidth="1.3"
                  />

                  <path
                    d="M106 190 L220 130 L334 190 L220 250 Z"
                    fill="none"
                    stroke="#D4AF37"
                    strokeOpacity="0.22"
                    strokeWidth="1"
                  />

                  {/* روبان روی در */}
                  <path
                    d="M204 121 L220 112 L236 121 L236 259 L220 268 L204 259 Z"
                    fill="url(#ribbon)"
                    opacity="0.95"
                  />

                  {/* نشان مرکزی */}
                  <text
                    x="220"
                    y="188"
                    textAnchor="middle"
                    fill="#F3D77F"
                    fontSize="32"
                    fontWeight="900"
                  >
                    ساحل
                  </text>

                  <path
                    d="M193 201 L247 201"
                    stroke="#D4AF37"
                    strokeWidth="1.2"
                  />

                  <text
                    x="220"
                    y="219"
                    textAnchor="middle"
                    fill="#E8CE7A"
                    fontSize="8"
                    letterSpacing="2"
                  >
                    MADE WITH LOVE
                  </text>

                  {/* پاپیون */}
                  <g ref={ribbonRef}>
                    <path
                      d="M220 114
                         C194 82 166 96 181 116
                         C190 128 207 124 220 114 Z"
                      fill="url(#ribbon)"
                      stroke="#F4DE92"
                      strokeWidth="1.2"
                    />

                    <path
                      d="M220 114
                         C246 82 274 96 259 116
                         C250 128 233 124 220 114 Z"
                      fill="url(#ribbon)"
                      stroke="#F4DE92"
                      strokeWidth="1.2"
                    />

                    <path
                      d="M213 119 L205 139 L220 130 L235 139 L227 119 Z"
                      fill="#C19A36"
                      stroke="#F0D986"
                      strokeWidth="0.8"
                    />

                    <ellipse
                      cx="220"
                      cy="115"
                      rx="9"
                      ry="7"
                      fill="#F1D47B"
                      stroke="#FFF0B8"
                      strokeWidth="1"
                    />
                  </g>
                </g>
              </g>
            </svg>

            <div className="relative z-10 mt-1 flex items-center gap-2 text-xs text-white/65">
              <span className="text-[#E3C66D]">✳</span>
              یک جعبه، پر از لحظه‌های شیرین
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}