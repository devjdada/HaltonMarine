
import Navbar from "@/Components/Navbar";
import Hero from "@/Components/Hero";
import ServicesCarousel from "@/Components/ServicesCarousel";
import About from "@/Components/About";
import ServicesDetail from "@/Components/ServicesDetail";
import Fleet from "@/Components/Fleet";
import Projects from "@/Components/Projects";
import Team from "@/Components/Team";
import Partners from "@/Components/Partners";
import Footer from "@/Components/Footer";
import CTA from "@/Components/CTA";
import { Helmet } from "react-helmet-async";
import { seo } from "@/lib/seo";

interface Service {
  id: number;
  title: string;
  description: string;
  image: string | null;
}

interface Project {
  id: number;
  title: string;
  description: string | null;
  category: string | null;
  location: string | null;
  image: string | null;
}

interface Client {
  id: number;
  name: string;
  logo: string | null;
}

interface TeamMember {
  id: number;
  name: string;
  position: string;
  image: string | null;
  bio: string | null;
}

interface Banner {
  id: number;
  title: string;
  description: string;
  image: string;
  is_active: boolean;
}

interface Equipment {
  id: number;
  name: string;
  specs: string | null;
  image: string | null;
  type: 'Core' | 'Extended';
}

interface Props {
  services: Service[];
  projects: Project[];
  clients: Client[];
  team: TeamMember[];
  equipment: Equipment[];
  banners: Banner[];
}

const Index = ({ services, projects, clients, team, equipment, banners }: Props) => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>{seo.home.title}</title>
        <meta name="description" content={seo.home.description} />
      </Helmet>
      <Hero isHomePage={true} banners={banners} />
      <Navbar />
      <ServicesCarousel services={services} />
      <About />
      <ServicesDetail services={services} />
      <Fleet equipment={equipment} />
      <Projects projects={projects} />
      <Team team={team} />
      <Partners clients={clients} />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
