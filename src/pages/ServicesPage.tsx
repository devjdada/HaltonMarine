import Navbar from "@/components/Navbar";
import ServicesDetail from "@/components/ServicesDetail";
import Fleet from "@/components/Fleet";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { servicesHero } from "@/lib/page-hero-data";
import { Helmet } from "react-helmet-async";
import { seo } from "@/lib/seo";

const ServicesPage = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>{seo.services.title}</title>
        <meta name="description" content={seo.services.description} />
      </Helmet>
      <Navbar />
      <PageHero title={servicesHero.title} image={servicesHero.image} />
      <div className="pt-20">
        <ServicesDetail />
        <Fleet />
      </div>
      <Footer />
    </div>
  );
};

export default ServicesPage;
