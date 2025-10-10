import PageHero from "@/components/PageHero";
import { aboutHero } from "@/lib/page-hero-data";
import About from "@/components/About";
import Team from "@/components/Team";
import Footer from "@/components/Footer";

const AboutPage = () => {
  return (
    <div className="min-h-screen">
      <PageHero title={aboutHero.title} image={aboutHero.image} />
      <div className="pt-20">
        <About />
        <Team />
      </div>
      <Footer />
    </div>
  );
};

export default AboutPage;
