import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import { equipmentHero } from "@/lib/equipment-data";
import Footer from "@/components/Footer";
import Equipment from "@/components/Equipment";
import { Helmet } from "react-helmet-async";
import { seo } from "@/lib/seo";

const EquipmentPage = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>{seo.equipment.title}</title>
        <meta name="description" content={seo.equipment.description} />
      </Helmet>
      <Navbar />
      <PageHero title={equipmentHero.title} image={equipmentHero.image} />
      <div className="pt-20">
        <Equipment />
      </div>
      <Footer />
    </div>
  );
};

export default EquipmentPage;
