
export type Category =
  | "همه محصولات"
  | "کیک"
  | "شیرینی"
  | "باقلوا";

export type Product = {
  id: number;
  name: string;
  slug: string;
  category: Exclude<Category, "همه محصولات">;
  description: string;
  image: string;
  alt: string;
  featured?: boolean;
};

export const categories: Category[] = [
  "همه محصولات",
  "کیک",
  "شیرینی",
  "باقلوا",
];

export const products: Product[] = [
  {
    id: 1,
    name: "کیک تولد",
    slug: "birthday-cake",
    category: "کیک",
    description:
      "کیک‌هایی خوشمزه و زیبا برای ثبت شیرین‌ترین لحظه‌های زندگی.",
    image:
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=900&q=85",
    alt: "کیک تولد با تزئینات خامه‌ای",
    featured: true,
  },
  {
    id: 2,
    name: "شیرینی خامه‌ای",
    slug: "cream-pastry",
    category: "شیرینی",
    description:
      "ترکیبی لطیف از خامه تازه و بافتی سبک برای یک پذیرایی دلنشین.",
    image:
      "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=900&q=85",
    alt: "دسر شیرین با خامه",
  },
  {
    id: 3,
    name: "شیرینی دانمارکی",
    slug: "danish-pastry",
    category: "شیرینی",
    description:
      "شیرینی خوش‌عطر و لایه‌ای، مناسب صبحانه و دورهمی‌های دوستانه.",
    image:
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=900&q=85",
    alt: "شیرینی و نان تازه",
  },
  {
    id: 4,
    name: "شیرینی گل محمدی",
    slug: "rose-pastry",
    category: "شیرینی",
    description:
      "عطر دلنشین گل محمدی در کنار شیرینی‌ای لطیف و خوش‌طعم.",
    image:
      "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=900&q=85",
    alt: "شیرینی‌های کوچک",
  },
  {
    id: 5,
    name: "باقلوا",
    slug: "baklava",
    category: "باقلوا",
    description:
      "لایه‌های ترد و طعمی شیرین برای دوست‌داران شیرینی‌های اصیل.",
    image:
      "https://images.unsplash.com/photo-1519676867240-f03562e64548?auto=format&fit=crop&w=900&q=85",
    alt: "شیرینی سنتی",
  },
  {
    id: 6,
    name: "کیک مافینی",
    slug: "muffin-cake",
    category: "کیک",
    description:
      "کیک‌های کوچک و خوش‌طعم؛ مناسب پذیرایی و هدیه دادن.",
    image:
      "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?auto=format&fit=crop&w=900&q=85",
    alt: "مافین‌های کوچک و شیرین",
  },
];
