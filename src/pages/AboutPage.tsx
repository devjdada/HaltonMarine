import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Team from "@/components/Team";
import Footer from "@/components/Footer";

const AboutPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-20">
        <About />
        <Team />
      </div>
      <Footer />
    </div>
  );
};

export default AboutPage;
