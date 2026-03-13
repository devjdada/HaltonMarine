import Navbar from "@/Components/Navbar";
import Projects from "@/Components/Projects";
import Partners from "@/Components/Partners";
import Footer from "@/Components/Footer";
import PageHero from "@/Components/PageHero";
import { projectsHero } from "@/lib/page-hero-data";
import { Helmet } from "react-helmet-async";
import { seo } from "@/lib/seo";

interface Project {
  id: number;
  title: string;
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
}

const ProjectsPage = ({ projects, clients }: ProjectsPageProps) => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>{seo.projects.title}</title>
        <meta name="description" content={seo.projects.description} />
      </Helmet>
      <Navbar />
      <PageHero title={projectsHero.title} image={projectsHero.image} />
      <div className="pt-20">
        <Projects projects={projects} />
        <Partners clients={clients} />
      </div>
      <Footer />
    </div>
  );
};

export default ProjectsPage;
