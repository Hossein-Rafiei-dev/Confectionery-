import Footer from "./components/Footer";
import HomeExperience from "./components/HomeExperience";
import Navbar from "./components/Navbar";
import About from "@/app/components/Abou";
import Contact from "@/app/components/Contact";
import Products from "./components/Product";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HomeExperience />
      <Products/>
      <About />
      <Contact />
      <Footer />
    </main>
  );
}