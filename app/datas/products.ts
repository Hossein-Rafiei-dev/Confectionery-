
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

const BASE_PATH =
  process.env.NODE_ENV === "production" ? "/Confectionery-" : "";

const productImage = (filename: string) =>
  `${BASE_PATH}/images/products/${filename}`;

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
    description: "کیک‌هایی خوشمزه و زیبا برای ثبت شیرین‌ترین لحظه‌های زندگی.",
    image: productImage("birthday-cake.jpg"),
    alt: "کیک تولد با تزئینات خامه‌ای",
    featured: true,
  },
  {
    id: 2,
    name: "شیرینی خامه‌ای",
    slug: "cream-pastry",
    category: "شیرینی",
    description: "ترکیبی لطیف از خامه تازه و بافتی سبک برای یک پذیرایی دلنشین.",
    image: productImage("cream-pastry.jpg"),
    alt: "شیرینی خامه‌ای تازه",
  },
  {
    id: 3,
    name: "شیرینی دانمارکی",
    slug: "danish-pastry",
    category: "شیرینی",
    description: "شیرینی خوش‌عطر و لایه‌ای، مناسب صبحانه و دورهمی‌های دوستانه.",
    image: productImage("danish-pastry.jpg"),
    alt: "شیرینی دانمارکی تازه",
  },
  {
    id: 4,
    name: "شیرینی گل محمدی",
    slug: "rose-pastry",
    category: "شیرینی",
    description: "عطر دلنشین گل محمدی در کنار شیرینی‌ای لطیف و خوش‌طعم.",
    image: productImage("rose-pastry.jpg"),
    alt: "شیرینی گل محمدی",
  },
  {
    id: 5,
    name: "باقلوا",
    slug: "baklava",
    category: "باقلوا",
    description: "لایه‌های ترد و طعمی شیرین برای دوست‌داران شیرینی‌های اصیل.",
    image: productImage("baklava.jpg"),
    alt: "باقلوا با مغز پسته",
  },
  {
    id: 6,
    name: "کیک مافینی",
    slug: "muffin-cake",
    category: "کیک",
    description: "کیک‌های کوچک و خوش‌طعم؛ مناسب پذیرایی و هدیه دادن.",
    image: productImage("muffin-cake.jpg"),
    alt: "مافین‌های تازه و خوشمزه",
  },
];
