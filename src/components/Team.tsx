import { Card } from "@/components/ui/card";
import { Briefcase } from "lucide-react";

const leadership = [
  {
    name: "Nath Okoroafor",
    role: "MD",
  },
  {
    name: "Engr. Ugonna Okoroafor",
    role: "Director Operations",
  },
  {
    name: "Engr. Chimezie Ogunkah",
    role: "Manager Operations",
  },
  {
    name: "Engr. Frank Ogwazuo",
    role: "Dredging Supervisor",
  },
  {
    name: "Mojisola Akinrinmade",
    role: "Administrative/Office Manager",
  },
];

const Team = () => {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Management & Team
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Led by seasoned professionals with deep industry experience
          </p>
          <div className="w-24 h-1 bg-primary mx-auto mt-6" />
        </div>

        {/* Leadership Team */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 justify-center">
          {leadership.map((member, index) => (
            <Card
              key={index}
              className="p-6 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-marine)] transition-all hover:scale-105 text-center"
            >
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-primary/10 rounded-full">
                  <Briefcase className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-1">
                {member.name}
              </h3>
              <p className="text-primary font-medium mb-2">{member.role}</p>
            </Card>
          ))}
        </div>

        <Card className="mt-8 p-8 bg-primary/5 border-primary/20">
          <p className="text-center text-muted-foreground">
            Our experienced leadership team guides our dedicated workforce, ensuring we have
            the right talent and expertise for every job.
          </p>
        </Card>
      </div>
    </section>
  );
};

export default Team;
