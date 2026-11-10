
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "شیرینی‌سرای ساحل",
    template: "%s | شیرینی‌سرای ساحل",
  },
  description:
    "با شیرینی‌سرای ساحل، طعم شیرینی‌های سنتی ایرانی و شیرینی‌های مدرن را تجربه کنید.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
