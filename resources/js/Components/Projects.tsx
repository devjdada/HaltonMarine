import { Card } from "@/Components/ui/card";
import { MapPin, CheckCircle } from "lucide-react";

interface Project {
  id: number;
  title: string;
  category: string | null;
  location: string | null;
  image: string | null;
}

interface ProjectsProps {
  projects: Project[];
}

const Projects = ({ projects }: ProjectsProps) => {
  // Group projects by category
  const groupedProjects = projects.reduce((acc, project) => {
    const categoryName = project.category || 'Other Projects';
    if (!acc[categoryName]) {
      acc[categoryName] = [];
    }
    acc[categoryName].push(project.title);
    return acc;
  }, {} as Record<string, string[]>);

  const categories = Object.keys(groupedProjects).map(name => ({
    title: name,
    projects: groupedProjects[name]
  }));
  return (
    <section className="py-20 px-6 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Projects & Experience
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A proven track record of successfully executed projects across Nigeria
          </p>
          <div className="w-24 h-1 bg-primary mx-auto mt-6" />
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <Card
              key={index}
              className="p-8 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-marine)] transition-all"
            >
              <div className="flex items-start gap-3 mb-6">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  {category.title}
                </h3>
              </div>
              <ul className="space-y-3">
                {category.projects.map((project, projectIndex) => (
                  <li
                    key={projectIndex}
                    className="flex items-start gap-2 text-muted-foreground"
                  >
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>{project}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>

        <Card className="mt-12 p-8 bg-primary/5 border-primary/20">
          <p className="text-center text-muted-foreground text-lg">
            Our strong portfolio demonstrates technical competence and operational reliability, 
            particularly within Delta State, with proven regional expertise across Rivers State 
            and Cross River State.
          </p>
        </Card>
      </div>
    </section>
  );
};

export default Projects;
