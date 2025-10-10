import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ServicesCarousel from "@/components/ServicesCarousel";
import About from "@/components/About";
import ServicesDetail from "@/components/ServicesDetail";
import Fleet from "@/components/Fleet";
import Projects from "@/components/Projects";
import Team from "@/components/Team";
import Partners from "@/components/Partners";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <ServicesCarousel />
      <About />
      <ServicesDetail />
      <Fleet />
      <Projects />
      <Team />
      <Partners />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
