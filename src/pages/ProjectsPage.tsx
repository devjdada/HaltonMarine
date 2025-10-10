import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Partners from "@/components/Partners";
import Footer from "@/components/Footer";

const ProjectsPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-20">
        <Projects />
        <Partners />
      </div>
      <Footer />
    </div>
  );
};

export default ProjectsPage;
