import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import dredgingImage from "@/assets/service-dredging.jpg";
import marineImage from "@/assets/service-marine.jpg";
import vesselImage from "@/assets/service-vessel.jpg";
import equipmentImage from "@/assets/service-equipment.jpg";

const services = [
  {
    title: "Comprehensive Dredging Solutions",
    description: "Complete range of dredging services including land reclamation, river sweeping, canalization, and sand stock piling for construction and development.",
    image: dredgingImage,
  },
  {
    title: "Specialized Marine Services",
    description: "Robust logistical support in riverine areas of the Niger Delta. Efficient movement of materials using modern barges for timely project delivery.",
    image: marineImage,
  },
  {
    title: "Vessel Operations & Logistics",
    description: "Comprehensive marine project management, vessel chartering, subsea engineering, and pipeline laying services with naval engineering expertise.",
    image: vesselImage,
  },
  {
    title: "Equipment Leasing & Logistics",
    description: "Extensive fleet of dredgers, excavators, cranes, trucks, boats, OSVs, and support services including bunkering and cargo handling.",
    image: equipmentImage,
  },
];

const ServicesCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % services.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + services.length) % services.length);
    setIsAutoPlaying(false);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % services.length);
    setIsAutoPlaying(false);
  };

  const scrollToServices = () => {
    const element = document.getElementById("services-detail");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="relative h-screen">
      {services.map((service, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${service.image})` }}
          >
            <div className="absolute inset-0 bg-[var(--gradient-overlay)]" />
          </div>

          {/* Content */}
          <div className="relative h-full flex items-center justify-center px-6">
            <div className="max-w-4xl text-center">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-lg animate-fade-in">
                {service.title}
              </h2>
              <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto drop-shadow-md animate-fade-in">
                {service.description}
              </p>
              <Button 
                variant="hero" 
                size="lg"
                onClick={scrollToServices}
                className="animate-fade-in"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Controls */}
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

      {/* Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2">
        {services.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 rounded-full transition-all ${
              index === currentIndex
                ? "bg-primary w-8"
                : "bg-white/50 w-2 hover:bg-white/75"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default ServicesCarousel;
