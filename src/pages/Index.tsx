
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ServicesCarousel from "@/components/ServicesCarousel";
import About from "@/components/About";
import ServicesDetail from "@/components/ServicesDetail";
import Fleet from "@/components/Fleet";
import Projects from "@/components/Projects";
import Team from "@/components/Team";
import Partners from "@/components/Partners";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import { Helmet } from "react-helmet-async";
import { seo } from "@/lib/seo";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>{seo.home.title}</title>
        <meta name="description" content={seo.home.description} />
      </Helmet>
      <Hero isHomePage={true} />
      <Navbar />
      <ServicesCarousel />
      <About />
      <ServicesDetail />
      <Fleet />
      <Projects />
      <Team />
      <Partners />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
