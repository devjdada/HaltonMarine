import Navbar from "@/Components/Navbar";
import ServicesDetail from "@/Components/ServicesDetail";
import Fleet from "@/Components/Fleet";
import Footer from "@/Components/Footer";
import PageHero from "@/Components/PageHero";
import { servicesHero } from "@/lib/page-hero-data";
import { Helmet } from "react-helmet-async";
import { seo } from "@/lib/seo";

interface Service {
  id: number;
  title: string;
  description: string;
  image: string | null;
}

interface Equipment {
  id: number;
  name: string;
  specs: string | null;
  image: string | null;
  type: 'Core' | 'Extended';
}

interface ServicesPageProps {
  services: Service[];
  equipment: Equipment[];
}

const ServicesPage = ({ services, equipment }: ServicesPageProps) => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>{seo.services.title}</title>
        <meta name="description" content={seo.services.description} />
      </Helmet>
      <Navbar />
      <PageHero title={servicesHero.title} image={servicesHero.image} />
      <div className="pt-20">
        <ServicesDetail services={services} />
        <Fleet equipment={equipment} />
      </div>
      <Footer />
    </div>
  );
};

export default ServicesPage;
