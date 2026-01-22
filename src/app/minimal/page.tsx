import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Clients from '@/components/Clients';
import Services from '@/components/Services';
import About from '@/components/About';
import Reviews from '@/components/Reviews';
import Articles from '@/components/Articles';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

// DESIGN 3: MINIMAL - Stone colors, ultra clean, lots of whitespace, light fonts

export default function MinimalHomePage() {
  return (
    <main>
      <Header variant="minimal" />
      <Hero variant="minimal" />
      <Clients variant="minimal" />
      <Services variant="minimal" />
      <About variant="minimal" />
      <Reviews variant="minimal" />
      <Articles variant="minimal" />
      <Contact variant="minimal" />
      <Footer variant="minimal" />
    </main>
  );
}
