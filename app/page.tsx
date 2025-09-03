import Blur from "@/components/MinorComponents/Blur";
import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import CardSection from "@/components/MinorComponents/CardSection";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import BackToTop from "@/components/MinorComponents/BackToTop";

export default function Home() {
  return (
    <div>
      <Nav />
      <Hero />
      <CardSection />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Testimonials />
      <Contact />
      <Footer />
      <BackToTop />
      <Blur />
    </div>
  );
}
