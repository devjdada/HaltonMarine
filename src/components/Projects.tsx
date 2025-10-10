import { Card } from "@/components/ui/card";
import { MapPin, CheckCircle } from "lucide-react";

const projectCategories = [
  {
    title: "Major Dredging Projects",
    projects: [
      "Sandfilling of Olare Water Layout, Ogborikoko Community",
      "Sandfilling of Agbigborodo Community",
      "Emergency Dredging of Ebrohim Creek",
    ],
  },
  {
    title: "Extensive Channelization Works",
    projects: [
      "Emergency Channelization - Oginibo Community",
      "Emergency Channelization - Jeddo-Warri",
      "Emergency Channelization - Owhrode",
      "Emergency Channelization - Orho-Agbarho",
      "Emergency Channelization - Ekakpamre",
      "Emergency Channelization - Okukoko",
      "Emergency Channelization - Igbogidi",
      "Emergency Channelization - Ughotor",
    ],
  },
  {
    title: "Regional Expertise",
    projects: [
      "Complex Canalization Projects - Rivers State",
      "River Sweeping Operations - Rivers State",
      "Canalization Projects - Cross River State",
      "Sweeping Jobs - Cross River State",
    ],
  },
];

const Projects = () => {
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
          {projectCategories.map((category, index) => (
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
