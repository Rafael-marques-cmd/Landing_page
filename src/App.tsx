import { About } from './components/About/About';
import { CallToAction } from './components/CallToAction/CallToAction';
import { Contact } from './components/Contact/Contact';
import { Features } from './components/Features/Features';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { Hero } from './components/Hero/Hero';
import { Menu } from './components/Menu/Menu';
import { Testimonials } from './components/Testimonials/Testimonials';

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <Menu />
        <About />
        <Testimonials />
        <CallToAction />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default App;
