import { Card } from "@/components/ui/card";
import { Ship, Anchor, Wrench, Package } from "lucide-react";

const services = [
  {
    icon: Ship,
    title: "Comprehensive Dredging & Marine Solutions",
    description:
      "Complete range of dredging services designed to meet demands of coastal and inland waterway projects. Expertise in land/shore reclamation, river/sea sweeping, precise canalization, pipeline crossings, and sand stock piling for construction.",
  },
  {
    icon: Anchor,
    title: "Specialized Marine Services",
    description:
      "Robust logistical support in the challenging riverine areas of the Niger Delta. Specialized in efficient and safe movement of essential materials including sand, clippings, and building supplies using modern barges.",
  },
  {
    icon: Wrench,
    title: "Vessel Operations & Logistics",
    description:
      "Comprehensive vessel operations and marine project management. Technical and logistics support for offshore oil and gas industry, flexible vessel chartering, subsea engineering, welding, and submarine pipe/cable laying services.",
  },
  {
    icon: Package,
    title: "Equipment Leasing & Logistics",
    description:
      "Extensive equipment lease and logistics services. Rent dredgers, excavators, swamp buggies, cranes, trucks, boats, OSVs, mooring boats, tugboats. Critical support services including bunkering and cargo handling for offshore operations.",
  },
];

const ServicesDetail = () => {
  return (
    <section id="services-detail" className="py-20 px-6 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Services & Expertise
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Delivering excellence across all aspects of marine and dredging operations
          </p>
          <div className="w-24 h-1 bg-primary mx-auto mt-6" />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="p-8 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-marine)] transition-all hover:scale-105 group"
            >
              <div className="flex items-start gap-4">
                <div className="p-4 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <service.icon className="h-8 w-8 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-3 text-foreground">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesDetail;
