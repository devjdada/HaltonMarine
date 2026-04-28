
import { useState, useEffect } from "react";
import { Button } from "@/Components/ui/button";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "@inertiajs/react";
import heroVideo from "@/assets/hero-video.mp4";

interface Banner {
  id: number;
  title: string;
  subtitle?: string;
  image: string;
  is_active: boolean;
}

interface HeroProps {
  isHomePage?: boolean;
  banners?: Banner[];
}

const Hero = ({ isHomePage = false, banners = [] }: HeroProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loopCount, setLoopCount] = useState(0);

  const isVideo = (path: string) => {
    return /\.(mp4|webm|ogg)$/i.test(path);
  };

  useEffect(() => {
    if (banners.length <= 1) return;

    const currentBanner = banners[currentIndex];
    if (currentBanner && isVideo(currentBanner.image)) {
      // Pause carousel advancement for videos, we handle it via onEnded
      return;
    }

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % banners.length);
      setLoopCount(0);
    }, 5000);

    return () => clearInterval(interval);
  }, [banners.length, currentIndex]);

  const handleVideoEnd = () => {
    if (loopCount >= 1) {
      setCurrentIndex((prev) => (prev + 1) % banners.length);
      setLoopCount(0);
    } else {
      setLoopCount((prev) => prev + 1);
    }
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + banners.length) % banners.length);
    setLoopCount(0);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % banners.length);
    setLoopCount(0);
  };

  const currentBanner = banners[currentIndex];

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background - Video fallback or Banner Image */}
      {banners.length > 0 ? (
        banners.map((banner, index) => (
          <div
            key={banner.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${index === currentIndex ? "opacity-100 z-0" : "opacity-0 -z-10"
              }`}
          >
            {isVideo(banner.image) ? (
              <video
                key={`${banner.id}-${loopCount}`}
                autoPlay
                muted
                playsInline
                onEnded={handleVideoEnd}
                className="w-full h-full object-cover"
              >
                <source src={banner.image && (banner.image.startsWith('http') || banner.image.startsWith('/')) ? banner.image : (banner.image ? `/storage/${banner.image}` : '')} type="video/mp4" />
              </video>
            ) : (
              <img
                src={banner.image && (banner.image.startsWith('http') || banner.image.startsWith('/')) ? banner.image : (banner.image ? `/storage/${banner.image}` : '')}
                alt={banner.title}
                className="w-full h-full object-cover"
              />
            )}
            <div className="absolute inset-0 bg-black/50" />
          </div>
        ))
      ) : (
        <>
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
        </>
      )}

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 flex flex-col items-start text-left">
        <div className="max-w-3xl animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-8 leading-tight drop-shadow-2xl">
            {currentBanner?.title || "Leading the Future of Marine Services"}
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mb-10 leading-relaxed font-medium drop-shadow-lg">
            {currentBanner?.subtitle || "World-class indigenous expertise delivering innovative solutions across Nigeria's maritime industry"}
          </p>
        </div>

        <div className="flex flex-wrap gap-5 animate-fade-in">
          <Button
            variant="hero"
            size="lg"
            onClick={() => scrollToSection("services")}
            className="group px-8 h-16 text-lg font-bold rounded-none border-b-4 border-primary shadow-2xl hover:translate-y-[-2px] transition-all"
          >
            Explore Services
            <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform" />
          </Button>

          {isHomePage && (
            <Link href="/projects">
              <Button
                variant="outline"
                size="lg"
                className="bg-white/5 backdrop-blur-md text-white border-white/20 hover:bg-white/10 px-8 h-16 text-lg font-bold rounded-none transition-all shadow-xl"
              >
                Our Projects
              </Button>
            </Link>
          )}

          <Button
            variant="outline"
            size="lg"
            onClick={() => scrollToSection("contact")}
            className="bg-white/5 backdrop-blur-md text-white border-white/20 hover:bg-white/10 px-8 h-16 text-lg font-bold rounded-none transition-all shadow-xl"
          >
            Get Quote
          </Button>
        </div>
      </div>

      {/* Navigation Controls (Only if multiple banners) */}
      {banners.length > 1 && (
        <div className="absolute inset-0 flex items-center justify-between px-6 pointer-events-none">
          <Button
            variant="ghost"
            size="icon"
            onClick={goToPrevious}
            className="pointer-events-auto bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white h-12 w-12"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={goToNext}
            className="pointer-events-auto bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white h-12 w-12"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>
      )}

      {/* Indicators (Only if multiple banners) */}
      {banners.length > 1 && (
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex gap-2">
          {banners.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 rounded-full transition-all ${index === currentIndex ? "bg-primary w-8" : "bg-white/50 w-2 hover:bg-white/75"
                }`}
            />
          ))}
        </div>
      )}

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
