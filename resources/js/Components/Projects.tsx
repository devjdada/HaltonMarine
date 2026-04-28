import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, ArrowRight, Filter } from "lucide-react";
import { Badge } from "@/Components/ui/badge";

interface Project {
  id: number;
  title: string;
  description: string | null;
  category: string | null;
  location: string | null;
  image: string | null;
}

interface ProjectsProps {
  projects: Project[];
}

const Projects = ({ projects }: ProjectsProps) => {
  const categories = useMemo<string[]>(() => {
    const uniqueCategories = projects
      .map(p => p.category)
      .filter((c): c is string => !!c); // Type guard to ensure string[]
    return ["All", ...Array.from(new Set(uniqueCategories))];
  }, [projects]);

  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") return projects;
    return projects.filter(p => p.category === activeCategory);
  }, [projects, activeCategory]);

  return (
    <section className="py-24 px-4 overflow-hidden bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground mb-6 leading-tight"
            >
              Excellence in <span className="text-primary italic">Marine</span> Navigation
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-muted-foreground text-xl leading-relaxed"
            >
              From major dredging to complex canalization, we deliver world-class marine solutions across Nigeria's most challenging terrains.
            </motion.p>
          </div>

          <div className="flex flex-wrap gap-2 pb-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
                  activeCategory === category
                    ? "bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/20 scale-105"
                    : "bg-background text-muted-foreground border-border hover:border-primary/50"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group relative aspect-[4/5] rounded-3xl overflow-hidden bg-muted"
              >
                {/* Background Image */}
                <img
                  src={project.image || "/images/placeholder.jpg"}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Overlay Gradients */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80" />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Content */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <Badge variant="outline" className="bg-white/10 backdrop-blur-md text-white border-white/20 px-3 py-1">
                        {project.category}
                      </Badge>
                      <div className="flex items-center gap-1 text-white/70 text-xs">
                        <MapPin className="h-3 w-3" />
                        {project.location}
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h3>

                    <p className="text-white/70 text-sm line-clamp-2 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                      {project.description}
                    </p>

                    <div className="flex items-center gap-2 text-primary font-bold pt-2 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 delay-200">
                      <span>View Details</span>
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </div>
                </div>

                {/* Border Highlight */}
                <div className="absolute inset-0 rounded-3xl border border-white/10 group-hover:border-primary/50 transition-colors duration-500" />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Summary Card */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-24 p-12 rounded-[2rem] bg-secondary/30 backdrop-blur-sm border border-border relative overflow-hidden text-center"
        >
          <div className="relative z-10">
            <h3 className="text-2xl font-bold mb-4">Unmatched Regional Expertise</h3>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
              Our strong portfolio demonstrates technical competence and operational reliability, 
              particularly within Delta State, with proven regional expertise across Rivers State 
              and Cross River State. We continue to redefine marine engineering standards through 
              innovation and excellence.
            </p>
          </div>
          {/* Subtle decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -mr-32 -mt-32 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full -ml-32 -mb-32 blur-3xl" />
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
