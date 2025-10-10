import Navbar from "@/components/Navbar";
import ServicesDetail from "@/components/ServicesDetail";
import Fleet from "@/components/Fleet";
import Footer from "@/components/Footer";

const ServicesPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-20">
        <ServicesDetail />
        <Fleet />
      </div>
      <Footer />
    </div>
  );
};

export default ServicesPage;
