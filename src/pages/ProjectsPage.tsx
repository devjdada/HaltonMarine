import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Partners from "@/components/Partners";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { projectsHero } from "@/lib/page-hero-data";
import { Helmet } from "react-helmet-async";
import { seo } from "@/lib/seo";

const ProjectsPage = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>{seo.projects.title}</title>
        <meta name="description" content={seo.projects.description} />
      </Helmet>
      <Navbar />
      <PageHero title={projectsHero.title} image={projectsHero.image} />
      <div className="pt-20">
        <Projects />
        <Partners />
      </div>
      <Footer />
    </div>
  );
};

export default ProjectsPage;
