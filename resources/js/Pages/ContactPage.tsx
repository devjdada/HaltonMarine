import Navbar from "@/Components/Navbar";
import Contact from "@/Components/Contact";
import Footer from "@/Components/Footer";
import PageHero from "@/Components/PageHero";
import { Helmet } from "react-helmet-async";
import { seo } from "@/lib/seo";

interface ContactPageProps {
  banner?: {
    title: string;
    subtitle?: string;
    image: string;
  };
}

const ContactPage = ({ banner }: ContactPageProps) => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>{seo.contact.title}</title>
        <meta name="description" content={seo.contact.description} />
      </Helmet>
      <Navbar />
      <PageHero 
        title={banner?.title || "Contact Us"} 
        subtitle={banner?.subtitle}
        image={banner?.image || "https://images.unsplash.com/photo-1582408929734-b130dfbb3970?q=80&w=2000&auto=format&fit=crop"} 
      />
      <div className="pt-20">
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default ContactPage;
