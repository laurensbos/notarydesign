import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Clients from "@/components/Clients";
import Services from "@/components/Services";
import About from "@/components/About";
import Reviews from "@/components/Reviews";
import Articles from "@/components/Articles";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main>
      <Header variant="modern" />
      <Hero variant="modern" />
      <Clients variant="modern" />
      <Services variant="modern" />
      <About variant="modern" />
      <Reviews variant="modern" />
      <Articles variant="modern" />
      <Contact variant="modern" />
      <Footer variant="modern" />
    </main>
  );
}
