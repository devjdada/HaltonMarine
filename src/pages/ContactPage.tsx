import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { contactHero } from "@/lib/page-hero-data";

const ContactPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <PageHero title={contactHero.title} image={contactHero.image} />
      <div className="pt-20">
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default ContactPage;
