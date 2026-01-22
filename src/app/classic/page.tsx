import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Clients from '@/components/Clients';
import Services from '@/components/Services';
import About from '@/components/About';
import Reviews from '@/components/Reviews';
import Articles from '@/components/Articles';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

// DESIGN 2: CLASSIC - Dark navy, gold accents, serif fonts, traditional elegance

export default function ClassicHomePage() {
  return (
    <main>
      <Header variant="classic" />
      <Hero variant="classic" />
      <Clients variant="classic" />
      <Services variant="classic" />
      <About variant="classic" />
      <Reviews variant="classic" />
      <Articles variant="classic" />
      <Contact variant="classic" />
      <Footer variant="classic" />
    </main>
  );
}
