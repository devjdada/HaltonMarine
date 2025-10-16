import Navbar from "@/components/Navbar";
import ServicesDetail from "@/components/ServicesDetail";
import Fleet from "@/components/Fleet";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { servicesHero } from "@/lib/page-hero-data";

const ServicesPage = () => {
  return (
    <div className="min-h-screen">
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
