import Navbar from "@/Components/Navbar";
import PageHero from "@/Components/PageHero";
import { equipmentHero } from "@/lib/equipment-data";
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
}

const EquipmentPage = ({ equipment }: EquipmentPageProps) => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>{seo.equipment.title}</title>
        <meta name="description" content={seo.equipment.description} />
      </Helmet>
      <Navbar />
      <PageHero title={equipmentHero.title} image={equipmentHero.image} />
      <div className="pt-20">
        <Equipment equipment={equipment} />
      </div>
      <Footer />
    </div>
  );
};

export default EquipmentPage;
