import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import { aboutHero } from "@/lib/page-hero-data";
import About from "@/components/About";
import Team from "@/components/Team";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";
import { seo } from "@/lib/seo";

const AboutPage = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>{seo.about.title}</title>
        <meta name="description" content={seo.about.description} />
      </Helmet>
      <Navbar />
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
