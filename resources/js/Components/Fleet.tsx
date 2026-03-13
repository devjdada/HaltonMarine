import { Card } from "@/Components/ui/card";
import { Ship } from "lucide-react";
import ladderDredger16 from "@/assets/ladder_dredger_16.png";
import ladderDredger14 from "@/assets/ladder_dredger_14.png";
import ladderDredger12 from "@/assets/ladder_dredger_12.png";
import catExcavator320 from "@/assets/cat_excavator_320.png";

interface Equipment {
  id: number;
  name: string;
  specs: string | null;
  image: string | null;
  type: 'Core' | 'Extended';
}

interface FleetProps {
  equipment: Equipment[];
}

const Fleet = ({ equipment }: FleetProps) => {
  const coreEquipment = equipment.filter(e => e.type === 'Core');
  const extendedFleet = equipment.filter(e => e.type === 'Extended').map(e => e.name);
  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Fleet & Equipment
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            State-of-the-art equipment and strategic partnerships ensuring operational excellence
          </p>
          <div className="w-24 h-1 bg-primary mx-auto mt-6" />
        </div>

        {/* Core Equipment */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
            Core Equipment
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreEquipment.map((item) => (
              <Card
                key={item.id}
                className="p-6 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-marine)] transition-all hover:scale-105 text-center"
              >
                <div className="flex justify-center mb-4">
                  <div className="overflow-hidden rounded-lg w-full aspect-video flex items-center justify-center bg-primary/5">
                    {item.image ? (
                        <img src={item.image.startsWith('/') || item.image.startsWith('http') ? item.image : `/storage/${item.image}`} alt={item.name} className="w-full h-full object-cover" />
                    ) : (
                        <Ship className="h-12 w-12 text-primary/40" />
                    )}
                  </div>
                </div>
                <h4 className="font-semibold text-foreground mb-2">
                  {item.name}
                </h4>
                <p className="text-sm text-muted-foreground">{item.specs}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Extended Fleet */}
        <div>
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
            Extended Fleet (Through Strategic Partnerships)
          </h3>
          <Card className="p-8 shadow-[var(--shadow-card)]">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Ship className="h-6 w-6 text-primary" />
              </div>
              <p className="text-muted-foreground">
                Our capabilities are enhanced through strong partnerships, giving us access to a
                diverse range of vessels to meet any project requirement:
              </p>
            </div>
            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
              {extendedFleet.map((vessel, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 text-muted-foreground"
                >
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span>{vessel}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Fleet;
