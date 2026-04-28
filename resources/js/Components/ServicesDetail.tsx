import React from 'react';
import { motion } from "framer-motion";

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
  return (
    <section id="services-detail" className="pb-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-bold text-foreground mb-6 tracking-tight"
          >
            Our Core <span className="text-primary italic">Expertise</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground text-xl max-w-3xl mx-auto leading-relaxed"
          >
            Delivering excellence across all aspects of marine and dredging operations with state-of-the-art technology and seasoned professionals.
          </motion.p>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "8rem" }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="h-1.5 bg-primary mx-auto mt-8 rounded-full" 
          />
        </div>

        <div className="space-y-32">
          {services.map((service, index) => (
            <div 
              key={service.id}
              className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-20`}
            >
              {/* Image Side */}
              <motion.div 
                initial={{ opacity: 0, x: index % 2 === 1 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="w-full lg:w-3/5"
              >
                <div className="relative group">
                  <div className="absolute -inset-4 bg-primary/10 rounded-3xl blur-2xl group-hover:bg-primary/20 transition-all duration-500 opacity-0 group-hover:opacity-100" />
                  <div className="relative overflow-hidden rounded-2xl aspect-[16/10] shadow-2xl border border-white/10">
                    {service.image ? (
                      <img 
                        src={`/storage/${service.image}`} 
                        alt={service.title} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    ) : (
                      <div className="w-full h-full bg-secondary flex items-center justify-center">
                        <span className="text-muted-foreground">Image Coming Soon</span>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                </div>
              </motion.div>

              {/* Content Side */}
              <motion.div 
                initial={{ opacity: 0, x: index % 2 === 1 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="w-full lg:w-2/5 space-y-6"
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary text-sm font-semibold rounded-full uppercase tracking-wider">
                  Service 0{index + 1}
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {service.description}
                </p>
                <div className="pt-4">
                  <button className="flex items-center gap-2 text-primary font-bold group">
                    Learn More 
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </button>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesDetail;
