import { ArrowRight } from "lucide-react";
import { Button } from "@/Components/ui/button";

interface Service {
  id: number;
  title: string;
  description: string;
  image: string | null;
}

interface BentoServicesProps {
  services: Service[];
}

const BentoServices = ({ services }: BentoServicesProps) => {
  const scrollToServices = () => {
    const element = document.getElementById("services-detail");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // If we have fewer than 4 services, just show a standard grid
  // Otherwise, create a bento layout
  return (
    <section className="py-24 px-6 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between items-start gap-6">
          <div className="max-w-2xl">
            <h2 className="text-5xl md:text-6xl font-black text-foreground mb-6 uppercase tracking-tighter">
              Our <span className="text-primary italic">Expertise</span>
            </h2>
            <div className="w-40 h-2 bg-primary mb-6" />
            <p className="text-xl text-muted-foreground font-medium">
              Comprehensive marine and dredging solutions delivered with technical precision and indigenous excellence.
            </p>
          </div>
          <Button 
            variant="hero" 
            onClick={scrollToServices}
            className="rounded-none px-8 py-6 h-auto text-lg font-bold border-b-4 border-primary shadow-xl"
          >
            View Details
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 h-[800px] md:h-[600px]">
          {services.slice(0, 4).map((service, index) => {
            // Define grid patterns based on index
            const gridClasses = [
              "md:col-span-2 md:row-span-2", // Large lead piece
              "md:col-span-2 md:row-span-1", // Wide piece
              "md:col-span-1 md:row-span-1", // Small square
              "md:col-span-1 md:row-span-1", // Small square
            ][index] || "md:col-span-1";

            return (
              <div 
                key={service.id}
                className={`${gridClasses} relative group overflow-hidden border-2 border-primary/10 hover:border-primary/40 transition-all duration-700`}
              >
                <img
                  src={service.image?.startsWith('/') || service.image?.startsWith('http') ? service.image : `/storage/${service.image}`}
                  alt={service.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                
                <div className="absolute bottom-0 left-0 p-6 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-2xl font-black text-white mb-2 uppercase tracking-tight">
                    {service.title}
                  </h3>
                  <p className="text-white/70 line-clamp-2 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {service.description}
                  </p>
                  <div className="mt-4 flex items-center text-primary font-bold uppercase tracking-widest text-xs">
                    Read More <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BentoServices;
