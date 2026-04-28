import Navbar from "@/Components/Navbar";
import Projects from "@/Components/Projects";
import Partners from "@/Components/Partners";
import Footer from "@/Components/Footer";
import PageHero from "@/Components/PageHero";
import { Helmet } from "react-helmet-async";
import { seo } from "@/lib/seo";

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

interface ProjectsPageProps {
  projects: Project[];
  clients: Client[];
  banner?: {
    title: string;
    subtitle?: string;
    image: string;
  };
}

const ProjectsPage = ({ projects, clients, banner }: ProjectsPageProps) => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>{seo.projects.title}</title>
        <meta name="description" content={seo.projects.description} />
      </Helmet>
      <Navbar />
      <PageHero 
        title={banner?.title || "Our Projects"} 
        subtitle={banner?.subtitle}
        image={banner?.image || "https://images.unsplash.com/photo-1517089596392-db9a5e93a6f7?q=80&w=2000&auto=format&fit=crop"} 
      />
      <div className="pt-0">
        <Projects projects={projects} />
        <Partners clients={clients} />
      </div>
      <Footer />
    </div>
  );
};

export default ProjectsPage;
