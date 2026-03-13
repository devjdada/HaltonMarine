
import { Button } from "@/Components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "@inertiajs/react";
import heroVideo from "@/assets/hero-video.mp4";

interface Banner {
  id: number;
  title: string;
  description: string;
  image: string;
  is_active: boolean;
}

interface HeroProps {
  isHomePage?: boolean;
  banners?: Banner[];
}

const Hero = ({ isHomePage = false, banners = [] }: HeroProps) => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video with Overlay */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={heroVideo} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <div className="mb-8 animate-fade-in">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 drop-shadow-lg">
            Leading the Future of Marine and Dredging Services
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-8 drop-shadow-md">
            World-class indigenous expertise delivering innovative solutions across Nigeria's maritime industry
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in">
          <Button 
            variant="hero" 
            size="lg"
            onClick={() => scrollToSection("services")}
            className="group"
          >
            Explore Our Services
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          {isHomePage && (
            <Link href="/projects">
              <Button 
                variant="outline" 
                size="lg"
                className="bg-white/10 backdrop-blur-sm text-white border-white/30 hover:bg-white/20"
              >
                View Our Projects
              </Button>
            </Link>
          )}
          <Button 
            variant="outline" 
            size="lg"
            onClick={() => scrollToSection("contact")}
            className="bg-white/10 backdrop-blur-sm text-white border-white/30 hover:bg-white/20"
          >
            Get in Touch
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
