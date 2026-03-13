import { Card } from "@/Components/ui/card";
import { User } from "lucide-react";
import chemizeImg from "@/assets/chemize.jpeg";
import mojisolaImg from "@/assets/mojisola.jpeg";

interface TeamMember {
  id: number;
  name: string;
  position: string;
  image: string | null;
}

interface TeamProps {
  team: TeamMember[];
}

const Team = ({ team }: TeamProps) => {
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
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 justify-center">
          {team.map((member) => (
            <Card
              key={member.id}
              className="p-6 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-marine)] transition-all hover:scale-105 text-center"
            >
              <div className="flex justify-center mb-6">
                {member.image ? (
                  <img
                    src={member.image.startsWith('/') || member.image.startsWith('http') ? member.image : `/storage/${member.image}`}
                    alt={member.name}
                    className="h-32 w-32 rounded-full object-cover shadow-sm bg-primary/10"
                  />
                ) : (
                  <div className="h-32 w-32 bg-primary/10 rounded-full flex items-center justify-center shadow-sm">
                    <User className="h-12 w-12 text-primary" />
                  </div>
                )}
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-1">
                {member.name}
              </h3>
              <p className="text-primary font-medium mb-2">{member.position}</p>
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
