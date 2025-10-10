import { Card } from "@/components/ui/card";
import { Users, Briefcase } from "lucide-react";

const leadership = [
  {
    name: "Nath Okoroafor",
    role: "Chairman",
    experience: "20+ years of strategic leadership",
  },
  {
    name: "Ugonna Okoroafor",
    role: "Director of Operations",
    experience: "17 years of operational experience",
  },
  {
    name: "Franklin Atenaga",
    role: "Project Engineer",
    experience: "15 years of technical project management",
  },
  {
    name: "Favour Onyebuchi",
    role: "Business Development Manager",
    experience: "10 years driving business growth",
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
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
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
              <p className="text-sm text-muted-foreground">{member.experience}</p>
            </Card>
          ))}
        </div>

        {/* Team Stats */}
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="p-8 shadow-[var(--shadow-card)] text-center">
            <div className="flex justify-center mb-4">
              <div className="p-4 bg-primary/10 rounded-full">
                <Users className="h-10 w-10 text-primary" />
              </div>
            </div>
            <div className="text-4xl font-bold text-primary mb-2">23</div>
            <p className="text-muted-foreground font-medium">
              Full-Time Employees
            </p>
          </Card>

          <Card className="p-8 shadow-[var(--shadow-card)] text-center">
            <div className="flex justify-center mb-4">
              <div className="p-4 bg-primary/10 rounded-full">
                <Users className="h-10 w-10 text-primary" />
              </div>
            </div>
            <div className="text-4xl font-bold text-primary mb-2">10</div>
            <p className="text-muted-foreground font-medium">
              Contracted Specialists
            </p>
          </Card>
        </div>

        <Card className="mt-8 p-8 bg-primary/5 border-primary/20">
          <p className="text-center text-muted-foreground">
            This experienced leadership team guides our dedicated workforce, ensuring we have 
            the right talent and expertise for every job. Our commitment to excellence is reflected 
            in our team's qualifications and proven track record.
          </p>
        </Card>
      </div>
    </section>
  );
};

export default Team;
