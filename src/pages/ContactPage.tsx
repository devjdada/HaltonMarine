import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { contactHero } from "@/lib/page-hero-data";
import { Helmet } from "react-helmet-async";
import { seo } from "@/lib/seo";

const ContactPage = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>{seo.contact.title}</title>
        <meta name="description" content={seo.contact.description} />
      </Helmet>
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
