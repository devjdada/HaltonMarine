import Navbar from "@/Components/Navbar";
import Contact from "@/Components/Contact";
import Footer from "@/Components/Footer";
import PageHero from "@/Components/PageHero";
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
