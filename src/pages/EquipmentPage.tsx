import PageHero from "@/components/PageHero";
import { equipmentHero } from "@/lib/equipment-data";
import Footer from "@/components/Footer";
import Equipment from "@/components/Equipment";

const EquipmentPage = () => {
  return (
    <div className="min-h-screen">
      <PageHero title={equipmentHero.title} image={equipmentHero.image} />
      <div className="pt-20">
        <Equipment />
      </div>
      <Footer />
    </div>
  );
};

export default EquipmentPage;
