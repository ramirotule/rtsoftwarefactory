import Navbar from "@/components/Navbar";
import SiteLogo from "@/components/SiteLogo";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import Services from "@/components/Services";
import WebSystems from "@/components/WebSystems";
import LocalAdvantage from "@/components/LocalAdvantage";
import Offerings from "@/components/Offerings";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <SiteLogo />
      <Navbar />
      <Hero />
      <Products />
      <Services />
      <WebSystems />
      <LocalAdvantage />
      <Offerings />
      <Contact />
      <Footer />
    </main>
  );
}
