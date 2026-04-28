import Navbar from "@/Components/Navbar";
import ServicesDetail from "@/Components/ServicesDetail";
import Fleet from "@/Components/Fleet";
import Footer from "@/Components/Footer";
import PageHero from "@/Components/PageHero";
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
  banner?: {
    title: string;
    subtitle?: string;
    image: string;
  };
}

const ServicesPage = ({ services, equipment, banner }: ServicesPageProps) => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>{seo.services.title}</title>
        <meta name="description" content={seo.services.description} />
      </Helmet>
      <Navbar />
      <PageHero 
        title={banner?.title || "Our Services"} 
        subtitle={banner?.subtitle}
        image={banner?.image || "https://images.unsplash.com/photo-1493033528444-9740d16d9007?q=80&w=2000&auto=format&fit=crop"} 
      />
      <div className="pt-20">
        <ServicesDetail services={services} />
        <Fleet equipment={equipment} />
      </div>
      <Footer />
    </div>
  );
};

export default ServicesPage;
