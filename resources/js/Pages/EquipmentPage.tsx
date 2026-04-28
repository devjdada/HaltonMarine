import Navbar from "@/Components/Navbar";
import PageHero from "@/Components/PageHero";
import Footer from "@/Components/Footer";
import Equipment from "@/Components/Equipment";
import { Helmet } from "react-helmet-async";
import { seo } from "@/lib/seo";

interface EquipmentData {
  id: number;
  name: string;
  specs: string | null;
  image: string | null;
  type: 'Core' | 'Extended';
}

interface EquipmentPageProps {
  equipment: EquipmentData[];
  banner?: {
    title: string;
    subtitle?: string;
    image: string;
  };
}

const EquipmentPage = ({ equipment, banner }: EquipmentPageProps) => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>{seo.equipment.title}</title>
        <meta name="description" content={seo.equipment.description} />
      </Helmet>
      <Navbar />
      <PageHero 
        title={banner?.title || "Our Equipment"} 
        subtitle={banner?.subtitle}
        image={banner?.image || "https://images.unsplash.com/photo-1444491741275-3747c53c99b4?q=80&w=2000&auto=format&fit=crop"} 
      />
      <div className="pt-20">
        <Equipment equipment={equipment} />
      </div>
      <Footer />
    </div>
  );
};

export default EquipmentPage;
