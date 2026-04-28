import Navbar from "@/Components/Navbar";
import PageHero from "@/Components/PageHero";
import About from "@/Components/About";
import Team from "@/Components/Team";
import Footer from "@/Components/Footer";
import { Helmet } from "react-helmet-async";
import { seo } from "@/lib/seo";

interface TeamMember {
  id: number;
  name: string;
  position: string;
  image: string | null;
}

interface AboutPageProps {
  team: TeamMember[];
  settings: Record<string, string>;
  banner?: {
    title: string;
    subtitle?: string;
    image: string;
  };
}

const AboutPage = ({ team, settings, banner }: AboutPageProps) => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>{seo.about.title}</title>
        <meta name="description" content={seo.about.description} />
      </Helmet>
      <Navbar />
      <PageHero 
        title={banner?.title || "About Us"} 
        subtitle={banner?.subtitle}
        image={banner?.image || "https://images.unsplash.com/photo-1541888941255-658866552271?q=80&w=2000&auto=format&fit=crop"} 
      />
      <div className="pt-20">
        <About settings={settings} />
        <Team team={team} />
      </div>
      <Footer />
    </div>
  );
};

export default AboutPage;
