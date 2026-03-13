import React from 'react';
import { Card } from "@/Components/ui/card";
import { Ship, Anchor, Wrench, Package } from "lucide-react";

interface Service {
  id: number;
  title: string;
  description: string;
  image: string | null;
}

interface ServicesDetailProps {
  services: Service[];
}

const ServicesDetail = ({ services }: ServicesDetailProps) => {
  const getIcon = (title: string) => {
    const lowerTitle = title.toLowerCase();
    if (lowerTitle.includes('dredging')) return Ship;
    if (lowerTitle.includes('marine')) return Anchor;
    if (lowerTitle.includes('vessel')) return Wrench;
    if (lowerTitle.includes('equipment')) return Package;
    return Ship;
  };
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
              key={service.id}
              className="p-8 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-marine)] transition-all hover:scale-105 group"
            >
              <div className="flex items-start gap-4">
                <div className="p-4 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                  {service.image ? (
                    <img src={`/storage/${service.image}`} alt={service.title} className="h-8 w-8 object-cover rounded opacity-80 group-hover:opacity-100" />
                  ) : (
                    <div className="h-8 w-8 flex items-center justify-center">
                        {React.createElement(getIcon(service.title), { className: "h-8 w-8 text-primary" })}
                    </div>
                  )}
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
