import Navbar from "@/Components/Navbar";
import PageHero from "@/Components/PageHero";
import { aboutHero } from "@/lib/page-hero-data";
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
}

const AboutPage = ({ team }: AboutPageProps) => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>{seo.about.title}</title>
        <meta name="description" content={seo.about.description} />
      </Helmet>
      <Navbar />
      <PageHero title={aboutHero.title} image={aboutHero.image} />
      <div className="pt-20">
        <About />
        <Team team={team} />
      </div>
      <Footer />
    </div>
  );
};

export default AboutPage;
